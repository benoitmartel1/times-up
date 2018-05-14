<template>
  <div v-if="showMe" class="popup" @click="closePopup()">
	  <div class="popup-window">
		  <div class="title">{{title}}</div>
	 	 <div class="message">{{message}}</div>
	  </div>
  </div>
</template>

<script>
export default {
  props: ["title", "message", "showMe"],
  methods: {
    closePopup() {
      this.$emit("hideMe");
    }
  }
};
</script>

<style>
.popup-window {
  width: auto;
  text-align: center;
  padding: 60px;
  background-color: white;
}
.popup {
  align-items: center;
  justify-content: center;
  position: fixed; /* Sit on top of the page content */
  display: flex; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
</style>
