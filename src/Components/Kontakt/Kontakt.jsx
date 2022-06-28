import React from 'react'

import Facebook from "./assets/Facebook.png";
import Github from "./assets/Github.png";
import Discord from "./assets/Discord.png";

const Kontakt = () => {
  return (
    <div className='pl-12'>
        <div className='text-white text-3xl md:text-6xl text-center mt-20'>Kontakt do mnie 📲</div>
        <div className='text-white text-2xl md:text-4xl md:text-left text-center flex justify-start'><img className='w-10' src={Discord} alt="Discord" />Klapek#5951</div>
        <div className='text-white text-2xl md:text-4xl md:text-left text-center flex justify-start'><img className='w-10' src={Facebook} alt="facebook" />Kacper Pelc</div>
        <div className='text-white text-2xl md:text-4xl md:text-left text-center flex justify-start'><img className='w-10' src={Github} alt="Github" />Kacper-pelc</div>
    </div>
  )
}

export default Kontakt