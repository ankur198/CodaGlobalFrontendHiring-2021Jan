<template>
  <div class="fate">
    <div class="number">{{ fate }}</div>
  </div>
</template>

<script>
export default {
  computed:{
    fate(){
      return this.$store.state.fate      
    }
  },
}
</script>

<style lang="scss" scoped>
.fate {
  .number {
    $size: 200px;
    width: $size;
    height: $size;

    font-size: 5rem;
    font-weight: bold;
    background: $betBg;
    color: $betColor;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    user-select: none;

    border: $betBorder 5px solid;
    box-shadow: 0px 0px 2px 7px $betColor;
  }
}
</style>