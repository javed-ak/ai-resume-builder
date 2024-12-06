import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useContext, useEffect, useState } from "react";
import ResumeApi from "./../../../../routes/ResumeApi";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

export default function EducationForm({enableNext}) {

  return (
    <div className="px-5 py-10 border-t-8 border-b-8 rounded-lg shadow border-zinc-900">
      <div>
        <div className="font-bold text-2xl">Education</div>
        <div className="font-light text-gray-500">Add Education for you job</div>
      </div>
      <form onSubmit={onSave} className="my-5">
        <div className="flex justify-between items-end">
            <label>Add Education</label>
            <Button className='border-red-600 text-red-600' variant='outline' size='sm'>Generate with AI</Button>
        </div>
        <div>
        <Textarea defaultValue={resumeInfo?.summery} required className='mt-3' onChange={handleInputChange} />
        </div>
      </form>
      <div className="flex justify-end">
        <Button disabled={loading} type='submit'>{loading ? <Loader2 className="animate-spin"/> : 'Save'}</Button>
        </div>
    </div>
  )
}
