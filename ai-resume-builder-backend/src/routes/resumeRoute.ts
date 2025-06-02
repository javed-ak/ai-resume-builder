import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { resumeInput } from '@javed-ak/resume-app'

export const resumeRoute = new Hono<{
    Bindings: {
        JWT_SECRET_KEY: string
        DATABASE_URL: string
    },
    Variables: {
        userId: string
    }
}>();

const getPrisma = (c: any) => new PrismaClient({ datasourceUrl: c.env.DATABASE_URL }).$extends(withAccelerate());

resumeRoute.use('/*', async (c, next) => {
    const jwt_token = c.req.header('Authorization');
    if (!jwt_token) {
        c.status(411)
        return c.json({
            error: 'Authorization Error!'
        })
    }
    const token = jwt_token.split(' ')[1];
    const payload = await verify(token, c.env.JWT_SECRET_KEY) as {id: string}
    if (!payload) {
        c.status(411)
        return c.json({ error: 'Authorization Error!' })
    }
    c.set('userId', payload.id)
    await next()
})

resumeRoute.post('/', async (c) => {
  const userId = c.get('userId');
  const prisma = getPrisma(c);
  const body = await c.req.json();

  const { success } = resumeInput.safeParse(body)
  if(!success) {
    c.status(411)
    return c.json({
        error: 'Inputs are wrong!'
    })
  }
  try {
    const resume = await prisma.resume.create({
      data: {
        title: body.title,
        owner_id: userId,
      },
    });

    return c.json({resumeId: resume.id});
  } catch {
    c.status(500);
    return c.json({ error: 'Failed to create resume' });
  }
});

resumeRoute.get('/', async (c) => {
  const userId = c.get('userId');
  const prisma = getPrisma(c);
  const resumes = await prisma.resume.findMany({ where: { owner_id: userId } });
  return c.json(resumes);
});

resumeRoute.get('/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const userId = c.get('userId');
  const prisma = getPrisma(c);
  const resume = await prisma.resume.findFirst({ where: { id, owner_id: userId } });
  if (!resume) {
    c.status(404);
    return c.json({ error: 'Resume not found' });
  }

  return c.json(resume);
});

resumeRoute.put('/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const prisma = getPrisma(c);
  const body = await c.req.json();
  try {
    const updated = await prisma.resume.update({
      where: { id },
      data: { title: body.title },
    });
    return c.json(updated);
  } catch {
    c.status(500);
    return c.json({ error: 'Failed to update resume' });
  }
});

resumeRoute.delete('/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const prisma = getPrisma(c);
  try {
    await prisma.resume.delete({ where: { id } });
    return c.json({ message: 'Resume deleted' });
  } catch {
    c.status(500);
    return c.json({ error: 'Failed to delete resume' });
  }
});


// ------------------- Personal Details ------------------->>

resumeRoute.post('/personal-details/:resumeId', async (c) => {
  const resumeId = Number(c.req.param('resumeId'));
  const prisma = getPrisma(c);
  const body = await c.req.json();
  try {
    const detail = await prisma.personalDetail.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        jobTitle: body.jobTitle,
        address: body.address,
        phone: body.phone,
        email: body.email,
        resume_id: resumeId,
      },
    });

    return c.json(detail);
  } catch (err) {
    c.status(500);
    return c.json({ error: 'Failed to create personal detail' });
  }
});

resumeRoute.get('/personal-details/:resumeId', async (c) => {
  const resumeId = Number(c.req.param('resumeId'));
  const prisma = getPrisma(c);
  try {
    const detail = await prisma.personalDetail.findFirst({
      where: { resume_id: resumeId },
    });

    if (!detail) {
      c.status(404);
      return c.json({ error: 'Personal detail not found' });
    }

    return c.json(detail);
  } catch (err) {
    c.status(500);
    return c.json({ error: 'Error fetching personal detail' });
  }
});

resumeRoute.put('/personal-details/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const prisma = getPrisma(c);
  const body = await c.req.json();
  try {
    const updated = await prisma.personalDetail.update({
      where: { id },
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        jobTitle: body.jobTitle,
        address: body.address,
        phone: body.phone,
        email: body.email,
      },
    });

    return c.json(updated);
  } catch (err) {
    c.status(500);
    return c.json({ error: 'Failed to update personal detail' });
  }
});

resumeRoute.delete('/personal-details/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const prisma = getPrisma(c);
  try {
    await prisma.personalDetail.delete({ where: { id } });
    return c.json({ message: 'Deleted successfully' });
  } catch (err) {
    c.status(500);
    return c.json({ error: 'Failed to delete personal detail' });
  }
});

// ------------------- Summary ------------------->>

resumeRoute.post('/summary/:resumeId', async (c) => {
  const resumeId = Number(c.req.param('resumeId'));
  const prisma = getPrisma(c);
  const body = await c.req.json();
  try {
    const summary = await prisma.summary.create({ data: { summary: body.summary, resume_id: resumeId } });
    return c.json({ id: summary.id });
  } catch (err) {
    c.status(500); return c.json({ error: 'Failed to create summary' });
  }
});

