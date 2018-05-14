export const state = () => ({
  teams: null,
  nbOfTeams: 2
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
    console.log(nb);
    //create empty team arrays
    for (var n = 0; n < nb; n++) {
      var name = n + 1;

      state.teams[n] = { name: name.toString(), players: [] };
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
    console.log("PLAYERS ARE" + payload.nb);
    state.commit("setTeamNumber", payload.nb);
    state.commit("split", payload.players);
  }
};
