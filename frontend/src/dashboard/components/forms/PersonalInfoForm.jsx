import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useContext, useState } from "react";
import ResumeApi from "./../../../../routes/ResumeApi";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function PersonalInfoForm({enableNext}) {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [ formData, setFormData ] = useState();
    const [ loading, setLoading ] = useState(false);
    const params = useParams();

    const handleInputChange = (e) => {
        enableNext(false)
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]:value
        })
        setResumeInfo({
            ...resumeInfo,
            [name]:value
        })
    }

    const onSave = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            data: formData
        }
        ResumeApi.UpdateResume(params?.resumeId, data).then(resp => {
            enableNext(true);
            setLoading(false);
            toast("Details Updated");
        }, (error) => {
            setLoading(false);
        })
    }

  return (
    <div className="px-5 py-10 border-t-8 border-b-8 rounded-lg shadow border-zinc-900">
      <div>
        <div className="font-bold text-2xl">Personal Details</div>
        <div className="font-light text-gray-500">Let's start with the basic information</div>
      </div>
      <div className="mt-5">
        <form onSubmit={onSave}>
            <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <label className="text-sm">First Name</label>
                    <Input name='firstName' defaultValue={resumeInfo?.firstName} required onChange={(handleInputChange)}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm">Last Name</label>
                    <Input name='lastName' defaultValue={resumeInfo?.lastName} onChange={handleInputChange}/>
                </div>
                <div className="flex flex-col col-span-2 gap-2">
                    <label className="text-sm">Job Title</label>
                    <Input name='jobTitle' defaultValue={resumeInfo?.jobTitle} required onChange={handleInputChange}/>
                </div>
                <div className="flex flex-col col-span-2 gap-2">
                    <label className="text-sm">Address</label>
                    <Input name='address' defaultValue={resumeInfo?.address} required onChange={handleInputChange}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm">Phone</label>
                    <Input name='phone' defaultValue={resumeInfo?.phone} required onChange={handleInputChange}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm">Email</label>
                    <Input name='email' defaultValue={resumeInfo?.email} required onChange={handleInputChange}/>
                </div>
            </div>
            <div className="mt-5 flex justify-end">
                <Button disabled={loading} type='submit'>{loading ? <Loader2 className="animate-spin"/> : 'Save'}</Button>
            </div>
        </form>
      </div>
    </div>
  )
}
