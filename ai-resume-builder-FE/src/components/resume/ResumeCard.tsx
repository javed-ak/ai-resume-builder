import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ResumeCard() {
    return (
        <div>
            <Link to={'/dashboard/resume/324234/edit'}>
                <div className="border border-dashed border-gray-300 rounded-lg h-80 flex justify-center items-center bg-gray-100 cursor-pointer hover:scale-105 transition-all"
                    onClick={() => {}}>
                    <FiPlusCircle size={30} color="gray" />
                </div>
            </Link>
        </div>
    )
}