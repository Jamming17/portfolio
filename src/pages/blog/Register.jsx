import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = async () => {
        setError(null);
        setSuccess(null);
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: username, password: password, admin: "0" })
            });
            
            const data = await res.json();

            if(!res.ok) {
                setError(data.error || "Registration failed");
            } else {
                setSuccess(<p>Registration successful! You can now <Link to="/blog/login" className="underline">log in</Link>.</p>);
                setError(null);
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong");
        }
    }

    return (
        <div className="p-4 mt-16 max-w-3xl mx-auto text-center bg-gray-300/90 text-gray-800 rounded">
            <h2 className="text-3xl font-bold mb-4">Register</h2>
            <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full mb-2 p-2 border bg-gray-200" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mb-2 p-2 border bg-gray-200 mt-8" />
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full mb-2 p-2 border bg-gray-200" />

            <button className="bg-purple-800 text-white text-xl px-8 py-1 mt-4 rounded shadow" onClick={handleRegister}>Confirm</button>

            {error && <p className="text-red-600 mt-4">{error}</p>}
            {success && <p className="text-green-600 mt-4">{success}</p>}

            <p className="text-md pt-8 text-gray-500">Already have an account? Log in <Link to="/blog/login" className="underline">here</Link>.</p>
        </div>
    );
}