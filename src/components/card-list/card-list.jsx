import React from 'react';
import CardItem from '../card-Item/card-item';
import './card-list.scss';

const CardList = ({ cardData }) => (
  <section className="card-list" aria-label="Tarot cards">
    {cardData.map((card) => <CardItem key={card.number} card={card} />)}
  </section>
);

export default CardList;
