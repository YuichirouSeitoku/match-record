export const chart = {
  namespaced: true,

  state: {
    all_card: [],
    card_index_count: 0,
    take_card: [],
    otetsuki_user: [],
    player_offense_count: 0,
    player_defense_count: 0
  },

  mutations: {
    setCurrentCard (state, payload) {
      state.all_card.push(payload.current_card)
    },
    countCardIndex (state) {
      state.card_index_count = state.card_index_count + 1
    },
    setTakeCard (state, payload) {
      state.take_card.push(payload.take_card)
    },
    setOtetsukiUser (state, payload) {
      state.otetsuki_user.push(payload.otetsuki_user)
    },
    setPlayerOffenseCount (state) {
      state.player_offense_count = state.player_offense_count + 1
    },
    setPlayerDefenseCount (state) {
      state.player_defense_count = state.player_defense_count + 1
    }
  },

  actions: {
    updateCurrentCard ({ commit }, payload) {
      commit('setCurrentCard', payload)
    },
    updateCardIndex ({ commit }) {
      commit('countCardIndex')
    },
    updateTakeCard ({ commit }, payload) {
      commit('setTakeCard', payload)
    },
    updateOtetsukiUser ({ commit }, payload) {
      commit('setOtetsukiUser', payload)
    },
    updatePlayerOffenseCount ({ commit }) {
      commit('setPlayerOffenseCount')
    },
    updatePlayerDefenseCount ({ commit }) {
      commit('setPlayerDefenseCount')
    }
  }
}
