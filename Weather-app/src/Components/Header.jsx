import React from 'react'
import { Moon,Circle } from 'lucide-react'


const Header = () => {
  return (
    <div className="bg-transparent shadow-md flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold ml-50 text-blue-500">Weatherly</h1>
      <div className='space-x-3 flex items-center justify-center mr-65'>
      <Moon className='text-white' />
      <div className='bg-blue-500 rounded-full px-2 py-2 '>
        <div className='flex items-center justify-between space-x-3'>
        <Circle className='text-gray-500 cursor-pointer bg-gray-500 rounded-full hover:text-gray-500' />
        <Circle className='text-white cursor-pointer bg-white rounded-full hover:text-white' />
            </div>
      </div>
        </div>
    </div>
  )
}

export default Header