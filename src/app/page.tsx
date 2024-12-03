"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Images from "@/components/Images";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <span className="blur-md w-full h-full scale-105 absolute border-none">
        <Images room="left_side" />
      </span>
      <div className="relative h-screen w-screen top-16 ">
        <Image
          src="/assets/hires/start.png"
          alt="safety room"
          width={0}
          height={0}
          sizes="100vw"
          className="m-auto blinking-image transition-opacity"
          style={{ width: "50%", height: "auto" }}
        />
      </div>
      <button
        className="absolute left-1/2 -translate-x-1/2 bottom-60 bg-green-500 px-4 py-2 rounded-md text-xl font-bold transition-all duration-300 hover:bg-green-400 text-white"
        onClick={() => {
          router.push("/rooms/entrance");
          document.body.requestFullscreen();
        }}
      >
        Почати пригоду
      </button>
    </>
  );
}
