<template>
  <div class="navigation">
	<router-link v-if="backHref" :to="backHref"  id="back" class="btn">BACK</router-link>
    <router-link v-if="nextHref"  :to="nextHref"  id="next" class="btn">GO</router-link>
  </div>
</template>

<script>
export default {
  props: ["backHref", "nextHref"]
};
</script>

<style>
.navigation {
  padding: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.navigation .btn {
  background-color: white;
  text-align: center;
  padding: 50px;
}
#back {
  float: left;
}
#next {
  float: right;
}
</style>
