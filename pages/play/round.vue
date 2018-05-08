<template>
<div>
	<navigation :nextHref="nextHref"></navigation>
	<div>Round {{ current.round }}</div>
	<div>Au tour des : {{nextTeam }}</div>
</div>
</template>

<script>
import navigation from "~/components/navigation.vue";

export default {
  layout: "play",
  components: { navigation },
  data() {
    return {
      current: this.$store.state.gameflow.current,
      //backHref: "team-name",
      nextHref: "/play/next-player"
    };
  },
  computed: {
    nextTeam: function() {
      return this.$store.state.teams.teams[this.current.team].name;
    }
  },

  mounted() {
    this.$store.commit("cards/fillGameDeck");
  }
};
</script>
