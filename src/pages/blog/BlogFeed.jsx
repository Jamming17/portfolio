import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import BlogPost from "../../components/BlogPost";
import { AuthContext } from "../../context/AuthContext";

export default function BlogFeed() {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const [posts, setPosts] = useState([]);
    const [offset, setOffset] = useState(0);
    const [areThereMorePosts, setAreThereMorePosts] = useState(true);
    const [loading, setLoading] = useState(false);
    const fetchedInitialPosts = useRef(false);

    const fetchPosts = async() => {
        if (loading || !areThereMorePosts) {
            return;
        }
        setLoading(true);

        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}posts?offset=${offset}`);
            const data = await res.json();
            if (!res.ok) {
                console.error(data.error || "Failed to fetch blog posts");
                return;
            }
            
            setPosts(prev => [
                ...prev,
                ...data.posts.map(post => ({
                    ...post,
                    datetime: new Date(post.datetime).toISOString().slice(0,10),
                    comments: [],
                }))
            ]);
            setOffset(prev => prev + 10);

            if (data.posts.length < 10) {
                setAreThereMorePosts(false);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const navToPost = () => {
        navigate("/blog/post");
    }

    useEffect(() => {
        if (!fetchedInitialPosts.current) {
            fetchPosts();
            fetchedInitialPosts.current = true;
        }
    }, []);

    return (
        <div className="max-w-4xl p-4 mx-auto">
            {(user && user.admin) &&
                <div className="text-center mb-3">
                    <button onClick={navToPost} className="bg-purple-800 hover:bg-purple-700 active:bg-purple-900 text-white px-4 py-2 rounded shadow disabled:opacity-50 hover:bg-purple-700">Create Post</button>
                </div>
            }
            {posts.map((blog, i) => (
                <BlogPost
                    key={blog.id}
                    {...blog}
                    onDelete={deletedID => {
                        setPosts(prev => prev.filter(p => p.id !== deletedID));
                        setOffset(offset - 1);
                    }}
                    onEdit={(id, editedTitle, editedContent) => {
                        setPosts(prev => prev.map(post => post.id === id ? { ...post, title: editedTitle, content: editedContent } : post));
                    }}
                />
            ))}

            {areThereMorePosts ? (
                <div className="text-center mt-4">
                    <button onClick={fetchPosts} disabled={loading} className="bg-purple-800 hover:bg-purple-700 active:bg-purple-900 text-white px-4 py-2 rounded shadow disabled:opacity-50 hover:bg-purple-700">
                        {loading ? "Loading..." : "Load More"}
                    </button>
                </div>
            ) : (
                <p className="text-center text-white text-lg mt-4 text-gray-600">You have reached the beginning of time! There are no more posts to show.</p>
            )}
        </div>
    );
}