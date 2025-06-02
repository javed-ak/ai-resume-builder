import { FiPlusCircle } from "react-icons/fi";
import { useState } from "react";
import DialogComponent from "../dashboardComponents/DialogComponent";

export default function AddResumeCard() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div className="border border-dashed border-gray-300 rounded-lg h-80 flex justify-center items-center bg-gray-100 cursor-pointer hover:scale-105 transition-all"
                onClick={() => (setIsOpen(!isOpen))}>
                <FiPlusCircle size={30} color="gray" />
            </div>
            <DialogComponent isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}