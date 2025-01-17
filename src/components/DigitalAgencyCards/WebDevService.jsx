'use client';
import React from "react";
// import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import PrimaryBtn from "../landing_page_components/PrimaryBtns/PrimaryBtn";
import { Reveal } from "@/utils/Reveal";
import {motion} from 'motion/react';
import Link from "next/link";

const WebDevService = () => {
    return (
      <main className="relative w-full pb-[30rem] md:pb-0 ">
        <div className="h-[18vh] md:h-[26rem]"/>
        {/* Content Section */}
        <div className="translate-y-[-15%] md:translate-y-0 absolute md:top-0 z-10 flex w-full flex-col items-center justify-center"
          style={{
            // backgroundColor: '#040117',
            backgroundSize: 'cover',
            // borderBottom: '4px solid #363445',
          }}
        >

          {/* Main Content Section */}
          <div className="relative container md:mx-auto md:px-4 md:py-16">
          {/* Background Image with Hover Effect */}
            <div 
             className=" p-2 md:p-8 flex flex-col lg:flex-row gap-8 items-center justify-between transform transition-transform duration-700 ease-in-out hover:scale-105"
             style={{
                backgroundImage: `url('/images/services_page_images/second-section-img.png')`,
                backgroundSize: 'cover',
              }}
            >
              {/* Left Column */}
              <div className="space-y-6 w-full md:w-[40%]">
                <Reveal>
                  <h2 className="text-2xl md:text-5xl font-semibold pb-2 ">
                    Web <br /> Development
                  </h2>
                </Reveal>
                <Reveal>
                  <p className="text-gray-300 leading-relaxed text-2xl">
                    Every decision we make needs to answer the million dollar question: how will this benefit our partner is goal best? We work to develop solutions. Step into our digital workshop, where innovative ideas converge with technical prowess to build bespoke online experiences.           
                  </p>
                </Reveal>
                <Reveal>
                  <Link href={"/web-development"}>
                  <PrimaryBtn text="Learn More" />
                  </Link>
                </Reveal>
              </div>

              {/* Right Column */}
              <div className="space-y-6w-full md::w-[30%]">
                <Reveal>
                <h3 className="text-xl font-semibold pb-2 border-b border-purple-400/30">
                  Tailored Solutions
                </h3>
                </Reveal>
                <ul className="space-y-2 text-gray-300">
                <Reveal>
                  <li className="flex items-center gap-3">Cutting-Edge Technology</li>
                  </Reveal>
                  <Reveal>
                  <li className="flex items-center gap-3">User -Centric Design</li>
                  </Reveal>
                  <Reveal>
                  <li className="flex items-center gap-3">SEO Optimization</li>
                  </Reveal>
                  <Reveal>
                  <li className="flex items-center gap-3">Continuous Evolution</li>
                  </Reveal>
                </ul>
              </div>
            </div>
        
            {/* Background Text Overlay */}
            <div
              className="hidden md:block absolute pb-6 bottom-[-10%] left-0 w-full text-[8vw] text-center font-bold pointer-events-none select-none overflow-hidden"
              style={{
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
                color: 'transparent'
              }}
            >
              Web Development
            </div>
          </div>

          {/* Purple Glow Effects */}
          {/* <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px] -z-10" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full filter blur-[100px] -z-10" /> */}
        </div>
      </main>
    );
};

export default WebDevService;