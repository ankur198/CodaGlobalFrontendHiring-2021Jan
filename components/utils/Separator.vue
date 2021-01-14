<template>
  <div class="wrapper">
    <div
      v-if="dashboard === true"
      class="divider div-transparent div-arrow-down purple"
    ></div>
  </div>
</template>

<script>
export default {
  props: ['dashboard'],
}
</script>

<style lang='scss' scoped>
.wrapper {
  width: 100%;
  padding: 0 20px;
  padding-bottom: 50px;
}

.divider {
  position: relative;
  margin-top: 50px;
  height: 1px;
}

.div-transparent:before {
  content: '';
  position: absolute;
  top: 0;
  left: 5%;
  right: 5%;
  width: 90%;
  height: 2px;
  background-image: linear-gradient(to right, transparent, black, transparent);
}

.div-arrow-down:after {
  content: '';
  position: absolute;
  z-index: 1;
  top: -7px;
  left: calc(50% - 7px);
  width: 14px;
  height: 14px;
  transform: rotate(45deg);
  background-color: black;
  border-bottom: 1px solid rgb(48, 49, 51);
  border-right: 1px solid rgb(48, 49, 51);
}
.purple.div-arrow-down:after {
  background-color: $purple;
}
.purple.div-transparent:before {
  background-image: linear-gradient(
    to right,
    transparent,
    $purple,
    transparent
  );
}
</style>