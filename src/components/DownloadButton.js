import React from 'react';
import hariCv from '../assets/hariCv.pdf'
import '../App.css';

const DownloadButton = () => {
  const handleDownload = () => {
    const url = process.env.PUBLIC_URL + hariCv;
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'hariCv.pdf'; 
    anchor.click();
  };

  return (
    <button className="DownloadBtn" onClick={handleDownload}> Resume </button>
  );
};

export default DownloadButton;

