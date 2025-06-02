import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export default function ResumeCard() {
  const [resumes, setResumes] = useState<any[]>([]);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/resume`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("Fetched resumes:", res.data.resumes);
        setResumes(res.data.resumes || []);
      } catch (err) {
        console.error("Failed to fetch resumes", err);
      }
    };

    fetchResumes();
  }, []);

  useEffect(() => {
    console.log("Updated resumes:", resumes);
  }, [resumes]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {resumes.map((resume) => (
        <Link key={resume._id} to={`/dashboard/resume/${resume._id}/edit`}>
          <div className="border border-dashed border-gray-300 rounded-lg h-80 flex justify-center items-center bg-gray-100 cursor-pointer hover:scale-105 transition-all">
            <p>{resume.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
