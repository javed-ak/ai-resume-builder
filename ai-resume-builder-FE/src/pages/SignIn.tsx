import { Link, useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import Button from "../components/Button";

export default function SignIp() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/dashboard')
    }
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="shadow border-gray-300 p-10 text-center rounded flex flex-col gap-5 min-w-lg">
                <div>
                    <div className="font-bold text-3xl font-[ubuntu]">Login</div>
                    <div className="text-sm text-gray-500 ">Don't have an account? <Link to={'/auth/signup'} className="text-sky-700 underline">Sign Up</Link></div>
                </div>
                <div>
                    <InputBox label="Email" placeholder="javed.ak@example.com"/>
                    <InputBox label="Password" placeholder="" type="password"/>
                </div>
                <div>
                    <Button label="Submit" onClick={handleSubmit}/>
                </div>
            </div>
        </div>
    )
}