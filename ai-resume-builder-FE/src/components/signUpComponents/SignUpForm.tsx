import { useState } from "react";
import type { SignupType } from "@javed-ak/resume-app";
import axios from "axios";
import { BACKEND_URL } from '../../config';
import { useNavigate } from "react-router-dom";
import InputBox from "../InputBox";
import Button from "../Button";

export default function SignUpForm() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const [inputData, setInputData] = useState<SignupType>({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const sendRequest = async () => {
        try {
            setLoading(true)
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, inputData)
            const token = response.data.token;
            localStorage.setItem('token', token);
            setLoading(false)
            navigate('/dashboard')
        } catch (err) {
            setLoading(false)
            return console.log('Something went wrong!')
        }
    }
    return (
        <div className="space-y-3">
            <InputBox label="First Name" placeholder="Javed" onChange={(e) => {
                setInputData({
                    ...inputData,
                    firstName: e.target.value
                })
            }}/>
            <InputBox label="Last Name" placeholder="Akhtar" onChange={(e) => {
                setInputData({
                    ...inputData,
                    lastName: e.target.value
                })
            }}/>
            <InputBox label="Email" placeholder="javed.ak@example.com" onChange={(e) => {
                setInputData({
                    ...inputData,
                    email: e.target.value
                })
            }}/>
            <InputBox label="Password" placeholder="" type="password" onChange={(e) => {
                setInputData({
                    ...inputData,
                    password: e.target.value
                })
            }}/>
            <Button label={loading ? 'Loading...' : 'Sign Up'} onClick={sendRequest}/>
        </div>
    )
}