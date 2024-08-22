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
} from "@tabler/icons-react";
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
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/khaled-elkafrawy-7039b720/", // Replace with your LinkedIn profile URL
    },
    {
      title: "About",
      icon: (
        <IconInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/Experience", // Replace with your actual about section ID or URL
    },
    {
      title: "Projects",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/Projects", // Replace with your actual projects section ID or URL
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

  return (
    <div className="flex items-center justify-center h-screen w-full relative">
      <FloatingDock items={links} />
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
    </div>
  );
};

export default FloatingDockDemo;
