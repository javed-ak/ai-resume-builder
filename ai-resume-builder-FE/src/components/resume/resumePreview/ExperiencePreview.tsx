
export default function ExperiencePreview({resumeInfo}: any) {
    return (
        <div>
            <div className="font-bold text-md">Professional Experience</div>
            <div className="h-0.5 bg-gray-200 mb-1"/>
            {resumeInfo.experience.map((experience: any) => (
                <div key={experience.id} className="mt-1">
                    <div className="font-bold text-sm">{experience.title}</div>
                    <div className="flex justify-between text-xs">
                        <div>
                            <div className="italic">{experience.companyName}, {experience.city} {experience.state}</div>
                        </div>
                        <div>
                            <div>{experience.startDate} - {experience.currentlyWorking ? 'Present' : `${experience.endDate}`}</div>
                        </div>
                    </div>
                    <div className="text-xs">{experience.workSummery}</div>
                </div>
            ))}
        </div>
    )
}