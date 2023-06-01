//rfc

import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import {IoMdContact} from 'react-icons/io'
import {MdOutlinePolicy} from 'react-icons/md'
import Link from 'next/link' 
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
    <div className='flex'>
      <MenuItem title='Home' address='/' Icon={AiFillHome} /> 
      <MenuItem title='About' address='/about' Icon={BsFillInfoCircleFill} /> 
      <MenuItem title='Contact' address='/contact' Icon={IoMdContact} />  
      <MenuItem title='Privacy Policy' address='/privacy' Icon={MdOutlinePolicy} />
    </div>

    <div className='flex items-center space-x-5'>
      <DarkModeSwitch />
      <Link href="/">
        <h2 className='text-2xl'>
          <span className='font-bold bg-blue-300 px-2 py-1 rounded-lg mr-1'>Movies</span>
          <span className='text-xl hidden sm:inline'>Online</span>
        </h2>
      </Link>
    </div>
    </div>
  )
}
