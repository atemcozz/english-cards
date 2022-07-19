import "./App.css";
import React from "react";
import Card from "./Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      word: "",
      translation: "",
      cards: [],
    };
  }
  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }
  addCard() {
    const newCard = {
      id: 1 + this.state.id,
      value: {
        word: this.state.word.slice(),
        translation: this.state.translation.slice(),
        flipped: false,
      },
    };
    this.setState({
      id: newCard.id,
      word: "",
      translation: "",
      cards: [...this.state.cards, newCard],
    });
  }
  turnCard(id) {
    const cards = [...this.state.cards];
    let index = cards.findIndex((card) => {
      return card.id === id;
    });
    cards[index].value.flipped = !cards[index].value.flipped;
    this.updateInput("cards", cards);
  }
  render() {
    return (
      <div className="App">
        <h1 className="app-title">Карточки английских слов</h1>
        <div className="input__container">
          Добавить карточку
          <br />
          <input
            type="text"
            placeholder="Введите слово"
            value={this.state.word}
            onChange={(event) => this.updateInput("word", event.target.value)}
          />
          <input
            type="text"
            placeholder="Введите слово"
            value={this.state.translation}
            onChange={(event) => {
              this.updateInput("translation", event.target.value);
            }}
          />
          <div
            className="btn add-btn"
            onClick={() => {
              if (this.state.translation !== "" && this.state.word !== "")
                this.addCard();
            }}
          >
            Добавить
          </div>
        </div>
        <div className="cards__container">
          {this.state.cards.map((card) => {
            return <Card card={card} app={this} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
