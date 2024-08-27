"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import BoxReveal from "./components/box-reveal";
import TransitionLink from "@/lib/TransitionLink";
import HyperText from "./components/hyper-text";
import DotPattern from "./components/DotPattern";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoadingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [startTextAnimation, setStartTextAnimation] = useState(false);
  useEffect(() => {
    // Logo name animation
    gsap.fromTo(
      ".logo-name",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 4,
        delay: 1.5,
      }
    );

    // Loading page fade-out animation
    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        duration: 1.5,
        delay: 5.5,
        onComplete: () => {
          setIsLoaded(true);
          gsap.to(".container", { opacity: 1, duration: 1 });
          setTimeout(() => {
            setStartTextAnimation(true);
          }, 2000); // 500ms delay, adjust as needed
        },
      }
    );
  }, []);

  return (
    <>
      <div className={`container ${isLoaded ? "loaded" : ""}`}>
        <div className="flex flex-col  min-h-screen min-w-screen justify-evenly items-center text-center">
          <div>
            <HyperText
              text="Welcome to my portfolio"
              className="ml-2 text-2xl"
              animateOnLoad={false}
              delay={7200}
            />
          </div>
          <div className="flex w-[40%] flex-col items-center">
            <BoxReveal delay={8} duration={1.2}>
              <p className="text-3xl font-thin">About me</p>
            </BoxReveal>
            <BoxReveal delay={8.3} duration={1.6}>
              <p className="text-container-about font-thin text-base">
                I have over 25 years of experience in construction, managing
                prestigious projects in Qatar, UAE, and Egypt, including
                high-rise towers, luxury hotels, malls, and villas. I excel in
                project management, coordination, and 5-star finishing, with
                strong troubleshooting skills and a solid understanding of FIDIC
                contract management. I&apos;ve developed effective procedures
                for budget and schedule control and have extensive experience in
                infrastructure design and quality assurance.
              </p>
            </BoxReveal>
          </div>
          <div className="flex flex-col w-[40%] justify-evenly  items-center">
            <BoxReveal duration={1.2} delay={9.3}>
              <p className="font-thin text-3xl">Career objective</p>
            </BoxReveal>
            <BoxReveal className="w-[40%]" delay={9.6} duration={2}>
              <p className="text-container-about font-thin text-base">
                I&apos;m seeking a challenging Project Management role where I
                can apply my 25+ years of experience in leading high-profile
                construction projects across Qatar, UAE, and Egypt.
              </p>
            </BoxReveal>

            <BoxReveal duration={1.2} delay={10.6}>
              <p className="font-thin text-3xl mt-[2rem]">Education</p>
            </BoxReveal>
            <BoxReveal className="w-[40%]" delay={2.9} duration={2}>
              <p className="text-container-about font-thin text-base">
                I graduated from the University of Cairo with a B.Sc. of
                Architecture - Faculty of Engineering in 1988
              </p>
            </BoxReveal>
          </div>
        </div>
      </div>
      <div className={`loading-page ${isLoaded ? "hidden" : ""}`}>
        <div className="flex flex-row  pl-10">
          <svg
            className="fixed z-10"
            id="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M311 86.3c12.3-12.7 12-32.9-.7-45.2s-32.9-12-45.2 .7l-155.2 160L64 249 64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 328 0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-107 64.7-66.7 133 192c10.1 14.5 30 18.1 44.5 8.1s18.1-30 8.1-44.5L174.1 227.4 311 86.3z" />
          </svg>
          <svg
            id="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M64 32C28.7 32 0 60.7 0 96L0 256 0 416c0 35.3 28.7 64 64 64l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 416l0-128 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 224 64 96l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32z" />
          </svg>
        </div>
        <div className="name-container">
          <div className="logo-name font-light">Khaled Elkafrawy</div>
        </div>
      </div>
      <DotPattern className="opacity-60 h-[100vh]" />
    </>
  );
};

export default LoadingPage;
