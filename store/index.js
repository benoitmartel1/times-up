export const state = () => ({
  counter: 0,
  players: []
});

export const mutations = {
  increment(state) {
    state.counter++;
  },
  addPlayer(state, newPlayer) {
    state.players.push(newPlayer);
  }
};
