import React, { useState, } from 'react';
import './random-item.scss';


const RandomItem = ({ card }) => {
    const [click, setClick] = useState(false)
    const [itemName, setItemName] = useState('')

    const onFlip = () => {
        setItemName(name)
        setClick(!click)
        console.log(click)
    }


    const { img, keywords, fortune_telling, name } = card
    return (
        <div className="card-container">
            <div className="card-item">

                <div onClick={() => onFlip()}>
                    {click ?
                        <img src={`./cards/${img}`} alt="img" className="image" />
                        :
                        <img src="./cards/back.jpg" alt="img" className="image" />
                    }
                </div>

                {click ?
                    <>
                        <div className="name">{itemName}</div>
                        <div className="keyword-title">{keywords[0]}</div>
                        <div className="fortune">{fortune_telling[0]}</div>
                        <div className="fortune">{fortune_telling[1]}</div>
                    </>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default RandomItem;