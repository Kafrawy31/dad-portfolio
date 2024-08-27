"use client";

import React from "react";
import BoxReveal from "../components/box-reveal";
import HyperText from "../components/hyper-text";
import DotPattern from "../components/DotPattern";

const LoadingPage = () => {
  return (
    <>
      <div className="flex flex-col text-white min-h-screen min-w-screen justify-evenly items-center text-center">
        <div>
          <HyperText
            text="Welcome to my portfolio"
            className="ml-2 text-2xl"
            animateOnLoad={false}
            delay={1.5}
          />
        </div>
        <div className="flex w-[40%] flex-col items-center">
          <BoxReveal delay={1} duration={1.2}>
            <p className="text-3xl font-thin">About me</p>
          </BoxReveal>
          <BoxReveal delay={1.3} duration={1.6}>
            <p className="text-container-about font-thin text-base">
              I have over 25 years of experience in construction, managing
              prestigious projects in Qatar, UAE, and Egypt, including high-rise
              towers, luxury hotels, malls, and villas. I excel in project
              management, coordination, and 5-star finishing, with strong
              troubleshooting skills and a solid understanding of FIDIC contract
              management. I&apos;ve developed effective procedures for budget
              and schedule control and have extensive experience in
              infrastructure design and quality assurance.
            </p>
          </BoxReveal>
        </div>
        <div className="flex flex-col w-[40%] items-center">
          <BoxReveal duration={1.2} delay={2.6}>
            <p className="font-thin text-3xl">Career objective</p>
          </BoxReveal>
          <BoxReveal className="w-[40%]" delay={2.9} duration={2}>
            <p className="text-container-about font-thin text-base">
              I&apos;m seeking a challenging Project Management role where I can
              apply my 25+ years of experience in leading high-profile
              construction projects across Qatar, UAE, and Egypt.
            </p>
          </BoxReveal>
        </div>
        <div className="flex flex-col w-[40%] items-center">
          <BoxReveal duration={1.2} delay={2.6}>
            <p className="font-thin text-3xl">Education</p>
          </BoxReveal>
          <BoxReveal className="w-[40%]" delay={2.9} duration={2}>
            <p className="text-container-about font-thin text-base">
              I graduated from the University of Cairo with a B.Sc. of
              Architecture - Faculty of Engineering in 1988
            </p>
          </BoxReveal>
        </div>
      </div>
      <DotPattern className="opacity-60 h-[100vh]" />
    </>
  );
};

export default LoadingPage;
