import axios from 'axios';
import { section } from 'framer-motion/client'
import { Search, Cloudy, Droplet, Wind, Rocket, Sun} from 'lucide-react'
import React, { useState } from 'react'


const Hero = () => {
    const cel = '\u00b0';

     const [input, setInput] = useState('')
     const [weather, setWeather] = useState({
      loading: false,
      data: {},
      err: false
     })

     const search = (event) =>{
      if(event.key === 'Enter'){
        setInput('')
        setWeather({...weather, loading: true})
        axios.get('https://api.openweathermap.org/data/3.0/onecall',{
          params: {
              q: input,
              appid: 'e88191f36187567a4734733ea7cf8458',
              units: 'metric'
          }
        }).then(res => {
          console.log(res)
        }).catch(err =>{
          setWeather({...weather, data: {}, err: true})
        })
      }
     }

  return (
    <section>
    <div className="relative max-w-md mx-auto mt-10 rounded-full bg-gray-200">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="text-white" />
      </div>
      <input
        type="text"
        placeholder="Search for a city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={search}
        className="w-full p-4 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="absolute right-2 top-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">Search</button>
    </div>

    <div className=' max-w-lg mx-auto mt-10 h-70 shadow-lg backdrop-blur-sm border border-blue-700 rounded-lg'>
        <div className='space-x-1 flex items-center justify-center'>
        <h1 className='text-6xl text-yellow-300 font-bold pt-2 flex items-center justify-center'>28</h1>
        <p className='text-3xl text-yellow-300 font-bold flex items-center justify-center pt-1/2'>{cel}C</p>
        </div>
        <p className='text-yellow-300 text-4xl flex items-center justify-center pt-2'>Accra, GH</p>
        <div className='flex items-center justify-center pt-5'>
        <Cloudy className='text-gray-300 w-24 h-12' />
        <p className='text-yellow-300 text-xl'>cloudy</p>
        </div>
         <hr style={{
            background: 'lightgray',
          color: 'lightgray',
          borderColor: 'lightgray',
          height: '2px',
          marginTop: '5px',
         }} />
         <div className='flex items-center justify-center pt-2 space-x-4'>
            <div className='flex items-center justify-center space-x-2'>
            <Droplet className='text-blue-700 w-6 h-6' />
            <p className='text-gray-800 text-sm pl-1/2'>Humidity 75%</p>
            </div>
            <div className='flex items-center justify-center space-x-2'>
            <Wind className='text-blue-600 w-6 h-6' />
            <p className='text-gray-800 text-sm pl-1/2'>Wind 12 km/h</p>
            </div>
            <div className='flex items-center justify-center space-x-2'>
            <Rocket className='text-blue-600 w-6 h-6' />
            <p className='text-gray-800 text-sm pl-1/2'>Pressure 1013 hPa</p>
            </div>
            <hr/>
                
         </div>
         <div className='flex items-center justify-center space-x-2'>
         <Sun className='text-yellow-700 w-6 h-6 pt-2' />
         <div className='text-gray-800 flex items-center justify-center text-sm pt-3'>Feels like 30°C</div>
         </div>
    </div>
    </section>
    
  )
}

export default Hero