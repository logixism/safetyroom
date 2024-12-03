"use client";

import { Arrow, ArrowProps } from "@/components/Arrow";
import { PulsingCircle, PulsingCircleProps } from "@/components/PulsingCircle";
import Images from "@/components/Images";
import Image from "next/image";
import PdfView from "@/components/PdfView";

let fire_audio: HTMLAudioElement | undefined = undefined;
let pdf_fire_safety = <PdfView file="../assets/files/fire_safety.pdf" />;
let pdf_life_safety = <PdfView file="../assets/files/life_safety.pdf" />;
let pdf_road_safety = <PdfView file="../assets/files/road_safety.pdf" />;

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
    text: "Пожежна машина",
    top: 45,
    left: 27,
  },
  {
    content: (
      <>
        <img
          src="../assets/hires/signs/fire_car_inside.png"
          alt="Пожежна машина"
        />
      </>
    ),
    text: "Пожежна машина",
    top: 39,
    left: 45,
    radius: 5,
  },
  {
    content: (
      <>
        <img
          src="../assets/hires/signs/fire_car_signal.png"
          alt="Пожежна машина"
        />
      </>
    ),
    onClick: () => {
      if (!fire_audio) {
        fire_audio = new Audio("../assets/sounds/fire_alarm.mp3");
        fire_audio.volume = 0.3;
      }
      fire_audio.play();
    },
    onClose: () => {
      if (!fire_audio) {
        return;
      }
      fire_audio.pause();
      fire_audio.currentTime = 0;
    },
    text: "Пожежна машина",
    top: 32,
    left: 45,
    radius: 5,
  },
  {
    content: <>{pdf_fire_safety}</>,
    text: "Буклет",
    top: 57,
    left: 22,
  },
  {
    content: <>{pdf_life_safety}</>,
    text: "Буклет",
    top: 59,
    left: 66.5,
    radius: 5,
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

  {
    content: (
      <>
        <div>
          {[...Array(9).keys()].map((i) => (
            <img
              key={i}
              src={`../assets/hires/signs/blue_mine_${i + 1}.png`}
              alt={`Буклет ${i + 1}`}
            />
          ))}
        </div>
      </>
    ),
    text: "Буклет",
    top: 18,
    left: 49,
  },

  {
    content: (
      <>
        <div>
          {[...Array(3).keys()].map((i) => (
            <img
              key={i}
              src={`../assets/hires/signs/shelf_overload_${i + 1}.png`}
              alt={`Буклет ${i + 1}`}
              className="w-full"
            />
          ))}
        </div>
      </>
    ),
    text: "Буклет",
    top: 47,
    left: 10.5,
    radius: 5,
  },

  {
    content: (
      <>
        <img src="../assets/hires/signs/fire_ext.png" alt="Буклет" />
      </>
    ),
    text: "Вогнегасник",
    top: 66,
    left: 7.4,
    radius: 5,
  },

  {
    content: (
      <>
        <div>
          {[...Array(3).keys()].map((i) => (
            <img
              key={i}
              src={`../assets/hires/signs/traffic_light_${i + 1}.png`}
              alt={`Буклет ${i + 1}`}
              className="w-full"
            />
          ))}
        </div>
      </>
    ),
    text: "Світлофор",
    top: 54,
    left: 76,
  },

  {
    content: (
      <>
        <div>
          {[...Array(2).keys()].map((i) => (
            <img
              key={i}
              src={`../assets/hires/signs/air_alert_${i + 1}.png`}
              alt={`Буклет ${i + 1}`}
              className="w-full"
            />
          ))}
        </div>
      </>
    ),
    text: "Правила поведінки під час повітрянної тривоги",
    top: 53.7,
    left: 61.4,
    radius: 5,
  },
  {
    content: <>{pdf_road_safety}</>,
    text: "Безпека дорожнього руху",
    top: 48.7,
    left: 68.8,
    radius: 5,
  },
  {
    content: (
      <>
        <div>
          {[...Array(2).keys()].map((i) => (
            <img
              key={i}
              src={`../assets/hires/signs/cyberbullying_${i + 1}.png`}
              alt={`Буклет ${i + 1}`}
              className="w-full"
            />
          ))}
        </div>
      </>
    ),
    text: "Кібербуллінг",
    top: 45,
    left: 77,
    radius: 5,
  },
];

const FrontPage = () => {
  return (
    <>
      <Images room="entrance" />
      <Image
        src="/assets/hires/signs/shelf_overload.png"
        alt=""
        width={120}
        height={0}
        style={{
          zIndex: 11,
          position: "absolute",
          top: "45%",
          left: "7.8%",
        }}
      />
      <Image
        src="/assets/hires/signs/air_alert.png"
        alt=""
        width={120}
        height={0}
        style={{
          zIndex: 11,
          position: "absolute",
          top: "40%",
          left: "58.8%",
        }}
      />
      <Image
        src="/assets/hires/signs/road_safety.png"
        alt=""
        width={120}
        height={0}
        style={{
          zIndex: 11,
          position: "absolute",
          top: "40%",
          left: "66%",
        }}
      />
      <Image
        src="/assets/hires/signs/cyberbullying.png"
        alt=""
        width={170}
        height={0}
        style={{
          zIndex: 11,
          position: "absolute",
          top: "40%",
          left: "73%",
        }}
      />
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
