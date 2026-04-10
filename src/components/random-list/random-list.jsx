import React from 'react';
import '../../tarot-data';
import RandomItem from '../random-Item /random-item';

import "../random-list/random-list.scss"

const RandomList = ({ cardData, isDraw }) => {

    return (
        <div className="random-list-wrapper">
            {isDraw === true && cardData.length > 0 ? (
                <>
                    <div className="labels-row">
                        <div className="label">PAST</div>
                        <div className="label">PRESENT</div>
                        <div className="label">FUTURE</div>
                    </div>
                    <div className="card-list">
                        {cardData.map((card, index) => (
                            <RandomItem key={"key" + String(card.number)} card={card} />
                        ))}
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default RandomList;
