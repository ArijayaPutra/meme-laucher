import React, { useState, useEffect } from 'react'
import gey from '../assets/img/gey.jpg'
import geyy from '../assets/sound/gey.mp3'
import { motion } from "framer-motion"
import { Switch } from '@mui/material'

const Gey = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);

  };

  useEffect(() => {
    const audio = new Audio(geyy);
    audio.loop = checked;
    if (!checked) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play();
    }
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [checked]);
  

  const handleClick = () => {
    const audio = new Audio(geyy); 
    audio.play();
  };

  return (
    <div className='flex flex-col gap-2 py-2 justify-center items-center w-32 aspect-square shadow-md'>
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='flex w-3/4 aspect-square bg-black rounded-lg overflow-hidden hover:outline outline-4 outline-offset-0 outline-red-500 '
        onClick={handleClick}
      >
        <img src={gey} alt='Gey' className='object-cover w-full h-full'/>
      </motion.button>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </div>
  )
}

export default Gey
