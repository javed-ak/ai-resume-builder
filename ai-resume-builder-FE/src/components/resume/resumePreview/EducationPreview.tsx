export default function EducationPreview({ resumeInfo }: any) {
    return (
        <div>
            <div className="font-bold text-md">Education</div>
            <div className="h-0.5 bg-gray-200 mb-1" />
            {resumeInfo.education.map((education: any) => (
                <div key={education.id} className="mt-1">
                    <div className="font-bold text-sm">{education.universityName}</div>
                    <div className="flex justify-between text-xs">
                        <div className="italic">{education.degree} {education.major}</div>
                        <div>{education.startDate} - {education.endDate}</div>
                    </div>
                    <div className="text-xs">{education.description}</div>
                </div>
            ))}
        </div>
    )
}