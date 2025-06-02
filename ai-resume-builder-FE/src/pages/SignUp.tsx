import { Link, Navigate, useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import Button from "../components/Button";

export default function SignUp() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/dashboard')
    }
    return (
        <div className="relative h-screen w-full flex justify-center items-center">
            <div className="fixed top-20 left-20  ">
                <Link to={'/'} className="bg-sky-500 rounded p-2 text-white">Home</Link>
            </div>
            <div className="shadow border border-gray-200 p-10 text-center rounded flex flex-col gap-5 min-w-lg">
                <div>
                    <div className="font-bold text-3xl font-[ubuntu]">Create an account</div>
                    <div className="text-sm text-gray-500 ">Already have an account? <Link to={'/auth/signin'} className="text-sky-700 underline">Login</Link></div>
                </div>
                <div>
                    <InputBox label="First Name" placeholder="Javed" onChange={() => {}} />
                    <InputBox label="Last Name" placeholder="Akhtar" onChange={() => {}} />
                    <InputBox label="Email" placeholder="javed.ak@example.com" onChange={() => {}} />
                    <InputBox label="Password" placeholder="" type="password" onChange={() => {}} />
                </div>
                <div>
                    <Button label="Submit" onClick={handleSubmit}/>
                </div>
            </div>
        </div>
    )
}