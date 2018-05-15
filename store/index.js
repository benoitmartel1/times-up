export const state = () => ({
  players: [],
  current: {
    round: 0,
    team: 0
  }
});

export const mutations = {
  addPlayer(state, name) {
    state.players.push({
      name: name,
      id: getUniqueId(state.players, "id")
    });
  }
};

export const getters = {
  currentRound(state) {
    let round = state.current.round + 1;
    return round;
  },
  current(state) {
    let currTeam = state.teams.teams[state.current.team];
    let teamName = currTeam.name;
    let playerName = currTeam.players[0].name;
    return { player: playerName, team: teamName };
  }
};
