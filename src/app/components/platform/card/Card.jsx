import React from 'react';
import scss from './Card.module.scss';

function Card({ title }) {
  return <div className={scss.card}>{title}</div>;
}

export default Card;
