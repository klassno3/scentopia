import React from 'react'
import Arrow from '../assets/images/ph_arrow-down-thin.svg'
import  HeroOne from '../assets/images/hero-one.png'
import  HeroTwo from '../assets/images/hero-two.png'
import  HeroThree from '../assets/images/hero-three.png'

export default function Hero() {
  return (
    <div className='md:pt-20 py-10 md:px-8  bg-text-light-gray'>
      <div className="flex flex-col md:flex-row justify-between  md:gap-1 ">

      <div className="flex flex-col gap-5  lg:gap-7 pt-24 md:pt-32 md:w-1/2 items-center md:items-start">
        <div className="flex flex-col gap-2  ">

            <h1 className="font-lobsterTwo text-2xl sm:text-4xl md:text-4xl text-center md:text-left lg:text-6xl">
              Elevate Your Spirit with Victory Scented<span className='text-accentPink-dark'> Fragrances!</span>
        </h1>
        <p className="font-montserrat text-center text-sm md:text-base md:text-left ">Shop now and embrace the sweet smell of victory with Local Face. 
        </p>
        </div>
        <button className=" px-8 py-3 text-base lg:text-xl shadow-xl font-miriamLibre bg-gradient-to-r from-accentPink-dark via-accentPink-medium to-accentPink-light hover:from-accentPink-light hover:to-accentPink-dark  text-white  rounded transition-all duration-500 ease-in-out ">
            Shop Now
        </button>
        <div className="">
          <img src={Arrow} alt="" className="w-20 lg:w-36" />
        </div>  
        </div>
        <div className='flex w-full items-center justify-center  md:relative md:w-1/2'>
          <img src={HeroOne} alt="" className="w-1/3  md:absolute md:w-56 lg:w-72 xl:w-80  md:top-0 md:left-32 lg:-top-12 lg:left-40 xl:left-44 " /> 
          <img src={HeroThree} alt="" className="w-1/3 md:absolute md:w-64 lg:w-72 xl:w-80 md:top-16 md:left-16  lg:left-20 " /> 
          <img src={HeroTwo} alt="" className="w-1/4  md:bottom-0  md:absolute w- md:w-48 lg:w-56 xl:w-64  md:left-0 md:top-44" /> 
          
        
        </div>
        
      </div>
      
    </div>
  )
}
