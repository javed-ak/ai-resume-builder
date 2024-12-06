import { Loader, PlusSquare } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "@/components/ui/input"
import { v4 as uuidv4 } from 'uuid';
import ResumeApi from "../../../../routes/ResumeApi";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";


export default function AddResume() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [resumeTitle, setResumeTitle] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const { user } = useUser();

    const handleDialog = () => {
        setDialogOpen(true);
    }

    const createResume = async () => {
        setLoading(true);
        const uuid = uuidv4();
        const data = {
            data: {
                resumeId: uuid,
                resumeTitle: resumeTitle,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                userName: user?.fullName
            }
        };

        ResumeApi.CreateNewResume(data).then(response=>{
            console.log(response);
            if(response) {
                setLoading(false)
                navigate(`/dashboard/resume/${uuid}/edit`);
            }
        }, (error) => {
            setLoading(false)
        });
    };

  return (
    <div className="flex justify-center">
      <div className="h-80 w-60 border flex justify-center items-center bg-seconday hover:scale-105 hover:shadow-lg transition-all rounded-lg cursor-pointer"
      onClick={handleDialog}>
        <PlusSquare />
      </div>
      <Dialog open={dialogOpen}>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
                Add a title for your new resume
            </DialogDescription>
            </DialogHeader>
            <Input type="text" placeholder="Full Stack Developer Resume" onChange={(e) => {setResumeTitle(e.target.value)}}/>
            <div className="flex justify-end gap-5">
                <Button variant="destructive" onClick={() => {setDialogOpen(false)}}>Cancel</Button>
                <Button onClick={createResume} disabled={!resumeTitle || loading}>{loading ? <Loader className="animate-spin" /> : 'Create'}</Button>
            </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
