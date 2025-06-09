import React from 'react'
import "./LatestNew.css"
const LatestNews = () => {
  return (
  <div className="mx-[0px] lg:mx-[80px] px-[16px] py-[48px] ">
  <div className="top-sec">
  <h1 className='latest-news'>Latest News</h1>
  <h2 className='view-more'>View More <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></h2>
  </div>
  
<div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
      
      {/* Left Column */}
      <div className='w-full'>
        <img src="./blo2.webp" alt="" className="w-full h-[344px] object-cover" />
        <h2 className='img1-heading'>Dube smashes this and that - doing it with style</h2>
        <p className='img1-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit Quaerat sequi praesentium veniam a sit obcaecati.</p>
        <p className='news-timing'>7h ago by Aneeb Shahid</p>
      </div>

      {/* Right Column with Grid Items */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full'>
        <div className="w-full">
          <img src="./m.webp" alt="" className="w-full h-[344px] md:h-[160px] object-cover" />
          <h3 className='news-description'>Pakistan Vs India World Cup Match</h3>
          <p className='news-timing'>7h ago by Aneeb Shahid</p>
        </div>
        <div className="w-full">
          <img src="./sg.webp" alt="" className="w-full h-[344px] md:h-[160px] object-cover" />
          <h3 className='news-description'>Pakistan Vs India World Cup Match</h3>
          <p className='news-timing'>7h ago by Aneeb Shahid</p>
        </div>
        <div className="w-full">
          <img src="./blo2.webp" alt="" className="w-full h-[344px] md:h-[160px] object-cover" />
          <h3 className='news-description'>Pakistan Vs India World Cup Match</h3>
          <p className='news-timing'>7h ago by Aneeb Shahid</p>
        </div>
        <div className="w-full">
          <img src="./blo2.webp" alt="" className="w-full h-[344px] md:h-[160px] object-cover" />
          <h3 className='news-description'>Pakistan Vs India World Cup Match</h3>
          <p className='news-timing'>7h ago by Aneeb Shahid</p>
        </div>
      </div>
    </div>
  </div>
    
    
  )
}

export default LatestNews
