export default function Avatar({username}: {username: string}) {
    return (
        <div className="h-10 w-10 rounded-full text-white flex justify-center items-center font-medium text-lg border-2 border-black bg-gray-500">{username[0].toUpperCase()}</div>
    )
}