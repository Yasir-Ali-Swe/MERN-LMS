import React from 'react'
import { Link ,useLocation} from 'react-router-dom'

const Sidbar = () => {
    const pathname=useLocation().pathname;
    const Routes=[
        {
            name:"Dashboard",
            path:"/",
        },
        {
            name:"Add Instructor",
            path:"/add-instructor",
        },
        {
            name:"Manaege Users",
            path:"/manage-users",
        },
        {
            name:"Manage Courses",
            path:"/manage-courses",
        },
        {
            name:"Manage Post",
            path:"/manage-post",
        },
        {
            name:"My Profile",
            path:"/my-profile",
        }
    ]
  return (
    <div className='h-screen bg-purple-800 '>
     <div className='py-10 '>
        <h1 className='text-3xl text-center font-bold text-white'>
            LMS
        </h1>
     </div>
     <div>
      {
        Routes.map((route)=><Link to={route.path} className={`text-xl font-semibold block my-2 py-2 px-15 text-left text-white hover:bg-purple-600 ${pathname===route.path && "bg-purple-600"}`}>{route.name}</Link>)
      }
     </div>
    </div>
  )
}
export default Sidbar;
