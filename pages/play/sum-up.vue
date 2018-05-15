<template>
	<div>
		<navigation :backHref="backHref" :nextHref="nextHref"></navigation>
			<div class="container">
				<div>{{ current.player }}</div>
				<div>{{ current.team }}</div>
				<div class="board">
					<ul id="hit">
						<li v-for="card in hitCards" :key="card.id" :data-id="card.id">
							{{ card.name }}
						</li>
					</ul>
					<ul id="miss">
												<li v-for="card in missedCards" :key="card.id" :data-id="card.id">
							{{ card.name }}
						</li>
					</ul>
				</div>
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
    ...mapGetters({ current:"current",missedCards: "cards/missedCards",hitCards:"cards/hitCards" })
  }
};
</script>
