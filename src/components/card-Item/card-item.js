import React from 'react';
import './card-item.scss';

const CardItem = ({ card }) => (
  <article className="tarot-card">
    <div className="card-meta">
      <span>{card.arcane === 'Major Arcana' ? 'MAJOR ARCANA' : card.suit.toUpperCase()}</span>
      <span>{card.number.padStart(2, '0')}</span>
    </div>
    <img
      src={`./cards/${card.img}`}
      alt={card.name}
      className="tarot-image"
      loading="lazy"
      decoding="async"
    />
    <div className="tarot-card-copy">
      <h3 className="tarot-name">{card.name}</h3>
      <p className="tarot-keywords">{card.keywords.slice(0, 3).join(' · ')}</p>
      <div className="tarot-message">
        <span>UPRIGHT MESSAGE</span>
        <p>{card.fortune_telling[0]}</p>
      </div>
    </div>
  </article>
);

export default CardItem;
