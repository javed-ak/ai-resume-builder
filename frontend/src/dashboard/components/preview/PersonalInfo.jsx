export default function PersonalInfo({resumeInfo}) {
  return (
    <div>
      <div className="font-bold text-center text-xl" style={{color: resumeInfo?.themeColor}}>{resumeInfo?.firstName} {resumeInfo?.lastName}</div>
      <div className="text-center text-sm"><b>{resumeInfo?.jobTitle}</b> | {resumeInfo?.address}</div>
      <div className="text-center text-xs">{resumeInfo?.phone} | {resumeInfo?.email}</div>
      <hr className="border mt-1"></hr>
    </div>
  )
}