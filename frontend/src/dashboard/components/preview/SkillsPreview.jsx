export default function SkillsPreview({resumeInfo}) {
    return (
      <div className="mt-2">
        <div className="font-bold text-md ">SKILLS </div>
        <hr className="border my-1" />
        <div className={`${resumeInfo?.skills.length > 5 ? 'grid grid-cols-2' : ''}`}>
        {resumeInfo?.skills.map((skills, index) => (
            <div key={index}>
                <div onClick={() => {setValue(!value)}} className="font-bold text-xs">{skills?.name}</div>
            </div>
        ))}
        </div>
      </div>
    )
  }