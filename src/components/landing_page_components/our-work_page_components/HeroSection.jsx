"use client";
import React, { useState, useRef } from "react";
import Navbar from "@/components/landing_page_components/Navbar";
import { Box } from "@mui/material";
import Image from "next/image";
import { Reveal } from "@/utils/Reveal";
import Link from "next/link";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import Tabs from '../../MyTabs/Tabs';
import Footer from "@/components/layout/Footer";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const imageSectionRef = useRef(null);

  const handleTabChange = (index) => {
    if (index >= 0 && index < industries.length) {
      setActiveTab(index);
      imageSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Invalid tab index:", index);
    }
  };

  const industries = [
    {
      name: "Real Estate",
      images: [
        "/images/our-work_page_images/img (1).png",
        "/images/our-work_page_images/img (2).png",
      ],
    },
    {
      name: "Government",
      images: [
        "/images/our-work_page_images/img (3).png",
        "/images/our-work_page_images/img (4).png",
      ],
    },
    {
      name: "Education",
      images: [
        "/images/our-work_page_images/img (5).png",
        "/images/our-work_page_images/img (6).png",
      ],
    },
    {
      name: "Corporate",
      images: [
        "/images/our-work_page_images/img (1).png",
        "/images/our-work_page_images/img (2).png",
      ],
    },
    {
      name: "Health",
      images: [
        "/images/our-work_page_images/img (3).png",
        "/images/our-work_page_images/img (4).png",
      ],
    },
    {
      name: "Fashion",
      images: ["/images/fashion1.png", "/images/fashion2.png"],
    },
    {
      name: "Ecommerce",
      images: ["/images/ecommerce1.png", "/images/ecommerce2.png"],
    },
    {
      name: "Branding Website",
      images: ["/images/branding1.png", "/images/branding2.png"],
    },
  ];

  return (
    <>
      <main
        style={{
          backgroundImage: "url('/images/our-work_page_images/our-work.png')",
          backgroundSize: "cover",
        }}
        className=" md:pb-[150px]"
      >
        <Navbar />
        <div className="relative mx-auto flex h-[80vh] max-w-[1200px] flex-row items-center justify-center md:h-[100vh]">
          {/* <div className="w-[100%] flex-col px-6 md:px-0 absolute z-20">
            <div className="mb-2 flex w-auto items-center gap-1">
              <Image
                src="/images/services_page_images/blue-dot.png"
                alt="blue-dot"
                width={20}
                height={20}
              />
              <p>Our Portfolio</p>
            </div>

            <div className="flex-col md:flex-row flex-wrap items-center gap-6 justify-center md:justify-start">
              <div>
              <Reveal>
                <h2 className="w-auto text-xl font-bold leading-tight text-white md:text-5xl">
                  Explore All Industries
                </h2>
              </Reveal>
              </div>

              <div className="md:flex flex-wrap my-8 md:mb-0 gap-10 md:gap-6 overflow-x-auto">
  {industries.map((industry, index) => (
    <h4
      key={index}
      className={`w-auto cursor-pointer text-lg font-medium leading-tight md:text-3xl ${
        activeTab === index ? "text-white" : "text-[#7C7C7C]"
      } flex-shrink-0`} // Prevent shrinking on smaller screens
      onClick={() => handleTabChange(index)}
    >
      {industry.name}
    </h4>
  ))}
</div>

            </div>
          </div> */}

        <div className="z-10 flex flex-col items-center md:translate-y-[-55px]">
            {/* Service heading */}
            <div className="mb-2 flex items-center justify-center gap-1">
              <Image
                src="/images/services_page_images/blue-dot.png"
                alt="blue-dot"
                width={20}
                height={20}
              />
              <p>Our Portfolio</p>
            </div>

            {/* Heading main */}
            <Reveal>
              <h2
                className="text-3xl font-bold capitalize text-white md:text-5xl text-center"
                style={{ lineHeight: "1.2" }}
              >
                Explore All Industries
              </h2>
            </Reveal>

            <Reveal>
              <p className="mx-auto mt-2 w-[80%] text-center text-gray-200 md:w-[45%]">
              Explore our portfolio, where creativity meets innovation. As a top designing agency, we create stunning, user-friendly designs that bring your ideas to life and elevate your brand.
              </p>
            </Reveal>
          </div>
        </div>
      </main>

      {/* Images Section */}
      <main className="relative mb-20 w-full z-0 md:-mt-[0px]" ref={imageSectionRef}>
        <div
          style={{
            backgroundImage: "url('/images/services_page_images/circle.png/')",
            backgroundSize: "cover",
            // transform: "translateY(-50%)",
          }}
          className="h-[30vh] md:h-[70vh] transform translate-y-[-50%] md:translate-y-[-100%]"
        />
        <div
          className="absolute top-0 z-10 flex w-full flex-col items-center justify-center px-4 md:-top-14 md:px-0"
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="z-10 text-center transform translate-y-[12vh] md:translate-y-0">
            <Reveal>
              <h1 className="text-xl font-bold tracking-wide md:text-4xl">
                Our Work Your Inspiration
              </h1>
            </Reveal>
          </div>

          {/* <div className="mx-auto mt-6 flex w-full flex-col items-center justify-between overflow-hidden md:mb-12 md:mt-22 md:w-[90%] md:flex-row lg:w-[1200px]">
            {industries[activeTab].images.map((image, index) => (
              <div className="w-full" key={index}>
                <div className="relative mb-8 h-[200px] w-full transform transition-transform duration-700 ease-in-out hover:scale-105 md:mb-0 md:h-[400px] md:w-[95%]">
                  <Link href={"/work-details"}>
                    <Image
                      src={image}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                      alt={`Industry Image ${index + 1}`}
                    />
                  </Link>
                </div>

                <div className="mt-6">
                  <Reveal>
                    <h4 className="text-xl font-semibold tracking-wide">
                      Project Name
                    </h4>
                  </Reveal>
                  <Reveal>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-4">
                        {["Design", "Development", "SEO"].map((tag, index) => (
                          <div
                            key={index}
                            className="mb-2 flex w-auto items-center gap-1"
                          >
                            <Image
                              src="/images/services_page_images/blue-dot.png"
                              alt="blue-dot"
                              width={20}
                              height={20}
                            />
                            <p>{tag}</p>
                          </div>
                        ))}
                      </div>
                      <Link href={"/work-details"}>
                        <PrimaryBtn text={"View Case Study"} />
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </main>

      <div className="mt-[-22%] z-30 relative md:translate-y-[-10rem]">
      <Tabs/>
      </div>

      <Footer />

    </>
  );
};

export default HeroSection;
