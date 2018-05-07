<template>
  <div class="navigation">
	<a :href="backHref"><div id="back" class="btn">BACK</div></a>
    <a v-if="nextHref" :href="nextHref"><div id="ok" class="btn">GO</div></a>
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
#ok {
  float: right;
}
</style>
