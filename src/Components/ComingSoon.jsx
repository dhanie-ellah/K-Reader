import React from 'react'
import ComingSoonBook from '../Assets/Group 65.png'
import Header from './Header';

const ComingSoon = () => {
  return (
    <div className=" px-[50px] py-[25px] flex gap-[75px] items-center justify-center sm:px-[25px] sm:flex-col sm:gap-[20px]">
      <div className=" w-[25%] sm:w-full">
        <img src={ComingSoonBook} alt="" className=" w-full" />
      </div>
      <div className="flex flex-col gap-5 w-[35%] sm:w-full sm:gap-[10px]">
        <div>
          <Header text="Coming Soon!" />
        </div>
        <p className="text-[14px]">
          Catch up on the lastest and trending books coming soon to the liabary!
        </p>
        <button className="w-fit bg-primary rounded-md text-white px-3 py-2 text-xs">
          Load More
        </button>
      </div>
    </div>
  );
}

export default ComingSoon