import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.jsx'
import CardData from "./tarot-data"
import SearchField from './components/search-field/serch-field'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cardData: [],
      searchField: ""
    }
  }

  componentDidMount() {
    this.setState({
      cardData: CardData
    })
  }


  render() {
    const { cardData, searchField } = this.state
    const filteredCard = cardData.filter((card) =>
      card.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <div className="header">
          <div className="tarotpedia">Tarotpedia</div>
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
