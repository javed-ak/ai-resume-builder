import { ImYoutube2 } from "react-icons/im";
import { FaReddit } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Featured() {
    return (
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">FEATURED IN</span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800">
                    <ImYoutube2 size={120}/>
                </a>
                <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 font-bold flex items-center gap-3 text-4xl">
                   <FaLinkedin /><span>Linkedin</span> 
                </a>
                <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 font-bold flex items-center gap-3 text-4xl">
                    <FaReddit/> <span>Reddit</span>
                </a>
            </div>
        </div>
    )
}