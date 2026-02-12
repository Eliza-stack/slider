'use client';

import { useState } from 'react';
import scss from './Slider.module.scss';
import { ArrowRightIcon, ArrowLeftIcon } from '../../assets/image';

function Slider() {
  const books = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  const CARD_WIDTH = 295 + 15;
  const VISIBLE_CARDS = 4;

  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(books.length - VISIBLE_CARDS, 0);

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className={scss.carusel}>
      <div className={scss.carusel__item1}>
        <h2 className={scss.carusel__title}>Carusel</h2>

        <div className={scss.carusel__buttons}>
          <button
            className={scss.carusel__button}
            onClick={handlePrev}
            disabled={index === 0}
          >
            <ArrowLeftIcon />
          </button>

          <button
            className={scss.carusel__button}
            onClick={handleNext}
            disabled={index === maxIndex}
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>

      <div className={scss.carusel__item2}>
        <div
          className={scss.track}
          style={{
            transform: `translateX(-${index * CARD_WIDTH}px)`
          }}
        >

          {books.map((card) => (
            <div className={scss.card} key={card.id}>
              {card.id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
