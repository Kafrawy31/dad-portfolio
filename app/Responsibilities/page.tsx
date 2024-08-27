"use client";
import React from "react";

import TransitionLink from "@/lib/TransitionLink";
import DotPattern from "../components/DotPattern";
import HyperText from "../components/hyper-text";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "../components/canvas-reveal-effect";

const page = () => {
  return (
    <div>
      <div className="items-center justify-center h-screen flex flex-col">
        <HyperText
          duration={3.0}
          className="text-3xl text-white font-thin mb-6"
          text="Responsibilities & Professional Strengths"
        ></HyperText>
        <div className="flex flex-row space-x-5 px-3 w-full justify-evenly ">
          <Card
            subtitle1="Managing the construction of:"
            icon={<AceternityIcon order="Industry Expertise" />}
            list={[
              "High-rise & horizontal buildings",
              "Luxury residences",
              "Hotels, Malls, Palaces, Resorts",
              "Project planning & time scheduling",
              "QA/QC implementation",
            ]}
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
            icon={<AceternityIcon order="Management" />}
            list={[
              "Project budgets & cost control",
              "Schedule management",
              "Contract documents",
              "Team supervision",
              "Client communication & reporting",
              "Risk assessment & mitigation",
              "Project handovers & documentation",
            ]}
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
            icon={<AceternityIcon order="Co-ordination" />}
            list={[
              "Effective communication",
              "Coordination with clients, designers, & contractors",
              "Quality assurance & control",
              "Technical support & leadership",
              "Decision-making",
            ]}
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
            icon={<AceternityIcon order="Business" />}
            list={[
              "Client relations & stakeholder engagement",
              "Contract management & FIDIC compliance",
              "Contractual obligations & disputes",
              "Funding issues & solutions",
              "Site problem resolution",
            ]}
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
            icon={<AceternityIcon order="Computer Skills & Langages" />}
            list={[
              "AutoCAD, Excel, Word, PowerPoint",
              "Outlook, Photoshop, Power BI",
              "Arabic - Native",
              "English - Proficient",
            ]}
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
      ></div>
      <DotPattern className="opacity-50 h-[100vh]" />
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
  list,
}: {
  title?: string;
  icon: React.ReactNode;
  subtitle1?: string;
  subtitle2?: string;
  description1?: string;
  description2?: string;
  children?: React.ReactNode;
  list?: string[]; // Accepts an array of strings
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border rounded-sm border-white/[0.4] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 h-[30rem] relative"
    >
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
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-center dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2
          style={{ color: "#ffffff" }}
          className="dark:text-white text-sm text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {subtitle1}
        </h2>
        <h2
          style={{ color: "#ffffff" }}
          className="dark:text-white text-sm text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-normal group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {description1}
        </h2>
        <h2
          style={{ color: "#ffffff" }}
          className="dark:text-white text-sm text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {subtitle2}
        </h2>
        <h3
          style={{ color: "#ffffff" }}
          className="dark:text-white text-sm text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-normal group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {description2}
        </h3>
        {list && (
          <ul className="list-disc pl-5 text-white dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10  mt-4 font-normal group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#14ff72cb_0%,#ffffff_50%,#14ff72cb_100%)]" />
        <span className="inline-flex h-full w-full text-nowrap cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 font-thin  text-white backdrop-blur-3xl text-lg">
          {order}
        </span>
      </button>
    </div>
  );
};
