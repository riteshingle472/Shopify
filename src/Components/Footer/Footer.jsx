import React from 'react'
import { RiArrowRightWideLine } from 'react-icons/ri';
import Image from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-zinc-100">
      <div className="flex flex-wrap max-w-[1400px] mx-auto px-10 py-20 gap-y-12">
        <div className="flex-1 basis-[300px] md:basis-[350px] pr-3">
            <div className='flex h-[45px] gap-2'>
                <a href="#" className='text-3xl font-semibold text-shadow-zinc-800'>Shopify</a>
                <div className='h-full text-center bg-zinc-200 p-1 rounded-full'>
                    <img src={Image} className=' h-full object-contain'/>
                </div>
            </div>
            <p className="text-zinc-600 mt-6 max-w-[300px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit..</p>
            <p className="text-zinc-500 mt-6">2025 &copy; All Rights Reserved </p>
        </div>
        
        <ul className='flex-1 pr-7'>
            <li><h4 className="font-bold text-zinc-800 text-2xl">Company</h4></li>
            <li className="mt-6"><a href="#" className="hover:text-orange-500  text-zinc-800">About</a></li>
            <li className="mt-6"><a href="#" className="hover:text-orange-500  text-zinc-800">FAQ's</a></li>
        </ul>
        <ul className='flex-1 pr-7'>
            <li><h4 className="font-bold text-zinc-800 text-2xl">Support</h4></li>
            <li className="mt-6"><a href="#" className="hover:text-orange-500  text-zinc-800">Support Center</a></li>
            <li className="mt-6"><a href="#" className="hover:text-orange-500  text-zinc-800">Feedback</a></li>
            <li className="mt-6"><a href="#" className="hover:text-orange-500  text-zinc-800">Contact Us'</a></li>
        </ul>
        <div className="flex-1 pr-7">
            <h5 className="font-bold text-zinc-800 text-2xl">Stay Connected</h5>
            <p className="text-zinc-600 mt-6">Lorem ipsum, dolor sit amet consectetur<br/> adipisicing elit. In, aliquid.</p>
            <div className="bg-white p-1 rounded-lg mt-6 flex">
                <input type="email" id="email" name="email" autoComplete="off" placeholder="Email address" className="h-[5vh] pl-4 flex-1 focus:outline-none" />
                <button className="bg-gradient-to-b from-blue-600 to-blue-600 rounded-lg text-white text-3xl p-1 hover:to-blue-700 cursor-pointer"><RiArrowRightWideLine /></button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
