import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.jsx'
import CardData from "./tarot-data"
import SearchField from './components/search-field/serch-field'
import RandomList from "./components/random-list/random-list"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cardData: CardData,
      searchField: "",
      shuffleArr: [],
      isDraw: false
    }
  }


  getRandomThree = () => {
    let randomArr = [];
    while (randomArr.length < 3) {
      let r = Math.floor(Math.random() * this.state.cardData.length);
      if (randomArr.indexOf(r) === -1) randomArr.push(r);
    }
    this.setState({ shuffleArr: randomArr })
    this.setState({ isDraw: true })
    // console.log(randomArr)
  }

  render() {
    const { cardData, searchField, shuffleArr, isDraw } = this.state

    const filteredCard = cardData.filter((card) =>
      card.name.toLowerCase().includes(searchField.toLowerCase()) || card.keywords[0].toLowerCase().includes(searchField.toLowerCase())
    );
    const randomCard = cardData.filter((card) => card.number === String(shuffleArr[0]) || card.number === String(shuffleArr[1]) || card.number === String(shuffleArr[2]))

    return (
      <div className="App">
        <div className="header">
          <div className="tarotpedia" >Tarotpedia</div>
        </div>

        <div className="shuffle-box">
          <div className="shuffle-title">Close your eyes, reflect, ask yourself a question. Then click the button to get your cards.</div>
          <button className='shuffle-button' onClick={() => this.getRandomThree()} >{randomCard.length ? 'DRAW AGAIN' : 'GET YOUR CARDS'}</button>
          <RandomList cardData={randomCard} isDraw={isDraw} />
        </div>

        <SearchField
          placeholder='Search for Cards'
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList cardData={filteredCard} />
      </div>

    )
  }
}

export default App;
