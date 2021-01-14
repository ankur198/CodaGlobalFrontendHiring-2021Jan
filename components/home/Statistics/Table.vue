<template>
  <div class="Table">
    <SearchPlayer @input="onInput" />
    <div class="table">
      <div class="header">
        <div>Select</div>
        <div @click="changeSortOption('Name')">Player Name</div>
        <div @click="changeSortOption('Level')">Level</div>
        <div>Avatar</div>
        <div @click="changeSortOption('Bet')">
          <img
            src="https://img.icons8.com/color/48/000000/one-euro-cent.png"
          />Bet
        </div>
        <div @click="changeSortOption('Wins')">
          <img
            src="https://img.icons8.com/emoji/48/000000/trophy-emoji.png"
          />Wins
        </div>
        <div @click="changeSortOption('Lost')">Lost</div>
        <div @click="changeSortOption('Price')">
          <img
            src="https://img.icons8.com/fluent/48/000000/hot-price.png"
          />Price
        </div>
      </div>
      <div v-for="user in pagedUsers" :key="user.Index" class="data">
        <label class="checkbox-container">
          <input
            type="checkbox"
            :checked="user.Selected"
            @change="onSelectedToggled(user.Index, $event)"
          />
          <span class="checkmark"></span>
        </label>
        <div>{{ user.Name }}</div>
        <div>{{ user.Level }}</div>
        <div><img :src="user['Profile Image']" alt="" /></div>
        <div>{{ user.Bet }}</div>
        <div>{{ user.Wins }}</div>
        <div>{{ user.Lost }}</div>
        <div>{{ user.Price }}</div>
      </div>
    </div>
    <div class="navigation">
      <button
        @click.prevent="gotoPreviousPage"
        :disabled="!canGotoPreviousPage"
      >
        &lt;
      </button>
      <div>{{ Math.min((page + 1) * 10, allUsers.length) }}</div>
      <span>of</span>
      <div>{{ allUsers.length }}</div>
      <button @click.prevent="gotoNextPage" :disabled="!canGotoNextPage">
        &gt;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchPlayer: '',
      page: 0,
      sortOption: {
        property: 'Index',
        desending: false,
      },
    }
  },

  computed: {
    allUsers() {
      return this.$store.state.users
    },
    inSearchUsers() {
      return this.allUsers.filter((x) =>
        x.Name.toLowerCase().includes(this.searchPlayer.toLowerCase())
      )
    },
    sortedUsers() {
      const users = this.inSearchUsers.sort((x, y) => {
        const a = x[this.sortOption.property]
        const b = y[this.sortOption.property]
        if (typeof x[this.sortOption.property] === 'number') {
          return a - b
        } else if (typeof x[this.sortOption.property] === 'string') {
          return (a > b) - (a < b)
        }
      })
      if (this.sortOption.desending) {
        return users.reverse()
      }
      return users
    },
    pagedUsers() {
      const start = this.page * 10
      return this.sortedUsers.slice(start, start + 10)
    },
    canGotoNextPage() {
      return (this.page + 1) * 10 < this.inSearchUsers.length
    },
    canGotoPreviousPage() {
      return this.page > 0
    },
  },

  methods: {
    onInput(data) {
      this.searchPlayer = data
    },
    gotoNextPage() {
      this.page += 1
    },
    gotoPreviousPage() {
      this.page -= 1
    },
    changeSortOption(property) {
      if (property === this.sortOption.property) {
        if (this.sortOption.desending) {
          this.sortOption.property = 'Index'
          this.sortOption.desending = false
        } else {
          this.sortOption.desending = true
        }
      } else {
        this.sortOption.property = property
      }
      console.log(this.sortOption)
    },
    onSelectedToggled(index, event) {
      const checked = event.srcElement.checked
      this.$store.commit('userSelectedToggled', { index, checked })
    },
  },
}
</script>

<style lang="scss" scoped>
.Table {
  padding-top: 50px;
  display: flex;
  flex-direction: column;

  .table {
    padding-top: 50px;
    display: flex;
    flex-direction: column;

    & > * {
      display: grid;
      align-items: stretch;
      // grid-template-columns: 1fr 200px 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr 1fr 1fr;
      border-bottom: 1px solid $secondary;

      & > * {
        margin: 5px;
        padding: 15px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:nth-child(2) {
          justify-content: start;
        }
      }
    }

    .header {
      border-bottom: unset;
      & > * {
        background: $playerselectedbg;
        font-weight: 600;
        font-size: 0.8em;
        cursor: pointer;

        img {
          width: 24px;
          padding-right: 5px;
        }
      }
    }

    .data {
      & > * {
        img {
          width: 40px;
          padding-right: 5px;
          margin: 0 auto;
        }
      }

      .checkbox-container {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        font-size: 22px;
        user-select: none;
        cursor: pointer;

        &:hover input ~ .checkmark {
          background-color: $buttonhoverbg;
        }

        input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          // height: 0;
          // width: 0;

          &:checked ~ .checkmark {
            background-color: $purple;
          }
          &:checked ~ .checkmark:after {
            display: block;
          }
        }

        .checkmark {
          position: absolute;
          // top: 0;
          // left: 0;
          height: 25px;
          width: 25px;
          background-color: $playerselectedbg;

          &:after {
            content: '';
            position: absolute;
            display: none;
            left: 9px;
            top: 5px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            transform: rotate(45deg);
          }
        }
      }
    }
  }

  .navigation {
    padding: 50px 0;
    align-self: flex-end;

    display: flex;
    align-items: center;

    & > * {
      margin-left: 10px;
    }

    button {
      font-size: 2em;
      border: none;
      outline: none;
      color: $purple;
      padding: inherit 10px;
      background: $playerselectedbg;

      &:hover {
        background: $buttonhoverbg;
      }
      &:disabled {
        opacity: 0.1;
      }
    }

    span {
      font-size: 0.8em;
    }
  }
}
</style>