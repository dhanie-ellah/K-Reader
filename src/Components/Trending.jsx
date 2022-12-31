import React from "react";
import Header from "./Header";
import Book from "./Book";
import RonChernow from "../Assets/Ron Chernow.png";
import HistoricalBooks from "../Assets/The Historical Books.png";
import HalfYellowSon from "../Assets/Half Of A Yellow Sun.png";
import Einstein from '../Assets/Albert Einstein.png'
import Encyclopedia from '../Assets/Conscise Encyclopedia Of Scuence & Technology.png'
import LifeOnPlanet from '../Assets/A Life on Our Planet.png'

const Trending = () => {
  return (
    <div className="px-[100px] py-[45px] md:px-[50px] sm:px-[25px]">
      <div className="w-fit m-auto">
        <Header text="Trending" />
      </div>
      <p className=" text-[#806600] font-bold text-sm py-5">History</p>
      <div className="flex items-end justify-between sm:flex-col sm:items-center sm:gap-[50px]">
        <Book BookCover={RonChernow} Name="Ron Chernow" />
        <Book BookCover={HistoricalBooks} Name="The Historical Books" />
        <Book BookCover={HalfYellowSon} Name="Half Of A Yellow Sun" />
      </div>

      <p className=" text-[#806600] font-bold text-sm py-5 sm:py-[25px]">
        Science and Technology
      </p>
      <div className="flex items-end justify-between sm:flex-col sm:items-center sm:gap-[50px]">
        <Book BookCover={Einstein} Name="Albert Einstein" />
        <Book
          BookCover={Encyclopedia}
          Name="Concise Encyclopedia Of Science & Technology"
        />
        <Book BookCover={LifeOnPlanet} Name="A Life on Our Planet" />
      </div>

      <div className="flex justify-center my-[75px]">
        <a
          href=""
          className="bg-primary rounded-md text-white px-5 py-3 text-xs"
        >
          Load More
        </a>
      </div>
    </div>
  );
};

export default Trending;
