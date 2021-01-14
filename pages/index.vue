<template>
  <div class="container">
    <PlayerSelected />
    <Statistics />
  </div>
</template>

<script>
export default {
  async beforeMount() {
    await this.$store.dispatch('fetchData')
    console.log(this.$store.state.users)
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 420px 4fr;
  // grid-template-columns: 0px 4fr;
  & > * {
    padding: 0 50px;
    padding-top: 5vh;
  }
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
* {
  font-family: 'Roboto', sans-serif;
}
</style>
