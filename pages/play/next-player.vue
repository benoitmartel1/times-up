<template>
	<div>
		<navigation :backHref="backHref" :nextHref="nextHref"></navigation>
			<div class="container">
				<div>Au tour de : {{ current.player }}</div>
				<div>de l'équipe des : {{ current.team }}</div>
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
      nextHref: "/play/card"
    };
  },
  computed: {
    ...mapGetters({ current: "current" })
  }
};
</script>
