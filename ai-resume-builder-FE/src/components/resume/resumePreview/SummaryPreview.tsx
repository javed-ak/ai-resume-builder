interface ResumeInfoProps {
    summary: string 
}

interface Props {
    resumeInfo: ResumeInfoProps
}
export default function SummaryPreview({resumeInfo}: Props) {
    return (
        <div className="my-2 text-xs text-justify">
            {resumeInfo.summary}
        </div>
    )
}