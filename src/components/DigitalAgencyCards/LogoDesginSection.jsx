"use client";
import React from "react";
import PrimaryBtn from "../../components/landing_page_components/PrimaryBtns/PrimaryBtn";
// import { Reveal } from "@/utils/Reveal";
import { motion } from "motion/react";
import Link from "next/link";

const LogoDesign = () => {
  return (
    <main
      className="relative overflow-hidden pb-6 text-white md:translate-y-0 md:pb-[15vh]"
      style={{
        backgroundColor: "#040117",
        backgroundSize: "cover",
        borderBottom: "4px solid #363445",
      }}
    >
      {/* Main Content Section */}
      <div className=" container mx-auto px-4 py-16">
        <div
          className="mt-[10rem] flex transform flex-col items-center justify-between gap-8 rounded-xl p-8 transition-transform duration-700 ease-in-out hover:scale-105 md:mt-0 md:translate-y-22 lg:flex-row"
          style={{
            backgroundImage: `url('/images/services_page_images/third-section-img.png')`,
            backgroundSize: "cover",
          }}
        >
          {/* Left Column */}
          <div className="space-y-6 lg:w-[80%]">
            <h2 className="text-2xl font-medium leading-tight md:text-4xl">
              Digital <br /> Branding
            </h2>

            <p className="leading-relaxed text-gray-300">
              Welcome to the hub of digital innovation, where ideas evolve into
              functional intuitive applications that redefine user experiences.
              Our application development services are centered around creating
              robust, scalable solutions while delivering solutions that exceed
              expectations.
            </p>

            <Link href={"/app"}>
              <PrimaryBtn text="Learn More" />
            </Link>
          </div>
        </div>

        {/* Background Text Overlay */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 hidden w-full select-none overflow-hidden text-center text-[10vw] font-bold md:block"
          style={{
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)",
            color: "transparent",
            fontSize: "4vw",
          }}
        >
          App Development
        </div>
      </div>
    </main>
  );
};

export default LogoDesign;
