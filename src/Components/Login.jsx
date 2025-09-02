import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
        <div className='flex flex-col items-center justify-center  bg-gray-200   p-10 gap-8 min-h-screen'>
        <div className='bg-white p-10 rounded-lg shadow-lg w-80 '>
          <h1 className='text-3xl text-center'>Login</h1>
            <h2 className='mt-15'>Email</h2>
            <input type="text"  className='border border-gray-400 w-60 rounded mt-2 h-10 px-2'/>
            <h2 className='mt-4'>Password</h2>
            <input type="password" className='border border-gray-400 w-60 rounded mt-2 h-10 px-2'/>
            <button className='mt-7 w-60 text-center bg-blue-600 text-white text-xl rounded p-1 cursor-pointer hover:bg-blue-500'>Login</button>
            <p className='mt-4'>Don't have an account? <Link to="/sign" className='text-blue-600'>Sign Up</Link> </p>
        </div>
      </div>
    </>   
  )
}

export default Login