import { Link, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import Button from "./Button";

export default function Navbar({ isSignedIn }: { isSignedIn: boolean }) {
    const navigate = useNavigate();
    return (
        <div className="shadow">
            <div className="container m-auto py-2 flex justify-between items-center">
                <Link to={'/'}>
                    <div className="flex items-center gap-2">
                        <img src="Favicon.png" alt="ai resume" width={50} />
                        <div className="text-2xl font-mono font-medium">Resume B.</div>
                    </div>
                </Link>
                <div>
                    {isSignedIn ? (
                        <div className="flex items-center gap-2">
                            <Button label="Dashboard" onClick={() => navigate('/dashboard')} />
                            <Avatar username="javed" />
                        </div>
                    ) : (
                        <Button label="Get Start" onClick={() => navigate('/auth/signup')} variant="Nutral" />
                    )}
                </div>
            </div>
        </div>
    )
}