interface InputBoxProps {
    type?: string;
    placeholder: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputBox({type, placeholder, label, onChange }: InputBoxProps) {
    return (
        <div className="flex flex-col gap-2 items-start">
            <label className="font-bold text-sm">{label}</label>
            <input required type={type || 'text'} placeholder={placeholder} className="p-2 rounded border border-gray-200 w-full" onChange={onChange}/>
        </div>
    )
}