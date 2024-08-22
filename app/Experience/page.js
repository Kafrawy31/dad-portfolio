"use client";
import React from "react";
import adapt from "../../public/dad-logos/adapt.jpg";
import arco from "../../public/dad-logos/arco.jpg";
import bakry from "../../public/dad-logos/bakry.jpg";
import cairoUni from "../../public/dad-logos/cairo-university.png";
import dara from "../../public/dad-logos/dara.png";
import delta from "../../public/dad-logos/delta.jpg";
import GTZ from "../../public/dad-logos/GTZ-Logo.png";
import escher from "../../public/dad-logos/escher.jpg";
import fourSeasons from "../../public/dad-logos/four-seasons.png";
import jal from "../../public/dad-logos/japanese-airlines-logo.jpg";
import miramar from "../../public/dad-logos/miramar.png";
import uaeFlag from "../../public/dad-logos/uae-flag.png";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import TransitionLink from "@/lib/TransitionLink";
import DotPattern from "../components/DotPattern";

const Page = () => {
  useEffect(() => {
    const segments = document.querySelectorAll(".timeline-segment");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.8) {
            // Trigger when 50% of the element is visible
            entry.target.classList.add("show-segment");
            observer.unobserve(entry.target); // Stop observing after revealing
          }
        });
      },
      {
        threshold: [0.1], // Trigger at different visibility levels
      }
    );

    segments.forEach((segment) => {
      observer.observe(segment);
    });

    // Cleanup the observer on unmount
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".hiddenhidden");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.4, // Trigger when 90% of the element is visible
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="w-screen h-auto z-[-10] bg-slate-800 overflow-hidden absolute">
      <div className="timeline">
        {Array.from({ length: 70 }).map((_, index) => (
          <div
            key={index}
            className="timeline-segment"
            style={{ top: `${(index + 1) * 100}px` }}
          ></div>
        ))}
        <div className="flex flex-col relative top-0 text-center mb-4">
          <p className="text-4xl text-white">Work Experience</p>
        </div>
        <div className="last-container flex flex-col justify-center mt-[3rem] items-center">
          <div className="bg-white rounded-md flex flex-col w-[80%] items-center">
            <Image src={dara} width={40} height={40} />
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
                Reviewing and commenting on Contractor's architectural
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
          <Image src={jal} />
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
                on Dubai's Sheikh Zayed Road, UAE, with a budget of{" "}
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
          <Image src={fourSeasons} />
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
          <Image src={uaeFlag} />
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
                Supervised interior and MEP works of Dimensions' headquarters.
                Received a certificate of appreciation for outstanding quality.
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
          <Image src={miramar} />
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
          <Image src={adapt} />
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
          <Image src={escher} />
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
          <Image src={adapt} />
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
          <Image src={GTZ} />
          <div className="text-box px-[20px] py-[30px] relative bg-white rounded-md border-2">
            <h2 className="font-bold text-xl">Designer & Site Engineer</h2>
            <h2 className="font-semibold text-xl">
              GTZ (German Technical Cooperation)
            </h2>
            <small className="italic font-semibold">03/1992 - 11/1993</small>
            <ul className="pl-5 list-disc">
              <li>
                Urban and Utilities Upgrading of Aswan’s{" "}
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
          <Image src={delta} />
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
          <Image src={bakry} />
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
          <Image src={arco} />
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
          <Image src={cairoUni} />
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
      </div>
      <DotPattern className="-z-10 bg-neutral-900 opacity-60" />
    </div>
  );
};

export default Page;
