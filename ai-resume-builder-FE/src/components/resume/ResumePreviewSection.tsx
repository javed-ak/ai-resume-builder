import { useContext } from "react"
import { ResumeInfoContext } from "../../context/ResumeInfoContext"
import PersonalDetail from "./resumePreview/PersonalDetail";
import SummaryPreview from "./resumePreview/SummaryPreview";
import ExperiencePreview from "./resumePreview/ExperiencePreview";
import EducationPreview from "./resumePreview/EducationPreview";
import SkillsPreview from "./resumePreview/SkillsPreview";

export default function ResumePreviewSection() {
    const context = useContext(ResumeInfoContext);
    
    if (!context) return null;

    const { resumeInfo } = context;

    return (
        <div className="px-10 py-15 shadow-lg h-full border border-gray-200 space-y-3">
            <PersonalDetail resumeInfo={resumeInfo}/>
            <SummaryPreview resumeInfo={resumeInfo}/>
            <ExperiencePreview resumeInfo={resumeInfo}/>
            <EducationPreview resumeInfo={resumeInfo} />
            <SkillsPreview resumeInfo={resumeInfo} />
        </div>
    )
}