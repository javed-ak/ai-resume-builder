type ResumeInfo = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  address: string
  themeColor: string;
  phone: string;
  email: string
  // Add any other fields you use here, or import from your data model
};

interface Props {
  resumeInfo: ResumeInfo;
}

export default function PersonalDetail({ resumeInfo }: Props) {
  return (
    <div className="text-center">
      <div className={`font-bold text-xl`} style={{color: `${resumeInfo.themeColor}`}}>{resumeInfo.firstName} {resumeInfo.lastName}</div>
      <div className="text-sm font-medium">{resumeInfo.jobTitle}</div>
      <div className="text-xs">{resumeInfo.address}</div>
      <div className="text-xs flex justify-between" style={{color: `${resumeInfo.themeColor}`}}>
        <div>{resumeInfo.phone}</div>
        <div>{resumeInfo.email}</div>
      </div>
      <div className="h-0.5 mt-2" style={{background: `${resumeInfo.themeColor}`}}></div>
    </div>
  );
}
