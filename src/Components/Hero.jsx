import React from 'react'
import Illustration from '../Assets/illustration.png'

const Hero = () => {
  return (
    <div className=" bg-yellow flex items-center justify-between px-[100px] py-[20px] md:px-[50px] sm:flex-col-reverse sm:gap-[15px] sm:px-[25px]">
      <div className=" w-[40%] flex flex-col gap-[30px] sm:w-full sm:gap-[15px]">
        <h1 className=" text-[22px] text-primary font-[700] sm:text-center sm:text-[18px]">
          Read the Lastest books of your choice by browsing through our liabary.
        </h1>
        <p className=" text-[12px] sm:text-center">
          Carefully packed books, ranging from history to science to all
          categories just for you. Save, share and add to your favourites.
        </p>
        <a
          href=""
          className=" text-xs bg-primary rounded-md px-4 py-2 w-fit text-white sm:m-auto"
        >
          Available Resources
        </a>
      </div>
      <div className=" w-[45%] sm:w-full">
        <img src={Illustration} alt="Hero Illustration" />
      </div>
    </div>
  );
}

export default Hero