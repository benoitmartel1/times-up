<template>
<div>
	<navigation :backHref="backHref" :nextHref="nextHref" :nextClicked="nextClicked"></navigation>
</div>
</template>

<script>
import navigation from "~/components/navigation.vue";

export default {
  layout: "setup",
  components: { navigation },
  data() {
    return {
      backHref: "teams",
      nextHref: "/play/round"
    };
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("cards/initMasterDeck");
    next();
  }
};
</script>
