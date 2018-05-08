export const state = () => ({
  masterDeck: [1, 2, 3],
  gameDeck: [],
  missedDeck: []
});

export const mutations = {
  add(state, card) {
    state.deck.push(card);
    console.log(state.deck);
  },
  initMasterDeck(state) {
    //Filter by state.settings.tags
    //Narrow by state.settings.deckSize
    //push to masterdeck
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
