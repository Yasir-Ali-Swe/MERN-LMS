import Sidbar from "./Sidbar.jsx";
import { Outlet } from "react-router-dom";

const SidebarWidth=280;
export default function Layout() {
    return (
        <div className="min-h-screen">
            <div className={`fixed top-0 left-0 z-40 w-[${SidebarWidth}px]`}>
                <Sidbar />
            </div>
            <main className="ml-[280px]">
                <Outlet />
            </main>
        </div>
    );
}