import { Link, useLocation } from 'react-router-dom'

const Sidbar = () => {
    const pathname = useLocation().pathname;
    const Routes = [
        {
            name: "Dashboard",
            path: "/",
        },
        {
            name: "Manage Instructors",
            path: "/add-instructor",
        },
        {
            name: "Manage Users",
            path: "/manage-users",
        },
        {
            name: "Manage Courses",
            path: "/manage-courses",
        },
        {
            name: "Notifications",
            path: "/manage-post",
        },
        {
            name: "My Profile",
            path: "/my-profile",
        }
    ]
    return (
        <div className='h-screen w-full bg-secondary '>
            <div className='Logo pt-13 pb-4 lg:pb-0 lg:pt-6'>
                <h1 className='text-3xl text-center font-bold text-textColor'>
                    LMS
                </h1>
            </div>
            <div className='lg:mt-6'>
                {
                    Routes.map((route) => <Link key={route.name} to={route.path} className={`text-md lg:text-xl font-semibold block my-2 mx-2 rounded-lg py-2 px-5 lg:px-8 text-left text-textColor hover:bg-primary ${pathname === route.path && "bg-primary shadow-sm shadow-textColor"}`}>{route.name}</Link>)
                }
            </div>
        </div>
    )
}
export default Sidbar;



