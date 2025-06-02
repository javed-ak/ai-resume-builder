import { Hono } from "hono";

export const resumeRoute = new Hono();

resumeRoute.post('/', (c) => {
    return c.text('Hello')
})

resumeRoute.put('/', (c) => {
    return c.text('Hello')
})

resumeRoute.get('/', (c) => {
    return c.text('Hello')
})

resumeRoute.post('/:id', (c) => {
    return c.text('Hello')
})