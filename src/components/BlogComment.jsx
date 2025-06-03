export default function BlogComment( {text, user, date} ) {
    return (
        <div className="border-t pt-1 mt-1">
            <p> <span className="pb-1 font-bold">{user}</span> <span className="text-xs text-gray-500">on {date}</span></p>
            <p className="text-sm">{text}</p>
        </div>
    );
}