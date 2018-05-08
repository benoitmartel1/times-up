export const state = () => ({
  teams: []
});

export const mutations = {
  createTeams(state, teams) {
    state.teams = [];
    for (let team of teams) {
      state.teams.push({
        name: team.name,
        players: team.players,
        hitCards: [],
        nextPlayer: 0
      });
    }
  },
  setName(state, payload) {
    console.log(payload);
    state.teams[payload.id].name = payload.name;
  }
};
