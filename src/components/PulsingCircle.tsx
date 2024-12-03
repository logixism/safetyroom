"use client";

import { useState, ReactNode } from "react";

export interface PulsingCircleProps {
  onClick?: () => void;
  onClose?: () => void;
  content: ReactNode;
  text: string;
  top: number;
  left: number;
  radius?: number;
}

export const PulsingCircle = ({
  onClick,
  onClose,
  content,
  text,
  top,
  left,
  radius,
}: PulsingCircleProps) => {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(true);
  };

  const handleClose = () => {
    setShowImage(false);
    onClose?.();
  };

  return (
    <>
      <div
        className="group absolute cursor-pointer flex flex-col items-center justify-center z-20"
        style={{ left: `${left}%`, top: `${top}%` }}
        onClick={() => {
          handleClick();
          onClick?.();
        }}
      >
        <div
          className={`
          circle 
          ${radius ? `w-${radius} h-${radius}` : "w-8 h-8"}
          rounded-full 
          bg-white
          backdrop-blur-sm 
          relative 
          group-hover:opacity-0 
          group-hover:-z-10
        `}
        >
          <span className="block absolute h-full w-full rounded-full bg-white/10 border border-white opacity-75 animate-ping-xl"></span>
        </div>
        <div
          className="link flex flex-col items-center justify-center opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:-mt-4 transition-all duration-500 ease-in-out"
          style={{ position: "absolute", top: "100%" }}
        >
          <span className="-mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="#ffffff"
            >
              <path d="M24 22h-24l12-20z" />
            </svg>
          </span>
          <div className="bg-white px-4 py-1 rounded-lg font-bold">
            <span className="text text-nowrap">{text}</span>
          </div>
        </div>
      </div>
      <div
        className={`z-30 fixed top-0 left-0 w-full h-full bg-white/10 flex items-center justify-center backdrop-blur-md transition-opacity duration-200 ${
          showImage ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleClose}
      >
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div
            className="bg-white p-4 rounded-2xl max-w-5xl w-min-content max-h-[95vh] overflow-y-scroll"
            onClick={(e) => e.stopPropagation()}
          >
            {content}
            {/* {showImage && content} */}
          </div>
        </div>
      </div>
    </>
  );
};
