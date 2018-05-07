<template>
<span>
	<app-title :title="title"></app-title>
	<app-navigation :backHref="backHref" :nextHref="nextHref"></app-navigation>
	<input type="text"><span id="add-player" class="add-btn">+</span>
	<ul id="players-list">
		  <li v-for="player in players" :key="player.id" :data-id="player.id">
			{{ player.name }}
		</li>
	</ul>
</span>
</template>

<script>
import title from "~/components/title.vue";
import navigation from "~/components/navigation.vue";

var jsonfile = require("jsonfile");
var players = require("~/assets/json/players.json");

export default {
  layout: "setup",
  components: {
    "app-title": title,
    "app-navigation": navigation
  },
  data() {
    return {
      players,
      backHref: "/",
      nextHref: "teams",
      title: "Qui joue?"
    };
  },
  mounted() {
    $("#add-player").on("click", function(e) {
      var newPlayer = {
        name: $("input").val(),
        id: getNextValue(players, "id")
      };
      players.push(newPlayer);
      updateJsonFile("~/assets/json/players.json", players);
    });
    console.log(players);
  }
};

function updateJsonFile(file, data) {
  jsonfile.writeFile(file, data, function(err) {
    console.error(err);
  });
}
</script>
