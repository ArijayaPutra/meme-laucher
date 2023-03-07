import React, { useState } from 'react';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';
import Wutdehel from '../components/wutdehel';
import Sirene from '../components/siren';
import Rock from '../components/Rock';
import Waduh from '../components/Waduh';
import Kodok from '../components/Kodok';
import Tolol from '../components/Tolol';
import Kaget from '../components/Kaget';
import Bohong from '../components/Bohong';
import Gey from '../components/Gey';
import Samsung from '../components/Samsung';
import Bonk from '../components/Bonk';
import Opet from '../components/Opet';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <button
        className='absolute top-4 left-4 rounded-full bg-green-500 dark:bg-white py-4 px-4'
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <MdDarkMode className='rotate' color='green' size='1em' /> : <MdOutlineLightMode className='rotate' color='white' size='1em' />}
      </button>
      <div className='flex h-screen justify-center items-center bg-white dark:bg-green-500'>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-4 mt-16 m-auto'>
          <Wutdehel />
          <Sirene />
          <Rock />
          <Waduh />
          <Kodok />
          <Tolol />
          <Kaget />
          <Bohong />
          <Gey />
          <Samsung />
          <Bonk />
          <Opet />
        </div>
      </div>
    </div>
  );
};

export default Home;
