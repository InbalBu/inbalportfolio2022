import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'

function ToggleButton({onClick}) {
  return (
    <div onClick={onClick} >
        <BsFillMoonStarsFill className='cursor-pointer text-2xl dark:text-white'/>
    </div>
  )
}

export default ToggleButton