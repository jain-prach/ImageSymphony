import React from 'react'
import './Header.css';

const Header = () => {

  return (
    <header className="flex flex-col justify-center py-px w-full bg-stone-950 max-md:max-w-full">
      <div className="radial-gradient top-right-corner"></div>
      <div className="radial-gradient bottom-left-corner"></div>
      <section className="flex-container overflow-hidden relative flex-col items-center px-20 py-12 w-full min-h-[868px] stroke-[1px] stroke-white stroke-opacity-10 max-md:px-5 max-md:max-w-full">
        <img 
          loading="lazy" 
          src="assets\Vector.png" 
          alt="decorative vector" 
          className="object-cover absolute inset-0 size-full"
        />
        <h1 className="app_name relative mt-40 text-8xl text-white leading-[80px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Image<br></br>Symphony
        </h1>
        <p className="tagline relative mt-4 text-base tracking-wide leading-3 text-white text-opacity-60 max-md:max-w-full">
          Degrading to learn better
        </p>
        <button
          className="explore_btn relative px-7 py-3 mt-7 mb-44 text-sm text-black italic uppercase whitespace-nowrap bg-stone-300 rounded-full cursor-pointer max-md:px-5 max-md:my-10"
          tabIndex="0">
          <a href="#about">Explore</a>
        </button>
      </section>
    </header>
  )
}

export default Header;
