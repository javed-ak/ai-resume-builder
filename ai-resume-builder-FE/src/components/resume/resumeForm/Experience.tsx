import { useContext, useState } from "react";
import Button from "../../Button";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
import InputBox from "../../InputBox";

export default function Experience({ setEnableNext }: any) {
    const context = useContext(ResumeInfoContext);

    if (!context) return null;

    const { resumeInfo, setResumeInfo } = context;
    const handleRequest = () => {
        setEnableNext(false)
    }
    const [experinceList,setExperinceList]=useState([]);


    const AddNewExperience=()=>{
    
        // setExperinceList([...experinceList,{
        //     title:'',
        //     companyName:'',
        //     city:'',
        //     state:'',
        //     startDate:'',
        //     endDate:'',
        //     workSummery:'',
        // }])
    }

    const RemoveExperience=()=>{
        setExperinceList(experinceList=>experinceList.slice(0,-1))
    }

    return (
        <div className="border-t-5 rounded-lg p-5 shadow-lg space-y-4 pb-10">
            <div>
                <div className="font-bold text-lg">Experience</div>
                <div className="text-sm text-gray-500">Add your previous Job experience</div>
            </div>
            <div className="space-y-3">
                <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-3">
                        <InputBox label="Position Title" placeholder="Full Stack Developer" onChange={(e) => {
                            setResumeInfo({
                                ...resumeInfo,
                                firstName: e.target.value
                            })
                        }} />
                        <InputBox label="Company Name" placeholder="Amazon" onChange={(e) => {
                            setResumeInfo({
                                ...resumeInfo,
                                lastName: e.target.value
                            })
                        }} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <InputBox label="City" placeholder="New York" onChange={(e) => {
                            setResumeInfo({
                                ...resumeInfo,
                                firstName: e.target.value
                            })
                        }} />
                        <InputBox label="State" placeholder="NY" onChange={(e) => {
                            setResumeInfo({
                                ...resumeInfo,
                                lastName: e.target.value
                            })
                        }} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <InputBox label="Start Date" placeholder="(123)-456-7890" type="date" onChange={(e) => {
                            setResumeInfo({
                                ...resumeInfo,
                                phone: e.target.value
                            })
                        }} />
                        <InputBox label="End Date" placeholder="exmaple@gmail.com" type="date" onChange={(e) => {
                            setResumeInfo({
                                ...resumeInfo,
                                email: e.target.value
                            })
                        }} />
                        {/* <div className='col-span-2'>  */}
                           {/* Work Summery  */}
                           {/* <RichTextEditor
                           index={index}
                           defaultValue={item?.workSummery}
                           onRichTextEditorChange={(event)=>handleRichTextEditor(event,'workSummery',index)}  />
                        </div> */}
                    </div>
                    <div className="flex justify-between">
                        <div className='flex gap-2'>
                            <Button onClick={AddNewExperience} label="+ Add More Experience" />
                            <Button onClick={RemoveExperience} label="- Remove"/>

                        </div>
                        <Button label="Save" variant="Nutral" onClick={handleRequest} />
                    </div>
                </div>
            </div>
        </div>
    )
}