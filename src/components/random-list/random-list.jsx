import React from 'react';
import RandomItem from '../random-item/random-item';
import ReadingInterpretation, { SpreadSummary } from '../reading-interpretation/reading-interpretation';
import './random-list.scss';

const positions = ['Past', 'Present', 'What’s next'];

const RandomList = ({ cardData, isDraw }) => {
  if (!isDraw || cardData.length === 0) return null;

  return (
    <section className="reading-results" aria-labelledby="reading-results-title">
      <div className="reading-results-heading">
        <h3 id="reading-results-title">Your spread</h3>
        <p>Tap a card to reveal its meaning.</p>
      </div>
      <SpreadSummary cards={cardData} />
      <div className="reading-grid">
        {cardData.map((card, index) => (
          <article className="reading-position" key={card.number}>
            <p className="position-label"><span>0{index + 1}</span>{positions[index]}</p>
            <RandomItem card={card} />
          </article>
        ))}
      </div>
      <ReadingInterpretation cards={cardData} />
    </section>
  );
};

export default RandomList;
