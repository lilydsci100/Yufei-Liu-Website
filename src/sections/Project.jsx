import React from "react";
import { Element } from "react-scroll";
import { projects } from "../constants/index.jsx";

const Project = () => {
  return (
    <section>
      <Element name="project" className="relative">
        {/*标题*/}
        <div className="container relative z-2 py-28">
          <div>
            <h3 className="h3 max-w-640 max-lg:max-w-md mb-7 text-p4">
              {" "}
              My Projects
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              Here are some of my projects I've been working with.
            </p>
          </div>
        </div>

        {/* list*/}
        <div className="relative flex flex-wrap justify-center gap-6 px-12 pb-12 ">
          {projects.map((item) => (
            <div className="min-h-[16em] w-[18em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
              <div>
                <h1 className="text-xl font-medium leading-tight">
                  {item.title}
                </h1>
                <p className="text-[0.85em] whitespace-pre-line mt-5">
                  {item.description}
                </p>
              </div>

              {item.detail === "1" ? (
                <button
                  className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
                  onClick={() => window.open(item.link, "_blank")}
                >
                  <p>For more details</p>
                  <svg
                    className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                    stroke="currentColor"
                    stroke-width="1"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    >
                      {item.link}
                    </path>
                  </svg>
                </button>
              ) : null}
            </div>
          ))}
        </div>
      </Element>
    </section>
  );
};
export default Project;
