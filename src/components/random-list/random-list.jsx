import React from 'react';
import '../../tarot-data';
import RandomItem from '../random-Item /random-item';

import "../random-list/random-list.scss"

const RandomList = ({ cardData, isDraw }) => {

    return (
        <div className="card-list">
            {isDraw === true ?
                <>
                    <div style={{ marginBottom: "10px" }}>PAST</div>
                    <div style={{ marginBottom: "10px" }}>PRESENT</div>
                    <div style={{ marginBottom: "10px" }}>FUTURE</div>
                </>
                :
                null
            }
            {cardData.map((card, index) => (
                <RandomItem key={"key" + String(card.number)} card={card} />
            ))
            }
        </div>

    )
}

export default RandomList;
