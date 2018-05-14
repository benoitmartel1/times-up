export const state = () => ({
  players: []
});

export const mutations = {
  addPlayer(state, name) {
    state.players.push({
      name: name,
      id: getUniqueId(state.players, "id")
    });
  }
};
