import React from 'react';
import './CupCard.css';

const CupCard = () => {
  return (
    <div className="cup-card">
      <h2 className="main-heading">World Cup 2024</h2>
      <p className="sub-heading">Pakistan lost by 25 runs</p>

      <div className="team-row">
        <img src="pak.webp" alt="Pakistan Flag" className="flag" />
        <div className="team-details">
          <span className="team-name">Pakistan</span>
          <span className="score">200/5 (20.0 overs)</span>
        </div>
      </div>

      <div className="versus">
        <img src="./versus.webp" alt="" style={{

        }} />
      </div>

      <div className="team-row">
        <img src="ind.webp" alt="India Flag" className="flag" />
        <div className="team-details">
          <span className="team-name">India</span>
          <span className="score">225/9 (20.0 overs)</span>
        </div>
      </div>

      <div className="match-info">
        <p className='venue'>Dubai Stadium, United Arab Emirates</p>
        <p className='timing'>May 28, Sun, 7:30 pm IST</p>
      </div>
    </div>
  );
};

export default CupCard;
