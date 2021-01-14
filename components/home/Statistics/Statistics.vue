<template>
  <div class="statistics">
    <div class="totalPlaying">Select Playing 9</div>
    <Table/>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.statistics {
  display: flex;
  flex-direction: column;
  // display: grid;
  // grid-template-rows: auto 3fr 1fr;
  background: $statsbg;

  .totalPlaying {
    color: $purple;
    font-size: 2em;
    padding: 20px 0;
  }
}
</style>