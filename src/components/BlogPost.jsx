import { useState } from "react";
import BlogComment from "./BlogComment";

export default function BlogPost({ title, text, user, date, comments }) {
    const [showComments, setShowComments] = useState(false)
    
    return (
        <div className="mb-6 p-4 rounded shadow bg-gray-300/90 text-gray-800">
            <h3 className="text-3xl font-bold">{title}</h3>
            <p><span className="font-bold">by {user}</span> <span className="text-sm text-gray-500">on {date}</span></p>
            <p className="my-2">{text}</p>
            
            
            <button
                onClick={() => setShowComments(!showComments)}
                className="bg-purple-800 text-white px-8 py-1 mt-3 rounded shadow"
            >
                {showComments ? "Hide Comments" : `Show Comments (${comments.length})`}
            </button>

            {showComments && (
                <div className="mt-3">
                    {comments.map((comment, index) => (
                        <BlogComment key={index} {...comment} />
                    ))}
                </div>
            )}
        </div>
    );
}