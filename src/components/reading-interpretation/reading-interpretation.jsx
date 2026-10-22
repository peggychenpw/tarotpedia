import React from 'react';
import './reading-interpretation.scss';

const positions = [
  { title: 'Past', context: 'What you may be carrying forward' },
  { title: 'Present', context: 'What is asking for your attention' },
  { title: 'What’s next', context: 'A direction to consider' }
];

const capitalize = (word = '') => word.charAt(0).toUpperCase() + word.slice(1);

export const SpreadSummary = ({ cards }) => {
  if (!cards || cards.length !== 3) return null;

  const [past, present, next] = cards;
  const themes = [past, present, next].map((card) => capitalize(card.keywords[0]));

  return (
    <div className="spread-summary" aria-label="Themes connected across your spread">
      <span className="summary-symbol" aria-hidden="true">✳</span>
      <div>
        <h4>A thread through your spread</h4>
        <p className="summary-sequence">
          <span><small>PAST</small>{themes[0]}</span>
          <span className="summary-arrow" aria-hidden="true">→</span>
          <span><small>PRESENT</small>{themes[1]}</span>
          <span className="summary-arrow" aria-hidden="true">→</span>
          <span><small>WHAT’S NEXT</small>{themes[2]}</span>
        </p>
        <p className="summary-copy">Notice how these themes may relate to one another as you reflect on your question.</p>
      </div>
    </div>
  );
};

const ReadingInterpretation = ({ cards }) => {
  if (!cards || cards.length !== 3) return null;

  return (
    <section className="interpretation" aria-labelledby="interpretation-title" aria-live="polite">
      <div className="interpretation-heading">
        <p className="eyebrow">A REFLECTIVE READING</p>
        <h3 id="interpretation-title">How the cards connect</h3>
        <p className="interpretation-intro">Read each card through its place in the spread. Together, they offer a perspective to consider—not a fixed prediction.</p>
      </div>

      <div className="interpretation-grid">
        {cards.map((card, index) => (
          <article className="interpretation-card" key={card.number}>
            <p className="interpretation-position"><span>0{index + 1}</span>{positions[index].title}</p>
            <p className="interpretation-context">{positions[index].context}</p>
            <h4>{card.name}</h4>
            <p className="interpretation-keywords">{card.keywords.slice(0, 3).join(' · ')}</p>
            <div className="interpretation-detail">
              <span>CORE THEME</span>
              <p>{card.meanings.light[0]}</p>
            </div>
            <div className="interpretation-detail">
              <span>REFLECTION</span>
              <p>{card.Questions[0]}</p>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
};

export default ReadingInterpretation;
