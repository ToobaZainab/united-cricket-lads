
import React from 'react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import MatchCard from './MatchCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
// import './UpcomingMatches.css'
import './TeamRanking.css'
import AusTeam from './AusTeam';
import PakTeam from './PakTeam';
import IndTeam from './IndiaTeam';
import EngTeam from './EngTeam';
import NewTeam  from './NewTeam'
const TeamRanking = () => {
  return (
    <div className= 'upcoming-matches-container'>
    <h2 style={{
    fontSize : '24px',
    fontWeight : '700',
    marginBottom : '10px',
    color : '#1c1c1c'
  }}>Team Rankings</h2>
 

<div className="custom-swiper-wrapper">
<div className="custom-button-prev"  >
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path></svg>
</div>
    <Swiper
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={4}
      navigation={{
    nextEl: '.custom-button-next',
    prevEl: '.custom-button-prev',
  }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      slidesPerGroup={2}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      breakpoints={{
        0: {
  slidesPerView: 1,
  slidesPerGroup: 1,
},
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween : 10
          },
          480: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween : 10
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween : 10
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween : 10
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 1,
          },
        }}
    >
   
    
      <SwiperSlide>
        <PakTeam/>
      </SwiperSlide>
      <SwiperSlide>
      <IndTeam/>
      </SwiperSlide>
      <SwiperSlide>
      <AusTeam/>
      </SwiperSlide>
      <SwiperSlide>
      <EngTeam/>
      </SwiperSlide>
      <SwiperSlide>
      <NewTeam/>
      </SwiperSlide>
     
    </Swiper>
    <div className="custom-button-next">
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
    </div>
  </div>
  </div>
  )
}

export default TeamRanking
