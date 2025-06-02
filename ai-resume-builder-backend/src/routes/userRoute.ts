import { Hono } from "hono";

export const userRoute = new Hono();

userRoute.post('/signup', (c) => {
    return c.json('signup')
})

userRoute.post('/signin', (c) => {
    return c.json('signin')
})

userRoute.get('/', (c) => {
    return c.text('Hello Hono!')
})