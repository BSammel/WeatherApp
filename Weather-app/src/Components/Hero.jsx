import axios from 'axios'
import { useState } from 'react'
import {Loader} from 'lucide-react'


const Hero = () => {
    const cel = '\u00b0';

     const [input, setInput] = useState('')
     const [weather, setWeather] = useState({
      loading: false,
      data: {},
      error: false
     })

     const search = (event) =>{
      if(event.key === "Enter"){
        setInput('')
        setWeather({...weather, loading: true})
        axios.get('https://api.openweathermap.org/data/2.5/weather?',{
          params: {
              q: input,
              appid: 'e88191f36187567a4734733ea7cf8458',
              units: 'metric'
          }
        }).then(res => {
          console.log(res)
          setWeather({data: res.data, loading: false, error: false})
        }).catch(err =>{
          setWeather({...weather, data: {}, error: true})
        })
      }
     }

     const toDate = () => {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

      const currentDate = new Date();
     const day = currentDate.getDate();
     const month = months[currentDate.getMonth()];
     const year = currentDate.getFullYear();
     const date = `${day} ${month}, ${year}`
     return date;
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

    <div className=' max-w-lg mx-auto mt-10 h-85 shadow-lg backdrop-blur-sm border border-blue-700 rounded-lg'>
        <div className='space-x-1 flex items-center justify-center'>
          {
            weather.loading && (<Loader className='animate-spin text-gray-500 w-24 h-24' />)
          }
          {
            weather.error && (<p className='text-red-500 text-sm'>City not found. Please try again.</p>)
          }
        <h1 className='text-6xl text-yellow-300 font-bold pt-2 flex items-center justify-center'>{weather.data.main?.temp.toFixed(0)}{cel}C</h1>
        <p className='text-3xl text-yellow-300 font-bold flex items-center justify-center pt-1/2'></p>
        </div>
        <div className='flex items-ceneter justify-center space-x-3'>
        <p className='text-yellow-300 text-4xl flex items-center justify-center pt-2'>{weather.data.name}</p>
        <span className='text-yellow-300 text-4xl flex items-center justify-center pt-2'>{weather.data.sys?.country}</span>
        </div>
        <div className='flex items-center justify-center pt-5'>
          <span className='text-blue-800 text-sm'>{toDate()}</span>
        </div>
        <div className='flex items-center justify-center space-x-3 pt-2'>
        <img src={`https://openweathermap.org/img/wn/${weather.data.weather?.[0].icon}@2x.png`} alt={weather.data.weather?.[0].description} />
        <p className='text-yellow-300 text-xl'>{weather.data.weather?.[0].description}</p>
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
            <p className='text-gray-800 text-sm pl-1/2'>Humidity {weather.data.main?.humidity}%</p>
            </div>
            <div className='flex items-center justify-center space-x-2'>
            <Wind className='text-blue-600 w-6 h-6' />
            <p className='text-gray-800 text-sm pl-1/2'>Wind {weather.data.wind?.speed.toFixed(1)} m/s</p>
            </div>
            <div className='flex items-center justify-center space-x-2'>
            <Rocket className='text-blue-600 w-6 h-6' />
            <p className='text-gray-800 text-sm pl-1/2'>Pressure {weather.data.main?.pressure} hPa</p>
            </div>
            <hr/>
                
         </div>
         <div className='flex items-center justify-center space-x-2'>
         <img className='w-8 h-8' src={`https://openweathermap.org/img/wn/${weather.data.weather?.[0].icon}@2x.png`} alt={weather.data.weather?.[0].description} />
         <div className='text-gray-800 flex items-center justify-center text-sm pt-3'>Feels like {weather.data.main?.feels_like.toFixed(0)}°C</div>
         </div>
    </div>
    </section>
    
  )
}

export default Hero
