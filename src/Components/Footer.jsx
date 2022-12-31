import React from 'react'
import FooterLogo from '../Assets/K-Reader (1).png'
import Phone from '../Assets/phone.png'
import Mail from '../Assets/mail.png'
import Location from '../Assets/location.png'

const footer = () => {
  return (
    <div className=" bg-primary px-[100px] py-[55px] text-white text-[14px] flex justify-between md:px-[50px] sm:flex-col sm:gap-[25px]">
      <div className=" w-[35%] sm:w-full">
        <img src={FooterLogo} alt="" className=" pb-[16px]" />
        <p>
          K-Reader provides you with the Lastest books of your choice by
          browsing through our liabary. Carefully packed books, raging from
          history to science to all categories just for you. Save, share and add
          to your favourites.
        </p>
      </div>

      <div className="w-fit flex flex-col gap-[10px]">
        <h2 className=" font-[700] text-[14px] text-secondary">Trending</h2>
        <a href="/" className=" text-white text-[12px]">
          History
        </a>
        <a href="/" className=" text-white text-[12px]">
          Philosophy
        </a>
        <a href="/" className=" text-white text-[12px]">
          Leadership
        </a>
        <a href="/" className=" text-white text-[12px]">
          Arts
        </a>
        <a href="/" className=" text-white text-[12px]">
          Law
        </a>
        <a href="/" className=" text-white text-[12px]">
          Musical
        </a>
        <a href="/" className=" text-white text-[12px]">
          Drama
        </a>
      </div>

      <div className="w-20%">
        <h2 className=" font-[700] text-[14px] text-secondary">Contact Us</h2>
        <div className=" flex items-center gap-[5px] my-3">
          <img src={Phone} alt="" />
          <p className=" text-[12px]">+234 678 940 61</p>
        </div>
        <div className=" flex items-center gap-[5px] my-3">
          <img src={Mail} alt="" />
          <p className=" text-[12px]">abiola@gmail.com</p>
        </div>
        <div className=" flex items-center gap-[5px] my-3">
          <img src={Location} alt="" />
          <p className=" text-[12px]">
            St. Francis close Brigham Street London.
          </p>
        </div>
      </div>
    </div>
  );
}

export default footer