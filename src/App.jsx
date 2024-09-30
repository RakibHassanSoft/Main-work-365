import './App.css';
import Template1 from './pages/myResume/template1/Template1';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import React from 'react';
import Resume1 from './pages/templatesColllection/Resume1';
import Resume2 from './pages/templatesColllection/Resume2';
import Resume3 from './pages/templatesColllection/Resume3';
import Resume4 from './pages/templatesColllection/Resume4';
import Resume5 from './pages/templatesColllection/Resume5';
import Resume6 from './pages/templatesColllection/Resume6';
import Resume7 from './pages/templatesColllection/Resume7';
import Resume8 from './pages/templatesColllection/Resume8';
import Resume9 from './pages/templatesColllection/Resume9';
import Resume10 from './pages/templatesColllection/Resume10';
import Resume11 from './pages/templatesColllection/Resume11';
import Resume12 from './pages/templatesColllection/Resume12';
import Chat from './pages/Chat';

function App() {

  // Function to download Template1 as PDF at 300 DPI (print resolution)
  const downloadPDF = () => {
    const input = document.getElementById('template1-container'); // Select the Template1 component by its id
    const dpi = 300; // Set DPI to 300 for high resolution

    // A4 dimensions in pixels at 300 DPI
    const a4Width = 2480; // Width in pixels (210mm at 300 DPI)
    const a4Height = 3508; // Height in pixels (297mm at 300 DPI)
    
    html2canvas(input, {
      scale: dpi / 96 // Scale canvas to 300 DPI (default is 96 DPI for screens)
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      
      // Create jsPDF object with A4 size (in mm)
      const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4' // A4 size in millimeters (210 x 297)
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate height to maintain aspect ratio

      let position = 0;
      let heightLeft = imgHeight;

      // Add the first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= 297; // A4 height in mm

      // Add more pages if the content exceeds one page
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= 297;
      }

      // Save the PDF
      pdf.save('template1-high-res-a4.pdf');
    });
  };

  return (
    <div>
      <hr/>
      <div id="template1-container" className="w-11/12 m-auto">
        {/* <Template1 />  */}
         {/* <Resume1/> */}
         {/* <Resume2/> */}
         {/* <Resume3/> */}
         {/* <Resume4/> */}
         {/* <Resume5/> */}
         {/* <Resume6/> */}
         {/* <Resume7/> */}
         {/* <Resume8/> */}
         {/* <Resume9/> */}
         {/* <Resume10/> */}
         {/* <Resume11/> */}
        {/* <Resume12/> */}

        <Chat />
      </div>
      <button 
        onClick={downloadPDF} 
        className="bg-green-600 text-white px-4 py-2 mt-4 rounded hover:bg-green-700"
      >
        Download as PDF (A4, 300 DPI)
      </button>
    </div>
  );
}

export default App;
