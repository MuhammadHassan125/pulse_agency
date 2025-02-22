'use client';
import React from "react";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import { Reveal } from "@/utils/Reveal";
import {motion} from 'motion/react';

const AllInOneSection = () => {
    return (
         <main 
          className="relative pb-6 text-white overflow-hidden md:translate-y-[-10%]" 
           style={{
             backgroundColor: '#040117',
             backgroundSize:'cover',
             borderBottom:'4px solid #363445',
           }}
        >
  
        {/* Main Content Section */}
        <div className="relative container mx-auto px-4 py-16">
            
        <div className="text-center z-10 mx-auto w-auto flex flex-col items-center justify-center">
            <Reveal>
            <p className="text-xl mb-2 sm:mt-20 mt-10">We are experts in</p>

            <h1 className="text-2xl md:text-5xl font-bold tracking-wide">Conversation Rate <br/>Optimiation</h1>
            </Reveal>
          </div>
          <div 
            className="rounded-xl p-8 flex flex-col lg:flex-row gap-8 items-center justify-between transform transition-transform duration-700 ease-in-out hover:scale-105"
            style={{
            backgroundImage: `url('/images/services_page_images/sixsection-img.png')`,
            backgroundSize:'cover',
            marginTop:'15px'
            // backdropFilter: 'blur(30px)',
            }}
          >
            {/* Left Column */}
            <div className="space-y-6 w-full md:w-[40%]">
            <Reveal>
              <h2 className="text-2xl md:text-4xl font-medium leading-tight">
              Boost your  <br/> leads
              </h2>
              </Reveal>
              <Reveal>
              <p className="text-gray-300 leading-relaxed">
              At Pulse, we specialize in Conversion Rate Optimization (CRO) to help e-commerce businesses maximize their sales and revenue. Our tailored CRO strategies are designed to identify barriers in your customer journey, optimize your website performance, and turn casual visitors into loyal customer.
              </p>          
              </Reveal>
              <Reveal>
              <PrimaryBtn text="Learn More" />
              </Reveal>
            </div>
  
            {/* Right Column */}
            <div className="space-y-6 w-full md:w-auto">
            <Reveal>
              <h3 className="text-xl font-semibold pb-2 border-b border-purple-400/30">
              CRM & Lead Catch!
              </h3>
            </Reveal>
              <ul className="space-y-2 text-gray-300">
              <Reveal>
                <li className="flex items-center gap-3">
                Emails & Texts That Are <br/>Hard To Ignore.
                </li>
                </Reveal>
                <Reveal>
                <li className="flex items-center gap-3">
                Smart And Hassel Free <br/>Business Line.
                </li>
                </Reveal>
              </ul>
            </div>
          </div>
       
        {/* Background Text Overlay */}
        <div
          className="absolute bottom-[-10%] left-0 w-full text-[10vw] text-center font-bold pointer-events-none select-none overflow-hidden"
          style={{
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
            color: 'transparent'
          }}
        >
          CRO
        </div>
        </div>
  
       
  
        {/* Purple Glow Effects */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px] -z-10" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full filter blur-[100px] -z-10" />
      </main>
    )
  };

export default AllInOneSection;