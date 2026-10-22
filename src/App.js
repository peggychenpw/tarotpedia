import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.jsx';
import CardData from './tarot-data';
import SearchField from './components/search-field/serch-field';
import RandomList from './components/random-list/random-list';

const filters = [
  { label: 'All cards', value: 'all' },
  { label: 'Major Arcana', value: 'Major Arcana' },
  { label: 'Cups', value: 'Cups' },
  { label: 'Pentacles', value: 'Pentacles' },
  { label: 'Swords', value: 'Swords' },
  { label: 'Wands', value: 'Wands' }
];

class App extends React.Component {
  constructor() {
    super();
    const savedTheme = localStorage.getItem('tarotDarkMode');
    this.state = {
      cardData: CardData,
      searchField: '',
      activeFilter: 'all',
      shuffleArr: [],
      isDraw: false,
      isLoading: false,
      isDarkMode: savedTheme === null ? true : savedTheme === 'true'
    };
  }

  componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.isDarkMode ? 'dark' : 'light');
  }

  toggleTheme = () => {
    const isDarkMode = !this.state.isDarkMode;
    this.setState({ isDarkMode });
    localStorage.setItem('tarotDarkMode', String(isDarkMode));
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  };

  getRandomThree = () => {
    if (this.state.isLoading) return;
    this.setState({ isLoading: true });
    window.setTimeout(() => {
      const deck = [...this.state.cardData];
      const draw = [];
      while (draw.length < 3 && deck.length) {
        const index = Math.floor(Math.random() * deck.length);
        draw.push(deck.splice(index, 1)[0].number);
      }
      this.setState({ shuffleArr: draw, isDraw: true, isLoading: false });
    }, 450);
  };

  withdrawCard = () => this.setState({ shuffleArr: [], isDraw: false });

  render() {
    const { cardData, searchField, activeFilter, shuffleArr, isDraw, isLoading, isDarkMode } = this.state;
    const query = searchField.trim().toLowerCase();
    const filteredCards = cardData.filter((card) => {
      const matchesSearch = !query || [card.name, card.arcane, card.suit, ...card.keywords]
        .some((value) => value.toLowerCase().includes(query));
      const matchesFilter = activeFilter === 'all'
        || (activeFilter === 'Major Arcana' ? card.arcane === activeFilter : card.suit === activeFilter);
      return matchesSearch && matchesFilter;
    });
    const readingCards = shuffleArr
      .map((number) => cardData.find((card) => card.number === number))
      .filter(Boolean);

    return (
      <div className="App">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Tarotpedia home">
            <span className="brand-symbol" aria-hidden="true">✳</span>
            <span className="brand-word">Tarotpedia<span className="brand-subtitle">THE LANGUAGE OF THE CARDS</span></span>
          </a>
          <nav className="header-nav" aria-label="Main navigation">
            <a href="#reading">Daily reading</a>
            <a href="#library">Card library</a>
            <button
              className="theme-toggle"
              onClick={this.toggleTheme}
              type="button"
              aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
              aria-pressed={isDarkMode}
              title={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <span aria-hidden="true">{isDarkMode ? '☼' : '☾'}</span>
            </button>
          </nav>
        </header>

        <main id="main-content">
          <section className="hero" id="top" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-rule" />A QUIETER WAY TO FIND CLARITY</p>
              <h1 id="hero-title">Let the cards<br /><em>open a new perspective.</em></h1>
              <p className="hero-description">A thoughtful guide to the 78 cards of tarot. Explore their symbols, discover their meanings, or pause for a three-card reading.</p>
              <a className="hero-link" href="#library">Explore the card library <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="hero-star">✳</div>
              <div className="hero-card hero-card-back"><img src="./cards/back.jpg" alt="" /></div>
              <div className="hero-card hero-card-front"><img src="./cards/m17.jpg" alt="" /></div>
              <span className="hero-art-caption">MAJOR ARCANA · XVII</span>
            </div>
          </section>

          <section className="reading-section" id="reading" aria-labelledby="reading-title">
            <div className="reading-intro">
              <p className="eyebrow">A MOMENT FOR YOURSELF</p>
              <h2 id="reading-title">Your three-card reading</h2>
              <p>Take a breath. Hold a question in mind, then draw a card for the past, present, and what may come next.</p>
            </div>
            <div className="reading-actions">
              <button className="draw-button" type="button" onClick={this.getRandomThree} disabled={isLoading}>
                {isLoading ? <><span className="spinner" aria-hidden="true" /> Drawing your cards</> : isDraw ? 'Draw again' : 'Draw three cards'}
                {!isLoading && <span aria-hidden="true">↗</span>}
              </button>
              {isDraw && <button className="clear-button" type="button" onClick={this.withdrawCard}>Clear reading</button>}
            </div>
            <RandomList cardData={readingCards} isDraw={isDraw} />
          </section>

          <section className="library-section" id="library" aria-labelledby="library-title">
            <div className="library-heading">
              <div>
                <p className="eyebrow">THE COMPLETE DECK</p>
                <h2 id="library-title">Explore the cards</h2>
                <p className="library-description">Browse a card, or search by name, suit, and keyword.</p>
              </div>
              <span className="deck-count">78 <span>CARDS</span></span>
            </div>

            <div className="library-tools">
              <SearchField
                placeholder="Search cards or keywords"
                value={searchField}
                handleChange={(event) => this.setState({ searchField: event.target.value })}
              />
              <div className="filter-list" role="group" aria-label="Filter cards by arcana or suit">
                {filters.map((filter) => (
                  <button
                    className={`filter-chip ${activeFilter === filter.value ? 'is-active' : ''}`}
                    type="button"
                    key={filter.value}
                    aria-pressed={activeFilter === filter.value}
                    onClick={() => this.setState({ activeFilter: filter.value })}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <p className="search-result-info" aria-live="polite">
              {query || activeFilter !== 'all' ? `${filteredCards.length} ${filteredCards.length === 1 ? 'card' : 'cards'} shown` : '78 cards in the deck'}
            </p>
            {filteredCards.length ? <CardList cardData={filteredCards} /> : (
              <div className="empty-state"><span aria-hidden="true">✳</span><p>No cards found. Try another name or keyword.</p></div>
            )}
          </section>
        </main>

        <footer className="site-footer">
          <a className="footer-brand" href="#top">Tarotpedia <span>✳</span></a>
          <p>A space to study the symbols, stories, and meanings of tarot.</p>
          <a className="footer-top" href="#top">Back to top ↑</a>
        </footer>
      </div>
    );
  }
}

export default App;
