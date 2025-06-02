import { Link } from "react-router-dom";
import SignInForm from "../components/signUpComponents/SignInForm";

export default function SignIp() {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="fixed top-20 left-20  ">
                <Link to={'/'} className="bg-sky-500 rounded p-2 text-white">Home</Link>
            </div>
            <div className="shadow border-gray-300 p-10 text-center rounded flex flex-col gap-5 min-w-lg">
                <div>
                    <div className="font-bold text-3xl font-[ubuntu]">Login</div>
                    <div className="text-sm text-gray-500 ">Don't have an account? <Link to={'/auth/signup'} className="text-sky-700 underline">Sign Up</Link></div>
                </div>
                <SignInForm />
            </div>
        </div>
    )
}