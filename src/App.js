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
      isDraw: false,
      isLoading: false,
      isDarkMode: localStorage.getItem('tarotDarkMode') === 'true' || true
    }
  }

  componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.isDarkMode ? 'dark' : 'light')
  }

  toggleTheme = () => {
    const newDarkMode = !this.state.isDarkMode
    this.setState({ isDarkMode: newDarkMode })
    localStorage.setItem('tarotDarkMode', newDarkMode)
    document.documentElement.setAttribute('data-theme', newDarkMode ? 'dark' : 'light')
  }

  getRandomThree = () => {
    this.setState({ isLoading: true })
    setTimeout(() => {
      let randomArr = [];
      while (randomArr.length < 3) {
        let r = Math.floor(Math.random() * this.state.cardData.length);
        if (randomArr.indexOf(r) === -1) randomArr.push(r);
      }
      this.setState({ shuffleArr: randomArr })
      this.setState({ isDraw: true })
      this.setState({ isLoading: false })
    }, 600)
  }

  withdrawCard = () => {
    this.setState({ shuffleArr: [] })
    this.setState({ isDraw: false })
  }

  render() {
    const { cardData, searchField, shuffleArr, isDraw, isLoading, isDarkMode } = this.state

    const filteredCard = cardData.filter((card) =>
      card.name.toLowerCase().includes(searchField.toLowerCase()) || card.keywords[0].toLowerCase().includes(searchField.toLowerCase())
    );
    const randomCard = cardData.filter((card) => card.number === String(shuffleArr[0]) || card.number === String(shuffleArr[1]) || card.number === String(shuffleArr[2]))

    return (
      <div className="App">
        <div className="header">
          <div className="tarotpedia" >Tarotpedia</div>
          <button className="theme-toggle" onClick={this.toggleTheme} title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <div className="shuffle-box">
          <div className="shuffle-title">Close your eyes, reflect, ask yourself a question. Then click the button to get your cards.</div>
          <div className="button-container">
            <button className={`shuffle-button ${isLoading ? 'loading' : ''}`} onClick={() => this.getRandomThree()} disabled={isLoading}>
              {isLoading ? <span className="spinner"></span> : (randomCard.length ? 'DRAW AGAIN' : 'GET YOUR CARDS')}
            </button>
            {isDraw && <button className='withdraw-button' onClick={() => this.withdrawCard()}>WITHDRAW</button>}
          </div>
          <RandomList cardData={randomCard} isDraw={isDraw} />
        </div>

        <div className="search-section">
          <SearchField
            placeholder='Search for Cards'
            handleChange={(e) => this.setState({ searchField: e.target.value })}
          />
          {searchField && <div className="search-result-info">{filteredCard.length} card{filteredCard.length !== 1 ? 's' : ''} found</div>}
        </div>
        <CardList cardData={filteredCard} />
      </div>

    )
  }
}

export default App;
