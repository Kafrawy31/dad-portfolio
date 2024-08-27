"use client";
import React from "react";
import { GlareCard } from "../components/glare-card";
import DotPattern from "../components/DotPattern";
import HyperText from "../components/hyper-text";
import BoxReveal from "../components/box-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
const Page = () => {
  const scrollToNextSection = (section: string) => {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      // Calculate the offset to scroll the target to the middle of the viewport
      const offsetPosition =
        targetSection.offsetTop -
        window.innerHeight / 2 +
        targetSection.offsetHeight / 2;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <div className="flex flex-col h-screen justify-center items-center w-screen mt-10">
        <HyperText text="Key Projects" className="text-white text-2xl" />
        <button onClick={() => scrollToNextSection("HighRise")}>
          <FontAwesomeIcon
            icon={faCircleArrowDown}
            className="mt-2"
            style={{ color: "#14ff72cb" }}
            size="2x"
          />
        </button>
      </div>
      <div id="HighRise" className="flex flex-col justify-between items-center">
        <BoxReveal duration={1.5}>
          <p className="text-white mb-8 text-3xl">A - High Rise</p>
        </BoxReveal>
        <div className="flex flex-row w-screen text-white justify-around">
          <div className="flex nassima-info flex-row flex-1 justify-evenly border-r border-white ">
            <div className="">
              <BoxReveal duration={0.7}>
                <p className="font-extralight border-b mb-3 text-2xl">
                  1 - Nassima Towers, Dubai
                </p>
              </BoxReveal>
              <BoxReveal duration={1.2}>
                <p>
                  Height: <span> 270m </span>
                </p>
              </BoxReveal>
              <BoxReveal duration={1.0}>
                <p>
                  Floors: <span> 66 </span>
                </p>
              </BoxReveal>
              <BoxReveal duration={1.5}>
                <p>
                  Cost: <span>1.5 Billion AED</span>
                </p>
              </BoxReveal>
              <BoxReveal duration={1.3}>
                <p>
                  Designer: <span>M/S BRT (Germany)</span>
                </p>
              </BoxReveal>
              <BoxReveal duration={1.8}>
                <p>
                  Interior Designer: <span>M/S HBA (UAE)</span>
                </p>
              </BoxReveal>
              <BoxReveal duration={2.0}>
                <p>
                  Owner <span>Acico</span>
                </p>
              </BoxReveal>
            </div>
            <div>
              <BoxReveal duration={0.8}>
                <p className="font-extralight text-2xl border-b mb-3">
                  Includes:
                </p>
              </BoxReveal>
              <BoxReveal duration={1.0}>
                <ul className="list-disc ml-6">
                  <li>Japaense Airlines</li>
                  <li>
                    <strong>119</strong> Residential apartments &{" "}
                    <strong>66 </strong>offices
                  </li>
                </ul>
              </BoxReveal>
              <BoxReveal duration={1.4}>
                <p className="ml-4">15 Floors with:</p>
              </BoxReveal>
              <BoxReveal duration={2.0}>
                <ul className="list-disc ml-12">
                  <li>Restaurants</li>
                  <li>Swimming Pools</li>
                  <li>Executive Lounge</li>
                  <li>Nightclub</li>
                  <li>Lobby & Reception</li>
                  <li>2 Basement floors</li>
                  <li>4 Mechanical Floors</li>
                </ul>
              </BoxReveal>
            </div>
          </div>
          <div className="flex-1 abbico-info flex flex-row justify-evenly">
            <div>
              <BoxReveal duration={1.5}>
                <p className="text-2xl font-extralight border-b mb-3">
                  2 - ABBICO Tower, Sharjah
                </p>
              </BoxReveal>
              <BoxReveal duration={1.1}>
                <p>
                  Height: <span> 186m</span>
                </p>
              </BoxReveal>
              <BoxReveal duration={1.6}>
                <p>
                  Floors: <span>50</span>
                </p>
              </BoxReveal>
              <BoxReveal duration={2.0}>
                <p>
                  Cost: <span>370M AED</span>
                </p>
              </BoxReveal>
            </div>
            <div>
              <BoxReveal duration={1.3}>
                <p className="text-2xl font-extralight border-b mb-3">
                  Components
                </p>
              </BoxReveal>
              <BoxReveal duration={1.7}>
                <ul className="ml-6 list-disc">
                  <li>
                    <strong>333 </strong>Residential Apartments
                  </li>
                  <li>Health club</li>
                  <li>Helopad</li>
                  <li>Basement</li>
                </ul>
              </BoxReveal>
            </div>
          </div>
        </div>

        <button
          className="mt-[5rem]"
          onClick={() => scrollToNextSection("Resorts")}
        >
          <FontAwesomeIcon
            icon={faCircleArrowDown}
            className="mt-2"
            style={{ color: "#14ff72cb" }}
            size="2x"
          />
        </button>
      </div>

      <div
        id="Resorts"
        className="text-white min-h-[15rem] flex flex-col items-center justify-evenly text-center mt-[30rem]"
      >
        <BoxReveal duration={1.0}>
          <p className="text-4xl font-extralight border-white mb-4">
            B - Resorts
          </p>
        </BoxReveal>
        <BoxReveal duration={1.2}>
          <p className="font-extralight mb-2 border-b w-fit text-2xl">
            IBEROTEL MIRAMAR RESORT, Aqqa, Fujairah
          </p>
        </BoxReveal>
        <BoxReveal duration={1.4}>
          <p className="font-extralight">
            <strong>5</strong> star hotel
          </p>
        </BoxReveal>
        <BoxReveal duration={1.6}>
          <p className="font-extralight">
            <strong>323</strong> Hotel Rooms and suites
          </p>
        </BoxReveal>
        <BoxReveal duration={1.8}>
          <p className="font-extralight">
            <strong>
              1500m<sup>2</sup>
            </strong>{" "}
            swimming pool
          </p>
        </BoxReveal>
        <BoxReveal duration={2.0}>
          <p className="font-extralight">Covered Swimming pool</p>
        </BoxReveal>
        <BoxReveal duration={2.2}>
          <p className="font-extralight">Health Club</p>
        </BoxReveal>
        <BoxReveal duration={2.4}>
          <p className="font-extralight">
            <strong>83 </strong>room staff accommodation + restaurants
          </p>
        </BoxReveal>
        <BoxReveal duration={2.6}>
          <p className="font-extralight">
            <strong>Owner: </strong>Travco Travel Company
          </p>
        </BoxReveal>
        <BoxReveal duration={2.8}>
          <p className="font-extralight">
            <strong>Cost: </strong> 350 Million
          </p>
        </BoxReveal>
        <button
          className="mt-[5rem]"
          onClick={() => scrollToNextSection("Luxury")}
        >
          <FontAwesomeIcon
            icon={faCircleArrowDown}
            className="mt-2"
            style={{ color: "#14ff72cb" }}
            size="2x"
          />
        </button>
      </div>

      <div className="mt-[30rem] text-center items-center flex flex-col">
        <BoxReveal duration={1.0}>
          <p className="text-white text-4xl font-extralight mb-4">
            C - Luxury Buildings
          </p>
        </BoxReveal>
      </div>
      <div id="Luxury" className="flex flex-col justify-center">
        <div className="luxury-info text-white justify-evenly flex flex-row">
          <div className="min-h-[15rem] justify-evenly flex-1 flex flex-col border-r items-center border-white">
            <BoxReveal duration={1.0}>
              <p className="text-2xl w-fit font-extralight border-b mb-3">
                1 - Wajbah Palace
              </p>
            </BoxReveal>
            <BoxReveal duration={1.2}>
              <p className="font-extralight">
                <strong>Cost: </strong> QR550 M
              </p>
            </BoxReveal>
            <BoxReveal duration={1.5}>
              <p className="font-extralight">
                <strong>Interior Designer:</strong> M/s Alberto Pinto-France
              </p>
            </BoxReveal>
            <BoxReveal duration={1.8}>
              <p className="font-extralight">
                <strong>Owner: </strong> H.E.Shk. Hamad Bin Jassim Al-Thani.
              </p>
            </BoxReveal>
          </div>
          <div className="flex-1 flex flex-col justify-evenly border-r items-center border-white">
            <BoxReveal duration={1.0}>
              <p className="text-2xl w-fit font-extralight border-b mb-3">
                2 - Beach Palace
              </p>
            </BoxReveal>
            <BoxReveal duration={1.3}>
              <p className="font-extralight">
                <strong>Cost: </strong> QR500 Million
              </p>
            </BoxReveal>
            <BoxReveal duration={1.6}>
              <p className="font-extralight">
                <strong>Interior Designer:</strong> M/s Remi Teiser-France.
              </p>
            </BoxReveal>
            <BoxReveal duration={1.9}>
              <p className="font-extralight">
                <strong>Owner: </strong> H.E.Shk. Hamad Bin Jassim Al-Thani.
              </p>
            </BoxReveal>
          </div>
          <div className="flex-[1.2] flex flex-col items-center">
            <BoxReveal duration={1.1}>
              <p className="text-2xl mt-[24px] mb-[2.2rem] font-extralight border-b">
                3 - Ramadan Tent
              </p>
            </BoxReveal>
            <BoxReveal duration={1.4}>
              <p className="mb-[2.2rem] font-semibold">
                Most luxurious permanent tent in the Middle East
              </p>
            </BoxReveal>
            <BoxReveal duration={1.7}>
              <p className="font-extralight">
                <strong>Interior Designer: </strong> M/s Zeynep Fadillioglu
                (Türkiye).
              </p>
            </BoxReveal>
          </div>
          <div className="flex-1 flex flex-col border-l items-center border-white">
            <BoxReveal duration={1.2}>
              <p className="text-2xl font-extralight mt-[24px] mb-[2.2rem] border-b">
                4 - The first Tower, Giza
              </p>
            </BoxReveal>
            <BoxReveal duration={1.5}>
              <p>
                <strong>Including the Four season hotel</strong>
              </p>
            </BoxReveal>
          </div>
        </div>
        <button
          className="mt-[5rem]"
          onClick={() => scrollToNextSection("Commercial")}
        >
          <FontAwesomeIcon
            icon={faCircleArrowDown}
            className="mt-2"
            style={{ color: "#14ff72cb" }}
            size="2x"
          />
        </button>
      </div>

      <div id="Commercial" className="flex flex-col text-center mt-[30rem]">
        <div className="flex flex-col justify-center items-center">
          <BoxReveal duration={1.0}>
            <p className="text-white text-4xl font-extralight mb-4">
              D - Commercial Buildings
            </p>
          </BoxReveal>
        </div>
        <div className="text-white min-h-[15rem] flex flex-row justify-evenly">
          <div className="flex flex-1 flex-col border-r items-center justify-evenly border-white">
            <BoxReveal duration={1.1}>
              <p className="text-2xl w-fit border-b border-white font-extralight">
                1 - Doha Mall, Doha
              </p>
            </BoxReveal>
            <BoxReveal duration={1.3}>
              <p className="font-extralight">
                <strong>Cost: </strong> QR 1.1 Billion
              </p>
            </BoxReveal>
            <BoxReveal duration={1.5}>
              <p className="font-semibold">
                Largest mall in Qatar during construction
              </p>
            </BoxReveal>
          </div>
          <div className="flex flex-1 flex-col border-r items-center border-white">
            <BoxReveal duration={1.2}>
              <p className="text-2xl border-b border-white mt-[2.2rem] mb-[2rem] w-fit font-extralight">
                2 - Al Mirqab Mall, Doha
              </p>
            </BoxReveal>
            <BoxReveal duration={1.4}>
              <p className="font-extralight">
                <strong>Cost: </strong> QR400 Million
              </p>
            </BoxReveal>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <BoxReveal duration={1.3}>
              <p className="text-2xl font-extralight mt-[2.2rem] border-b w-fit border-white">
                3 - Barzan Mall, Alkhuraitiat
              </p>
            </BoxReveal>
          </div>
        </div>
        <button
          className="mt-[5rem]"
          onClick={() => scrollToNextSection("Compounds")}
        >
          <FontAwesomeIcon
            icon={faCircleArrowDown}
            className="mt-2"
            style={{ color: "#14ff72cb" }}
            size="2x"
          />
        </button>
      </div>

      <div id="Compounds" className="flex flex-col text-center mt-[30rem]">
        <div className="flex flex-col justify-center items-center w-screen">
          <BoxReveal duration={1.0}>
            <p className="text-white text-4xl font-extralight mb-4">
              E - Compounds
            </p>
          </BoxReveal>
        </div>

        <div className="flex text-white flex-row min-h-[15rem] justify-evenly">
          <div className="flex flex-col flex-1 border-r items-center border-white justify-evenly">
            <BoxReveal duration={1.1}>
              <p className="text-2xl font-extralight border-b mb-4 2-fit">
                1 - Four Seasons Accommodation, Dubai
              </p>
            </BoxReveal>
            <BoxReveal duration={1.3}>
              <p className="font-extralight">
                <strong>Cost: </strong> AED 550M
              </p>
            </BoxReveal>
            <BoxReveal duration={1.5}>
              <p>2B + G + 4 Floors & Town house</p>
            </BoxReveal>
          </div>
          <div className="flex flex-col flex-1 items-center border-r justify-evenly">
            <BoxReveal duration={1.2}>
              <p className="text-2xl font-extralight mt-5 border-b border-white w-fit">
                2 - Laverna, Doha
              </p>
            </BoxReveal>
            <BoxReveal duration={1.4}>
              <p className="font-extralight">
                <strong>165 </strong>Villas
              </p>
            </BoxReveal>
            <BoxReveal duration={1.6}>
              <p className="font-extralight">Clubhouse</p>
            </BoxReveal>
            <BoxReveal duration={1.8}>
              <p className="font-extralight">Swimming Pools</p>
            </BoxReveal>
            <BoxReveal duration={2.0}>
              <p className="font-extralight">Guard House</p>
            </BoxReveal>
          </div>
          <div className="flex flex-col items-center flex-1">
            <BoxReveal duration={1.3}>
              <p className="text-2xl w-fit mt-[2.2rem] border-b border-white font-extralight">
                3 - Aziziya Development, Doha
              </p>
            </BoxReveal>
          </div>
        </div>
        <button
          className="mt-[5rem]"
          onClick={() => scrollToNextSection("Museums")}
        >
          <FontAwesomeIcon
            icon={faCircleArrowDown}
            className="mt-2"
            style={{ color: "#14ff72cb" }}
            size="2x"
          />
        </button>
      </div>

      <div
        id="Museums"
        className="flex flex-col text-center text-white mt-[30rem]"
      >
        <div className="flex flex-col w-screen items-center justify-center">
          <BoxReveal duration={1.0}>
            <p className="font-extralight text-4xl mb-4">F - Museums</p>
          </BoxReveal>
        </div>

        <div className="flex flex-row min-h-[15rem] justify-evenly">
          <div className="flex flex-1 flex-col border-r items-center">
            <BoxReveal duration={1.2}>
              <p className="text-2xl border-b font-extralight mt-[2.2rem] mb-[2.5rem]">
                1 - Dunshway Museum, Cairo
              </p>
            </BoxReveal>
            <BoxReveal duration={1.4}>
              <p className="font-extralight">
                <strong>Owner: </strong> Egyptian Ministry of Culture
              </p>
            </BoxReveal>
          </div>
          <div className="flex flex-1 flex-col items-center justify-evenly">
            <BoxReveal duration={1.3}>
              <p className="text-2xl font-extralight border-b border-white w-fit">
                2 - EXPO 2000
              </p>
            </BoxReveal>
            <BoxReveal duration={1.5}>
              <p>Egyptian booth in Hannover, Germany</p>
            </BoxReveal>
            <BoxReveal duration={1.7}>
              <p className="font-extralight">
                <strong>Owner: </strong> Egyptian Ministry of Culture
              </p>
            </BoxReveal>
          </div>
        </div>
        <button
          className="mt-[5rem]"
          onClick={() => scrollToNextSection("Hotels")}
        >
          <FontAwesomeIcon
            icon={faCircleArrowDown}
            className="mt-2"
            style={{ color: "#14ff72cb" }}
            size="2x"
          />
        </button>
      </div>

      <div id="Hotels" className="flex flex-col text-center mt-[30rem]">
        <div className="flex flex-col justify-center items-center">
          <BoxReveal duration={1.0}>
            <p className="text-white text-4xl font-extralight mb-4">
              G - Hotels
            </p>
          </BoxReveal>
        </div>
        <div className="text-white min-h-[15rem] flex flex-row justify-evenly">
          <div className="flex flex-1 flex-col border-r items-center justify-evenly border-white">
            <BoxReveal duration={1.1}>
              <p className="text-2xl w-fit border-b border-white font-extralight">
                1 - Four Season Hotel
              </p>
            </BoxReveal>
            <BoxReveal duration={1.3}>
              <p className="font-extralight">
                <strong>Cairo</strong>, Egypt
              </p>
            </BoxReveal>
            <BoxReveal duration={1.5}>
              <p className="font-semibold">Supervised finishing works</p>
            </BoxReveal>
          </div>
          <div className="flex flex-1 flex-col border-r items-center border-white">
            <BoxReveal duration={1.2}>
              <p className="text-2xl border-b border-white mt-[2.2rem] mb-[2rem] w-fit font-extralight">
                2 - Sheraton Abu Suma
              </p>
            </BoxReveal>
            <BoxReveal duration={1.4}>
              <p className="font-extralight">
                <strong>Safaga </strong>, Egypt
              </p>
            </BoxReveal>
            <BoxReveal duration={1.5}>
              <p className="font-semibold">Supervised finishing works</p>
            </BoxReveal>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <BoxReveal duration={1.3}>
              <p className="text-2xl font-extralight mt-[2.2rem] border-b w-fit border-white">
                3 - Robinson Abu Suma
              </p>
            </BoxReveal>
            <BoxReveal duration={1.4}>
              <p className="font-extralight">
                <strong>Safaga </strong>, Egypt
              </p>
            </BoxReveal>
            <BoxReveal duration={1.5}>
              <p className="font-semibold">Supervised finishing works</p>
            </BoxReveal>
          </div>
        </div>
        <button
          className="mt-[5rem]"
          onClick={() => scrollToNextSection("Mosques")}
        >
          <FontAwesomeIcon
            icon={faCircleArrowDown}
            className="mt-2"
            style={{ color: "#14ff72cb" }}
            size="2x"
          />
        </button>
      </div>
      <div
        id="Mosques"
        className="flex flex-col mt-[30rem] items-center justify-evenly min-h-[15rem] text-center text-white"
      >
        <BoxReveal duration={1.0}>
          <p className="text-4xl font-extralight mb-4">H - Mosques</p>
        </BoxReveal>
        <BoxReveal duration={1.2}>
          <p className="text-2xl font-extralight border-b w-fit">
            Pearl Mosque
          </p>
        </BoxReveal>
        <BoxReveal duration={1.4}>
          <p>
            <strong>Architectural tourist attraction</strong>
          </p>
        </BoxReveal>
        <BoxReveal duration={1.6}>
          <p className="font-extralight">
            <strong>Cost: </strong>QR 320 Million
          </p>
        </BoxReveal>
        <BoxReveal duration={1.8}>
          <p className="font-extralight">
            <strong>Interior Designer: </strong> M/s Zeynep Fadillioglu
          </p>
        </BoxReveal>
        <BoxReveal duration={2.0}>
          <p className="font-extralight">
            <strong>Owner: </strong> H.E.Shk. Hamad Bin Jassim Al-Thani.
          </p>
        </BoxReveal>
      </div>

      <DotPattern className="-z-10 h-[1030vh] bg-neutral-900 opacity-60" />
    </div>
  );
};

