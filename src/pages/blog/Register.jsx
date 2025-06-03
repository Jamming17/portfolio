import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="p-4 mt-16 max-w-3xl mx-auto text-center bg-gray-300/90 text-gray-800 rounded">
            <h2 className="text-3xl font-bold mb-4">Register</h2>
            <input placeholder="Email Address" className="w-full mb-2 p-2 border bg-gray-200" />
            <input placeholder="Username" className="w-full mb-2 p-2 border bg-gray-200" />
            <input type="password" placeholder="Password" className="w-full mb-2 p-2 border bg-gray-200 mt-8" />
            <input type="password" placeholder="Confirm Password" className="w-full mb-2 p-2 border bg-gray-200" />
            <button className="bg-purple-800 text-white text-xl px-8 py-1 mt-4 rounded shadow">Confirm</button>
            <p className="text-md pt-8 text-gray-500">Already have an account? Log in <Link to="/blog/login" className="underline">here</Link>.</p>
        </div>
    );
}