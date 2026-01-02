import React from 'react';
import heroImg from "../../assets/hero2_0.png.webp";
import {IoArrowForward} from 'react-icons/io5';
const About=()=> {
  return(
    <div id="About"
    className="text-white overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
        <div>
            <h2 className="text-2xl md:text-4xl font-bold">About</h2>
            <div className="md:flex flex-wrap flex-col md:flex-row items-center">
                <img className="md:h-80" src={heroImg} alt="AboutImg"/>
                <ul>
                
                    <li className="flex gap-3 py-4">
                        <IoArrowForward size={30} className="mt-1"/>
                        <span className="w-full md:w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontend developer</h1>
                            <p className="text-sm md:text-md leading-tight">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab numquam reiciendis deleniti corporis eveniet quis, adipisci nisi accusamus velit veritatis recusandae, consectetur voluptatum fugit ipsum nesciunt accusantium. Enim, qui accusantium?</p>
                        </span>
                    
                    </li>

                    <li className="flex gap-3 py-4">
                        <IoArrowForward size={30} className="mt-1"/>
                        <span className="w-full md:w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Backend Developer</h1>
                            <p className="text-sm md:text-md leading-tight">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab numquam reiciendis deleniti corporis eveniet quis, adipisci nisi accusamus velit veritatis recusandae, consectetur voluptatum fugit ipsum nesciunt accusantium. Enim, qui accusantium?</p>
                        </span>
                    </li>

                    <li className="flex gap-3 py-4">
                        <IoArrowForward size={30} className="mt-1"/>
                        <span className="w-full md:w-96">
                            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Database developer</h1>
                            <p className="text-sm md:text-md leading-tight">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab numquam reiciendis deleniti corporis eveniet quis, adipisci nisi accusamus velit veritatis recusandae, consectetur voluptatum fugit ipsum nesciunt accusantium. Enim, qui accusantium?</p>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

  );
  
};

export default About; 

