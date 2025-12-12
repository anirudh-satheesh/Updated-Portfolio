import { useState, useRef, useEffect } from "react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components/index.js";
import { Download, Loader, AlertTriangle } from "lucide-react";
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [containerWidth, setContainerWidth] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      setContainerWidth(container.clientWidth);
    });

    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError(error) {
    setError(`Failed to load PDF: ${error.message}`);
    setLoading(false);
  }

  return (
      <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a href="files/resume.pdf" download className="cursor-pointer" title="Download Resume">
            <Download className="icon"/>
        </a>
      </div>
      <div ref={containerRef} className="pdf-container h-[80vh] w-[55vh] ">
          {loading && (
              <div className="feedback-indicator">
                  <Loader className="animate-spin" />
                  <p>Loading PDF...</p>
              </div>
          )}
          {error && (
              <div className="feedback-indicator error">
                  <AlertTriangle />
                  <p>{error}</p>
              </div>
          )}
          <Document
              file="files/resume.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              className={loading || error ? 'hidden' : ''}
          >
              {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} width={containerWidth} />
              ))}
          </Document>
      </div>
    </>
  );
};


const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
