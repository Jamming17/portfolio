import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function BlogComment( {id, content, username, datetime, onDeleteComment, onEditComment} ) {
    const { user, token } = useContext(AuthContext);

    const [deleteCount, setDeleteCount] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(content);

    const [error, setError] = useState("");

    const startStopEditing = () => {
        setIsEditing(!isEditing);
        setEditedContent(content);
    }

    const commentConfirmEdit = async() => {
        setError(null);
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}comment/edit?commentID=${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ content: editedContent })
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "Failed to edit comment");
            } else {
                onEditComment(id, editedContent);
                startStopEditing();
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong while editing the post");
        }
    }

    const deleteComment = async() => {
        if (deleteCount < 2) {
            setDeleteCount(deleteCount + 1);
        } else {
            setError(null);

            try {
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}comment/delete?commentID=${id}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const data = await res.json();
                if (!res.ok) {
                    setError(data.error || "Failed to delete comment");
                } else {
                    if (onDeleteComment) {
                        onDeleteComment(id);
                    }
                }
            } catch (err) {
                console.error(err);
                setError("Something went wrong while deleting the comment");
            }
        }
    }

    return (
        <div className="border-t pt-1 mt-1">
            {!isEditing ? (
                <div>
                    <div className="flex justify-between items-center">
                        <p> <span className="pb-1 font-bold">{username}</span> <span className="text-xs text-gray-500">on {datetime}</span></p>
                        {(user && (user.admin || user.username === username)) &&
                            <div className="flex">
                                <button onClick={startStopEditing} className="flex bg-purple-800 text-xs text-white px-4 py-1 mr-1 rounded shadow">Edit</button>
                                <button onClick={deleteComment} className="flex bg-red-800 text-xs text-white px-4 py-1 rounded shadow">{deleteCount < 2 ? "Delete" : "DELETE"}</button>
                            </div>
                        }
                    </div>
                    <p className="text-sm">{content}</p>
                </div>
            ) : (
                <div className="flex justify-between">
                    <textarea placeholder="Comment" value={editedContent} onChange={(e) => setEditedContent(e.target.value)} className="flex w-full p-2 mr-2 border bg-gray-200 h-10" />
                    <button onClick={commentConfirmEdit} className="flex bg-purple-800 text-sm text-white px-6 py-2 rounded shadow">Submit</button>
                </div>
            )}
        </div>
    );
}