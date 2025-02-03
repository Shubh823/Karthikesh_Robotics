import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../componenets/Button'

const About = () => {
     const [hasCopied, setHasCopied] = useState(false);
    const handleCopy=()=>{
        navigator.clipboard.writeText('shubham82p@gmail.com');
        setHasCopied(true);
        setTimeout(()=>{
            setHasCopied(false);
        },1000)

    }
  return (
    <section className='c-space my-20'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="public\assets\profile.jpg" alt="gird-1" className=' rounded w-full sm:h-[276px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>Karthikesh J G – CEO & Founde</p>
                        <p className='grid-subtext'>A passionate innovator and technology leader, Karthikesh J G is the driving force behind Karthikesh Robotics Pvt. Ltd. With a vision to revolutionize robotics and automation, he leads the company towards cutting-edge advancements in AI, automation, and intelligent systems.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container  '>
                    <img src="public\assets\teamphoto.jpg"  alt="grid2"  className=' sm:w-[276px]  h-full content-center object-fill' />
                    <div>
                        <p className='grid-headtext'>Meet Our Team</p>
                        <p className='grid-subtext'>At Karthikesh Robotics Pvt. Ltd., our dynamic team of engineers, designers, and innovators work together to develop cutting-edge robotics and AI solutions. Driven by a passion for technology, we aim to transform industries and create a smarter future.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                        <Globe 
                        height={326}
                        width={326}
                        backgroundColor='rgba(0,0,0,0)'
                        backgroundImageOpacity={0.5}
                        showAtmosphere={true}
                        showGraticules={true}
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        labelsData={[{ lat:18.51957000, lng: 73.85535000, label: 'pune India', color: 'red',text:"I'm here!",size:40 }]}
                          />
                    </div>
                    <div>
                        <p className='grid-headtext'>🌍 Global Innovation at Your Fingertips </p>
                        <p className='grid-subtext'>Our 3D globe represents our vision of a connected world, where technology transcends boundaries. At Karthikesh Robotics Pvt. Ltd., we are constantly innovating to create intelligent solutions that have a global impact, shaping the future of robotics and AI across the world.</p>
                        <Button name="Connect with us" isBeam containerClass="w-full mt-10" />
                    </div>
                </div>
            </div>
            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container'>
                   
                    <div>
                        <p className='text-3xl mb-7 font-bold text-white'>About Karthikesh Robotics Pvt. Ltd.</p>
                        <p className='text-lg mt-6 text-stone-400'>At Karthikesh Robotics Pvt. Ltd., we are dedicated to pioneering the future of robotics and AI. Our company specializes in creating intelligent, automated systems that solve complex problems and improve the way industries operate. Founded with a vision to push the boundaries of technology, we strive to deliver innovative solutions that make the world smarter, safer, and more connected.
Our team is committed to quality, creativity, and excellence, ensuring that every product we develop meets the highest standards. With a focus on automation, AI, and advanced robotics, we continue to lead the way in transforming industries and driving technological advancement globally.</p>
                    </div>
                </div>
            </div>

            <div className='xl:col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="assets/grid4.png" alt="grid4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
                    <div className='space-y-2 '>
                        <p className="grid-subtext text-center">Contact Us</p>
                        <div className='copy-container' onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg':'assets/copy.svg'} alt="copy" />
                            <p className='lg:text-xl md:text-xl text-gray_gradient text-white'> karthikeshrobotics@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
