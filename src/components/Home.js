import React, { useState } from 'react'
import {AiFillLinkedin, AiFillGithub, AiFillPhone} from 'react-icons/ai';
import pcme from '../images/pcme.png';
import Typed from 'react-typed'
import ToggleButton from './ToggleButton';

function Home() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      let htmlClass = document.querySelector("html").classList;
      if (localStorage.theme === "dark") {
        htmlClass.remove("dark");
        localStorage.removeItem("theme");
      }
        else {
          htmlClass.add("dark");
          localStorage.setItem("theme", "dark");
        }
    }
        

  return (
    <div className={darkMode ? 'dark' : ''} id="Home">
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
        <li>
          <a href="#Home" class="block text-xl py-2 pr-4 pl-3 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#Skills" class="block text-xl py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a>
        </li>
        <li>
          <a href="#Projects" class="block text-xl py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
        </li>
      </ul>
    </div>
            <ul className='flex items-center'>
              <li><ToggleButton onClick={toggleDarkMode}/></li>
              <li><a className= 'bg-gradient-to-r from-purple-400 to-purple-600 text-white px-4 py-2 rounded-md ml-8' href="IbResume.pdf" target="_blank" download="IbResume.pdf">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h1 className='text-5xl py-2 text-purple-600 font-bold md:text-6xl dark:text-purple-400'>
              Hi, I'm Inbal Buckris</h1>
            <h2 className='text-2xl py-2 md:text-3xl font-bold dark:text-white'>
            <Typed
                strings={[
                  "I'm a Frontend Developer",
                  "I'm a Full Stack Developer",
                ]}
                typeSpeed={150}
                backSpeed={100}
                loop
                />
              </h2>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-300 '>Full-Stack / Frontend Web Developer with hands-on experience in building progressive web applications using the latest web technologies such as React.js, Html, Css. <br/>
            A team player, hard worker, self-learner, responsible and adapt quickly to new environments.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href="https://www.linkedin.com/in/inbal-buckris-full-stack/" target="_blank" rel="noreferrer" ><AiFillLinkedin className='dark:text-white cursor-pointer'/></a>
            <a href="https://github.com/InbalBu" target="_blank" rel="noreferrer"  ><AiFillGithub className='dark:text-white cursor-pointer'/></a>
            <a href="tel:0526809922" rel="noreferrer" ><AiFillPhone className='dark:text-white cursor-pointer'/></a>
          </div>
          <div className='relative bg-gradient-to-b from-purple-500 rounded-full w-80 h-80 mt-10 mx-auto overflow-hidden align-bottom'>
            <img src={pcme} layout="fill" objectFit='cover' />
          </div>
        </section>
        </main>
    </div>
  )
}


export default Home
