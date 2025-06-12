import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
    const { user, logout } = useContext(AuthContext);

    return (
        <header className="fixed w-full z-50 shadow-md bg-purple-800 md:text-2xl text-lg p-4">
            <nav className="flex flex-col md:flex-row justify-between items-center">
                <div className="space-x-6 text-white">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/competencies">Competencies</Link>
                    <Link to="/blog">Blog</Link>
                </div>

                <div className="text-gray-200 md:text-xl text-lg">
                    {!user ? (
                        <div className="space-x-3">
                            <Link className="p-2 md:p-0" to="/blog/login">Login</Link>
                            <span className="text-2xl hidden md:inline text-white">/</span>
                            <Link className="p-2 md:p-0" to="/blog/register">Register</Link>
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