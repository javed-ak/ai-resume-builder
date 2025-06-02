import { useContext } from "react";
import Button from "../../Button";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";

export default function Summary({setEnableNext}: any) {
    const context = useContext(ResumeInfoContext);
        
    if (!context) return null;
    
    const { resumeInfo, setResumeInfo } = context;
    const handleRequest = () => {
        setEnableNext(false)
    }

    return (
        <div className="border-t-5 rounded-lg p-5 shadow-lg space-y-4 pb-10">
            <div className="flex justify-between items-center">
                <div>
                <div className="font-bold text-lg">Summary</div>
                <div className="text-sm text-gray-500">Add summary for your job title</div>
            </div>
            <div>
                <Button label="Generate with AI" onClick={() => {}}/>
            </div>
            </div>
            <div className="space-y-3">
                <div>
                    <textarea className="p-2 rounded border border-gray-200 w-full" name="" id=""  onChange={(e) => {
                        setResumeInfo({
                            ...resumeInfo,
                            summary: e.target.value
                        })
                    }}></textarea>
                </div>
                <div className="flex justify-end">
                    <Button label="Save" variant="Nutral" onClick={handleRequest}/>
                </div>
            </div>
        </div>
    )
}