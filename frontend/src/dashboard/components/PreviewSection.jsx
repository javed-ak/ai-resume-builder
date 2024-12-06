import { ResumeInfoContext } from "@/context/ResumeInfoContext"
import { useContext } from "react"
import PersonalInfo from "./preview/PersonalInfo";
import ResumeSummery from "./preview/ResumeSummery";
import ExperiencePreview from "./preview/ExperiencePreview";
import EducationPreview from "./preview/EducationPreview";
import SkillsPreview from "./preview/SkillsPreview";


export default function PreviewSection() {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <div className="shadow py-10 px-5 h-full ">
      <PersonalInfo resumeInfo={resumeInfo} />
      <ResumeSummery resumeInfo={resumeInfo} />
      <SkillsPreview resumeInfo={resumeInfo} />
      <ExperiencePreview resumeInfo={resumeInfo} />
      <EducationPreview resumeInfo={resumeInfo} />
    </div>
  )
}