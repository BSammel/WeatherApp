import React from 'react'
import { CloudSun, Sun, CloudRain, Droplets, CloudSnow } from 'lucide-react'

const Footer = () => {
  return (
    
            <div className='max-w-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-0 flex items-center justify-center mx-auto mt-5 rounded-lg p-4'>
            <div className='text-yellow-500 rounded-lg  border border-blue-400 backdrop-blur-sm shadow-lg h-30 font-bold'>
                <p className='flex items-center justify-center '>Mon</p>
                <CloudSun className='ml-7 mt-3 text-gray-500 w-12 h-12 flex items-center justify-center' />
                <div className='text-gray-800 flex items-center justify-center text-sm pt-2'>30°/20°</div>
            </div>
             <div className='text-yellow-500 rounded-lg border border-blue-400 backdrop-blur-sm shadow-lg h-30 font-bold'>
                <p className='flex items-center justify-center'>Tues</p>
                <CloudRain className='ml-7 mt-3 text-gray-500 w-12 h-12 flex items-center justify-center' />
                <div className='text-gray-800 flex items-center justify-center text-sm pt-2'>28°/18°</div>
             
            </div>
             <div className='text-yellow-500 rounded-lg border border-blue-400 backdrop-blur-sm shadow-lg h-30 font-bold'>
                <p className='flex items-center justify-center'>Wed</p>
                <Droplets className='ml-7 mt-3 text-gray-500 w-12 h-12 flex items-center justify-center' />
                <div className='text-gray-800 flex items-center justify-center text-sm pt-2'>25°/15°</div>
            </div>
                <div className='text-yellow-500 rounded-lg border border-blue-400 backdrop-blur-sm shadow-lg h-30 font-bold'>
                <p className='flex items-center justify-center'>Thu</p>
                <CloudSnow className='ml-7 mt-3 text-gray-500 w-12 h-12 flex items-center justify-center' />
                <div className='text-gray-800 flex items-center justify-center text-sm pt-2'>22°/10°</div>
        </div>
        <div className='text-yellow-500 rounded-lg border border-blue-400 backdrop-blur-sm shadow-lg h-30 font-bold'>
                <p className='flex items-center justify-center'>Fri</p>
                <Sun className='ml-7 mt-3 text-yellow-600 w-12 h-12 flex items-center justify-center' />
                <div className='text-gray-800 flex items-center justify-center text-sm pt-2'>32°/22°</div>
        </div>
        </div>
       
  )
}

export default Footer