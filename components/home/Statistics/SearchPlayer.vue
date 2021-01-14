<template>
  <div class="search" :class="{ active: isActive }">
    <img
      src="https://img.icons8.com/fluent-systems-regular/24/000000/search.png"
    />
    <input
      type="text"
      placeholder="Search Player"
      v-model="inputText"
      @focus="inputFocusChanged"
      @blur="inputFocusChanged"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      inputText: '',
    }
  },
  methods: {
    inputFocusChanged(event) {
      this.isActive = event.type == 'focus'
    },
    onInput() {
      this.$emit('input', this.inputText)
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  border-bottom: 1px solid black;
  padding: 10px;
  display: flex;
  align-items: center;
  width: 30%;
  min-width: 200px;
  max-width: 300px;
  opacity: 70%;

  &.active {
    border-bottom: 2px solid $purple;
    animation: borderChange 0.5s ease both;
  }

  input {
    background: none;
    border: none;
    font-size: 1.2em;
    padding-bottom: 5px;
    padding-left: 5px;

    &:focus {
      outline: none;
    }
  }
}
</style>