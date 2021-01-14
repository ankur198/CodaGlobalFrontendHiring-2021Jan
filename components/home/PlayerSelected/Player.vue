<template>
  <div class="player">
    <img :src="data['Profile Image']" alt="" />
    <div>
      <div class="basic">
        <div class="name">
          {{ data.Name }}
        </div>
        <div>
          <div>
            <img class="wins"
              src="https://img.icons8.com/emoji/48/000000/trophy-emoji.png"
            />
            {{ data.Wins }}
          </div>
          <div>
            <img
              src="https://img.icons8.com/color/48/000000/one-euro-cent.png"
            />
            {{ data.Bet }}
          </div>
        </div>
      </div>
      <div class="price">
        <img src="https://img.icons8.com/fluent/48/000000/hot-price.png" />{{
          data.Price
        }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="scss" scoped>
.player {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;

  & > img {
    $imageSize: 60px;
    border-radius: 20px;
    width: $imageSize;
    height: $imageSize;
  }

  & > div {
    padding-left: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    img {
      $imageSize: 20px;
      width: $imageSize;
      height: $imageSize;
      margin: 0 5px;
    }

    .name,
    .price {
      font-weight: bold;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .basic {
      flex-direction: column;
      align-items: flex-start;

      .name {
        padding-bottom: 5px;
      }
      .wins{
          margin-left: 0;
      }
    }
  }
}
</style>