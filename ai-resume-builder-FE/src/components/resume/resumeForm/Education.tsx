import { useContext, useState } from "react";
import Button from "../../Button";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
import InputBox from "../../InputBox";

export default function Education({ setEnableNext }: any) {
    const context = useContext(ResumeInfoContext);

    if (!context) return null;

    const { resumeInfo, setResumeInfo } = context;

    const handleRequest = () => {
        setEnableNext(false)
    }
    const [educationList, setEducationList] = useState([
        {
            universityName: '',
            degree: '',
            major: '',
            startDate: '',
            endDate: '',
            description: ''
        }
    ]);

    const handleChange = (e: any) => {
        // setEducationList([...educationList, 
        //     universityName: e.target.value
        // ])
    }

    const AddNewExperience = () => {
        setEducationList([...educationList, {
            universityName: '',
            degree: '',
            major: '',
            startDate: '',
            endDate: '',
            description: ''
        }])
    }

    const RemoveExperience = () => {
        setEducationList(educationList => educationList.slice(0, -1))
    }

    return (
        <div className="border-t-5 rounded-lg p-5 shadow-lg space-y-4 pb-10">
            <div>
                <div className="font-bold text-lg">Education</div>
                <div className="text-sm text-gray-500">Add your Educational Details</div>
            </div>
            <div className="space-y-3">
                {educationList.map((item) => (
                    <div className="flex flex-col gap-3">
                        <div>
                            <InputBox label="University Name" placeholder="Full Stack Developer" onChange={(e) => handleChange(e)} />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <InputBox label="Degree" placeholder="Full Stack Developer" onChange={(e) => handleChange(e)} />
                            <InputBox label="Major" placeholder="Full Stack Developer" onChange={(e) => handleChange(e)} />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <InputBox label="Start Date" placeholder="Full Stack Developer" onChange={(e) => handleChange(e)} />
                            <InputBox label="End Date" placeholder="Full Stack Developer" onChange={(e) => handleChange(e)} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="font-bold text-sm">Summary</div>
                            <textarea className="p-2 rounded border border-gray-200 w-full" name="" id="" onChange={(e) => { handleChange }}></textarea>
                        </div>

                    </div>
                ))}
                <div className="flex justify-between">
                    <div className='flex gap-2'>
                        <Button onClick={AddNewExperience} label="+ Add More Education" />
                        <Button onClick={RemoveExperience} label="- Remove" />

                    </div>
                    <Button label="Save" variant="Nutral" onClick={handleRequest} />
                </div>
            </div>
        </div>
    )
}