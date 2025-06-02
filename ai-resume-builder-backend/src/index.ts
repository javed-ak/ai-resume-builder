import { Hono } from 'hono'
import { userRoute } from './routes/userRoute'
import { resumeRoute } from './routes/resumeRoute'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/*', cors());
app.route('/api/v1/user', userRoute);
app.route('/api/v1/resume', resumeRoute);

export default app
