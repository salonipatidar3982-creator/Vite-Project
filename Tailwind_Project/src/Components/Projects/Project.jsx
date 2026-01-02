import React from 'react'
import ProjectCard from './ProjectCard';

const  Project=()=>{
  return (
    <div id="Projects" className="p-10 md:p-24 text-width">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
        <div className="py-12 px-8 flex flex-col text-white items -center gap-5">
            <ProjectCard 
            title="BLOGGING WEBSITE"
            main="this is a blogging website created in next js used some component librarythis is a blogging website created in next js used some component librarythis is a blogging website created in next js used some component librarythis is a blogging website created in next js used some component librarythis is a blogging website created in next js used some component librarythis is a blogging website created in next js used some component library"/>
            <ProjectCard 
            title="YOTUBER CLONE"
            main="this is a blogging website created in next js used some component librarythis is a blogging website created in next js used some component librarythis is a blogging website created in next js used some component library this is a blogging website created in next js used some component librarythis is a blogging website created in next js used some component librarythis is a blogging website created in next js used some component library"/>
            <ProjectCard 
            title="NETFLIX CLONE"
            main="this is a blogging website created in next js used some component librarythis is a blogging website created in next js used some component librarythis is a blogging website created in next js used some component library this is a blogging website created in next js used some component librarythis is a blogging website created in next js used some component librarythis is a blogging website created in next js used some component library"/>
        </div>
    </div>
  )
}

export default Project;