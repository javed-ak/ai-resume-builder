import AddResume from "@/components/custom/resume/AddResume";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import ResumeApi from "./../../routes/ResumeApi";
import ResumeCard from "@/dashboard/components/ResumeCard";

export default function Dashboard() {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    user && GetResumeList();
  }, [user])

  const GetResumeList = async () => {
    ResumeApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(response => {
      setResumeList(response.data.data);
    })
  }

  return (
    <div className="m-5">
      <div className="">
        <div className="font-bold text-4xl">My Resume</div>
        <div className="text-gray-500">Start Creating AI Resume to your next Job role</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-5 gap-5">
        <AddResume />
        {resumeList.length > 0 && resumeList.map((resume, index) => <ResumeCard resume={resume} key={index} />)}
      </div>
    </div>
  )
}
