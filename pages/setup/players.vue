<template>
	<div class="content">
		<app-title :title="title"></app-title>
		<app-navigation :backHref="backHref" :nextHref="nextHref"></app-navigation>
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

var jsonfile = require("jsonfile");
var players = require("~/assets/json/players.json");
var playerIdCounter = 0;

export default {
  layout: "setup",
  components: {
    "app-title": title,
    "app-navigation": navigation
  },
  data() {
    return {
      players: this.$store.state.players,
      backHref: "/",
      nextHref: "teams",
      title: "Qui joue?"
    };
  },
  methods: {
    addPlayer() {
      var newPlayer = {
        name: $("input").val(),
        id: playerIdCounter
      };
      this.$store.commit("addPlayer", newPlayer);
      playerIdCounter++;
      $("input").val("");
    }
  },
  mounted() {
    $(document).keypress(
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
  }
};
</script>