resumeRoute.get('/summary/:resumeId', async (c) => {
  const resumeId = Number(c.req.param('resumeId'));
  const prisma = getPrisma(c);
  const summaries = await prisma.summary.findMany({ where: { resume_id: resumeId } });
  return c.json(summaries);
});

resumeRoute.put('/summary/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const prisma = getPrisma(c);
  const body = await c.req.json();
  try {
    const updated = await prisma.summary.update({ where: { id }, data: { summary: body.summary } });
    return c.json(updated);
  } catch (err) {
    c.status(500); return c.json({ error: 'Failed to update summary' });
  }
});

resumeRoute.delete('/summary/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const prisma = getPrisma(c);
  try {
    await prisma.summary.delete({ where: { id } });
    return c.text('Deleted');
  } catch (err) {
    c.status(500); return c.json({ error: 'Failed to delete summary' });
  }
});

// ------------------- Experience ------------------->>

resumeRoute.post('/experience/:resumeId', async (c) => {
  const resumeId = Number(c.req.param('resumeId'));
  const prisma = getPrisma(c);
  const body = await c.req.json();
  try {
    const experience = await prisma.experience.create({
      data: { ...body, resume_id: resumeId }
    });
    return c.json({ id: experience.id });
  } catch (err) {
    c.status(500); return c.json({ error: 'Failed to create experience' });
  }
});

resumeRoute.get('/experience/:resumeId', async (c) => {
  const resumeId = Number(c.req.param('resumeId'));
  const prisma = getPrisma(c);
  const experiences = await prisma.experience.findMany({ where: { resume_id: resumeId } });
  return c.json(experiences);
});

resumeRoute.put('/experience/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const prisma = getPrisma(c);
  const body = await c.req.json();
  try {
    const updated = await prisma.experience.update({ where: { id }, data: body });
    return c.json(updated);
  } catch (err) {
    c.status(500); return c.json({ error: 'Failed to update experience' });
  }
});

resumeRoute.delete('/experience/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const prisma = getPrisma(c);
  try {
    await prisma.experience.delete({ where: { id } });
    return c.text('Deleted');
  } catch (err) {
    c.status(500); return c.json({ error: 'Failed to delete experience' });
  }
});

// ------------------- Education ------------------->>

resumeRoute.post('/education/:resumeId', async (c) => {
  const resumeId = Number(c.req.param('resumeId'));
  const prisma = getPrisma(c);
  const body = await c.req.json();
  try {
    const education = await prisma.education.create({ data: { ...body, resume_id: resumeId } });
    return c.json({ id: education.id });
  } catch (err) {
    c.status(500); return c.json({ error: 'Failed to create education' });
  }
});

resumeRoute.get('/education/:resumeId', async (c) => {
  const resumeId = Number(c.req.param('resumeId'));
  const prisma = getPrisma(c);
  const education = await prisma.education.findMany({ where: { resume_id: resumeId } });
  return c.json(education);
});

resumeRoute.put('/education/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const prisma = getPrisma(c);
  const body = await c.req.json();
  try {
    const updated = await prisma.education.update({ where: { id }, data: body });
    return c.json(updated);
  } catch (err) {
    c.status(500); return c.json({ error: 'Failed to update education' });
  }
});

resumeRoute.delete('/education/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const prisma = getPrisma(c);
  try {
    await prisma.education.delete({ where: { id } });
    return c.text('Deleted');
  } catch (err) {
    c.status(500); return c.json({ error: 'Failed to delete education' });
  }
});

// ------------------- Skill ------------------->>

resumeRoute.post('/skill/:resumeId', async (c) => {
  const resumeId = Number(c.req.param('resumeId'));
  const prisma = getPrisma(c);
  const body = await c.req.json();
  try {
    const skill = await prisma.skill.create({ data: { name: body.name, resume_id: resumeId } });
    return c.json({ id: skill.id });
  } catch (err) {
    c.status(500); return c.json({ error: 'Failed to create skill' });
  }
});

resumeRoute.get('/skill/:resumeId', async (c) => {
  const resumeId = Number(c.req.param('resumeId'));
  const prisma = getPrisma(c);
  const skills = await prisma.skill.findMany({ where: { resume_id: resumeId } });
  return c.json(skills);
});

resumeRoute.put('/skill/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const prisma = getPrisma(c);
  const body = await c.req.json();
  try {
    const updated = await prisma.skill.update({ where: { id }, data: { name: body.name } });
    return c.json(updated);
  } catch (err) {
    c.status(500); return c.json({ error: 'Failed to update skill' });
  }
});

resumeRoute.delete('/skill/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const prisma = getPrisma(c);
  try {
    await prisma.skill.delete({ where: { id } });
    return c.text('Deleted');
  } catch (err) {
    c.status(500); return c.json({ error: 'Failed to delete skill' });
  }
});