<template>
<div>
	<navigation :backHref="backHref" :nextHref="nextHref"></navigation>
	<ul class="team" v-for="(team, index) in teams" :key="team.name">Équipe {{ ++index }}
		<li v-for="player in team.players" :key="player.name">{{ player.name }}</li>
	</ul>
	<button id="shuffle" @click="doShuffle">Shuffle</button>
	<button v-if="enoughPlayers()" id="2"  @click="changeTeamNumber(2)">2</button>
	<button v-if="enoughPlayers()" id="3" @click="changeTeamNumber(3)">3</button>
</div>
</template>

<script>
import navigation from "~/components/navigation.vue";

export default {
  layout: "setup",
  components: { navigation },
  data() {
    return {
      players: this.$store.state.players,
      backHref: "players",
      nextHref: "team-name",
      nbOfTeam: this.$store.state.teams.nbOfTeams
    };
  },
  methods: {
    enoughPlayers() {
      return this.$store.state.players.length > 5;
    },
    doShuffle() {
      this.$store.commit("teams/split", this.players);
    },
    changeTeamNumber(nb) {
      var players = this.players;
      this.$store.dispatch("teams/newTeamNumber", { nb, players });
    }
  },
  computed: {
    teams: function() {
      return this.$store.state.teams.teams;
    }
  }
};
</script>
