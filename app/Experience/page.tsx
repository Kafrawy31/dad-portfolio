import Image from "next/image";
import React from "react";
import { Timeline } from "../components/timeline";
import DotPattern from "../components/DotPattern";
import escher from "../../public/dad-logos/escher.jpg";
import dara from "../../public/dad-logos/dara.jpg";
import dimensions from "../../public/dad-logos/dimensions.jpg";
import adapt from "../../public/dad-logos/adapt.jpg";
import gtz from "../../public/dad-logos/gtz.jpg";
import BoxReveal from "../components/box-reveal"; // Assuming BoxReveal component is available

const page = () => {
  const data = [
    {
      title: "August 2024",
      content: (
        <div className="flex flex-col text-white">
          <div className="flex flex-row mt-[6rem]">
            <div className="flex flex-col">
              <BoxReveal duration={1.0}>
                <Image alt="" src={dara} width={150} />
              </BoxReveal>
            </div>
            <div className="ml-6">
              <BoxReveal duration={1.2}>
                <p className="text-white text-2xl font-thin">
                  Dara Engineering Consultants
                </p>
              </BoxReveal>
              <BoxReveal duration={1.3}>
                <p className="font-thin text-lg">Senior Manager</p>
              </BoxReveal>
              <BoxReveal duration={1.4}>
                <p className="font-thin text-md">Doha, Qatar</p>
              </BoxReveal>
              <BoxReveal duration={1.5}>
                <p className="font-thin text-xs tracking-widest mt-2">
                  09/2011 - 08/2024
                </p>
              </BoxReveal>
            </div>
          </div>
          <BoxReveal duration={1.6}>
            <p className="text-2xl font-thin mt-4">
              There I managed many projects
            </p>
          </BoxReveal>
          <BoxReveal duration={1.7}>
            <p className="font-thin mt-2 text-xl">These include:</p>
          </BoxReveal>
          <ul className="font-extralight ml-12 *:mt-4 list-disc">
            <BoxReveal duration={1.8}>
              <li>
                <strong>The Sheikhs Beach palace </strong>, which is one of the
                most luxurious places in the Middle East
              </li>
            </BoxReveal>
            <BoxReveal duration={1.9}>
              <li>
                The Sheikhs new <strong>Wajbah Palace</strong>
              </li>
            </BoxReveal>
            <BoxReveal duration={2.0}>
              <li>
                The <strong>Pearl Mosque</strong>, which has become a massive
                tourist attraction
              </li>
            </BoxReveal>
            <BoxReveal duration={2.1}>
              <li>
                The <strong>Laverna compound</strong>, which compounded 165
                villas{" "}
              </li>
            </BoxReveal>
            <BoxReveal duration={2.2}>
              <li>
                <strong>Doha Mall</strong>, the largest mall in Qatar during
                construction
              </li>
            </BoxReveal>
            <BoxReveal duration={2.3}>
              <li>
                The <strong>Masjid package project</strong> that comprised of 12
                mosques across Qatar
              </li>
            </BoxReveal>
            <BoxReveal duration={2.4}>
              <li>
                The <strong>Barzan mall</strong> in Khuraitiyat
              </li>
            </BoxReveal>
            <BoxReveal duration={2.5}>
              <li>The Aziziya Development Compound</li>
            </BoxReveal>
            <BoxReveal duration={2.6}>
              <li>
                The <strong>Ramadan Tent</strong> for the Sheikh, becoming the
                most luxurious permanent tent in the Middle East
              </li>
            </BoxReveal>
          </ul>
        </div>
      ),
    },
    {
      title: "September 2011",
      content: (
        <div className="flex flex-col text-white">
          <div className="flex flex-row mt-[6rem]">
            <div className="flex flex-col">
              <BoxReveal duration={1.0}>
                <Image alt="" src={dimensions} width={150} />
              </BoxReveal>
            </div>
            <div className="ml-6">
              <BoxReveal duration={1.2}>
                <p className="text-white text-2xl font-thin">
                  Dimensions Engineering Consultants
                </p>
              </BoxReveal>
              <BoxReveal duration={1.3}>
                <p className="font-thin text-lg">Manager</p>
              </BoxReveal>
              <BoxReveal duration={1.4}>
                <p className="font-thin text-md">
                  UAE - Sharjah , Dubai & Fujairah
                </p>
              </BoxReveal>
              <BoxReveal duration={1.5}>
                <p className="font-thin text-xs tracking-widest mt-2">
                  06/2006 - 09/2011
                </p>
              </BoxReveal>
            </div>
          </div>
          <BoxReveal duration={1.6}>
            <p className="text-2xl font-thin mt-4">
              There I managed many projects across the United Arab Emirates
            </p>
          </BoxReveal>
          <BoxReveal duration={1.7}>
            <p className="text-xl font-thin mt-4">
              I traveled across the country and managed many projects.
            </p>
          </BoxReveal>
          <BoxReveal duration={1.8}>
            <p className="font-thin mt-2 text-xl">In Dubai I worked on:</p>
          </BoxReveal>
          <ul className="font-extralight ml-12 *:mt-4 list-disc">
            <BoxReveal duration={1.9}>
              <li>
                <strong>The Nassima Twin Towers</strong>, which also included
                the
                <strong> Japanese Airlines Hotel.</strong> This project cost AED
                1.5 Billion and included many facilities
              </li>
            </BoxReveal>
            <BoxReveal duration={2.0}>
              <li>
                The <strong>Four Seasons accommodation</strong> building at the
                Jumeirah Village Club
              </li>
            </BoxReveal>
            <BoxReveal duration={2.1}>
              <li>
                In addition to the projects I managed, I was assigned the
                emergency task of supervising the interior works and MEP works
                of Dimensions&apos; headquarters. I was assigned a certificate
                of appreciation for speedy accomplishment and outstanding
                quality.
              </li>
            </BoxReveal>
          </ul>
          <BoxReveal duration={2.2}>
            <p className="font-thin mt-5 text-xl">In Sharjah I worked on:</p>
          </BoxReveal>
          <ul className="font-extralight ml-12 *:mt-4 list-disc">
            <BoxReveal duration={2.3}>
              <li>
                <strong>The Abbico Tower</strong>, which accommodated 333
                residential apartments & a health club
              </li>
            </BoxReveal>
            <BoxReveal duration={2.4}>
              <li>
                <strong>The Malak Tower</strong>, the highest building in
                Sharjah
              </li>
            </BoxReveal>
          </ul>
          <BoxReveal duration={2.5}>
            <p className="font-thin mt-5 text-xl">
              Finally in Fujairah I worked on:
            </p>
          </BoxReveal>
          <ul className="font-extralight ml-12 *:mt-4 list-disc">
            <BoxReveal duration={2.6}>
              <li>
                <strong>The Iberotel Miramar Resort</strong>, a 5-star hotel
                compounding 323 hotel rooms and suites
              </li>
            </BoxReveal>
            <BoxReveal duration={2.7}>
              <li>
                <strong>Tower of Chamber of Commerce and Industry</strong>
              </li>
            </BoxReveal>
          </ul>
        </div>
      ),
    },
    {
      title: "June 2006",
      content: (
        <div className="flex flex-col text-white">
          <div className="flex flex-row mt-[6rem]">
            <div className="flex flex-col">
              <BoxReveal duration={1.0}>
                <Image src={adapt} width={220} height={200} alt={""} />
              </BoxReveal>
            </div>
            <div className="ml-6">
              <BoxReveal duration={1.2}>
                <p className="text-white text-2xl font-thin">
                  ADAPT Architecture Consultants
                </p>
              </BoxReveal>
              <BoxReveal duration={1.3}>
                <p className="font-thin text-lg">Manager</p>
              </BoxReveal>
              <BoxReveal duration={1.4}>
                <p className="font-thin text-md">Cairo, Egypt</p>
              </BoxReveal>
              <BoxReveal duration={1.5}>
                <p className="font-thin text-xs tracking-widest mt-2">
                  12/1988 - 06/2006
                </p>
              </BoxReveal>
            </div>
          </div>
          <BoxReveal duration={1.6}>
            <p className="text-2xl font-thin mt-4">
              There I participated in designing, preparing bills of terms and
              specifications & evaluating bids of:
            </p>
          </BoxReveal>
          <ul className="font-extralight ml-12 *:mt-4 list-disc">
            <BoxReveal duration={1.7}>
              <li>
                <strong>Expo 2000</strong>, the Egyptian booth in Hannover,
                Germany
              </li>
            </BoxReveal>
            <BoxReveal duration={1.8}>
              <li>
                The <strong>Romel Museum</strong> in Marah Matrouh
              </li>
            </BoxReveal>
            <BoxReveal duration={1.9}>
              <li>
                The administration offices of <strong>Mantrac</strong> in
                Mohandiseen
              </li>
            </BoxReveal>
            <BoxReveal duration={2.0}>
              <li>
                The <strong>Saint Catherine preservative</strong> visitors
                center in Saint Catherine
              </li>
            </BoxReveal>
          </ul>
          <BoxReveal duration={2.1}>
            <p className="font-thin mt-2 text-xl">
              I also supervised the finishing works of:
            </p>
          </BoxReveal>
          <ul className="font-extralight ml-12 *:mt-4 list-disc">
            <BoxReveal duration={2.2}>
              <li>
                <strong>Diwan Library</strong> in New Cairo
              </li>
            </BoxReveal>
            <BoxReveal duration={2.3}>
              <li>
                <strong>Sonata Spa</strong> in Ein El Sokhna
              </li>
            </BoxReveal>
            <BoxReveal duration={2.4}>
              <li>
                The <strong>Madina Recreational and Commercial Center</strong>{" "}
                in Hurghada
              </li>
            </BoxReveal>
            <BoxReveal duration={2.5}>
              <li>
                The <strong>Dunshawy Museum</strong> in Elshohada
              </li>
            </BoxReveal>
            <BoxReveal duration={2.6}>
              <li>
                Six villas in Dokki, Birqash, Sun Set, Sheraton, Downtown, and
                Ataba
              </li>
            </BoxReveal>
          </ul>
          <BoxReveal duration={2.7}>
            <p className="font-thin mt-2 text-xl">
              Furthermore, I participated in upgrading:
            </p>
          </BoxReveal>
          <ul className="font-extralight ml-12 *:mt-4 list-disc">
            <BoxReveal duration={2.8}>
              <li>
                <strong>Al Amer</strong> and <strong>Al Teret Zeneen</strong>{" "}
                streets in Beaulac El Dakrour in collaboration with the locals
                and GTZ.
              </li>
            </BoxReveal>
            <BoxReveal duration={2.9}>
              <li>
                Manshiyet Naser district, namely the{" "}
                <strong>Culture center</strong>, the{" "}
                <strong>Youth center</strong>, the{" "}
                <strong>Gamal Abdel Nasser School</strong> and the{" "}
                <strong>ElMasaken Street</strong>
              </li>
            </BoxReveal>
          </ul>
          <BoxReveal duration={2.3}>
            <p className="text-2xl font-thin mt-4">
              While working with ADAPT, I was nominated by them to GTZ for a
              contract from 01-01-2003 to 31-12-2003. My role was to supervise
              the financing of solid waste management in Aswan, as part of
              Project No. 00.2230.1-002.00, under Contract No. 2/03, in the
              capacity of a freelance expert.
            </p>
          </BoxReveal>
        </div>
      ),
    },
    {
      title: "December 1998",
      content: (
        <div className="flex flex-col text-white">
          <div className="flex flex-row mt-[6rem]">
            <div className="flex flex-col">
              <BoxReveal duration={1.0}>
                <Image alt="" src={escher} width={200} />
              </BoxReveal>
            </div>
            <div className="ml-6">
              <BoxReveal duration={1.2}>
                <p className="text-white text-2xl font-thin">
                  Soceite Escher S.A
                </p>
              </BoxReveal>
              <BoxReveal duration={1.3}>
                <p className="font-thin text-lg">Site Manager</p>
              </BoxReveal>
              <BoxReveal duration={1.4}>
                <p className="font-thin text-md">Cairo, Egypt</p>
              </BoxReveal>
              <BoxReveal duration={1.5}>
                <p className="font-thin text-xs tracking-widest mt-2">
                  02/1996 - 12/1998
                </p>
              </BoxReveal>
            </div>
          </div>
          <BoxReveal duration={1.6}>
            <p className="text-2xl font-thin mt-4 mb-2">
              I worked there for 2 years & supervised the finishing works and
              marble installations in:
            </p>
          </BoxReveal>
          <ul className="font-extralight ml-12 *:mt-4 list-disc">
            <BoxReveal duration={1.7}>
              <li>
                <strong>Robinson & Sheraton Abu Suma hotels </strong> at Safaga,
                Egypt
              </li>
            </BoxReveal>
            <BoxReveal duration={1.8}>
              <li>
                The <strong>Oberoi</strong> in Hurghada
              </li>
            </BoxReveal>
            <BoxReveal duration={1.9}>
              <li>
                The <strong>Hyatt Regency</strong> at Sharm ElSheikh, Egypt
              </li>
            </BoxReveal>
            <BoxReveal duration={2.0}>
              <li>
                The <strong>First Tower</strong> at Giza, Egypt
              </li>
            </BoxReveal>
            <BoxReveal duration={2.1}>
              <li>
                <strong>Sonesta facade</strong>, Cairo, Egypt
              </li>
            </BoxReveal>
            <BoxReveal duration={2.2}>
              <li>A villa at the Haram, Egypt</li>
            </BoxReveal>
          </ul>
        </div>
      ),
    },
    {
      title: "February 1996",
      content: (
        <div className="flex flex-col text-white">
          <div className="flex flex-row mt-[6rem]">
            <div className="flex flex-col">
              <BoxReveal duration={1.0}>
                <Image src={adapt} width={220} alt={""} />
              </BoxReveal>
            </div>
            <div className="ml-6">
              <BoxReveal duration={1.2}>
                <p className="text-white text-2xl font-thin">
                  ADAPT Architecture Consultants
                </p>
              </BoxReveal>
              <BoxReveal duration={1.3}>
                <p className="font-thin text-lg">Designer & Site Engineer.</p>
              </BoxReveal>
              <BoxReveal duration={1.4}>
                <p className="font-thin text-md">Cairo, Egypt</p>
              </BoxReveal>
              <BoxReveal duration={1.5}>
                <p className="font-thin text-xs tracking-widest mt-2">
                  11/1993 - 02/1996
                </p>
              </BoxReveal>
            </div>
          </div>
          <BoxReveal duration={1.6}>
            <p className="text-2xl font-thin mt-4">
              There I handled a handful of projects
            </p>
          </BoxReveal>
          <BoxReveal duration={1.7}>
            <p className="font-thin mt-2 text-xl">
              I also participated in designing and drawing:
            </p>
          </BoxReveal>
          <ul className="font-extralight ml-12 *:mt-4 list-disc">
            <BoxReveal duration={1.8}>
              <li>
                The <strong>Dunshway Museum</strong>
              </li>
            </BoxReveal>
            <BoxReveal duration={1.9}>
              <li>
                The <strong>Kalaway Resort</strong>
              </li>
            </BoxReveal>
            <BoxReveal duration={2.0}>
              <li>
                <strong>Sheikha Fatma&apos;</strong> villa in Dubai and another
                villa in the UAE
              </li>
            </BoxReveal>
            <BoxReveal duration={2.1}>
              <li>
                The <strong>American Express Bank</strong> at Port Said
              </li>
            </BoxReveal>
          </ul>
          <BoxReveal duration={2.2}>
            <p className="font-thin mt-2 text-xl">
              I also participated alongside a team that prepared the studies of
              the primary urban upgrading for the following districts:
            </p>
          </BoxReveal>
          <ul className="font-extralight ml-12 *:mt-4 list-disc">
            <BoxReveal duration={2.3}>
              <li>Manshiyat Naser, Cairo</li>
            </BoxReveal>
            <BoxReveal duration={2.4}>
              <li>Ganabiya, Tanta</li>
            </BoxReveal>
            <BoxReveal duration={2.5}>
              <li>Munira Elgharbiya and Beaulac Eldakrour, Giza</li>
            </BoxReveal>
          </ul>
        </div>
      ),
    },
    {
      title: "November 1993",
      content: (
        <div className="flex flex-col text-white">
          <div className="flex flex-row mt-[6rem]">
            <div className="flex flex-col">
              <BoxReveal duration={1.0}>
                <Image alt="" src={gtz} width={150} />
              </BoxReveal>
            </div>
            <div className="ml-6">
              <BoxReveal duration={1.2}>
                <p className="text-white text-2xl font-thin">
                  GTZ - German Technical Cooperation
                </p>
              </BoxReveal>
              <BoxReveal duration={1.3}>
                <p className="font-thin text-lg">Designer & Site Engineer.</p>
              </BoxReveal>
              <BoxReveal duration={1.4}>
                <p className="font-thin text-md">Aswan, Egypt</p>
              </BoxReveal>
              <BoxReveal duration={1.5}>
                <p className="font-thin text-xs tracking-widest mt-2">
                  03/1992 - 11/1993
                </p>
              </BoxReveal>
            </div>
          </div>
          <BoxReveal duration={1.6}>
            <p className="text-2xl font-thin mt-4">There I started my career</p>
          </BoxReveal>
          <BoxReveal duration={1.7}>
            <p className="font-thin text-md mt-4">
              Urban and Utilities Upgrading of Aswan&apos;s Tabia and Naseriya
              Districts Projects; participated in designing and supervising the
              setup of an ideal neighborhood in east Nasriya, the area
              encompasses Nasr Club, the utility building, and charitable
              societies; prepared the urban upgrading studies for the following
              districts: Gharb Seheil, Sadat Rd., Eltabia, and Elguzaira;
              prepared the primary study for Beatrice Lomomba Housing Project;
              designed and prepared the feasibility studies, did the shop
              drawings and supervised the construction of the Model House ( a
              Nubian house built with local materials on stages according to
              financial abilities); participated in studies of modifying the
              borderlines of Aswan province.
            </p>
          </BoxReveal>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
      <DotPattern className="-z-10 h-[920vh] bg-neutral-900 opacity-60" />
    </div>
  );
};

export default page;
