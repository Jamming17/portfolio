import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";

export default function Post() {
    const { user, token, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");

    if (!loading && (!user || !user.admin)) {
        console.log(`Loading: ${loading}\nUser: ${user}`);
        return <Navigate to="/blog/login" replace />;
    }

    const handlePost = async () => {
        setError(null);

        if(!title.trim() || !content.trim()) {
            setError("Title and content are required");
            return;
        }

        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}post`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ username: user.username, title, content, datetime: new Date().toISOString()})
            });
            const data = await res.json();

            if(!res.ok) {
                setError(data.error || "Failed to create post");
            } else {
                navigate("/blog");
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong");
        }
    };

    return (
        <div className="p-4 mt-16 max-w-3xl mx-auto text-center bg-gray-300/90 text-gray-800 rounded">
            <h2 className="text-3xl font-bold mb-4">New Blog Post</h2>
            <input placeholder="Post Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full mb-2 p-2 border bg-gray-200" />
            <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} className="w-full mb-2 p-2 border bg-gray-200 h-40" />
            <button className="bg-purple-800 text-white text-xl px-8 py-1 mt-4 rounded shadow" onClick={handlePost}>Publish</button>
        
            {error && <p className="text-red-600 mt-4">{error}</p>}            
        </div>
    )
}