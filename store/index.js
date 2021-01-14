import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

export const plugins = [vuexLocal.plugin]

export const state = () => ({
  users: [],
})

export const mutations = {
  addUsers(state, users) {
    for (const user of users) {
      user.Index = state.users.length
      user.Selected = false
      user.Wins = Math.floor(Math.random() * 15)
      user.Lost = Math.floor(Math.random() * 15)
      user.Level = Math.floor(Math.random() * 14) + 1 // level should never be 0

      state.users = [...state.users, user]
    }
  },
  userSelectedToggled(state, data) {
    state.users[data.index].Selected = data.checked
  },
}

export const actions = {
  async fetchData(context) {
    if (context.state.users.length == 0) {
      console.info("fetch request triggered");
      const res = await fetch(
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json'
      )
      const data = await res.json()
      context.commit('addUsers', data)
    }
  },
}
