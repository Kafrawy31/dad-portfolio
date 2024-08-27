import React from "react";

import DotPattern from "../components/DotPattern";
import BoxReveal from "../components/box-reveal";

import pmi from "../../public/pmi.jpg";
import Image from "next/image";
import esyn from "../../public/dad-logos/egyptian-syndicate.jpg";
import usyn from "../../public/dad-logos/uae-engineers-removebg-preview.png";
import upda from "../../public/dad-logos/upda.png";
import cert from "../../public/upda.jpg";

const page = () => {
  return (
    <div
      id="qualifications"
      className="flex flex-col items-center justify-center text-center"
    >
      <div className="border-grad"></div>
      <div className="mt-[3rem]">
        <BoxReveal boxColor={"#14ff72cb"} duration={0.5}>
          <p className="text-3xl font-light italic text-white">
            Qualifications & Awards
            <span className="text-[#14ff72cb]">.</span>
          </p>
        </BoxReveal>
      </div>
      <div className="flex px-8 flex-row mt-6 w-full text-center">
        <div className="flex flex-1 justify-center max-w-[50%] mr-[10rem] ml-[6rem] text-center items-center flex-col">
          <div className="flex flex-row">
            <div className="flex flex-col mr-5">
              <BoxReveal boxColor={"#14ff72cb"} duration={0.8}>
                <p className="text-[1.15rem] text-nowrap mb-[0.3rem] mt-[0.1rem] font-thin italic text-[#14ff72cb]">
                  Project management Professional (PMP) - 2023
                  <span className="text-[#14ff72cb]">.</span>
                </p>
              </BoxReveal>
              <BoxReveal boxColor={"#14ff72cb"} duration={1.6}>
                <Image alt="" src={pmi} width={410}></Image>
              </BoxReveal>
            </div>
            <div className="flex items-center min-w-[10rem] flex-col mb-4">
              <BoxReveal boxColor={"#14ff72cb"}>
                <p className="text-[#14ff72cb] text-[1.25rem]  mb-[0.2rem] text-center font-thin italic">
                  Affiliations
                </p>
              </BoxReveal>
              <div className="bg-white p-6 flex flex-col space-y-6 text-center items-center">
                <BoxReveal boxColor={"#14ff72cb"} duration={0.8}>
                  <p className="text-sm font-light italic text-black">
                    UPDA Grade A architectual engineer
                    <span className="text-">. </span>
                    (Qatar - 2012)
                  </p>
                </BoxReveal>

                <BoxReveal boxColor={"#14ff72cb"} duration={0.8}>
                  <p className="text-sm font-light italic text-black">
                    Member of UAE Society of Engineers{" "}
                    <span className="text-[#14ff72cb]">. </span>
                    (Uae - 2012)
                  </p>
                </BoxReveal>
                <BoxReveal boxColor={"#14ff72cb"} duration={0.8}>
                  <p className="text-sm font-light italic text-black">
                    Member of Egyptian Engineers Syndicate
                    <span className="text-[#14ff72cb]">. </span>
                    (Egypt - 1988)
                  </p>
                </BoxReveal>
                <div className="flex w-[100%] flex-row">
                  <BoxReveal boxColor={"#14ff72cb"} duration={0.3}>
                    <Image alt="" src={upda} width={70}></Image>
                  </BoxReveal>
                  <BoxReveal boxColor={"#14ff72cb"} duration={0.9}>
                    <Image alt="" src={usyn} width={200}></Image>
                  </BoxReveal>
                  <BoxReveal boxColor={"#14ff72cb"} duration={0.6}>
                    <Image alt="" src={esyn} width={80}></Image>
                  </BoxReveal>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <BoxReveal duration={0.8}>
              <p className="text-[1.2rem] font-extralight text-center text-wrap italic text-[#14ff72cb]">
                Competitions & Exhibitions
              </p>
            </BoxReveal>
            <div className="bg-white rounded-md">
              <ul className="list-disc p-6 py-8 text-[1rem] italic font-base">
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
        <div className=" flex flex-col items-center">
          <BoxReveal duration={1.2}>
            <p className="font-thin italic text-2xl text-[#14ff72cb] ">
              UPDA Certificate{" "}
            </p>
          </BoxReveal>
          <BoxReveal duration={2.2}>
            <Image alt="" src={cert} width={360}></Image>
          </BoxReveal>
        </div>
      </div>
      <DotPattern className="-z-10 h-screen bg-neutral-900 opacity-60" />
    </div>
  );
};

export default page;
