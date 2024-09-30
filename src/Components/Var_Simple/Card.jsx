import React from "react";
import "./card.css";

export default function Card({ title, price, speed, headColor, mainColor }) {
  return (
    <div className="card">
      <p className={`card__header ${headColor}`}>{title}</p>
      <div className={`card__price ${mainColor}`}>
        <p>руб</p>
        <p>{price}</p>
        <p>/мес</p>
      </div>
      <p className="card__speed">до {speed} Мбит/сек</p>
      <p className="card__footer">Объем включенного трафика не ограничен</p>
    </div>
  );
}
