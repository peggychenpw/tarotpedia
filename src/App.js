import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.jsx'
import CardData from "./tarot-data"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cardData: CardData
    }
  }

  render() {
    const { cardData } = this.state
    return (
      <div className="App">
        <CardList cardData={cardData} />
      </div>
    )
  }
}

export default App;
