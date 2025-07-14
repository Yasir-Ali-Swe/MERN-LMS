import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    navigate('/login');
  }

  return (
    <div className='min-h-screen w-screen bg-primary flex justify-center items-center p-4'>
      <div className='w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl py-8 bg-secondary rounded-lg shadow-lg'>
        <div className='mb-6 lg:mb-8 px-4'>
          <h1 className='text-2xl lg:text-3xl text-textColor font-black text-center'>Signup</h1>
        </div>
        <div className='flex flex-col justify-center items-center px-4 lg:px-8'>
          <input
            type="text"
            placeholder='Name'
            className='w-full h-12 lg:h-14 rounded-lg bg-primary text-textColor px-4 focus:outline-none focus:ring-2 focus:ring-tertiary my-3 lg:my-4 text-base lg:text-lg'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder='Email'
            className='w-full h-12 lg:h-14 rounded-lg bg-primary text-textColor px-4 focus:outline-none focus:ring-2 focus:ring-tertiary my-3 lg:my-4 text-base lg:text-lg'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            className='w-full h-12 lg:h-14 rounded-lg bg-primary text-textColor px-4 focus:outline-none focus:ring-2 focus:ring-tertiary my-3 lg:my-4 text-base lg:text-lg'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleSignup}
            className='w-full h-12 lg:h-14 rounded-lg bg-primary text-textColor my-3 lg:my-4 cursor-pointer text-base lg:text-lg font-semibold hover:bg-opacity-80 transition-colors'
          >
            Signup
          </button>
          <h1 className='text-base lg:text-lg text-textColor font-bold text-center mt-4'>
            Already have an account?
            <Link to={'/login'} className='text-tertiary cursor-pointer underline ml-1'>Login Now</Link>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Register;