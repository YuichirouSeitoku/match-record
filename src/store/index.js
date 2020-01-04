import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  all_card: [],
  card_index_count: 0,
  take_card: [],
  otetsuki_user: [],
  card_difference: [0],
  take_flag: false,
  player_take: [],
  player_otetsuki: [],
  player_remaining_count: 25,
  player_offense_count: 0,
  player_defense_count: 0,
  opponent_take: [],
  opponent_otetsuki: [],
  opponent_remaining_count: 25
}

const mutations = {
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
  setCardDifference (state, payload) {
    state.card_difference.push(payload.card_difference)
  },
  setTakeFlagTrue (state) {
    state.take_flag = true
  },
  setTakeFlagFalse (state) {
    state.take_flag = false
  },
  setPlayerOffenseCount (state) {
    state.player_offense_count = state.player_offense_count + 1
  },
  setPlayerDefenseCount (state) {
    state.player_defense_count = state.player_defense_count + 1
  }
}

const actions = {
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
  updateCardDifference ({ commit }, payload) {
    commit('setCardDifference', payload)
  },
  updateTakeFlagTrue ({ commit }) {
    commit('setTakeFlagTrue')
  },
  updateTakeFlagFalse ({ commit }) {
    commit('setTakeFlagFalse')
  },
  updatePlayerOffenseCount ({ commit }) {
    commit('setPlayerOffenseCount')
  },
  updatePlayerDefenseCount ({ commit }) {
    commit('setPlayerDefenseCount')
  }
}

const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  namespaced: true
})

export default store
