import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import HackerRoom from '../componenets/HackerRoom';
import CanvasLoader from '../componenets/CanvasLoader';

import { useMediaQuery } from 'react-responsive';
import {calculateSizes} from '../constants/index';
import Target from '../componenets/Target';
import ReactLogo from '../componenets/ReactLogo';
import NarutoModel from '../componenets/NarutoModel';
import HeroCamera from '../componenets/HeroCamera';
import Button from '../componenets/Button';
import Typing from "react-typing-effect";

const Hero = () => {

       
    const isSmall=useMediaQuery({maxWidth:440});
    const isMobile =useMediaQuery({maxWidth:768});
    const isTablet =useMediaQuery({minWidth:768,maxWidth:1024});
    
    const sizes=calculateSizes(isSmall,isMobile,isTablet);
  return (
    <section className="min-h-screen flex flex-col relative">
      {/* Hero Text */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-genralasans">
        <div className="flex flex-col items-center justify-center  bg-black text-white text-center">
      <h1 className="text-4xl font-bold">Welcome to Karthikesh Robotics Pvt. Ltd.<span className="waving-hand">🤚</span></h1>
      <Typing
        text={[
          "Revolutionizing Automation, One Innovation at a Time.",
          "Pioneering the Future of Robotics.",
          "Engineering Excellence | AI & Robotics | Future-Ready Solutions.",
        ]}
        speed={100}
        eraseSpeed={50}
        eraseDelay={2000}
      />
    </div>  
        </p>
        
      </div>

      {/* 3D Model Section */}
      <div className="w-full h-full absolute inset-0 mt-10 ">
        {/* ⬇️ Move the loader outside Suspense */}
        
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            
            <HeroCamera isMobile={isMobile} >
            <HackerRoom 
            // scale={0.07}
             position={sizes.deskPosition} 
             rotation={[0,-Math.PI,0]}
             scale={sizes.deskScale}
            />
            </HeroCamera>
            <group>
              {/* <Target position={sizes.targetPosition}  /> */}
               <ReactLogo position={sizes.reactLogoPosition } scale={0.5} />
               <NarutoModel     position={sizes.narutoPosition } scale={5} rotation={[0.1,0.7,0]}  />

            </group>
            
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls />
            
          </Suspense>
        </Canvas>
        
      </div>

      <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
        <a href="#contact" className='w-fit'>
          <Button name="Let's Connect " isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