export default Page;

// useEffect(() => {
//   const segments = document.querySelectorAll(".timeline-segment");

//   const observer = new IntersectionObserver(
//     (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.intersectionRatio >= 0.8) {
//           // Trigger when 50% of the element is visible
//           entry.target.classList.add("show-segment");
//           observer.unobserve(entry.target); // Stop observing after revealing
//         }
//       });
//     },
//     {
//       threshold: [0.1], // Trigger at different visibility levels
//     }
//   );

//   segments.forEach((segment) => {
//     observer.observe(segment);
//   });

//   // Cleanup the observer on unmount
//   return () => {
//     if (observer) {
//       observer.disconnect();
//     }
//   };
// }, []);

// useEffect(() => {
//   const elements = document.querySelectorAll(".hiddenhidden");

//   const observer = new IntersectionObserver(
//     (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     {
//       threshold: 0.4, // Trigger when 90% of the element is visible
//     }
//   );

//   elements.forEach((element) => {
//     observer.observe(element);
//   });

//   return () => {
//     if (observer) {
//       observer.disconnect();
//     }
//   };
// }, []);

{
  /* <div className="bg-white hiddenhidden rounded-md flex flex-row w-[80%] items-start justify-between mb-6">
            <div className="w-full">
              <h2 className="text-xl font-bold italic">
                Professional Responsibilities (1/3):
              </h2>
              <ul className="list-disc ml-6">
                <li>Management and supervision</li>
                <li>Project planning and management</li>
                <li>Providing technical support to the teams</li>
                <li>Preparing contract documents</li>
                <li>
                  Coordination between:
                  <ul className="list-disc ml-6">
                    <li>Clients</li>
                    <li>Interior designers</li>
                    <li>Local consultants</li>
                    <li>Main contractors</li>
                    <li>Subcontractors</li>
                  </ul>
                </li>
                <li>
                  Providing technical support for post-contract activities
                </li>
                <li>
                  Ensuring work is done according to approved drawings and
                  project specifications
                </li>
                <li>
                  Monitoring the project budget and taking corrective action if
                  needed
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white hiddenhidden rounded-md flex flex-row w-[80%] items-start justify-between mb-6">
            <div className="w-full">
              <h2 className="text-xl font-bold italic">
                Professional Responsibilities (2/3):
              </h2>
              <ul className="list-disc ml-6">
                <li>Monitoring implementation of QA/QC</li>
                <li>Liaising with clients and local authorities</li>
                <li>Attending all progress and technical meetings</li>
                <li>
                  Participating in solicitation and drafting documents as
                  necessary
                </li>
                <li>
                  Monitoring contractors&apos; progress and performance to
                  ensure conformity with contract requirements
                </li>
                <li>
                  Authorizing payments in consistency with the contract terms
                </li>
                <li>
                  Exercising state remedies and resolving site problems as
                  appropriate where contractor performance is deficient
                </li>
                <li>Resolving disputes in a timely manner</li>
              </ul>
            </div>
          </div>

          <div className="bg-white hiddenhidden rounded-md flex flex-row w-[80%] items-start justify-between">
            <div className="w-full">
              <h2 className="text-xl font-bold italic">
                Professional Responsibilities (3/3):
              </h2>
              <ul className="list-disc ml-6">
                <li>
                  Documenting significant events and milestones of the project
                </li>
                <li>Maintaining appropriate records</li>
                <li>
                  Determining:
                  <ul className="list-disc ml-6">
                    <li>Sequence of activities</li>
                    <li>Dependencies</li>
                    <li>Required or desired outcomes</li>
                    <li>Acceptable performance levels</li>
                  </ul>
                </li>
                <li>
                  Developing a timetable with start and end dates for each
                  performance component
                </li>
                <li>
                  Including milestones with accompanying timeframes and
                  monitoring/reporting requirements
                </li>
                <li>
                  Supervising and monitoring contractor activity to identify
                  problem areas
                </li>
                <li>
                  Meeting with the contractor regularly to review progress,
                  discuss problems, and consider necessary changes
                </li>
                <li>
                  Providing access to state facilities, equipment, data, staff,
                  materials, and information
                </li>
                <li>
                  Contacting other staff as necessary to provide equipment and
                  data
                </li>
                <li>
                  Establishing:
                  <ul className="list-disc ml-6">
                    <li>Scope of authority</li>
                    <li>Clear lines of communication and reporting</li>
                    <li>
                      Specific individuals who will interact directly with the
                      contractor
                    </li>
                  </ul>
                </li>
                <li>
                  Establishing control of correspondence, data, and reports
                </li>
                <li>Identifying potential problems and solutions</li>
                <li>Defining terms or conditions of default</li>
                <li>
                  Establishing procedures for:
                  <ul className="list-disc ml-6">
                    <li>
                      Identifying responsible parties and establishing
                      timeframes for handling non-compliance
                    </li>
                    <li>
                      Making necessary contract decisions or modifications
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="last-container hiddenhidden flex flex-col justify-center mt-[3rem] items-center">
          <div className="bg-white rounded-md flex flex-col w-[80%] items-center mb-12">
            <Image src={dara} width={40} height={40} alt="" />
            <h2 className="font-bold text-xl">Senior Project Manager</h2>
            <h3>Dara Engineering Consultants</h3>
            <small className="italic font-semibold">09/2011 - 08/2024</small>
            <p className="font-semibold mt-2 ml-2">Projects Handled</p>
            <div className="self-start ml-6">
              <ul className="list-disc">
                <li>
                  <span className="font-bold italic">Beach Palace</span> for
                  Sheikh Hamad Bin Jassim
                </li>
                <li>
                  <span className="font-bold italic">New Wajba Palace</span> for
                  Sheikh Hamad Bin Jassim (
                  <span className="font-bold italic">QR 550M</span>)
                </li>
                <li>
                  <span className="font-bold italic">Pearl Mosque</span> (
                  <span className="font-bold italic">QR 320M</span>)
                </li>
                <li>
                  <span className="font-bold italic">Masjid Package</span> (12
                  mosques)
                </li>
                <li>
                  <span className="font-bold italic">Doha Mall</span> in Abu
                  Hamour
                </li>
                <li>
                  <span className="font-bold italic">Barzan Mall</span>,
                  Kharaytiyat
                </li>
                <li>
                  <span className="font-bold italic">
                    Aziziya Development Compound
                  </span>
                </li>
                <li>
                  <span className="font-bold italic">La Verna Compound</span> (
                  <span className="font-bold italic">165 villas</span> +
                  swimming pools + guard house) (
                  <span className="font-bold italic">QR 330M</span>)
                </li>
                <li>
                  <span className="font-bold italic">Ramadan Tent</span> for
                  Sheikh Hamad Bin Jassim
                </li>
              </ul>
            </div>
            <p className="text-lg font-semibold">Responsibilities</p>
            <ul className="list-disc ml-5">
              <li>
                Coordination of all drawings (Arch., Structure & MEP) before
                work commencement.
              </li>
              <li>
                Coordination between the client, interior designer, local
                consultant, main contractor, and subcontractors.
              </li>
              <li>
                Studying the work plan submitted by all the contractors and
                suggesting modifications to ensure timely project completion.
              </li>
              <li>
                Monitoring the project budget and taking corrective action if
                needed.
              </li>
              <li>Monitoring QA/QC implementation.</li>
              <li>
                Inspection of all construction activities & ensuring that work
                is done according to approved drawings and project
                specifications.
              </li>
              <li>
                Coordination with various subcontractors and suppliers to fit
                the project schedule.
              </li>
              <li>
                Monitoring work progress; implementation of activities in their
                scheduled timings; and mitigation of delay risks.
              </li>
              <li>Preparing, arranging data, and distributing duties.</li>
              <li>
                Continual and periodical outfield supervision of constructing
                and finishing several buildings.
              </li>
              <li>
                Coordination of specialty works with specialized consultants,
                electrical works, and project requirements.
              </li>
              <li>
                Presiding over regular coordination meetings with Owners,
                Consultants, and Contractors.
              </li>
              <li>Control and management of the site supervision team.</li>
              <li>
                Ensuring that project status and cost reports are prepared and
                submitted to Owners regularly.
              </li>
              <li>
                Reviewing and commenting on Contractor&apos;s architectural
                proposals, submittals of shop drawings, as-built drawings, etc.
              </li>
              <li>
                Ensuring that Contractors properly implement safety, health, and
                security requirements and complete all activities safely and
                timely.
              </li>
            </ul>
            <div className="flex flex-col items-center">
              <TransitionLink
                className="link-btn relative mt-5 py-2 px-4"
                href="Skills"
              >
                <span className="qual-btn ">Qualifications & skills </span>
                <i></i>
              </TransitionLink>
            </div>
          </div>
        </div>

        <div className="r-container t-container py-[10px] px-[50px] w-[50%] relative">
          <Image src={jal} alt="" />
          <div className="text-box px-[20px] py-[30px] relative bg-white rounded-md border-2">
            <h2 className="font-bold text-xl">Project Manager</h2>
            <h2 className="font-bold text-xl">
              Twin Towers & Japanese Airlines Hotel
            </h2>
            <small className="italic font-semibold">06/2006 - 09/2011</small>
            <ul className="list-disc pl-5">
              <li>
                <span className="font-bold italic">Twin Tower</span> including{" "}
                <span className="font-bold italic">
                  JAL (Japanese Airlines) Hotel
                </span>{" "}
                on Dubai&apos;s Sheikh Zayed Road, UAE, with a budget of{" "}
                <span className="font-bold italic">1.5 billion AED</span>.
                <ul className="list-disc pl-5">
                  <li>
                    Designer:{" "}
                    <span className="font-bold italic">M/S BRT Germany</span>
                  </li>
                  <li>
                    Interior Designer:{" "}
                    <span className="font-bold italic">M/s HBA, UAE</span>
                  </li>
                  <li>
                    A <span className="font-bold italic">5-star hotel</span>{" "}
                    with <span className="font-bold italic">471 rooms</span> and
                    suites
                  </li>
                  <li>
                    A multi-use tower with{" "}
                    <span className="font-bold italic">
                      119 residential apartments
                    </span>{" "}
                    and <span className="font-bold italic">63 offices</span>
                  </li>
                  <li>
                    <span className="font-bold italic">15 floors</span>{" "}
                    containing restaurants, swimming pools, executive lounge,
                    nightclub, entrance lobby, reception area, meeting rooms,
                    and health club
                  </li>
                  <li>
                    <span className="font-bold italic">2 basement floors</span>
                  </li>
                  <li>
                    <span className="font-bold italic">
                      4 mechanical floors
                    </span>
                  </li>
                  <li>
                    The Twin Tower is{" "}
                    <span className="font-bold italic">58 floors</span> high and
                    includes a{" "}
                    <span className="font-bold italic">3-floor top roof</span>
                  </li>
                  <li>
                    The entire building is{" "}
                    <span className="font-bold italic">270 meters high</span>{" "}
                    with a{" "}
                    <span className="font-bold italic">40-meter-high mast</span>
                  </li>
                  <li>
                    The project also includes{" "}
                    <span className="font-bold italic">
                      two buildings for car parking
                    </span>
                  </li>
                  <li>Joined the project as architectural works started</li>
                </ul>
              </li>
            </ul>
            <span className="r-container-arrow"></span>
          </div>
        </div>

        <div className="l-container t-container hiddenhidden py-[10px] px-[50px] w-[50%] relative">
          <Image src={fourSeasons} alt="" />
          <div className="text-box px-[20px] py-[30px] relative bg-white rounded-md border-2">
            <h2 className="font-bold text-xl">Project Manager</h2>
            <h2 className="font-bold text-xl">Four Seasons Hotel</h2>
            <small className="italic font-semibold">04/2009 - 09/2011</small>
            <ul className="list-disc pl-5">
              <li>
                <span className="font-bold italic">
                  Four Seasons accommodation building
                </span>{" "}
                project (2B+G+4 Floors & Town Houses), Jumeirah Village Circle
                (JVC), Dubai, U.A.E with a cost of{" "}
                <span className="font-bold italic">550 million Dirham</span>.
              </li>
              <li>
                <span className="font-semibold text-xl">Responsibilities:</span>
                <ul className="list-disc pl-5">
                  <li>Managing and supervising the jobs involved.</li>
                  <li>Project planning and management.</li>
                  <li>Providing technical support to the teams.</li>
                  <li>Preparing contract documents.</li>
                  <li>
                    Ensuring work is done according to approved drawings and
                    specifications.
                  </li>
                  <li>Monitoring QA/QC implementation.</li>
                  <li>Liaising with Clients and Local Authorities.</li>
                  <li>Attending progress and technical meetings.</li>
                </ul>
              </li>
            </ul>
            <span className="l-container-arrow"></span>
          </div>
        </div>

        <div className="r-container t-container hiddenhidden py-[10px] px-[50px] w-[50%] relative">
          <Image src={uaeFlag} alt="" />
          <div className="text-box px-[20px] py-[30px] relative bg-white rounded-md border-2">
            <h2 className="font-bold text-xl">Project Manager</h2>
            <h2 className="font-bold text-xl">Abbco, Malak & Easa Towers</h2>
            <small className="italic font-semibold">06/2006 - 09/2011</small>
            <ul className="list-disc pl-5">
              <li>
                For Sharjah and Fujairah projects, including:
                <ul className="list-disc pl-5">
                  <li>
                    <span className="font-bold italic">186-meter high</span>,{" "}
                    <span className="font-bold italic">
                      50-floor Abbico Tower
                    </span>{" "}
                    with{" "}
                    <span className="font-bold italic">333 apartments</span> and
                    a health club, helipad, and basement.
                  </li>
                  <li>
                    <span className="font-bold italic">
                      50-floor Al-Malak Tower
                    </span>
                    .
                  </li>
                  <li>
                    <span className="font-bold italic">Easa Tower</span>.
                  </li>
                  <li>
                    Two{" "}
                    <span className="font-bold italic">
                      3-storey walk-up buildings
                    </span>{" "}
                    owned by Baghlaf.
                  </li>
                </ul>
              </li>
              <li>
                Supervised interior and MEP works of Dimensions&apos;
                headquarters. Received a certificate of appreciation for
                outstanding quality.
              </li>
              <li>
                <span className="text-lg font-semibold">Responsibilities:</span>
                <ul className="list-disc pl-5">
                  <li>Managing and supervising the jobs involved.</li>
                  <li>Project planning and management.</li>
                  <li>Providing technical support to the teams.</li>
                  <li>Preparing contract documents.</li>
                  <li>
                    Ensuring work is done according to approved drawings and
                    specifications.
                  </li>
                  <li>Monitoring QA/QC implementation.</li>
                  <li>Liaising with Clients and Local Authorities.</li>
                  <li>Attending progress and technical meetings.</li>
                </ul>
              </li>
            </ul>
            <span className="r-container-arrow"></span>
          </div>
        </div>

        <div className="l-container t-container hiddenhidden py-[10px] px-[50px] w-[50%] relative">
          <Image src={miramar} alt="" />
          <div className="text-box px-[20px] py-[30px] relative bg-white rounded-md border-2">
            <h2 className="font-bold text-xl">Project Manager</h2>
            <h2 className="font-semibold text-xl">Miramar Resort</h2>
            <small className="italic font-semibold">06/2006 - 06/2008</small>
            <ul className="list-disc pl-5">
              <li>
                <span className="font-bold italic">
                  IBEROTEL MIRAMAR RESORT
                </span>
                , Aqqa, Fujairah, a 5-star hotel comprising{" "}
                <span className="font-bold italic">323 rooms</span>,{" "}
                <span className="font-bold italic">1500 m²</span> swimming pool;
                total cost{" "}
                <span className="font-bold italic">AED 350 million</span>.
              </li>
              <li>
                <span className="font-bold italic">
                  Tower of Chamber of Commerce and Industry
                </span>
                , Fujairah, UAE
              </li>
              <li>
                <span className="font-semibold">Responsibilities:</span>
                <ul className="list-disc pl-5">
                  <li>Managing and supervising the jobs involved.</li>
                  <li>Project planning and management.</li>
                  <li>Providing technical support to the teams.</li>
                  <li>Preparing contract documents.</li>
                  <li>
                    Providing technical support for post-contract activities &
                    ensuring work is done according to approved drawings and
                    specifications.
                  </li>
                  <li>Monitoring QA/QC implementation.</li>
                  <li>Liaising with Clients and Local Authorities.</li>
                  <li>Attending progress and technical meetings.</li>
                </ul>
              </li>
            </ul>
            <span className="l-container-arrow"></span>
          </div>
        </div>

        <div className="r-container t-container hiddenhidden py-[10px] px-[50px] w-[50%] relative">
          <Image src={adapt} alt="" />
          <div className="text-box px-[20px] py-[30px] relative bg-white rounded-md border-2">
            <h2 className="font-bold text-xl">Project Manager</h2>
            <h2 className="font-semibold text-xl">
              ADAPT Engineering Consultants
            </h2>
            <small className="italic font-semibold">12/1998 - 06/2006</small>
            <ul>
              <li>
                GTZ, Financing solid waste management, Aswan;{" "}
                <span className="font-bold italic">Freelance Expert</span>,
                2003.
              </li>
              <li>
                Participated in design, bid evaluation, and supervision for:
                <ul className="list-disc pl-[20px]">
                  <li>
                    <span className="font-bold italic">Diwan Library</span> in
                    Masr Elgdida
                  </li>
                  <li>
                    <span className="font-bold italic">Sonata Spa</span> in
                    El-Sokhna
                  </li>
                  <li>
                    <span className="font-bold italic">
                      Madina Recreational and Commercial Center
                    </span>
                    , Hurghada
                  </li>
                  <li>
                    <span className="font-bold italic">Dunshway Museum</span> in
                    El Shohada
                  </li>
                  <li>
                    <span className="font-bold italic">Expo 2000</span>{" "}
                    (Egyptian booth in Hannover-Germany)
                  </li>
                  <li>
                    <span className="font-bold italic">Romel Museum</span> in
                    Marsa Matrouh
                  </li>
                  <li>
                    Administration offices of{" "}
                    <span className="font-bold italic">Mantrac</span> in
                    Mohandessin
                  </li>
                  <li>
                    Upgrading <span className="font-bold italic">Al Amer</span>{" "}
                    and{" "}
                    <span className="font-bold italic">
                      Teret Zeneen streets
                    </span>{" "}
                    in Beaulac El Dakrour
                  </li>
                  <li>
                    Designing and preparing bills for{" "}
                    <span className="font-bold italic">six villas</span> in
                    various locations
                  </li>
                  <li>
                    <span className="font-bold italic">
                      Saint Catherine Preservative Visitors Centre
                    </span>{" "}
                    in Saint Catherine
                  </li>
                  <li>
                    Upgrading{" "}
                    <span className="font-bold italic">
                      Manshiyet Naser district
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
            <span className="r-container-arrow"></span>
          </div>
        </div>

        <div className="l-container t-container hiddenhidden py-[10px] px-[50px] w-[50%] relative">
          <Image src={escher} alt="" />
          <div className="text-box px-[20px] py-[30px] relative bg-white rounded-md border-2">
            <h2 className="font-bold text-xl">Site Manager</h2>
            <h2 className="font-semibold text-xl">Soceite Escher</h2>
            <small className="italic font-semibold">02/1996 - 12/1998</small>
            <ul className="list-disc pl-5">
              <li>
                Supervised finishing works and marble installation in:
                <ul className="list-disc pl-5">
                  <li>
                    <span className="font-bold italic">Robinson</span> and{" "}
                    <span className="font-bold italic">
                      Sheraton Abu Suma hotels
                    </span>
                    , Safaga, Egypt.
                  </li>
                  <li>
                    <span className="font-bold italic">Oberoi</span>, Hurghada,
                    Egypt.
                  </li>
                  <li>
                    <span className="font-bold italic">Hyatt Regency</span>,
                    Sharm El Sheikh, Egypt.
                  </li>
                  <li>
                    <span className="font-bold italic">First Tower</span>, Giza,
                    Egypt.
                  </li>
                  <li>
                    <span className="font-bold italic">Sonesta façade</span>,
                    Cairo, Egypt.
                  </li>
                  <li>
                    A villa in{" "}
                    <span className="font-bold italic">Haram, Giza</span>,
                    Egypt.
                  </li>
                </ul>
              </li>
            </ul>
            <span className="l-container-arrow"></span>
          </div>
        </div>

        <div className="r-container t-container hiddenhidden py-[10px] px-[50px] w-[50%] relative">
          <Image src={adapt} alt="" />
          <div className="text-box px-[20px] py-[30px] relative bg-white rounded-md border-2">
            <h2 className="font-bold text-xl">Designer & Site Engineer</h2>
            <h2 className="font-semibold text-xl">
              Adapt Architecture Consultants
            </h2>
            <small className="italic font-semibold">11/1993 - 02/1996</small>
            <ul className="list-disc pl-5">
              <li>
                Designed, made shop drawings, and constructed the{" "}
                <span className="font-bold italic">Dunshway Museum</span>.
              </li>
              <li>
                Designed{" "}
                <span className="font-bold italic">Kalaway Resort</span> in
                Safaga.
              </li>
              <li>
                Prepared urban upgrading studies for:
                <ul className="list-decimal pl-5">
                  <li>
                    <span className="font-bold italic">Manshaet Naser</span>,
                    Cairo
                  </li>
                  <li>
                    <span className="font-bold italic">Ganabiya</span>, Tanta
                  </li>
                  <li>
                    <span className="font-bold italic">Munira Elgharbiya</span>{" "}
                    and{" "}
                    <span className="font-bold italic">Beaulac Eldakrour</span>,
                    Giza
                  </li>
                </ul>
              </li>
              <li>
                Designed and supervised the construction of{" "}
                <span className="font-bold italic">Villa Tarzy</span> in
                Mansouriya,{" "}
                <span className="font-bold italic">Villa Barkawy</span> in
                Kirdasa,{" "}
                <span className="font-bold italic">
                  Kitharet Heliopolis condominium
                </span>
                , and <span className="font-bold italic">Villa Ghannam</span> in
                Dahshour.
              </li>
              <li>
                Designed and supervised the finishing of the{" "}
                <span className="font-bold italic">
                  American Express Bank branch
                </span>{" "}
                in Port Said.
              </li>
              <li>
                Designed and made shop drawings for{" "}
                <span className="font-bold italic">Villa Sheikha Fatma</span> in
                Dubai and another villa in the Emirates.
              </li>
            </ul>
            <span className="r-container-arrow"></span>
          </div>
        </div>

        <div className="l-container t-container hiddenhidden py-[10px] px-[50px] w-[50%] relative">
          <Image src={GTZ} alt="" />
          <div className="text-box px-[20px] py-[30px] relative bg-white rounded-md border-2">
            <h2 className="font-bold text-xl">Designer & Site Engineer</h2>
            <h2 className="font-semibold text-xl">
              GTZ (German Technical Cooperation)
            </h2>
            <small className="italic font-semibold">03/1992 - 11/1993</small>
            <ul className="pl-5 list-disc">
              <li>
                Urban and Utilities Upgrading of Aswan&apos;s{" "}
                <span className="font-bold italic">Tabia</span> and{" "}
                <span className="font-bold italic">Naseriya Districts</span>;
                designed and supervised an ideal neighborhood in{" "}
                <span className="font-bold italic">east Nasriya</span>; prepared
                urban upgrading studies for{" "}
                <span className="font-bold italic">Gharb Seheil</span>,{" "}
                <span className="font-bold italic">Sadat Rd.</span>,{" "}
                <span className="font-bold italic">Eltabia</span>, and{" "}
                <span className="font-bold italic">Elguzaira</span>.
              </li>
            </ul>
            <span className="l-container-arrow"></span>
          </div>
        </div>

        <div className="r-container t-container hiddenhidden py-[10px] px-[50px] w-[50%] relative">
          <Image src={delta} alt="" />
          <div className="text-box px-[20px] py-[30px] relative bg-white rounded-md border-2">
            <h2 className="font-bold text-xl">Designer</h2>
            <h2 className="font-semibold text-xl">Delta Consultants</h2>
            <small className="italic font-semibold">06/1990 - 03/1992</small>
            <ul className="list-disc pl-5">
              <li>
                Participated in designing the camps of{" "}
                <span className="font-bold italic">Selsela Resort</span> in
                Hurgada; designed and made shop drawings for{" "}
                <span className="font-bold italic">
                  Selsela Zahabiya Resort
                </span>
                .
              </li>
              <li>
                Participated in the final phase of local planning for{" "}
                <span className="font-bold italic">Marsa Matrouh</span>.
              </li>
              <li>
                Designed and supervised the setup of a ward in{" "}
                <span className="font-bold italic">east Nasriya</span>.
              </li>
            </ul>
            <span className="r-container-arrow"></span>
          </div>
        </div>

        <div className="l-container hiddenhidden t-container py-[10px] px-[50px] w-[50%] relative">
          <Image src={bakry} alt="" />
          <div className="text-box px-[20px] py-[30px] relative bg-white rounded-md border-2">
            <h2 className="font-bold text-xl">Designer</h2>
            <h2 className="font-semibold text-xl">Bakry</h2>
            <small className="italic font-semibold">02/1990 - 04/1990</small>
            <ul className="pl-5 list-disc">
              <li>
                Designed the final phase of{" "}
                <span className="font-bold italic">
                  Masr El-Arabia Poultry Farm
                </span>
                .
              </li>
            </ul>
            <span className="l-container-arrow"></span>
          </div>
        </div>

        <div className="r-container hiddenhidden t-container py-[10px] px-[50px] w-[50%] relative">
          <Image src={arco} alt="" />
          <div className="text-box px-[20px] py-[30px] relative bg-white rounded-md border-2">
            <h2 className="font-bold text-xl">Designer</h2>
            <h2 className="font-semibold text-xl">Arco Consultants</h2>
            <small className="italic font-semibold">08/1988 - 04/1990</small>
            <ul className="list-disc pl-5">
              <li>
                Designed a <span className="font-bold italic">mosque</span> and
                a <span className="font-bold italic">villa</span> in Cairo.
              </li>
              <li>
                Two{" "}
                <span className="font-bold italic">
                  condominiums in Mokatem
                </span>
                , and a{" "}
                <span className="font-bold italic">
                  factory for readymade meals
                </span>{" "}
                in the Tenth of Ramadan.
              </li>
              <li>
                Designed and supervised a{" "}
                <span className="font-bold italic">
                  factory for plastic products
                </span>{" "}
                on the Sixth of October; a{" "}
                <span className="font-bold italic">
                  condominium in Naser City
                </span>
                .
              </li>
            </ul>
            <span className="r-container-arrow"></span>
          </div>
        </div>

        <div className="l-container hiddenhidden t-container py-[10px] px-[50px] w-[50%] relative">
          <Image src={cairoUni} alt="" />
          <div className="text-box px-[20px] py-[30px] relative bg-white rounded-md border-2">
            <h2 className="font-bold text-xl">
              B.Sc. of Architecture - Faculty of Engineering
            </h2>
            <small className="italic font-semibold">1988</small>
            <p className="font-semibold text-lg">Cairo, Egypt</p>
            <p>Graduated from the University of Cairo</p>
            <span className="l-container-arrow"></span>
          </div>
        </div>
      </div> */
}

{
  /* <div className="timeline">
{Array.from({ length: 80 }).map((_, index) => (
  <div
    key={index}
    className="timeline-segment"
    style={{ top: `${(index + 1) * 100}px` }}
  ></div>
))} */
}
