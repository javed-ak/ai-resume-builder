export default function EducationPreview({resumeInfo}) {
    return (
      <div className="mt-2">
        <div className="font-bold text-md ">EDUCATION</div>
        <hr className="border mt-1" />

        {resumeInfo?.education.map((education, index) => (
            <div key={index} className="text-sm mt-1">
                <div className="flex justify-between" >
                    <div className="font-bold">{education?.universityName}</div>
                    <div className="text-xs">{education?.startDate} - {education?.currentlyWorking ? 'Present' : education?.endDate}</div>
                </div>
                <div>{education?.degree} in {education?.major}</div>
                <div className="text-justify text-xs">{education?.description}</div>
            </div>
        ))}
      </div>
    )
  }