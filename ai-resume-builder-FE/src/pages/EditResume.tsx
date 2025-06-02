// import { useParams } from "react-router-dom"
import ResumeFormSection from "../components/resume/ResumeFormSection";
import ResumePreviewSection from "../components/resume/ResumePreviewSection";
import { ResumeInfoContext } from "../context/ResumeInfoContext";
import { useState } from "react";
import { DummyUser } from "../data/DummyData";

export default function EditResume() {
    // const param = useParams();
    const [resumeInfo, setResumeInfo] = useState(DummyUser)

    return (
        <div className="container m-auto">
            <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                    <ResumeFormSection />
                    <ResumePreviewSection />
                </div>
            </ResumeInfoContext.Provider>
        </div>
    )
}