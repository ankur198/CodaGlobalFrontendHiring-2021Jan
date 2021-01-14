export const state = () => ({
  users: [],
})

export const mutations = {
  addUsers(state, users) {
    state.users = [...state.users, users]
  },
}

export const actions = {
  async fetchData(context) {
    const res = await fetch(
      'https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json'
    )
    const data = await res.json()
    context.commit('addUsers', data)
  },
}
