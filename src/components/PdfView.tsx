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
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          height={900}
          renderAnnotationLayer={false}
        />
      </Document>
      <div className="flex justify-center space-x-4 mt-2">
        <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
          &larr;
        </button>
        <p>
          {pageNumber}/{numPages}
        </p>
        <button onClick={goToNextPage} disabled={pageNumber >= (numPages || 1)}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default PdfView;
