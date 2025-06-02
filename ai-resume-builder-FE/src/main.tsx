import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import SignIn from './pages/SignIn.tsx'
import SignUp from './pages/SignUp.tsx'
import Dashboard from './pages/Dashboard.tsx'
import PageNotFound from './pages/PageNotFound.tsx'
import EditResume from './pages/EditResume.tsx'

const router = createBrowserRouter([
  {
    path: '/', element: <Home />
  }, {
    path: '/auth/signup', element: <SignUp />
  }, {
    path: '/auth/signin', element: <SignIn />
  }, {
    element: <App />,
    children: [
      {
        path: '/dashboard', element: <Dashboard />
      }, {
        path: '/dashboard/resume/:id/edit', element: <EditResume />
      }
    ]
  }, {
    path: '/*', element: <PageNotFound />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
