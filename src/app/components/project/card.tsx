import React from "react";
import Image from "next/image";
import ButtonR from "./button";
import Carousel from "./carousel";

interface Project {
  id?: number;
  title?: string;
  information?: string;
  image: string[];
  deploy:string;
  repository:string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="w-full z-10">
      {projects.map((project) => (
        <div key={project.id} className=" p-4 rounded flex my-10">
          <div className="bg-[#015560]/50 shadow-[#015560] md:w-full h-auto flex flex-col shadow-neon text-center items-center md:px-2 rounded-ss-3xl rounded-ee-3xl border-2 border-[#015560] ">
            <div className="w-full">
              <h1 className="text-4xl font-bold m-auto p-4">{project.title}</h1>
            </div>
            <div className="flex flex-col xl:flex-row m-auto items-center">
              <div className="md:w-full md:h-full m-auto md:pb-8 z-10">
              <Carousel images={project.image} />
              </div>
              <div className="w-10/12 m-auto md:w-11/12 z-10">
                <p className="w-full m-auto my-5 md:my-10 text-center items-center">
                  {project.information}
                </p>
                <div className=" md:mt-4 space-x-2 md:space-x-6">
                  <ButtonR
                    text="Repositorio"
                    url={project.repository}
                  />
                  <ButtonR
                    text="Deploy"
                    url={project.deploy}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
