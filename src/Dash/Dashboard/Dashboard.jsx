import React from 'react';
import './Dashboard.css';
import Card from './Card';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="date">5 August 2024</div>
      <div className="cards">
        <Card 
          title="Congratulations to everyone, we have finished creating the weayaa.uz site!" 
          author="Tommy Kim"
          time="10:55 AM" 
          date="25 August 2024" 
        />
        <Card 
          title="I invite everyone to lunch tomorrow!" 
          author="Seunghyun Lee"
          time="3:55 PM" 
          date="7 September 2024" 
        />
        <div className="add-card">
          <span>+</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
