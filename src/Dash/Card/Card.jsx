import React from 'react';
import './Card.css';

function Card({ title, author, time, date }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
      <div className="card-footer">
        <span>{author}</span>
        <span>{time}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

export default Card;
