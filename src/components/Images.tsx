"use client";

import { useState } from "react";
import Image from "next/image";

import Entrance from "/public/assets/hires/rooms/entrance.png";
import Entrance_Lowres from "/public/assets/hires/rooms/entrance.png";

import LeftSide from "/public/assets/hires/rooms/left_side.png";
import LeftSide_Lowres from "/public/assets/hires/rooms/left_side.png";

const Images = ({ room }: { room: string }) => {
  let lowres_image: any;
  let image: any;

  switch (room) {
    case "entrance":
      lowres_image = Entrance_Lowres;
      image = Entrance;
      break;
    case "left_side":
      lowres_image = LeftSide_Lowres;
      image = LeftSide;
      break;
  }

  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <Image
        src={lowres_image}
        alt={room}
        className={`w-full h-full absolute top-0 left-0 pointer-events-none blur-md transition-all duration-900 ease-in-out z-10 ${
          isLoaded ? "opacity-0 blur-none" : "opacity-100"
        }`}
      />
      <Image
        className="w-full h-full absolute top-0 left-0 pointer-events-none"
        src={image}
        alt={room}
        onLoad={() => setIsLoaded(true)}
      />
    </>
  );
};

export default Images;
