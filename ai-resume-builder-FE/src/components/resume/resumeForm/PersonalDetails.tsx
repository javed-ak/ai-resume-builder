import { useContext } from "react";
import Button from "../../Button";
import InputBox from "../../InputBox";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";

export default function PersonalDetails({setEnableNext}: any) {
    const context = useContext(ResumeInfoContext);
        
    if (!context) return null;
    
    const { resumeInfo, setResumeInfo } = context;
    const handleRequest = () => {
        setEnableNext(false)
    }

    return (
        <div className="border-t-5 rounded-lg p-5 shadow-lg space-y-4 pb-10">
            <div>
                <div className="font-bold text-lg">Pesonal Details</div>
                <div className="text-sm text-gray-500">Get start with the basic Information</div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3">
                    <InputBox label="First Name" placeholder="James" onChange={(e) => {
                        setResumeInfo({
                            ...resumeInfo,
                            firstName: e.target.value
                        })
                    }}/>
                    <InputBox label="Last Name" placeholder="James" onChange={(e) => {
                        setResumeInfo({
                            ...resumeInfo,
                            lastName: e.target.value
                        })
                    }}/>
                </div>
                <div>
                    <InputBox label="Job Title" placeholder="Full Stack Developer" onChange={(e) => {
                        setResumeInfo({
                            ...resumeInfo,
                            jobTitle: e.target.value
                        })
                    }}/>
                </div>
                <div>
                    <InputBox label="Address" placeholder="123 street, NC 28117" onChange={(e) => {
                        setResumeInfo({
                            ...resumeInfo,
                            address: e.target.value
                        })
                    }}/>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <InputBox label="Phone" placeholder="(123)-456-7890" onChange={(e) => {
                        setResumeInfo({
                            ...resumeInfo,
                            phone: e.target.value
                        })
                    }}/>
                    <InputBox label="Email" placeholder="exmaple@gmail.com" onChange={(e) => {
                        setResumeInfo({
                            ...resumeInfo,
                            email: e.target.value
                        })
                    }}/>
                </div>
                <div className="flex justify-end">
                    <Button label="Save" variant="Nutral" onClick={handleRequest}/>
                </div>
            </div>
        </div>
    )
}