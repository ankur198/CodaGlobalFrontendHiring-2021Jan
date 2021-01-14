<template>
  <div class="container">
    <Dices />
    <Separator :dashboard="true" />
    <div class="totalPlaying">Playing 9</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: $playerselectedbg;

  .totalPlaying{
      align-self: start;
      color: $secondary;
  }
}
</style>