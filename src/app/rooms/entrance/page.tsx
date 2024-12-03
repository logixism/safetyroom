"use client";

import { Arrow, ArrowProps } from "@/components/Arrow";
import { PulsingCircle, PulsingCircleProps } from "@/components/PulsingCircle";
import Images from "@/components/Images";
import PdfView from "@/components/PdfView";

const arrows: ArrowProps[] = [
  {
    direction: "left",
    text: "Подивитися вліво",
    href: "/rooms/left_side",
    directionPercentage: 5,
    top: 50,
  },
];

const circles: PulsingCircleProps[] = [
  {
    content: (
      <>
        <img
          src="../assets/hires/signs/fire_safety.png"
          alt="Пожежна безпека"
        />
      </>
    ),
    text: "Пожежна безпека",
    top: 21.5,
    left: 28.2,
  },
  {
    content: (
      <>
        <div>
          <img
            src="../assets/hires/signs/fire_safety_booklet_1.png"
            className="max-w-2xl"
            alt="Буклет"
          />
          <img
            src="../assets/hires/signs/fire_safety_booklet_2.png"
            className="max-w-2xl"
            alt="Буклет 2"
          />
        </div>
      </>
    ),
    text: "Буклет",
    top: 37,
    left: 10.2,
  },
  {
    content: (
      <>
        <img src="../assets/hires/signs/fire_car.png" alt="Пожежна машина" />
      </>
    ),
    onClick: () => {
      const audio = new Audio("../assets/sounds/fire_alarm.mp3");
      audio.play().then(() => {
        audio.remove();
      });
    },
    text: "Пожежна машина",
    top: 45,
    left: 27,
  },
  {
    content: (
      <>
        <PdfView file="../assets/files/fire_safety.pdf" />
      </>
    ),
    text: "Буклет",
    top: 57,
    left: 22,
  },

  {
    content: (
      <>
        <img
          src="../assets/hires/signs/life_safety.png"
          alt="Безпека життєдіяльності"
        />
      </>
    ),
    text: "Безпека життєдіяльності",
    top: 22,
    left: 69.8,
  },
];

const FrontPage = () => {
  return (
    <>
      <Images room="entrance" />
      <div className="absolute w-full h-full top-0 left-0">
        {arrows.map((arrow, i) => (
          <Arrow key={i} {...arrow} />
        ))}

        {circles.map((circle, i) => (
          <PulsingCircle key={i} {...circle} />
        ))}
      </div>
    </>
  );
};

export default FrontPage;
