export default function ExperiencePreview({resumeInfo}) {
    return (
      <div className="mt-2">
        <div className="font-bold text-md ">EXPERIENCE</div>
        <hr className="border mt-1" />

        {resumeInfo?.experience.map((experience, index) => (
            <div key={index} className="text-sm mt-1">
                <div className="flex justify-between" >
                    <div className="font-bold">{experience?.title}</div>
                    <div className="text-xs">{experience?.startDate} - {experience?.currentlyWorking ? 'Present' : experience?.endDate}</div>
                </div>
                <div>{experience?.companyName} | {experience?.city}, {experience?.state}</div>
                <div className="text-justify text-xs">{experience?.workSummery}</div>
            </div>
        ))}
      </div>
    )
  }