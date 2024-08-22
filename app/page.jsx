"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { TextGenerateEffect } from "./components/text-generate";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./components/text-reveal-card";
import submit from "../public/submit.svg";
import Image from "next/image";
import Link from "next/link";
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
        <div className="flex flex-col justify-center min-h-screen min-w-screen align-center text-center">
          <div className="mb-3">
            <HyperText
              text="Welcome to my portfolio"
              className="ml-2 text-2xl"
              animateOnLoad={false}
              delay={7200}
            />
          </div>
          <TransitionLink
            className="link-btn mt-5 relative px-2 py-1"
            href="Experience"
          >
            <span className="qual-btn">
              {" "}
              My work experience <FontAwesomeIcon icon={faArrowDown} />
            </span>
            <i></i>
          </TransitionLink>
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
          <div className="logo-name">Khaled Elkafrawy</div>
        </div>
      </div>
      <DotPattern className="opacity-60 h-[100vh]" />
    </>
  );
};

export default LoadingPage;
