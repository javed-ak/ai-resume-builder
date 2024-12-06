import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import Home from './pages/Home.jsx'
import Dashboard from './pages/dashboard.jsx'
import PageNotFound from './pages/PageNotFound'
import SignInPage from './pages/SignInPage.jsx'
import App from './App.jsx'
import './index.css'
import EditResume from './dashboard/resume/[resumeId]/EditResume.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }, {
    element: <App />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      }, {
        path: '/dashboard/resume/:resumeId/edit',
        element: <EditResume />
      }
    ]
  }, {
    path: '/auth/signin',
    element: <SignInPage />
  }, {
    path: '/*',
    element: <PageNotFound />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
