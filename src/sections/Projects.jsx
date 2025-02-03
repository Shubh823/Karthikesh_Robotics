import React, { useState } from "react";
import {products} from "../constants";
import NewRobot from "../componenets/NewRobot"; // ✅ Fixed import path

const projectCount = products.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = products[selectedProjectIndex] || {}; // ✅ Avoids errors if empty

  const handleNavigation = (direction) => {
    if (projectCount === 0) return; // ✅ Prevents error when no projects exist

    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20">
      <p className="head-text">Products</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full"> 
        {/* ✅ Fixed 'lg:grid-col-2' to 'lg:grid-cols-2' */}

        {/* Left Side - Project Details */}
        <div className="flex flex-col gap-5 relative sm:p-10 px-5 shadow-2xl shadow-black-200 border-2 border-gray-950">
          {/* Project Spotlight Image */}
          {currentProject.spotlight && (
            <div className="absolute top-0 right-0">
              
            </div>
          )}

          {/* Project Logo */}
          {currentProject.logo && (
            <div className="p-3 backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
              <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
            </div>
          )}

          {/* Project Title & Description */}
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title || "Project Title"}
            </p>
            <p className="text-stone-400 animatedText">
              {currentProject.desc || "Project description not available."}
            </p>
            <p className="text-stone-400 animatedText">
              {currentProject.subdesc || ""}
            </p>
          </div>

          {/* Project Tags (Tech Stack) */}
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags &&
                currentProject.tags.map((tag, index) => (
                  <div key={index} className=" h-15 w-20 gap-3 rounded-full bg-gray-950 flex items-center justify-center">
                    <img className="invert" src={tag.path} alt={tag.name || "Tech logo"} />
                  </div>
                ))}
            </div>

            {/* Live Site Link */}
            {currentProject.href && (
              <a
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 cursor-pointer text-white-600"
              >
                <p>Check Live Site</p>
                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
              </a>
            )}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation("previous")}>
              <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4" />
            </button>
            <button className="arrow-btn" onClick={() => handleNavigation("next")}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Side - 3D Robot Model */}
        <div className="border border-gray-900 rounded-lg h-96 md:h-full flex items-center justify-center">
          
            <NewRobot /> {/* ✅ Displays the 3D robot */}
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
