import Home from "@/pages/Home";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";

export default function Header() {
    const { user, isSignedIn, isLoaded } = useUser();
  return (
    <div className="px-5 py-2 flex justify-between items-center shadow-lg">
        <div>
            <Link to={'/'}><img src="/Favicon.png" height={60} width={60}/></Link>    
        </div>
        <div>
            {isSignedIn ? 
            <div className="flex justify-center gap-5">
                <Link to={'/dashboard'}>
                    <Button variant="outline" className="font-bold">Dashboard</Button>
                </Link>
                <UserButton />
            </div> :
            <Link to={'/auth/signin'}>
                <Button>Get Start</Button>
            </Link>}
        </div>
    </div>
  )
}
