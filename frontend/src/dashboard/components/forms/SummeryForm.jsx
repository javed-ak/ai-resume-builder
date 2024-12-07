import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useContext, useEffect, useState } from "react";
import ResumeApi from "./../../../../routes/ResumeApi";
import { useParams } from "react-router-dom";
import { Eraser, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { AIChatSession } from "./../../../../routes/AIModel";

const prompt = 'Job Title: ${jobTitle} , Depends on job title give me list of summery in paragraph (with name of summery_list) for 3 experience level, Mid Level and Freasher level in 3-4 lines in array format, With summery and experience_level Field in JSON Format';

export default function SummeryForm({enableNext}) {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [ loading, setLoading ] = useState(false);
    const [summery, setSummery] = useState();
    const [AIGeneratedSummery, setAIGeneratedSummery] = useState()
    const params = useParams();

    useEffect(() => {
      enableNext(false)
        summery && setResumeInfo({
            ...resumeInfo,
            summery: summery
        })
    }, [summery]);

    const GenerateSummeryFromAI = async () => {
      enableNext(false)
      const jobTitle = (resumeInfo.jobTitle);
      const PROMT = prompt.replace('${jobTitle}', jobTitle);
      const result = await AIChatSession.sendMessage(PROMT);
      const response = result.response.text();
      try {
        const parsedResponse = JSON.parse(response);
        setAIGeneratedSummery(parsedResponse.summery_list);
      } catch (e) {
        console.error("Error parsing AI response:", e);
        setAIGeneratedSummery([]);
      }
    }

    const onSave = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            data: {
                summery: summery
            }
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
        <div className="font-bold text-2xl">Summery</div>
        <div className="font-light text-gray-500">Add summery for you job title</div>
      </div>
      <div>
        <form onSubmit={onSave} className="my-5">
          <div className="flex justify-between items-end">
              <label>Add Summery</label>
              <Button className='border-red-600 text-red-600' onClick={GenerateSummeryFromAI} variant='outline' size='sm'>Generate with AI</Button>
          </div>
          <div>
            <Textarea defaultValue={resumeInfo?.summery} value={summery} required className='my-3' onChange={(e) => setSummery(e.target.value)} />
          </div>
          <div className="flex justify-end">
            <Button disabled={loading} type='submit'>{loading ? <Loader2 className="animate-spin"/> : 'Save'}</Button>
          </div>
        </form>
      </div>
      <div>
      {AIGeneratedSummery && (
      <div className="my-5">
        <h2 className="font-bold text-lg">Suggestions</h2>
        {AIGeneratedSummery.map((item, index) => (
          <div key={index} onClick={() => setSummery(item?.summery)} className="p-5 shadow-lg my-4 rounded-lg cursor-pointer">
            <h2 className="font-bold my-1 text-primary">Level: {item?.experience_level}</h2>
            <p>{item?.summery}</p>
          </div>
        ))}
      </div>)}

      </div>
    </div>
  )
}
