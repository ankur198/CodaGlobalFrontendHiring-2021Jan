<template>
  <div class="container">
    <div class="totalPlaying">Select Playing 9</div>
    <Table />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  background: $statsbg;

  .totalPlaying {
    color: $purple;
    font-size: 2em;
    padding: 20px 0;
  }
}
</style>