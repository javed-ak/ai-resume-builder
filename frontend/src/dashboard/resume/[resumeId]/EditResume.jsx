import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import FormSection from "@/dashboard/components/FormSection";
import PreviewSection from "@/dashboard/components/PreviewSection";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import Dummy from "@/data/Dummy";

export default function EditResume() {
    const params = useParams();
    const [resumeInfo, setResumeInfo] = useState()

    useEffect(() => {
        setResumeInfo(Dummy)
    }, [])

  return (
    <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        <FormSection />
        <PreviewSection />
    </div>
    </ResumeInfoContext.Provider>
  )
}
