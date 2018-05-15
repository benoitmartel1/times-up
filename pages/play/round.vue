<template>
<div>
	<navigation :nextHref="nextHref"></navigation>
	<div class="container">
		<h4>Round {{ round }}</h4>
		<div class="rules">Règlements sur le Round {{ round }}</div>
	</div>
	
</div>
</template>

<script>
import { mapGetters } from "vuex";
import navigation from "~/components/navigation.vue";

export default {
  layout: "play",
  components: { navigation },
  data() {
    return {
      //backHref: "team-name",
      nextHref: "/play/next-player"
    };
  },
  computed: {
    ...mapGetters({ round: "currentRound" })
  },
  mounted() {
	this.$store.commit("cards/fillGameDeck");
	console.log(this.$store.state.cards.masterDeck)
  }
};
</script>