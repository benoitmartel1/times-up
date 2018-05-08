export const state = () => ({
  current: {
    round: 0,
    team: 0
  }
});

export const mutations = {
  increment(state) {
    state.counter++;
  }
};
