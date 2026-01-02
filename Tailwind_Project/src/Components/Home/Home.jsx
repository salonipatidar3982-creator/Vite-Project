import React from 'react';
import heroImg from "./hero.png";
import TextChange from '../TextChange';
const Home =() => {
    return <div className="text-white flex w-full justify-between items-center p-10 md:p-20">
        <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
            <TextChange/>
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, reiciendis esse quibusdam libero non sit omnis amet tempora, quis temporibus accusamus! Architecto unde debitis error beatae ut perspiciatis labore odio.
        </p>
        <button className="mt-5 md:mt-20 text-white py-0 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Contact Me</button>
        </div>
        <div className="w-350px">
            <img  className="w-full"src={heroImg} alt="Hero"/>
            </div>


        </div>
};

export default Home;