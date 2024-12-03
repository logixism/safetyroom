"use client";

import { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";

const PdfView = ({ file }: { file: string }) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const goToPrevPage = () => {
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prevPageNumber) =>
      Math.min(prevPageNumber + 1, numPages || 1)
    );
  };

  return (
    <div className="w-auto mx-auto">
      <div>
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          loading=<h1>Завантаження...</h1>
        >
          <div className="space-y-2">
            {[...Array(numPages || 1)].map((_, i) => (
              <Page
                loading={<h1>Завантаження...</h1>}
                key={i + 1}
                pageNumber={i + 1}
                height={900}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            ))}
          </div>
        </Document>
      </div>
      {/* <div className="flex justify-center mt-3">
        <div className="flex items-center space-x-4 bg-slate-200 max-w-fit px-2 py-1 rounded-xl">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="w-8 h-8 text-xl"
          >
            &larr;
          </button>
          <p className="font-bold">
            Сторінка {pageNumber} з {numPages}
          </p>
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= (numPages || 1)}
            className="w-8 h-8 text-xl"
          >
            &rarr;
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default PdfView;
