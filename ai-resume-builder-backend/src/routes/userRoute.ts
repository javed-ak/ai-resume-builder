import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { compare, hash } from 'bcryptjs'
import { signupInput, signinInput } from '@javed-ak/resume-app' 

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET_KEY: string
    }
}>();

const getPrisma = (c: any) => new PrismaClient({ datasourceUrl: c.env.DATABASE_URL }).$extends(withAccelerate());

userRouter.post('/signup', async (c) => {
  const prisma = getPrisma(c);
  const body = await c.req.json();

  const { success } = signupInput.safeParse(body);
  if(!success) {
    c.status(411)
    return c.json({error: 'Invalid Inputs'})
  }

  try {
    const hashedPassword = await hash(body.password, 10);
    const user = await prisma.user.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: hashedPassword,
      },
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET_KEY);
    return c.json({ token: `Bearer ${token}` });
  } catch (err) {
    c.status(500);
    return c.json({ error: 'Failed to sign up user' });
  }
});

userRouter.post('/signin', async (c) => {
  const prisma = getPrisma(c);
  const body = await c.req.json();

  const { success } = signinInput.safeParse(body);
  if(!success) {
    c.status(411)
    return c.json({error: 'Invalid Inputs'})
  }

  try {
    const user = await prisma.user.findUnique({ where: { email: body.email } });
  if (!user) {
    c.status(403);
    return c.json({ error: 'User not found' });
  }
  
  const isMatch = await compare(body.password, user.password);
  if (!isMatch) {
    c.status(403);
    return c.json({ error: 'Invalid email or password' });
  }

  const token = await sign({ id: user.id }, c.env.JWT_SECRET_KEY);
  return c.json({ token: `Bearer ${token}` });
  } catch (err) {
    c.status(411)
    return c.json({error: 'Something went wrong!'})
  }
});

userRouter.get('/:id', async (c) => {
  const id = c.req.param('id');
  const prisma = getPrisma(c);

  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    c.status(404);
    return c.json({ error: 'User not found' });
  }

  return c.json(user);
});

userRouter.get('/', async (c) => {
  const prisma = getPrisma(c);
  const user = await prisma.user.findMany();
  if (!user) {
    c.status(404);
    return c.json({ error: 'User not found' });
  }

  return c.json(user);
});