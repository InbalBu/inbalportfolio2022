import React, { useState } from 'react'
import { useEffect } from 'react';
import net from '../images/net.png'
import soft from '../images/soft.png'
import web from '../images/web.png'

function Skills() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''} id="Skills">
        <section className='dark:bg-gray-800 overflow-auto'>
          <div className='gap-10'>
            <h3 className='text-3xl py-1 mt-10 text-center font-bold dark:text-white'>My Skills</h3>
            <p className='text-md text-center py-2 leading-8 text-gray-800 dark:text-gray-200'>
            I have a great passion for coding and developing new practical apps. <br/>
            I am currently <span className='text-purple-500 dark:text-purple-400'>seeking full-time job</span> where I can use my skills to make the world a better place while learning from experts. <br/>
            I enjoy <span className='text-purple-500 dark:text-purple-400'>thinking outside the box</span> and come up with original ideas
            </p> 
          </div>

          <div>
            <div className='text-center shadow-lg p-10 ml-20 mr-20 rounded-xl my-10 dark:bg-white '>
                <img className='mx-auto' alt='web' src={web} width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2 text-purple-600'>Website Development</h3>
                <p className='py-2'>
                Creating modern, unique, responsive websites. <br/> Using advanced technology that includes Html, Css, React.js, JavaScript.
                </p>
            </div>
            <div className='text-center shadow-lg p-10  ml-20 mr-20 rounded-xl my-10 dark:bg-white  '>
                <img className='mx-auto' alt='net' src={net} width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2 text-purple-600'>.NET Development</h3>
                <p className='py-2'>
                Building apps using WPF, UWP, Object-oriented programming languages, C#, MVVM Architecture and more. <br/>
                I have built a few apps using .NET such as storage manager and library management system.
                </p>
            </div>
            <div className='text-center shadow-lg p-10 ml-20 mr-20 rounded-xl my-10 dark:bg-white '>
                <img className='mx-auto' alt='soft' src={soft} width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2 text-purple-600'>Soft Skills</h3>
                <p className='py-2'>
                To work in a challenging environment which encourages me to grow my technical and 
                managerial skills, where I can utilize my skills and knowledge. <br/> Achieve goals and strive to learn new technologies.
                Goal achiever. Team player. Learning & working againts the clock.
                Problem solving.
                </p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Skills