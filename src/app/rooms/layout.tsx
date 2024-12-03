"use client";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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
