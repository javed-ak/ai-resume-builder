import { useState } from "react";

import type { SigninType } from "@javed-ak/resume-app";

import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import InputBox from "../InputBox";
import Button from "../Button";

export default function SignInForm() {
    const [loading, setLoading] = useState(false)
    const [inputData, setInputData] = useState<SigninType>({
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    const handleRequest = async () => {
        try {
            setLoading(true);
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, inputData);
        const token = response.data.token;
        localStorage.setItem('token', token);
        setLoading(false);
        navigate('/dashboard');
        } catch (err) {
            setLoading(false)
            console.log('Something went wrong!')
        }
    }
    return (
        <div className="space-y-3">
            <InputBox label="Email" placeholder="javed.ak@example.com" onChange={(e) => {
                setInputData({
                    ...inputData,
                    email: e.target.value
                })
            }}/>
            <InputBox label="Password" type="password" placeholder="" onChange={(e) => {
                setInputData({
                    ...inputData,
                    password: e.target.value
                })
            }}/>
            <Button label={loading ? 'Loading...': 'Login'} onClick={handleRequest}/>
        </div>
    )
}