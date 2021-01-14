<template>
  <div class="container">
    <div>
      <Dices />
      <Separator :dashboard="true" />
      <div class="totalPlaying">Playing {{ selectedUsers.length }}</div>
      <Player
        v-for="player in selectedUsers"
        :key="player.Index"
        :data="player"
      />
    </div>
    <button :disabled="selectedUsers.length !== 9" class="start">Start</button>
  </div>
</template>

<script>
export default {
  computed: {
    selectedUsers() {
      return this.$store.state.users.filter((x) => x.Selected)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background: $playerselectedbg;

  & > * {
    width: 100%;
  }

  .totalPlaying {
    align-self: start;
    color: $secondary;
  }

  .start {
    background: $purple;
    width: 100%;
    margin: 20px 0;
    padding: 20px;
    color: white;
    text-transform: uppercase;
    border: none;
    font-weight: bold;
    letter-spacing: 0.2rem;
    font-size: 1.2rem;
    box-shadow: 0px 0px 38px -21px rgba(0,0,0,0.75);

    &:disabled {
      background: $buttonhoverbg;
    }
  }
}
</style>