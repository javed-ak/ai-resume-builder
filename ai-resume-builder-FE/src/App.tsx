import { Navigate, Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useState } from "react"

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  if(!isSignedIn) {
    console.log('You are not Signed In')
    return <Navigate to={'/auth/signup'} />
  }

  return (
    <>
      <Navbar isSignedIn={isSignedIn}/>
      <Outlet />
    </>
  )
}

export default App
