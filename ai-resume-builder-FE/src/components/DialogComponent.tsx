import { useState } from "react"
import Button from "./Button"
import InputBox from "./InputBox"
import { useNavigate } from "react-router-dom"

interface DialogComponentProps {
    isOpen: boolean
    setIsOpen: any
}
export default function DialogComponent({ isOpen, setIsOpen }: DialogComponentProps) {
    const [resumeData, setResumeData] = useState({
        title: ''
    })
    const navigate = useNavigate();

    const handleRequest = () => {
        navigate('/dashboard/resume/23984/edit')
    }

    return (
        <div>
            {isOpen && <div className="relative z-10">
                <div className="fixed inset-0 bg-black/30 h-screen flex justify-center items-center">
                <div>
                <div className="min-w-md bg-white rounded-lg p-5 space-y-4 z-20">
                    <div className="text-xl font-bold">Create New Resume</div>
                    <InputBox label="Add title for your new resume" placeholder="Full Stack Resume" onChange={(e) => setResumeData({
                        ...resumeData,
                        title: e.target.value
                    })}/>
                    <div className="space-y-4">
                        <div className="flex justify-end gap-2">
                            <Button onClick={() => setIsOpen(false)} label="Cancel" variant="Danger"/>
                            <Button onClick={handleRequest} label="Submit" variant="Nutral"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            }
        </div>
    )
}