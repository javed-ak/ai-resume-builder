import { useState } from "react";
import PersonalDetails from "./resumeForm/PersonalDetails";
import Button from "../Button";
import Summary from "./resumeForm/Summary";
import Experience from "./resumeForm/Experience";
import Education from "./resumeForm/Education";
import Skills from "./resumeForm/Skills";

export default function ResumeFormSection() {
    const [activeIndex, setActiveIndex] = useState(1)
    const [enableNext, setEnableNext] = useState(true)
    
    return (
        <div className="flex flex-col gap-5 ">
            <div className="flex justify-between">
                <Button label="Theme" onClick={() => {}} variant="Nutral" />
                <div className="flex gap-3">
                    {activeIndex > 1 && <Button label="Back" onClick={() => setActiveIndex(activeIndex - 1)}/>}
                    {activeIndex < 5 && <Button label="Next" onClick={() => setActiveIndex(activeIndex + 1)} variant="Nutral" disable={!enableNext}/>}
                </div>
            </div>
            <div>
                {activeIndex == 1 && <PersonalDetails enableNext={setEnableNext}/>}
                {activeIndex == 2 && <Summary enableNext={setEnableNext}/>}
                {activeIndex == 3 && <Experience enableNext={setEnableNext}/>}
                {activeIndex == 4 && <Education enableNext={setEnableNext}/>}
                {activeIndex == 5 && <Skills enableNext={setEnableNext}/>}
            </div>
        </div>
    )
}