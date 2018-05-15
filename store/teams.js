export const state = () => ({
  teams: null,
  nbOfTeams: 2
});

export const mutations = {
  setTeamNumber(state, nb) {
    state.nbOfTeams = nb;
  },
  setName(state, payload) {
    state.teams[payload.id].name = payload.name;
  },
  split(state, players) {
    //clear created teams
    state.teams = [];
    var nb = state.nbOfTeams;

    //create empty team arrays
    for (var n = 0; n < nb; n++) {
      var name = n + 1;

      state.teams[n] = {
        name: name.toString(),
        players: [],
        hitCards: [],
        nextPlayer: 0
      };
    }

    //Shuffle players
    let tempPlayers = Object.assign([], players);
    let shuffledPlayers = shuffle(tempPlayers);

    //Distribute players to teams
    var t = 0;
    for (var p = 0; p < shuffledPlayers.length; p++) {
      t = Math.floor(p / (shuffledPlayers.length / nb));
      state.teams[t].players.push(shuffledPlayers[p]);
    }
  }
};

export const actions = {
  newTeamNumber(state, payload) {
    state.commit("setTeamNumber", payload.nb);
    state.commit("split", payload.players);
  }
};
