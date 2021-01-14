<template>
  <div class="container">
    <SearchPlayer @input="onInput" />
    <div class="table">
      <div class="header">
        <div>Select</div>
        <div>Player Name</div>
        <div>Level</div>
        <div>Avatar</div>
        <div><img src="https://img.icons8.com/color/48/000000/one-euro-cent.png"/>Bet</div>
        <div><img src="https://img.icons8.com/emoji/48/000000/trophy-emoji.png"/>Wins</div>
        <div>Lost</div>
        <div><img src="https://img.icons8.com/fluent/48/000000/hot-price.png"/>Price</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchPlayer: '',
    }
  },

  methods: {
    onInput(data) {
      this.searchPlayer = data
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 50px;

  .table {
    padding-top: 50px;
    display: flex;
    flex-direction: column;

    & > div {
      display: flex;
      align-items: stretch;

      & > div {
        margin: 5px;
        padding: 20px 30px;
        display: flex;
        align-items: center;

        &:nth-child(2) {
          flex-grow: 1;
        }

        img{
          width: 24px;
          padding-right: 5px;
        }
      }
    }

    .header {
      & > div {
        background: $playerselectedbg;
        font-weight: 600;
        font-size: 0.8em;
      }
    }
  }
}
</style>