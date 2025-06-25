import { PlusIcon } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router';
const Navbar = () => {
  return (
    <header className='border-b border-base-content/10 '>
      <div className='mx-auto max-w-6xl p-4 bg-black sticky z-10 '>
        <div className='flex items-center justify-between '>
          <h1 className='text-3xl font-bold text-white font-mono tracking-tight'> QuickNotez</h1>
          <div className='flex items-center gap-4 '>
            <Link to={"/create"} className='btn btn-white  bg-white hover:bg-blue-400'>
            <PlusIcon className='h-5 w-5 text-black '/>
            <span className='font-bold text-black '>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar ;