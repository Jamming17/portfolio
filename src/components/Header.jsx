import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
    const { user, logout } = useContext(AuthContext);

    return (
        <header className="fixed w-full z-50 shadow-md bg-purple-800 text-2xl p-4">
            <nav className="flex justify-between items-center">
                <div className="space-x-6 text-white">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/competencies">Competencies</Link>
                    <Link to="/blog">Blog</Link>
                </div>

                <div className="text-gray-200 text-xl">
                    {!user ? (
                        <div className="space-x-3">
                            <Link to="/blog/login">Login</Link>
                            <span className="text-2xl text-white">/</span>
                            <Link to="/blog/register">Register</Link>
                        </div>
                    ) : (
                        <div className="space-x-3">
                            <span>Hello, {user.username}</span>
                            <span className="text-2xl text-white">/</span>
                            <button onClick={logout}>Logout</button>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}