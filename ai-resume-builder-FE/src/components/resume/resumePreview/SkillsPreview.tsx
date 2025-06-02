export default function SkillsPreview({ resumeInfo }: any) {
    return (
        <div>
            <div className="font-bold text-md">Skills</div>
            <div className="h-0.5 bg-gray-200 mb-1"/>
            <div className="grid grid-cols-2">
                {resumeInfo.skills.map((skill: any) => (
                <div key={skill.id} className="mt-1 flex items-center gap-10">
                    <div className="font-bold text-sm">{skill.name}</div>
                </div>
            ))}
            </div>
        </div>
    )
}