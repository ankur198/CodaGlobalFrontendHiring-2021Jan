<template>
  <div class="dices">
    <img src="~/assets/vectors/dice3.svg" alt="" />
    <img src="~/assets/vectors/dice4.svg" alt="" />
  </div>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
.dices {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  $diceWidth: 120px;

  padding-bottom: 20px;

  img {
    width: $diceWidth;
    padding: 5px;

    &:first-child {
      padding-left: calc(#{$diceWidth} / 2);
    }
    &:last-child {
      padding-right: calc(#{$diceWidth} / 2);
    }
  }
}
</style>