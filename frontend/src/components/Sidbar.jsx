import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const Sidbar = () => {
    const pathname = useLocation().pathname;
    const Routes = [
        {
            name: "Dashboard",
            path: "/",
        },
        {
            name: "Manage Instructor",
            path: "/add-instructor",
        },
        {
            name: "Manaege Users",
            path: "/manage-users",
        },
        {
            name: "Manage Courses",
            path: "/manage-courses",
        },
        {
            name: "Manage Post",
            path: "/manage-post",
        },
        {
            name: "My Profile",
            path: "/my-profile",
        }
    ]
    return (
        <div className='h-screen w-full bg-secondary '>
            <div className='Logo py-10 '>
                <h1 className='text-3xl text-center font-bold text-textColor'>
                    LMS
                </h1>
            </div>
            <div>
                {
                    Routes.map((route) => <Link key={route.name} to={route.path} className={`text-xl font-semibold block mx-1 rounded-lg my-2 py-2 px-[53px] text-left text-textColor hover:bg-primary ${pathname === route.path && "bg-primary shadow-sm shadow-textColor"}`}>{route.name}</Link>)
                }
            </div>
        </div>
    )
}
export default Sidbar;
