import { AtomIcon, Edit, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function HowItWork() {
    return (
        <div className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h2 className="font-bold text-3xl">How it Works?</h2>
            <h2 className="text-md text-gray-500">Give mock interview in just 3 simplar easy step</h2>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 flex flex-col justiy-center items-center" href="#">
                    <AtomIcon className='h-8 w-8' />
                    <h2 className="mt-4 text-xl font-bold text-black">Write promot for your form</h2>
                    <p className="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
                </a>

                <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 flex flex-col justiy-center items-center" href="#">
                    <Edit className='h-8 w-8' />
                    <h2 className="mt-4 text-xl font-bold text-black">Edit Your form </h2>
                    <p className="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
                </a>

                <a className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 flex flex-col justiy-center items-center" href="#" >
                    <Share2 className='h-8 w-8' />
                    <h2 className="mt-4 text-xl font-bold text-black">Share & Start Accepting Responses</h2>
                    <p className="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
                </a>
            </div>

            <div className="mt-12 text-center">
                <Link to = {"/auth/signin"} className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400">
                    Get Started Today
                </Link>
            </div>
        </div>
    )
}