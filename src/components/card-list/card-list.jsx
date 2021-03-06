import React from 'react';
import '../../tarot-data';
import CardItem from '../card-Item/card-item';
import "../card-list/card-list.scss"

const CardList = ({ cardData }) => {
    return (
        <div className="card-list">
            {cardData.map((card, index) => (
                <CardItem key={"key" + String(card.number)} card={card} />
            ))
            }
        </div>

    )
}

export default CardList;
