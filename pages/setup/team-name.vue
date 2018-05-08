<template>
<div>
	<app-title :title="'Équipe '+currentTeamNb"></app-title>
	<app-navigation :backHref="backHref" :nextHref="nextHref"></app-navigation>
	<label for="name"><input type="text" id="name" placeholder="" :val="currentTeamData().name"></label>
	<ul><li v-for="player of currentTeamData().players" :key="player">{{ player.name}}</li></ul>
</div>
</template>

<script>
import title from "~/components/title.vue";
import navigation from "~/components/navigation.vue";

export default {
  layout: "setup",
  components: {
    "app-title": title,
    "app-navigation": navigation
  },
  data() {
    return {
      teams: this.$store.state.teams.teams,
      currentTeam: 0,
      backHref: "#",
      nextHref: "#"
    };
  },
  methods: {
    currentTeamData() {
      return this.teams[this.currentTeam];
    },
    setTeamName(name) {
      this.$store.commit("teams/setName", {
        id: this.currentTeam,
        name: name
      });
    }
  },
  computed: {
    currentTeamNb: function() {
      return this.currentTeam + 1;
    }
  },
  mounted() {
    $("#next").click(
      function(e) {
        e.preventDefault();
        this.setTeamName($("input#name").val());
        $("input#name").val("");
        this.currentTeam++;
        if (this.currentTeam == this.teams.length) {
          this.$router.push("settings");
        }
      }.bind(this)
    );
    $("#back").click(
      function(e) {
        e.preventDefault();
        this.currentTeam--;
        if (this.currentTeam < 0) {
          this.$router.push("teams");
        }
      }.bind(this)
    );
  }
};
</script>
