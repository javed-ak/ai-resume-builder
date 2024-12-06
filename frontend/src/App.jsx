import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from './components/custom/Header';
import { Toaster } from "@/components/ui/sonner"


function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  if(!isSignedIn && isLoaded) {
    return <Navigate to={'/auth/signin'}/>
  }

  return (
    <div>
      <Header />
      <Outlet />
      <Toaster />
    </div>
  )
}

export default App
