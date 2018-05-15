var cards = require("../assets/json/cards.json");

export const state = () => ({
  masterDeck: [],
  gameDeck: [],
  missedDeck: []
});

export const mutations = {
  initMasterDeck(state) {
    console.log(state.masterDeck);
    //Filter by state.settings.tags
    //Narrow by state.settings.deckSize
    //push to masterdeck

    state.masterDeck = cards.slice(0);
    state.masterDeck = shuffle(state.masterDeck);
  },
  fillGameDeck(state) {
    //Prepare deck for round

    shuffle(state.masterDeck);
    state.gameDeck = state.masterDeck.slice(0);
    state.gameDeck.forEach(function(obj) {
      obj.status = null;
    });
  },
  markCard(state, mark) {
    state.gameDeck[0].status = mark;
  },
  skipCard(state) {
    for (let i = 0; i < state.gameDeck.length; i++) {
      if (state.gameDeck[0].status == null) {
        break;
      } else {
        state.gameDeck.push(state.gameDeck.shift());
      }
    }
  }
};
export const actions = {
  missCard(state) {
    state.commit("markCard", 0);
    state.commit("skipCard");
  },
  hitCard(state) {
    state.commit("markCard", 1);
    state.commit("skipCard");
  }
};
export const getters = {
  missedCards(state) {
    return state.gameDeck.filter(card => card.status == 0);
  },
  hitCards(state) {
    return state.gameDeck.filter(card => card.status == 1);
  }
};
