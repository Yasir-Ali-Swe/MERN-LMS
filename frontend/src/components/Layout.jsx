import Sidbar from "./Sidbar.jsx";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { RiMenuFold3Line } from "react-icons/ri";
import { RiMenuFold4Line } from "react-icons/ri";

const SidebarWidth = 280;
export default function Layout() {
    const [open, setOpen] = useState(false);
    const toggleSidebar = () => setOpen(!open);
    return (
        <div className="min-h-screen">
            <div className={`fixed top-0 left-0 z-40 w-[${SidebarWidth}px] transition-transform duration-300 ease-in-out ${open ? "block" : "hidden"} lg:block`}>
                <Sidbar />
            </div>
            <div className="lg:hidden fixed top-2 left-2 z-50">
                <button onClick={toggleSidebar}>
                    {
                        open ? <RiMenuFold3Line size={28} className="text-textColor" /> : <RiMenuFold4Line size={28} className="text-textColor" />
                    }
                </button>
            </div>
            <main className="lg:ml-[280px]">
                <Outlet />
            </main>
        </div>
    );
}