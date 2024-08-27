"use client";
import React from "react";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { animatePageIn } from "@/lib/animations";
import TransitionLink from "@/lib/TransitionLink";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();

    const selBtn = document.getElementById("sel-btn");

    if (selBtn) {
      const handleButtonClick = () => {
        selBtn.classList.toggle("active");
        console.log("this button is active");
      };

      selBtn.addEventListener("click", handleButtonClick);

      // Cleanup function to remove event listener when the component unmounts
      return () => {
        selBtn.removeEventListener("click", handleButtonClick);
      };
    }
  }, []);
  return (
    <div>
      <div className="sel-menu">
        <div className="sel-btn" id="sel-btn">
          <p className="font-light ">MENU</p>
        </div>
        <ul className="sel-menu-list">
          <li
            style={{ "--i": 7 } as React.CSSProperties}
            className="sel-option"
          >
            <TransitionLink href="Contact" className="link-btn relative">
              <span className="qual-btn text-xs">Contact me</span>
              <i></i>
            </TransitionLink>
          </li>
          <li
            style={{ "--i": 6 } as React.CSSProperties}
            className="sel-option"
          >
            <TransitionLink className="link-btn relative" href="About">
              <span className="qual-btn text-xs">About me</span>
              <i></i>
            </TransitionLink>
          </li>
          <li
            style={{ "--i": 5 } as React.CSSProperties}
            className="sel-option"
          >
            <TransitionLink className="link-btn relative" href="KeyProjects">
              <span className="qual-btn text-xs">Key projects</span>
              <i></i>
            </TransitionLink>
          </li>
          <li
            style={{ "--i": 4 } as React.CSSProperties}
            className="sel-option"
          >
            <TransitionLink
              className="link-btn relative"
              href="Responsibilities"
            >
              <span className="qual-btn text-xs">Responsibilities</span>
              <i></i>
            </TransitionLink>
          </li>
          <li
            style={{ "--i": 3 } as React.CSSProperties}
            className="sel-option"
          >
            <TransitionLink className="link-btn relative" href="Experience">
              <span className="qual-btn text-xs">Work experience</span>
              <i></i>
            </TransitionLink>
          </li>
          <li
            className="sel-option"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            <TransitionLink className="link-btn relative" href="Projects">
              <span className="qual-btn text-xs">Certficates</span>
              <i></i>
            </TransitionLink>
          </li>

          <li
            className="sel-option"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            <TransitionLink className="link-btn relative" href="Projects">
              <span className="qual-btn text-xs">Showcase</span>
              <i></i>
            </TransitionLink>
          </li>
        </ul>
      </div>

      <svg
        className="fixed top-12  left-2 w-6 z-10"
        id=""
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="#FFFFFF"
          d="M311 86.3c12.3-12.7 12-32.9-.7-45.2s-32.9-12-45.2 .7l-155.2 160L64 249 64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 328 0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-107 64.7-66.7 133 192c10.1 14.5 30 18.1 44.5 8.1s18.1-30 8.1-44.5L174.1 227.4 311 86.3z"
        />
      </svg>
      <svg
        className="fixed z-10 top-12 left-2 w-6"
        id=""
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="#FFFFFF"
          d="M64 32C28.7 32 0 60.7 0 96L0 256 0 416c0 35.3 28.7 64 64 64l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 416l0-128 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 224 64 96l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32z"
        />
      </svg>
      <div
        id="banner-1"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-0 w-1/4"
      ></div>
      <div
        id="banner-2"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-1/4 w-1/4"
      ></div>
      <div
        id="banner-3"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-2/4 w-1/4"
      ></div>
      <div
        id="banner-4"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-3/4 w-1/4"
      ></div>
      {children}
    </div>
  );
}
