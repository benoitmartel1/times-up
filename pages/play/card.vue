<template>
<div>
	<app-timer @timesUp="timesUp"></app-timer>
	<app-popup :title="popTitle" :message="popMessage" :showMe="showPopup" @hideMe="closePopup"></app-popup>
	<div v-touch:swipe="missCard" v-touch:tap="hitCard" class="card">
		<h3>
			{{ card.name }}
		</h3>
	</div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import navigation from "~/components/navigation.vue";
import timer from "~/components/timer.vue";
import popup from "~/components/popup.vue";

export default {
  layout: "setup",
  components: {
    "app-timer": timer,
	"app-navigation": navigation,
	    "app-popup": popup
  },
  data() {
    return {
		popMessage: "",
		popTitle: "Time's Up!",
		showPopup:false
	};
  },
  methods: {
    hitCard() {
		console.log('HIT!');
      this.$store.dispatch("cards/hitCard");
    },
	missCard() {
	console.log('SKIPPED!');
      this.$store.dispatch("cards/missCard");
    },
    timesUp(mess) {
		console.log(this.$store.state.cards.gameDeck);

		this.$emit('stopTimer');
		this.popMessage=mess;
		this.showPopup = true;
	},
	closePopup() {
		this.$router.push('/play/sum-up')
    }

  },
  computed: {
	card: function() {
		let currentCard=this.$store.state.cards.gameDeck[0];
		if(currentCard.status==null){
				return currentCard
			}else{
				this.timesUp('Plus de cartes!');
				return {name:''};
			};
		}
  }
};
</script>
<style>
.card{
	width:100vw;
	height:100vh;
}


</style>