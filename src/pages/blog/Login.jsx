import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


export default function Login() {
    const { login } = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleLogin = async () => {
        setError(null);
        setSuccess(null);
        
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}login`, {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify({ username: username, password: password })
            });

            const data = await res.json();

            if(!res.ok) {
                setError(data.error || "Login failed");
            } else {
                setSuccess(<p>Login successful!</p>);
                setError(null);

                login(data.user, data.token);
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong");
        }
    }

    const handleLogout = () => {
        logout();
    }

    return (
        <div className="p-4 mt-16 max-w-3xl mx-auto text-center bg-gray-300/90 text-gray-800 rounded">
            <h2 className="text-3xl font-bold mb-4">Login</h2>
            <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full mb-2 p-2 border bg-gray-200" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mb-2 p-2 border bg-gray-200" />
            
            <button className="bg-purple-800 text-white text-xl px-8 py-1 mt-4 rounded shadow" onClick={handleLogin}>Confirm</button>
            
            {error && <p className="text-red-600 mt-4">{error}</p>}
            {success && <p className="text-green-600 mt-4">{success}</p>}

            <p className="text-md pt-8 text-gray-500">Don't have an account? Register <Link to="/blog/register" className="underline">here</Link>.</p>
        </div>
    );
}