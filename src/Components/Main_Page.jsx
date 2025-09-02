import React from 'react'
import { Link } from 'react-router-dom'
import Girl from '../assets/girl.png'
const Main_Page = () => {
  return (
    <>
        <div className='flex justify-end gap-4 p-4 mr-10'>
            <button className='cursor-pointer'><Link to='/login'>Login</Link></button>
            <button className='bg-blue-700 text-white px-2 pz-2 rounded cursor-pointer hover:bg-blue-500'><Link to='/sign'>Sign Up</Link></button>
        </div>
        <div className='flex md:flex-row justify-around items-center h-auto md:h-[80vh] p-6'>
            <div className='md:w-1/2 space-y-6  text-center md:text-left'>
                <h1 className='text-3xl md:text-5xl font-bold'>Welcome to MyApp</h1>
                <p className='text-lg md:text-xl'>Build your projects faster with our amazing platform. Simple, modern and powerful tools to kickstart your journey.</p>
                <div className='space-x-4'>
                <button className='bg-blue-700 text-white rounded px-2 py-2 cursor-pointer hover:bg-blue-500'>Get Started</button>
                <button className='border px-4 py-2 rounded cursor-pointer'><Link to='/login'>Login</Link></button>
                </div>
            </div>
            <div className='md:w-1/2 mt-8 md:mt-0 flex justify-center'>
            <img src={Girl} alt="" className='w-64 md:w-96' />
            </div>
        </div>
        <div className='p-8'>
            <div className='flex justify-center '>
                <h1 className='text-3xl font-bold'>Why choose Us?</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10  text-center'>
                <div className='border rounded p-6  hover:scale-105 duration-300'>
                    <h1 className='text-xl font-semibold'>Fast</h1>
                    <p className='mt-3'>Super quick setup and easy to use interface.</p>
                </div>
                <div className='border rounded p-6  hover:scale-105 duration-300'>
                    <h1 className='text-xl font-semibold'>Secure</h1>
                    <p className='mt-3'>We value you privacy with enterprise-level security.</p>
                </div>
                <div className='border rounded p-6  hover:scale-105 duration-300'>
                    <h1 className='text-xl font-semibold'>Modern</h1>
                    <p className='mt-3'>Built with latest technologies like React + Tailwind.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main_Page