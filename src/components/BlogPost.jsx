import { useState, useEffect, useContext } from "react";
import BlogComment from "./BlogComment";
import { AuthContext } from "../context/AuthContext";

export default function BlogPost({ id, title, content, username, datetime, onDelete, onEdit }) {
    const [showComments, setShowComments] = useState(false)
    const { user, token } = useContext(AuthContext);
    const [commentCount, setCommentCount] = useState(0);
    const [commenting, setCommenting] = useState(false);
    const [currentComment, setCurrentComment] = useState("");

    const [deleteCount, setDeleteCount] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedContent, setEditedContent] = useState(content);

    const [comments, setComments] = useState([]);
    const [offset, setOffset] = useState(0);
    const [areThereMoreComments, setAreThereMoreComments] = useState(true);
    
    const [error, setError] = useState("");

    const hideComments = () => {
        setShowComments(false);
        setComments([]);
        setOffset(0);
    }

    const startStopEditing = async() => {
        setIsEditing(!isEditing);
        setEditedTitle(title);
        setEditedContent(content);
    }

    const postConfirmEdit = async() => {
        setError(null);
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}post/edit?postID=${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    title: editedTitle,
                    content: editedContent
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "Failed to edit post");
            } else {
                onEdit(id, editedTitle, editedContent);
                startStopEditing();
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong while editing the post");
        }
    }

    const deletePost = async() => {
        if (deleteCount < 2) {
            setDeleteCount(deleteCount + 1);
        } else {
            setError(null);

            try {
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}post/delete?postID=${id}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await res.json();
                if (!res.ok) {
                    setError(data.error || "Failed to delete post");
                } else {
                    if (onDelete) {
                        onDelete(id);
                    }
                }
            } catch (err) {
                console.error(err);
                setError("Something went wrong while deleting the post");
            }
        }
    }


    const fetchComments = async() => {
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}comments?offset=${offset}&pageSize=10&postID=${id}`);
            const data = await res.json();
            if (!res.ok) {
                console.error(data.error || "Failed to fetch post comments");
                return;
            }

            setComments(prev => [
                ...prev,
                ...data.comments.map(comment => ({
                    ...comment,
                    datetime: new Date(comment.datetime).toISOString().slice(0,10)}))
                ]);
            setOffset(prev => prev + 10);

            if (data.comments.length < 10) {
                setAreThereMoreComments(false);
            }
            setShowComments(true);
        } catch (err) {
            console.error(err);
        }
    };

    const handleComment = async() => {
        setError(null);

        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ username: user.username, content: currentComment, datetime: new Date().toISOString(), postID: id })
            });
            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Failed to add comment");
            } else {
                setCommenting(false);
                setCurrentComment("");
                if (!showComments) {
                    fetchComments();
                } else {
                    setComments(prev => [
                        {
                            username: user.username,
                            content: currentComment,
                            datetime: new Date().toISOString().slice(0,10)
                        },
                        ...prev
                    ]);
                    setOffset(offset + 1);
                }
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong");
        }
    }

    const getCommentCount = async() => {
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}comments?offset=0&pageSize=999&postID=${id}`);
            const data = await res.json();
            if (!res.ok) {
                console.error("Failed to retrieve comment count");
                return;
            }
            setCommentCount(data.comments.length);
        } catch (err) {
            console.error(err);
        }
    }

    const changeCommenting = () => {
        setCommenting(!commenting)
    }

    useEffect(() => {
        getCommentCount();
    })

    return (
        <div className="mb-6 p-4 rounded shadow bg-gray-300/90 text-gray-800">
            {!isEditing ? (
                <div className="flex justify-between items-center">
                    <h3 className="text-3xl font-bold">{title}</h3>
                    {(user && user.admin) &&
                        <div>
                            <button onClick={startStopEditing} className="bg-purple-800 text-sm text-white px-4 py-1 rounded shadow mr-2">Edit</button>
                            <button onClick={deletePost} className="bg-red-800 text-sm text-white px-4 py-1 rounded shadow">{deleteCount < 2 ? "Delete" : "DELETE"}</button>
                        </div>
                    }
                </div>
            ) : (
                <div className="flex justify-between items-center">
                    <input placeholder="Post Title" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} className="w-full p-2 border bg-gray-200 mr-2" />
                    <button onClick={postConfirmEdit} className="bg-purple-800 text-white px-4 py-1 rounded shadow mr-2">Confirm</button>
                    <button onClick={startStopEditing} className="bg-purple-800 text-white px-4 py-1 rounded shadow">Cancel</button>
                </div>
            )}

            {!isEditing && (
                <p><span className="font-bold">by {username}</span> <span className="text-sm text-gray-500">on {datetime}</span></p>
            )}

            {!isEditing ? (
                <p className="my-2">{content}</p>
            ) : (
                <textarea placeholder="Content" value={editedContent} onChange={(e) => setEditedContent(e.target.value)} className="w-full mb-2 mt-3 p-2 border bg-gray-200 h-40" />
            )}
            
            <div className="flex justify-between mt-3">
                {commentCount >= 0 ? (
                    <div>
                        {showComments ? (
                            <button onClick={hideComments} className="bg-purple-800 text-white px-8 py-1 rounded shadow">Hide Comments</button>
                        ) : (
                            <button onClick={fetchComments} className="bg-purple-800 text-white px-8 py-1 rounded shadow">Show Comments ({commentCount})</button>
                        )}
                    </div>
                    
                ) : (
                    <p className="text-gray-500">No Comments</p>
                )}

                <div className="flex">
                    {user ? (
                        <div>
                            <button onClick={changeCommenting} className="bg-purple-800 text-white px-8 py-1 rounded shadow">{!commenting ? "Add Comment" : "Cancel"}</button>
                        </div>
                    ) : (
                        <p className="text-gray-500">Log in to leave a comment.</p>
                    )}
                </div>
            </div>
            {commenting && (
                <div className="flex py-3 items-center">
                    <textarea placeholder="Comment" value={currentComment} onChange={(e) => setCurrentComment(e.target.value)} className="flex w-full p-2 mr-2 border bg-gray-200 h-10" />
                    <button onClick={handleComment} className="flex bg-purple-800 text-white px-8 py-2 rounded shadow">Submit</button>
                </div>
            )}

            {showComments && (
                <div className="mt-3">
                    {comments.map((comment, index) => (
                        <BlogComment key={index} {...comment} />
                    ))}
                    {areThereMoreComments && (
                        <button onClick={fetchComments} className="bg-purple-800 text-white px-8 py-1 rounded shadow">View More...</button>
                    )}
                </div>
            )}



            {error && <p className="text-red-600 mt-4">{error}</p>} 
        </div>
    );
}