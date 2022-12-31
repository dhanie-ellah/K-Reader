import React from 'react'
// import Heart from '../Assets/Heart.png'
import Star from '../Assets/Star 4.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Book = ({BookCover, Name}) => {
  return (
    <div className="w-[25%] flex flex-col gap-3 text-center md:w-[30%] sm:w-[75%]">
      <img src={BookCover} alt="" />
      {/* <img src={Heart} alt="" className='w-[10%] m-auto cursor-pointer'/> */}
      <FontAwesomeIcon icon={faHeart} size="lg"/>
      <p className="">{Name}</p>
      <div className="flex w-fit m-auto gap-1">
        {/* <img src={Star} alt="" className="cursor-pointer" />
        <img src={Star} alt="" className="cursor-pointer" />
        <img src={Star} alt="" className="cursor-pointer" />
        <img src={Star} alt="" className="cursor-pointer" />
        <img src={Star} alt="" className="cursor-pointer" /> */}
        <FontAwesomeIcon icon={faStar} size="xs" />
        <FontAwesomeIcon icon={faStar} size="xs" />
        <FontAwesomeIcon icon={faStar} size="xs" />
        <FontAwesomeIcon icon={faStar} size="xs" />
        <FontAwesomeIcon icon={faStar} size="xs" />
      </div>
      <button className=" text-xs bg-primary rounded-md text-white px-4 py-2 w-fit m-auto">
        Add to Cart
      </button>
    </div>
  );
}

export default Book