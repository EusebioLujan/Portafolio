import React from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  information: string;
  image: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="w-full z-10">
      {projects.map((project) => (
        <div key={project.id} className=" p-4 rounded flex my-10">
          <div className="bg-[#015560]/50 shadow-[#015560] md:w-full h-auto flex flex-col shadow-neon text-center items-center md:px-2 rounded-ss-3xl rounded-ee-3xl border-2 border-[#015560]">
            <div className="w-full">
              <h1 className="text-4xl font-bold m-auto p-4">{project.title}</h1>
            </div>
            <div className="flex flex-col xl:flex-row m-auto items-center">
              <div className="md:w-10/12 m-2 md:pb-8 z-50">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  width={200}
                  height={150}
                  className="rounded-t md:w-9/12 m-auto"
                />
              </div>
              <div className="w-10/12 m-auto md:w-11/12 z-50">
                <p className="w-full m-auto my-5 md:my-10 text-center items-center">
                  {project.information}
                </p>
                <div className=" md:mt-4 space-x-2 md:space-x-6">
                  <button className="my-3 bg-textcolorv/80 text-slate-50 font-bold px-2 p-0.5 rounded-md text-center items-center hover:bg-textcolorv hover:text-slate-50 transition duration-1000 md:hover:scale-110">
                    Repositorio
                  </button>
                  <button className=" my-3 bg-textcolorv/80 text-slate-50 font-bold px-2 p-0.5 rounded-md text-center items-center hover:bg-textcolorv hover:text-slate-50 transition duration-1000 md:hover:scale-110">
                    Deploy
                  </button>
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
