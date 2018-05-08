<template>
<div>
	<navigation :backHref="backHref" :nextHref="nextHref"></navigation>
	<ul class="team" v-for="(team, index) in tempTeams" :key="team">Équipe {{ ++index }}
		<li v-for="player in team.players" :key="player">{{ player.name }}</li>
	</ul>
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
      nextHref: "team-name"
    };
  },
  computed: {
    tempTeams: function() {
      var teamNb = 2;
      var tempTeams = [];
      for (var n = 0; n < teamNb; n++) {
        var name = n + 1;
        tempTeams[n] = { name: name.toString(), players: [] };
      }
      var t = 0;
      shuffle(this.players);
      for (var p = 0; p < this.players.length; p++) {
        t = Math.floor(p / (this.players.length / teamNb));
        tempTeams[t].players.push(this.players[p]);
      }
      return tempTeams;
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("teams/createTeams", this.tempTeams);
    next();
  }
};
</script>
