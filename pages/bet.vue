<template>
  <div class="bet">
    <div class="players">
      <Player
        v-for="user in users.slice(0, 5)"
        :key="user.Index"
        :data="user"
      />
    </div>
    <Fate />
    <div class="players">
      <Player
        v-for="user in users.slice(5, 9)"
        :key="user.Index"
        :data="user"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.users.filter((x) => x.Selected)
    },
  },
  beforeCreate() {
    this.$store.commit('getNewFate')
  },
}
</script>

<style lang="scss" scoped>
$textureColor: rgba(25, 25, 112, 0.03);
.bet {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  background-color: white;
  background-image: radial-gradient($textureColor 9px, transparent 10px),
    repeating-radial-gradient(
      $textureColor 0,
      $textureColor 4px,
      transparent 5px,
      transparent 20px,
      $textureColor 21px,
      $textureColor 25px,
      transparent 26px,
      transparent 50px
    );
  background-size: 30px 30px, 90px 90px;
  background-position: 0 0;

  .players {
    margin: 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
}
</style>