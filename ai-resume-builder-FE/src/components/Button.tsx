interface ButtonProps {
    label: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'Success' | 'Danger' | 'Nutral' | 'Simple'
    disable?: boolean
}
export default function Button({ label, onClick, variant, disable }: ButtonProps) {
    return (
        <div>
            <button className={`
                    font-medium 
                    ${variant === 'Success' ? 'bg-green-500 text-white' : variant === 'Danger' ? 'bg-red-500 hover:bg-red-700 text-white' : variant === 'Nutral' ? 'bg-black text-white' : 'bg-sky-500 text-white'}
                    border rounded-lg py-1 px-3 hover:scale-105 transition-all`}    
                onClick={onClick}
                disabled={disable}
            >{label}</button>
        </div>
    )
}