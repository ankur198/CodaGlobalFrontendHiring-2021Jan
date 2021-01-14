<template>
  <div class="player" :class="{ won: isWinner }">
    <div class="basic">
      <img :src="data['Profile Image']" alt="" />
      <div class="nameAndLevel">
        <div>
          {{ data.Name }}
        </div>
        <div class="level">Level {{ data.Level }}</div>
      </div>
    </div>
    <div class="stats">
      <div>
        <img src="https://img.icons8.com/fluent/48/000000/hot-price.png" />{{
          data.Price
        }}
      </div>
      <div>
        <img src="https://img.icons8.com/color/48/000000/one-euro-cent.png" />
        {{ data.Bet }}
      </div>
      <div>
        <img src="https://img.icons8.com/emoji/48/000000/trophy-emoji.png" />
        {{ data.Wins }}
      </div>
    </div>
    <div v-if="isWinner === true" class="result">Winner</div>
    <div v-else class="result">Lose</div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  computed: {
    fate() {
      return this.$store.state.fate
    },
    isWinner() {
      return this.fate == this.data.Bet
    },
  },
}
</script>

<style lang="scss" scoped>
$loserColor: #b30311;
$winColor: #00530f;
.player {
  position: relative;
  width: 200px;
  height: 230px;
  margin: 10px;

  border: solid 2px $loserColor;
  box-shadow: 0px 0px 38px -21px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  background: white;

  .basic {
    display: flex;
    align-items: center;
    padding: 15px;
    padding-bottom: 0;
    img {
      $imageSize: 60px;
      border-radius: 10px;
      width: $imageSize;
      height: $imageSize;
    }
    .nameAndLevel {
      padding-left: 10px;
      font-size: 0.9em;
      font-weight: 600;
      .level {
        font-size: 0.8em;
        color: $secondary;
      }
    }
  }
  .stats {
    padding: 0 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    div {
      margin-top: 20px;
      display: flex;
      align-items: center;
      font-weight: bold;
      color: $secondary;

      img {
        width: 30px;
        padding-right: 5px;
      }
    }
  }
  .result {
    padding: 5px;
    position: absolute;
    text-transform: uppercase;
    text-align: center;
    font-size: 0.7em;
    font-weight: 600;
    bottom: 0;
    width: 70%;
    margin: 0 30px;
    color: white;
    background: $loserColor;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transform: translateY(1px);
  }
}

.won {
  border-color: $winColor;
  width: 240px;
  height: 260px;

  font-size: 1.3em;
  .result {
    background: $winColor;
  }
}
</style>