import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

export const plugins = [vuexLocal.plugin]

export const state = () => ({
  users: [],
  fate: null,
})

export const mutations = {
  addUsers(state, users) {
    for (const user of users) {
      user.Index = state.users.length
      user.Selected = false
      user.Wins = 0 //Math.floor(Math.random() * 15)
      user.Lost = 0 //Math.floor(Math.random() * 15)
      user.Level = Math.floor(Math.random() * 14) + 1 // level should never be 0

      state.users = [...state.users, user]
    }
  },
  userSelectedToggled(state, data) {
    state.users[data.index].Selected = data.checked
  },
  getNewFate(state) {
    state.fate = Math.floor(Math.random() * 9) + 1

    state.users.forEach((user) => {
      if (user.Selected) {
        const won = user.Bet == state.fate
        console.log(won)
        if (won) {
          user.Wins += 1
        } else {
          user.Lost += 1
        }
      }
    })
  },
}

export const actions = {
  async fetchData(context) {
    if (context.state.users.length == 0) {
      console.info('fetch request triggered')
      const res = await fetch(
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json',
        {
          // mode: 'no-cors',
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        }
      )
      const data = await res.json()
      context.commit('addUsers', data)
    }
  },
}
