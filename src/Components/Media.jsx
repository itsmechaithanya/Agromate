import React from 'react';

function Media() {
  return (
    <div className='pt-[11vh]'>
      <div className='h-[50vh] flex items-center pl-[5vw]'>
        <h1 className='capitalize text-[4.5vw] font-bold text-[#2F2F69]'>
          Media, Newspapers  <br /> and more<i className="ri-arrow-right-down-line"></i>
        </h1>
      </div>
      <div className='px-[5vw] bg-slate-100 pt-[5vw] pb-[1vw] rounded-t-[5vw]'>
        <h1 className='mb-[3vh] font-medium text-[1.8vw]'>5th October 2018: HMTV Agri Program</h1>
        <div className='video w-[90vw] h-[90vh]'>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/sgV_pGWl2Hs"
            title="Agromate Media Coverage"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h1 className='mb-[3vh] mt-[7vh]  font-medium text-[1.8vw]'>21st April 2015: TV5 Annapurna Program</h1>
        <div className='video w-[90vw] h-[90vh]'>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/hyn39cypGGo"
            title="Agromate Media Coverage"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='video w-[90vw] h-[90vh] mt-[3vh]'>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TkyRhznQgBU"
            title="Agromate Media Coverage"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h1 className='mb-[3vh] mt-[7vh] font-medium text-[1.8vw]'>11th April 2015: TV5 News - TV5 Business Leaders 2015 Agromate</h1>
        <div className='video w-[90vw] h-[90vh]'>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VBA5HwoKiow"
            title="Agromate Media Coverage"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Media;