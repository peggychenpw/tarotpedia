import React, { useState } from 'react';
import './random-item.scss';

const RandomItem = ({ card }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className={`reading-card ${isRevealed ? 'is-revealed' : ''}`}>
      <button
        className="reading-card-image-button"
        type="button"
        onClick={() => setIsRevealed((revealed) => !revealed)}
        aria-label={isRevealed ? `Hide ${card.name}` : `Reveal ${card.name}`}
        aria-pressed={isRevealed}
      >
        <img
          src={isRevealed ? `./cards/${card.img}` : './cards/back.jpg'}
          alt={isRevealed ? card.name : 'Face-down tarot card'}
          className="reading-card-image"
          loading="lazy"
          decoding="async"
        />
      </button>
      {isRevealed ? (
        <div className="reading-card-copy" aria-live="polite">
          <h4>{card.name}</h4>
          <p className="reading-card-keyword">{card.keywords.slice(0, 3).join(' · ')}</p>
          <p>{card.fortune_telling[0]}</p>
        </div>
      ) : <p className="reveal-hint">Tap to reveal</p>}
    </div>
  );
};

export default RandomItem;
