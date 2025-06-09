export default function BlogComment( {content, username, datetime} ) {
    return (
        <div className="border-t pt-1 mt-1">
            <p> <span className="pb-1 font-bold">{username}</span> <span className="text-xs text-gray-500">on {datetime}</span></p>
            <p className="text-sm">{content}</p>
        </div>
    );
}