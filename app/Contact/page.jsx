"use client";
import React, { useState } from "react";
import { FloatingDock } from "../components/floating-dock";

import { ToastContainer, toast } from "react-toastify";
import {
  IconPhone,
  IconMail,
  IconBrandLinkedin,
  IconHome,
  IconInfoCircle,
  IconBriefcase,
  IconBrandWhatsapp,
  IconDeviceLaptop,
  IconBuildingSkyscraper,
  IconCertificate,
} from "@tabler/icons-react";
import DotPattern from "../components/DotPattern";
import Image from "next/image";
const FloatingDockDemo = () => {
  const copyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text).then(() => {
      toast(message);
    });
  };

  const links = [
    {
      title: "Phone",
      href: "#",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: () =>
        copyToClipboard("+97466269522", "Phone number copied to Clipboard!"),
    },
    {
      title: "Email",
      href: "#",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: () =>
        copyToClipboard(
          "khaledalkafrawy@yahoo.com",
          "Email address copied to Clipboard!"
        ),
    },
    {
      title: "Whatsapp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: () =>
        window.open("https://wa.me/97466269522?text=Hello%20Khaled!", "_blank"),
      href: "",
    },

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/khaled-elkafrawy-7039b720/", // Replace with your LinkedIn profile URL
    },
    {
      title: "Me",
      href: "#", // Add a link or '#' if it's just an image
      icon: (
        <Image
          width={200}
          height={200}
          src="/prof-pic.jpg" // Replace with your image path
          alt="Profile="
          className="h-full w-full rounded-full object-cover"
        />
      ),
    },
  ];
  const links2 = [
    {
      title: "Showcase",
      icon: (
        <IconBuildingSkyscraper className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/Projects", // Replace with your actual about section ID or URL
    },
    {
      title: "Skills",
      icon: (
        <IconDeviceLaptop className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/Responsibilities", // Replace with your actual about section ID or URL
    },

    {
      title: "Work Experience",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),

      href: "/Experience", // Replace with your actual projects section ID or URL
    },
    {
      title: "Certificates",
      icon: (
        <IconCertificate className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/Certificates", // Replace with your actual about section ID or URL
    },
    {
      title: "About",
      icon: (
        <IconInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/About", // Replace with your actual about section ID or URL
    },
  ];
  return (
    <div className="flex flex-col text-center items-center justify-center h-screen w-full">
      <p className="text-white font-thin">Contact Links</p>
      <FloatingDock desktopClassName="mb-4" items={links} />
      <p className="text-white font-thin">Navigation Links</p>
      <FloatingDock items={links2} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <DotPattern className="-z-10 h-screen bg-neutral-900 opacity-60" />
    </div>
  );
};

export default FloatingDockDemo;
