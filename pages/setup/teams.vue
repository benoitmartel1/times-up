<template>
<div>
	<navigation :backHref="backHref" :nextHref="nextHref"></navigation>
</div>
</template>

<script>
import navigation from "~/components/navigation.vue";

export default {
  layout: "setup",
  components: { navigation },
  data() {
    return {
      backHref: "players",
      nextHref: "team-name"
    };
  }
};
</script>
