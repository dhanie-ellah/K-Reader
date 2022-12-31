import React from 'react'
import Book from './Book'
import Header from './Header'
import RonChernow from "../Assets/Ron Chernow.png";
import HistoricalBooks from "../Assets/The Historical Books.png";
import HalfYellowSon from "../Assets/Half Of A Yellow Sun.png";

const NewCategory = () => {
  return (
    <div className="px-[100px] py-[45px] md:px-[50px] sm:px-[25px]">
      <div className="w-fit m-auto py-[45px]">
        <Header text="New Categories" />
      </div>

      <div className="flex items-end justify-between sm:flex-col sm:items-center sm:gap-[50px]">
        <Book BookCover={RonChernow} Name="Ron Chernow" />
        <Book BookCover={HistoricalBooks} Name="The Historical Books" />
        <Book BookCover={HalfYellowSon} Name="Half Of A Yellow Sun" />
      </div>
    </div>
  );
}

export default NewCategory