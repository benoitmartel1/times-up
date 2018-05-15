<template>
  <div>
	  <h1 id="timer">{{ secondsLeft }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      secondsLeft: 10,
	  interval: "",
    };
  },
  created() {
    this.$on('stopTimer', this.stopTimer)
  },
  methods: {
	  stopTimer(){
		clearInterval(this.interval);
	  },
    timesUp() {
      this.$emit("timesUp", 'Plus de temps!');
    },
    updateInterval() {
      this.interval = setInterval(() => {
        if (this.secondsLeft == 0) {
          this.timesUp();
        } else {
          this.secondsLeft--;
        }
      }, 1000);
    }
  },
  mounted() {
    this.updateInterval();
  }
};
</script>

<style>
.timer {
  padding: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
