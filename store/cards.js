var cards = require("../assets/json/cards.json");

export const state = () => ({
  masterDeck: [],
  gameDeck: [],
  missedDeck: []
});

export const mutations = {
  add(state, card) {
    state.deck.push(card);
    console.log(state.deck);
  },
  initMasterDeck(state) {
    console.log(state.masterDeck);
    //Filter by state.settings.tags
    //Narrow by state.settings.deckSize
    //push to masterdeck
    state.masterDeck = shuffle(cards);
    console.log(state.masterDeck);
  },
  fillGameDeck(state) {
    //Prepare deck for round
    shuffle(state.masterDeck);
    state.gameDeck = state.masterDeck;
  },
  skipCard() {
    //envoyer la 1ere carte du game deck a
  },
  clearMissedDeck() {
    //retourner missed to game
  }
};
