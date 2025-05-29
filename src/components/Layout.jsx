import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-gradient-to-b from-blue-950 to-blue-800 pt-22 pb-8 px-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}