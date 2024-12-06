import { useState } from "react";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import SummeryForm from "./forms/SummeryForm";
import SkillsForm from "./forms/SkillsForm";
import ExperienceForm from "./forms/ExperienceForm";
import EducationForm from "./forms/EducationForm";

export default function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);

    return (
      <div className="flex flex-col gap-5">
        <div className="flex justify-end gap-2">
          {activeFormIndex > 1 && <Button onClick={() => {setActiveFormIndex(activeFormIndex - 1)}}><ArrowLeft /></Button>}
          <Button disabled={!enableNext} onClick={() => {setActiveFormIndex(activeFormIndex + 1)}}>Next</Button>
        </div>
        {activeFormIndex == 1 && <PersonalInfoForm enableNext={(v) => setEnableNext(v)}/>}
        {activeFormIndex == 2 && <SummeryForm enableNext={(v) => setEnableNext(v)}/>}
        {activeFormIndex == 3 && <SkillsForm enableNext={(v) => setEnableNext(v)}/>}
        {activeFormIndex == 4 && <ExperienceForm enableNext={(v) => setEnableNext(v)}/>}
        {activeFormIndex == 5 && <EducationForm enableNext={(v) => setEnableNext(v)}/>}
      </div>
    )
  }