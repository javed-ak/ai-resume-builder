import { Notebook } from "lucide-react";
import { Link } from "react-router-dom";

export default function ResumeCard({resume}) {
  return (
    <div className="flex justify-center">
        <Link to={`/dashboard/resume/${resume.documentId}/edit`}>
            <div className="flex flex-col gap-2">
                <div className="h-80 w-60 border flex flex-col justify-center items-center bg-seconday rounded-lg font-bold p-5 cursor-pointer bg-seconday hover:scale-105 hover:shadow-lg transition-all rounded-lg cursor-pointer">
                    <Notebook />
                </div>
                <div className="text-center cursor-pointer font-bold ">{resume.resumeTitle}</div>
            </div>
        </Link>
    </div>
  )
}
