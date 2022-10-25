import React, { useState } from 'react'
import p_booking from '../images/p_booking.png'
import p_petShop from '../images/p_petShop.png'
import p_weather from '../images/p_weather.png'
import p_league from '../images/p_league.png'
import p_portfolio from '../images/p_portfolio.png'
import p_todolist from '../images/p_todolist.png'

function Projects() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''} id="Projects">
         <section className='dark:bg-gray-800 overflow-auto'>
          <div>
            <h3 className='text-3xl py-1 text-center font-bold dark:text-white'>Projects</h3>
            <p className='text-md py-5 leading-8 text-gray-800 text-center dark:text-gray-300'>Full Projects cases on GitHub!</p>
          </div>
          <div className='flex flex-col ml-20 mr-20 gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <img src={p_booking} alt='bookingP' className='rounded-lg object-cover' layout='responsive' />
              <p className='text-md py-5 leading-8 text-gray-800 text-center dark:text-gray-300'>
              <span className='text-purple-600 text-lg dark:text-purple-300'>Booking Clone App</span> <br/>
              I Created the frontend of Booking (clone),
              Built in React. <br/>
              Live website <a className='underline' target="_blank" rel="noreferrer" href="https://bookingfront.vercel.app/">Here</a> 
              </p>
            </div>
            <div className='basis-1/3 flex-1'>
              <img src={p_petShop} alt="petShopP" className='rounded-lg object-cover' layout='responsive' />
              <p className='text-md py-5 leading-8 text-gray-800 text-center dark:text-gray-300'>
              <span className='text-purple-600 text-lg dark:text-purple-300'>Animal Pet Shop</span><br/>
              Project built with Asp.Net MVC, bootstrap, SQLite. 
              </p>
            </div>
            <div className='basis-1/3 flex-1'>
              <img src={p_weather} alt="weatherP" className='rounded-lg object-cover' layout='responsive' />
              <p className='text-md py-5 leading-8 text-gray-800 text-center dark:text-gray-300'>
              <span className='text-purple-600 text-lg dark:text-purple-300'>Weather App</span> <br/>
              Weather app built in react, using OpenWeather API. <br/>
              Live website <a className='underline' target="_blank" rel="noreferrer" href="https://weather-app-inbalbu.vercel.app/">Here</a> 
              </p>
            </div>
            <div className='basis-1/3 flex-1'>
              <img src={p_league} alt="leagueP" className='rounded-lg object-cover' layout='responsive' />
              <p className='text-md py-5 leading-8 text-gray-800 text-center dark:text-gray-300'>
              <span className='text-purple-600 text-lg dark:text-purple-300'>Leage Of Legends App</span> <br/>
              Project built with React, using Riot API. <br/>
              Live website <a className='underline' target="_blank" rel="noreferrer" href="https://leageof-legends.vercel.app/">Here</a> 
              </p>
            </div>
            <div className='basis-1/3 flex-1'>
              <img src={p_portfolio} alt="portfolioP" className='rounded-lg object-cover' layout='responsive' />
              <p className='text-md py-5 leading-8 text-gray-800 text-center dark:text-gray-300'>
              <span className='text-purple-600 text-lg dark:text-purple-300'>My First Portfolio</span> <br/>
              My Personal Website built in React.<br/>
              Live website <a className='underline' target="_blank" rel="noreferrer" href="https://inbalportfolio.vercel.app/">Here</a> 
              </p>
            </div>
            <div className='basis-1/3 flex-1'>
              <img src={p_todolist} alt="todolistP" className='rounded-lg object-cover' layout='responsive' />
              <p className='text-md py-5 leading-8 text-gray-800 text-center dark:text-gray-300'>
              <span className='text-purple-600 text-lg dark:text-purple-300'>To Do List App</span> <br/>
              Project built in React.<br/>
              Live website <a className='underline' target="_blank" rel="noreferrer" href="https://todolist-tan.vercel.app/">Here</a> 
              </p>
            </div>
          </div>  
        </section>
    </div>
  )
}

export default Projects