import React, { useEffect, useState } from "react";
import BannerImg from '../../assets/banner.jpg'
const Banner = () => {

  const initialTime = 12 * 60 * 60;
  const [timeLeft ,setTimeLeft] = useState(()=>{
    const storeTime = localStorage.getItem('time')

    return storeTime && parseInt(storeTime , 10) > 0 ?
                        parseInt(storeTime ,10) : 
                        initialTime;
  });
  const formatTime = (time)=>{

    useEffect(()=>{
      if(timeLeft <= 0) return

      const timer = setInterval((prev)=>{
        setTimeLeft((prev)=>{
          if(prev <= 1){
            clearInterval(timer)
            localStorage.setItem('time' ,0)
            return 0
          }
          const timeRemaining = prev -1
          localStorage.setItem('time' ,timeRemaining)
          return timeRemaining;
        })
      },1000)
      return ()=> clearInterval(timer)
    },[timeLeft])


    const hours = Math.floor(time /3600)
    const minutes = Math.floor((time % 3600)/60)
    const seconds = Math.floor(time % 60)

    return {
      hours: String(hours).padStart(2 ,'0'),
      minutes: String(minutes).padStart(2 ,'0'),
      seconds: String(seconds).padStart(2 ,'0')
    }; 
  }

  const {hours , minutes , seconds} = formatTime(timeLeft)

  return (
    <section className="bg-contain bg-center bg-no-repeat object-contain min-h-[30vh] max-h-[60vh] mt-[14vh]" 
    style={{backgroundImage: `url(${BannerImg})`}}>
      <div className="h-100 flex flex-col flex-wrap justify-center md:gap-5 gap-2 max-w-[1300px] mx-auto px-5 sm:px-12 ">
        <h1 className="xl:text-9xl lg:text-8xl md:text-6xl sm:text-5xl text-3xl  text-red-500 uppercase font-black sm:font-bold tracking-tight">Big Sale</h1>
        <h2 className="lg:text-4xl text-xl tracking-wide  text-shadow-zinc-800">Up To 50% Off <br />Limited Time Only</h2>
        <div className="font-bold md:text-5xl sm:text-3xl text-2xl text-zinc-800 flex gap-x-3 sm:mt-5 mt-2 items-center">
            <span className="text-black sm:p-3 p-1">{hours}</span>:
            <span className="text-black sm:p-3 p-1">{minutes}</span>:
            <span className="text-black sm:p-3 p-1">{seconds}</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
