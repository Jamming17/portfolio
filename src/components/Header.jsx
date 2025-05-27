import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/competencies">Competencies</Link>
            </nav>
        </header>
    );
}