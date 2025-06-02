import { FaVideo } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Featured from "./Featured";

export default function HeroSection() {
    return (
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a href="https://javedakhtar.vercel.app" target='_blank' className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200" role="alert">
                <span className="text-xs bg-sky-500 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Created by Javed Akhtar</span><IoIosArrowForward className='ml-3' />
            </a>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                Build Your Resume <span className='text-sky-500'>With AI</span>
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Effortlessly Craft a Standout Resume with Our AI-Powered Builder</p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link to={'/dashboard'} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-sky-500 hover:bg-sky-500 focus:ring-4 focus:ring-sky-300">
                    Get Started
                </Link>
                <Link to={'#'} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                    <FaVideo className='mr-3' />Watch video
                </Link>
            </div>
            <Featured />
        </div>
    )
}