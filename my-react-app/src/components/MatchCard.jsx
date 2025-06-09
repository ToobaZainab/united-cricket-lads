import React from 'react';
import './MatchCard.css'; // We'll create this CSS file next

const MatchCard = () => {
  return (
    <div className="match-card">
    <div className="match-about " style={{ 
        backgroundImage: "url('card.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white' ,
       borderTopLeftRadius : '.5rem',
       borderTopRightRadius : '.5rem',
      //  filter : 'blur(1px)',
      display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '1rem'

      }}>
    <div className="league-name">United Cricket League</div>
      
      <div className="match-details " >
        <div className="match-date-time">June 11, 2024 at 7:30pm</div>
        <div className="match-venue">Debat International Stadium</div>
      </div>
    </div>
   
      <div className="teams-info">
      <div className="teams">
        <div className="team">
          <div className="country-flag"><img src="./r3.webp" alt="" style={{ width: '50px', height: '50px' }} /></div>
          <div className="team-name">New Zealand</div>
        </div>
        
        <div className="vs">vs</div>
        
        <div className="team">
          <div className="country-flag"><img src="./r4.webp" alt=""   style={{ width: '50px', height: '50px' }}/></div>
          <div className="team-name">South Africa</div>
        </div>
      </div>
      <div className="view-btn">
      <button className="view-details-btn" style={{
    display: 'flex',
    alignItems: 'center',
    textAlign : 'center',
    justifyContent : 'center',
    gap: '8px'
  }} >View Details <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="font-semibold" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path></svg></button>
      </div>
      </div>
     
     
    </div>
  );
};

export default MatchCard;