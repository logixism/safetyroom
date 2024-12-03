"use client";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const RoomsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Navbar hasBorderBottom={false} /> */}
      <div className="h-screen overflow-hidden ">
        <div className="bg-cover min-w-full min-h-full">{children}</div>
      </div>
    </>
  );
};

export default RoomsLayout;
