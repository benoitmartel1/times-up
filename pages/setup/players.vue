<template>
	<div class="content">
		<app-title :title="title"></app-title>
		<app-navigation :backHref="backHref" :nextHref="nextHref"></app-navigation>
		<app-popup :title="popTitle" :message="popMessage" :showMe="showPopup" @hideMe="closePopup"></app-popup>
		<input type="text"><span id="add-player" class="add-btn">+</span>
		<ul id="players-list">
			<li v-if="players.length > 0" v-for="player in players" :key="player.id" :data-id="player.id">
				{{ player.name }}
			</li>
		</ul>
	</div>
</template>

<script>
import title from "~/components/title.vue";
import navigation from "~/components/navigation.vue";
import popup from "~/components/popup.vue";

var jsonfile = require("jsonfile");
var players = require("~/assets/json/players.json");
var playerIdCounter = 0;

export default {
  layout: "setup",
  components: {
    "app-title": title,
    "app-navigation": navigation,
    "app-popup": popup
  },
  data() {
    return {
      players: this.$store.state.players,
      backHref: "/",
      nextHref: "teams",
      title: "Qui joue?",
      popMessage: "Pas assez de joueurs!",
      popTitle: "Erreur",
      showPopup: false
    };
  },
  methods: {
    closePopup() {
      this.showPopup = false;
    },
    enoughPlayers() {
      return this.$store.state.players.length > 3;
    },
    addPlayer() {
      this.$store.commit("addPlayer", $("input").val());
      $("input").val("");
    }
  },
  mounted() {
    $("input").keypress(
      function(e) {
        if (e.which == 13) {
          this.addPlayer();
        }
      }.bind(this)
    );
    $("#add-player").on(
      "click",
      function(e) {
        this.addPlayer($("input").val());
      }.bind(this)
    );
  },
  beforeRouteLeave(to, from, next) {
    if (!this.enoughPlayers() && to.name != "index") {
      this.showPopup = true;
    } else {
      this.$store.commit("teams/split", this.players);
      next();
    }
  }
};
</script>
