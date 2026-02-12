import React from 'react';
import scss from './Platform.module.scss';
import Card from './card/Card';

const cards = [
  { id: 1, title: 'One' },
  { id: 2, title: 'Two' },
  { id: 3, title: 'Three' },
];

function Platform() {
  return (
    <div className={scss.platform}>
      <div className={scss.platform__header}>
        <h1 className={scss.platform__title}>Платформы</h1>
        <p className={scss.platform__description}>
          Электронная библиотека содержит учебники и пособия по школьным
          предметам Кыргызской Республики. Бесплатно, без регистрации, доступна
          на 4 языках и регулярно обновляется.
        </p>
      </div>

      <div className={scss.platform__cards}>
        {cards.map((card) => (
          <Card key={card.id} title ={card.title} />
        ))}
      </div>
    </div>
  );
}

export default Platform;
