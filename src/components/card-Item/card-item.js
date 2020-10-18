import React from 'react';
import './card-item.scss';

const CardItem = ({ card }) => {
    const { img, keywords, fortune_telling, name } = card
    return (
        <div className="card-container">
            <div className="card-item">
                <div className="name">{name}</div>
                <img src={`./cards/${img}`} alt="img" className="image" />
                <div className="keyword-title">{keywords[0]}</div>
                <div className="fortune">{fortune_telling[0]}</div>
                <div className="fortune">{fortune_telling[1]}</div>
            </div>
        </div>
    )
}

export default CardItem;