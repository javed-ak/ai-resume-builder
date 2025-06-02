import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useEffect } from "react"

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      navigate('/auth/signup')
    }
  }, [])
  
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
