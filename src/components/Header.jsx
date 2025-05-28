import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-purple-800 text-white text-2xl p-4">
            <nav className="flex space-x-6">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/competencies">Competencies</Link>
            </nav>
        </header>
    );
}