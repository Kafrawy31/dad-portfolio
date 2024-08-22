"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { ParallaxScroll } from "../components/parallax-scroll";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BoxReveal from "../components/box-reveal";

const Home = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");

  useEffect(() => {
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const carousel = document.querySelector(".carousel");
    const list = document.querySelector(".list");
    const runningTime = document.querySelector(".carousel .timeRunning");

    let timeRunning = 3000;
    let timeAutoNext = 7000;

    const showSlider = (type) => {
      let sliderItemsDom = list.querySelectorAll(".carousel .list .item");
      if (type === "next") {
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add("next");
      } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carousel.classList.add("prev");
      }

      clearTimeout(runTimeOut);

      runTimeOut = setTimeout(() => {
        carousel.classList.remove("next");
        carousel.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextBtn.click();
      }, timeAutoNext);

      resetTimeAnimation(); // Reset the running time animation
    };

    nextBtn.onclick = function () {
      showSlider("next");
    };

    prevBtn.onclick = function () {
      showSlider("prev");
    };

    let runTimeOut;

    let runNextAuto = setTimeout(() => {
      nextBtn.click();
    }, timeAutoNext);

    function resetTimeAnimation() {
      runningTime.style.animation = "none";
      runningTime.offsetHeight; /* trigger reflow */
      runningTime.style.animation = null;
      runningTime.style.animation = "runningTime 7s linear 1 forwards";
    }

    // Start the initial animation
    resetTimeAnimation();

    // Cleanup
    return () => {
      nextBtn.onclick = null;
      prevBtn.onclick = null;
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []);

  function toggle(item = null) {
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");

    if (item) {
      setSelectedImages(item.images);
      setSelectedTitle(item.name);
    }
  }

  return (
    <div>
      <div id="blur">
        <div className="carousel">
          <div className="list">
            {[
              {
                src: "/ramadan-test.png",
                name: "Ramadan Tent",
                loc: "Doha, Qatar",
                images: [
                  "/ramadan-tent/rt1-min.jpg",
                  "/ramadan-tent/rt2-min.jpg",
                  "/ramadan-tent/rt3-min.jpg",
                  "/ramadan-tent/rt4-min.jpg",
                  "/ramadan-tent/rt5-min.jpg",
                  "/ramadan-tent/rt6-min.jpg",
                  "/ramadan-tent/rt7-min.jpg",
                  "/ramadan-tent/rt8-min.jpg",
                  "/ramadan-tent/rt9-min.jpg",
                  "/ramadan-tent/rt10-min.jpg",
                ],
              },

              {
                src: "/giza1.jpg",
                name: "Four Seasons",
                loc: "Giza, Egypt",
                images: [
                  "/giza/giza1.jpg",
                  "/giza/giza2.jpg",
                  "/giza/giza3.jpg",
                  "/giza/giza4.jpg",
                  "/giza/giza5.jpg",
                  "/giza/giza6.jpg",
                  "/giza/giza7.jpg",
                  "/giza/giza8.jpg",
                  "/giza/giza9.jpg",
                  "/giza/giza10.jpg",
                  "/giza/giza11.jpg",
                  "/giza/giza12.jpg",
                ],
              },
              {
                src: "/nasssima-test.jpg",
                name: "Nassima Twin Towers",
                loc: "Dubai, UAE",
                images: [
                  "/nassima-tower/nt1.webp",
                  "/nassima-tower/nt2.jpg",
                  "/nassima-tower/nt3.jpg",
                  "/nassima-tower/nt4.jpg",
                  "/nassima-tower/nt5.jpg",
                  "/nassima-tower/nt6.jpg",
                  "/nassima-tower/nt7.jpg",
                  "/nassima-tower/nt8.jpg",
                  "/nassima-tower/nt9.webp",
                  "/nassima-tower/nt10.jpg",
                  "/nassima-tower/nt11.jpg",
                  "/nassima-tower/nt12.jpg",
                ],
              },
              {
                src: "/masjid-test.png",
                name: "Pearl Masjid",
                loc: "Doha, Qatar",
                images: [
                  "/pearl-mosque/pm1.jpg",
                  "/pearl-mosque/pm2.jpg",
                  "/pearl-mosque/pm3.jpg",
                  "/pearl-mosque/pm4.jpg",
                  "/pearl-mosque/pm5.jpg",
                  "/pearl-mosque/pm6.jpg",
                  "/pearl-mosque/pm7.jpg",
                  "/pearl-mosque/pm8.jpg",
                  "/pearl-mosque/pm9.jpg",
                  "/pearl-mosque/pm10.jpg",
                  "/pearl-mosque/pm11.jpg",
                  "/pearl-mosque/pm12.jpg",
                ],
              },

              {
                src: "/wajbah-test.jpg",
                name: "Wajbah Palace",
                loc: "Wajbah, Qatar",
                images: [
                  "/wajbah-palace/wp1.jpg",
                  "/wajbah-palace/wp2.jpg",
                  "/wajbah-palace/wp3.jpg",
                  "/wajbah-palace/wp4.jpg",
                  "/wajbah-palace/wp5.jpg",
                  "/wajbah-palace/wp6.jpg",
                  "/wajbah-palace/wp7.jpg",
                  "/wajbah-palace/wp8.jpg",
                  "/wajbah-palace/wp9.jpg",
                  "/wajbah-palace/wp10.jpg",
                  "/wajbah-palace/wp11.jpg",
                  "/wajbah-palace/wp12.jpg",
                ],
              },
              {
                src: "/beach-villa/bv9.jpg",
                name: "Beach Villa",
                loc: "Doha, Qatar",
                images: [
                  "/beach-villa/bv1.jpeg",
                  "/beach-villa/bv2.jpeg",
                  "/beach-villa/bv3.jpeg",
                  "/beach-villa/bv4.jpeg",
                  "/beach-villa/bv5.jpeg",
                  "/beach-villa/bv6.jpg",
                  "/beach-villa/bv7.jpg",
                  "/beach-villa/bv8.jpg",
                  "/beach-villa/bv9.jpg",
                  "/beach-villa/bv10.jpg",
                  "/beach-villa/bv11.jpg",
                  "/beach-villa/bv12.jpg",
                ],
              },
              {
                src: "/miramar/mm9.jpg",
                name: "Royal Miramar, Aqqa",
                loc: "Sharjah, Uae",
                images: [
                  "/miramar/mm1.jpg",
                  "/miramar/mm2.jpg",
                  "/miramar/mm3.jpg",
                  "/miramar/mm4.jpg",
                  "/miramar/mm5.jpg",
                  "/miramar/mm6.jpg",
                  "/miramar/mm7.jpg",
                  "/miramar/mm8.jpg",
                  "/miramar/mm9.jpg",
                  "/miramar/mm10.jpg",
                  "/miramar/mm11.jpg",
                  "/miramar/mm12.jpg",
                ],
              },
            ].map((item, index) => (
              <div
                key={`${item.name}-${index}`} // Combine name and index for unique key
                className={`item ${
                  item.name === "EAGLE" ? "nassima-test" : ""
                }`}
                style={{ backgroundImage: `url(${item.src})` }}
              >
                <div className="content">
                  <div className="name">{item.name}</div>
                  <div className="location">{item.loc}</div>
                  <div className="btn">
                    <button onClick={() => toggle(item)}>See More</button>{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="arrows">
            <button className="prev">&lt;</button>
            <button className="next">&gt;</button>
          </div>

          <div className="timeRunning"></div>
        </div>
      </div>
      <div id="popup" className="rounded-md">
        <div className="flex flex-col text-center items-center">
          <div className="relative w-full flex items-center">
            <a onClick={toggle}>
              <p className="absolute left-24 top-4 mb-2 underline italic text-xs font-semibold">
                <FontAwesomeIcon icon={faArrowLeft} /> go back
              </p>
            </a>
          </div>
          <ParallaxScroll
            className="absolute top-[68px]"
            images={selectedImages} // Pass selected images as a prop
          />

          <p className="absolute italic bottom-[30px] text-2xl font-thin">
            {selectedTitle} {/* Display the selected title */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
