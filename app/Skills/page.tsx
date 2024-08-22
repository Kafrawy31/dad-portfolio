"use client";
import React from "react";
import PageWrapperUp from "../page-wrapper-y";
import TransitionLink from "@/lib/TransitionLink";
import DotPattern from "../components/DotPattern";
import BoxReveal from "../components/box-reveal";

import { AnimatePresence, motion } from "framer-motion";
import HyperText from "../components/hyper-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown, faLaptop } from "@fortawesome/free-solid-svg-icons";
import pmi from "../../public/pmi.jpg";
import Image from "next/image";
import esyn from "../../public/dad-logos/egyptian-syndicate.jpg";
import usyn from "../../public/dad-logos/uae-engineers-removebg-preview.png";
import upda from "../../public/dad-logos/upda.png";
import { CanvasRevealEffect } from "../components/canvas-reveal-effect";
import cert from "../../public/upda.jpg";

const page = () => {
  const scrollToNextSection = (section: string) => {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
  };

  return (
    <div className="text-3xl flex bg-neutral-900 flex-col min-h-[200vh] ">
      <div className="flex flex-col text-center justify-center items-center">
        <HyperText
          className="text-4xl font-bold text-white mt-[20rem]"
          text="Qualifications, Awards & Skills"
        />
        <button onClick={() => scrollToNextSection("qualifications")}>
          <FontAwesomeIcon
            icon={faCircleArrowDown}
            className="mt-2"
            style={{ color: "#14ff72cb" }}
          />
        </button>
      </div>
      <div
        id="qualifications"
        className="mt-[20rem] flex flex-col items-center justify-center text-center"
      >
        <div className="mt-[5rem]">
          <BoxReveal boxColor={"#14ff72cb"} duration={0.5}>
            <p className="text-[3.0rem] font-semibold italic text-white">
              Qualifications & Awards
              <span className="text-[#14ff72cb]">.</span>
            </p>
          </BoxReveal>
        </div>
        <div className="flex px-4 flex-row space-x-10 mt-8 w-full text-center">
          <div className="flex-1">
            <BoxReveal boxColor={"#14ff72cb"} duration={0.8}>
              <p className="text-[1.2rem] font-semibold italic text-[#14ff72cb]">
                Project management Professional (PMP) - 2023
                <span className="text-[#14ff72cb]">.</span>
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#14ff72cb"} duration={1.6}>
              <Image alt="" src={pmi} width={476}></Image>
            </BoxReveal>
          </div>

          <div className="flex flex-1 items-center flex-col">
            <BoxReveal boxColor={"#14ff72cb"}>
              <p className="text-[#14ff72cb] text-[1.4rem] text-center font-semibold italic">
                Affiliations
              </p>
            </BoxReveal>
            <div className="bg-white rounded-md p-4 py-[18px] flex flex-col space-y-10 text-center items-center">
              <BoxReveal boxColor={"#14ff72cb"} duration={0.8}>
                <p className="text-[1rem] font-semibold italic text-black">
                  UPDA Grade A architectual engineer
                  <span className="text-">. </span>
                  (Qatar - 2012)
                </p>
              </BoxReveal>

              <BoxReveal boxColor={"#14ff72cb"} duration={0.8}>
                <p className="text-[1rem] font-semibold italic text-black">
                  Member of UAE Society of Engineers{" "}
                  <span className="text-[#14ff72cb]">. </span>
                  (Uae - 2012)
                </p>
              </BoxReveal>
              <BoxReveal boxColor={"#14ff72cb"} duration={0.8}>
                <p className="text-[1rem] font-semibold italic text-black">
                  Member of Egyptian Engineers Syndicate
                  <span className="text-[#14ff72cb]">. </span>
                  (Egypt - 1988)
                </p>
              </BoxReveal>
              <div className="flex w-[100%] flex-row">
                <BoxReveal boxColor={"#14ff72cb"} duration={0.3}>
                  <Image alt="" src={upda} width={90}></Image>
                </BoxReveal>
                <BoxReveal boxColor={"#14ff72cb"} duration={0.9}>
                  <Image alt="" src={usyn} width={260}></Image>
                </BoxReveal>
                <BoxReveal boxColor={"#14ff72cb"} duration={0.6}>
                  <Image alt="" src={esyn} width={90}></Image>
                </BoxReveal>
              </div>
            </div>
            <BoxReveal duration={1.2}>
              <p className="font-light italic text-2xl text-[#14ff72cb] mt-6">
                UPDA Certificate{" "}
              </p>
            </BoxReveal>
            <BoxReveal duration={2.2}>
              <Image alt="" src={cert}></Image>
            </BoxReveal>
          </div>
          <div className="flex flex-1 flex-col items-center text-center">
            <BoxReveal duration={0.8}>
              <p className="text-[1.2rem] font-semibold text-center text-wrap italic text-[#14ff72cb]">
                Competitions & Exhibitions
              </p>
            </BoxReveal>
            <div className="bg-white rounded-md">
              <ul className="list-disc p-6 py-8 text-[1rem] italic font-semibold">
                <li className="">
                  <BoxReveal duration={0.3}>
                    <p>
                      Won the first prize, together with ADAPT team, for
                      designing Kalawy Spa in Safaga.
                    </p>
                  </BoxReveal>
                </li>

                <li className="">
                  <BoxReveal duration={1.2}>
                    <p>
                      Prepared, together with ADAPT team, a presentation of the
                      best architectural projects in Egypt for Dubai Conference
                      and Istanbul Housing Conference.
                    </p>
                  </BoxReveal>
                </li>

                <li className="">
                  <BoxReveal duration={0.6}>
                    <p>
                      Organized, in collaboration with the Ministry of Youth and
                      Sports, an exhibition for sports activities in Aswan.
                    </p>
                  </BoxReveal>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6">
          {" "}
          <button onClick={() => scrollToNextSection("skills")}>
            <FontAwesomeIcon
              icon={faCircleArrowDown}
              className="mt-2"
              style={{ color: "#14ff72cb" }}
            />
          </button>
        </div>
      </div>
      <div className="mt-[70rem] items-center flex flex-col">
        <BoxReveal>
          <p className="text-4xl mb-[2rem] font-bold text-white"> Skills </p>
        </BoxReveal>
        <div className="flex flex-row space-x-5 px-3 w-full justify-evenly ">
          <Card
            subtitle1="Managing the construction of:"
            description1="High rise & horizontal buildings, Luxury residences, hotels, malls, palaces & resorts"
            icon={<AceternityIcon order="Industry Expertise" />}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-neutral-800"
              colors={[
                [0, 100, 0], // Dark green
                [144, 238, 144], // Light green
              ]}
              dotSize={2}
            />
          </Card>
          <Card
            subtitle1="Experience in managing:"
            description1="Project budgets - timing & program - documentation - supervision & project handing overs"
            icon={<AceternityIcon order="Management" />}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-neutral-400"
              colors={[
                [0, 100, 0], // Dark green
                [144, 238, 144], // Light green
              ]}
              dotSize={2}
            />
          </Card>
          <Card
            subtitle1="Co-ordination skills:"
            description1="Effective communication & co-rdination - quality reviews & assurance - creative trouble shooting - leadership - decision making"
            icon={<AceternityIcon order="Co-ordination" />}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-neutral-800"
              colors={[
                [0, 100, 0], // Dark green
                [144, 238, 144], // Light green
              ]}
              dotSize={2}
            />
          </Card>

          <Card
            subtitle1="Dealt with:"
            description1="Client relations - Stakeholder engagement - Contract management (FIDIC) - Conctractual obligations - Funding problems & solutions"
            icon={<AceternityIcon order="Business" />}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-neutral-400"
              colors={[
                [0, 100, 0], // Dark green
                [144, 238, 144], // Light green
              ]}
              dotSize={2}
            />
          </Card>

          <Card
            subtitle1="Proficient in:"
            description1="AutoCAD - Excel - Word - Powerpoint - Outlook - Photoshop - Power BI"
            icon={<AceternityIcon order="Computer Skills" />}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-neutral-800"
              colors={[
                [0, 100, 0], // Dark green
                [144, 238, 144], // Light green
              ]}
              dotSize={2}
            />
          </Card>
        </div>
      </div>
      <div
        id="skills"
        className="flex flex-col mt-5 justify-center items-center"
      >
        <BoxReveal duration={1.1}>
          <TransitionLink
            className="link-btn text-center justify-center items-center flex relative w-[15rem] "
            href="Projects"
          >
            <span className="py-3 px-3 qual-btn text-xs">Key Projects</span>
            <i></i>
          </TransitionLink>
        </BoxReveal>
      </div>
      <DotPattern className="opacity-50 h-[530vh]" />
    </div>
  );
};

export default page;

const Card = ({
  title,
  icon,
  children,
  description1,
  description2,
  subtitle1,
  subtitle2,
}: {
  title?: string;
  icon: React.ReactNode;
  subtitle1?: string;
  subtitle2?: string;
  description1: string;
  description2?: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border rounded-sm  border-white/[0.4] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-center dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2
          style={{ color: "e4ccff" }}
          className="dark:text-white text-sm text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {subtitle1}
        </h2>
        <h2
          style={{ color: "e4ccff" }}
          className="dark:text-white text-sm text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-normal group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {description1}
        </h2>
        <h2
          style={{ color: "e4ccff" }}
          className="dark:text-white text-sm text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {subtitle2}
        </h2>
        <h3
          style={{ color: "e4ccff" }}
          className="dark:text-white text-sm text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-normal group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {description2}
        </h3>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#14ff72cb_0%,#ffffff_50%,#14ff72cb_100%)]" />
        <span className="inline-flex h-full w-full text-nowrap cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 font-bold  text-white backdrop-blur-3xl text-xl">
          {order}
        </span>
      </button>
    </div>
  );
};
