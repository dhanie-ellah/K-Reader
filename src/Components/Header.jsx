import React from 'react'

const Header = ({text}) => {
  return (
    <header className="flex items-center gap-1">
      <div className=" h-[35px] w-[3px] bg-secondary"></div>
      <h1 className=" font-[700] text-[20px] text-primary">{text}</h1>
    </header>
  );
}

export default Header