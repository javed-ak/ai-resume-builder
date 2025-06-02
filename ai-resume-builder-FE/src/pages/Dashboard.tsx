import AddResumeCard from "../components/resume/AddResumeCard";
import ResumeCard from "../components/resume/ResumeCard";

export default function Dashboard() {
    return (
        <div className="">
            <div className="container m-auto py-10 flex flex-col gap-5">
                <div>
                    <div className="font-bold text-2xl">My Dashboard</div>
                    <div className="text-gray-500">Start creating AI resume for your next job role</div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    <AddResumeCard />
                    <ResumeCard />
                </div>
            </div>
        </div>
    )
}