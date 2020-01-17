import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  all_card: [],
  card_index_count: 0,
  take_card: [],
  otetsuki_user: [],
  player_offense_count: 0,
  player_defense_count: 0,
  card_list: [
    [
      {next_id: 5, name: '一字決まり'},
      {next_id: 6, name: '二字決まり'},
      {next_id: 1, name: '三字決まり'},
      {next_id: 2, name: '四字決まり'},
      {next_id: 3, name: 'み、た、こ'},
      {next_id: 4, name: 'お、わ'},
      {next_id: 20, name: 'な'},
      {next_id: 21, name: 'あ'}
    ],
    [
      {next_id: 7, name: 'い'},
      {next_id: 8, name: 'ち'},
      {next_id: 9, name: 'ひ'},
      {next_id: 10, name: 'き'}
    ],
    [
      {next_id: 11, name: 'は'},
      {next_id: 12, name: 'や'},
      {next_id: 13, name: 'か'},
      {next_id: 14, name: 'よ'}
    ],
    [
      {next_id: 15, name: 'み'},
      {next_id: 16, name: 'た'},
      {next_id: 17, name: 'こ'}
    ],
    [
      {next_id: 18, name: 'お'},
      {next_id: 19, name: 'わ'}
    ],
    [
      {next_id: 22, name: 'む'},
      {next_id: 22, name: 'す'},
      {next_id: 22, name: 'め'},
      {next_id: 22, name: 'ふ'},
      {next_id: 22, name: 'さ'},
      {next_id: 22, name: 'ほ'},
      {next_id: 22, name: 'せ'}
    ],
    [
      {next_id: 22, name: 'うか'},
      {next_id: 22, name: 'うら'},
      {next_id: 22, name: 'つく'},
      {next_id: 22, name: 'つき'},
      {next_id: 22, name: 'しの'},
      {next_id: 22, name: 'しら'},
      {next_id: 22, name: 'もろ'},
      {next_id: 22, name: 'もも'},
      {next_id: 22, name: 'ゆう'},
      {next_id: 22, name: 'ゆら'}
    ],
    [
      {next_id: 22, name: 'いまは'},
      {next_id: 22, name: 'いまこ'},
      {next_id: 22, name: 'いに'}
    ],
    [
      {next_id: 22, name: 'ちぎりき'},
      {next_id: 22, name: 'ちぎりお'},
      {next_id: 22, name: 'ちは'}
    ],
    [
      {next_id: 22, name: 'ひとは'},
      {next_id: 22, name: 'ひとも'},
      {next_id: 22, name: 'ひさ'}
    ],
    [
      {next_id: 22, name: 'きみがためお'},
      {next_id: 22, name: 'きみがためは'},
      {next_id: 22, name: 'きり'}
    ],
    [
      {next_id: 22, name: 'はるの'},
      {next_id: 22, name: 'はるす'},
      {next_id: 22, name: 'はなの'},
      {next_id: 22, name: 'はなさ'}
    ],
    [
      {next_id: 22, name: 'やまが'},
      {next_id: 22, name: 'やまざ'},
      {next_id: 22, name: 'やす'},
      {next_id: 22, name: 'やえ'}
    ],
    [
      {next_id: 22, name: 'かぜそ'},
      {next_id: 22, name: 'かぜを'},
      {next_id: 22, name: 'かく'},
      {next_id: 22, name: 'かさ'}
    ],
    [
      {next_id: 22, name: 'よのなかよ'},
      {next_id: 22, name: 'よのなかは'},
      {next_id: 22, name: 'よを'},
      {next_id: 22, name: 'よも'}
    ],
    [
      {next_id: 22, name: 'みよ'},
      {next_id: 22, name: 'みせ'},
      {next_id: 22, name: 'みち'},
      {next_id: 22, name: 'みかの'},
      {next_id: 22, name: 'みかき'}
    ],
    [
      {next_id: 22, name: 'たか'},
      {next_id: 22, name: 'たま'},
      {next_id: 22, name: 'たご'},
      {next_id: 22, name: 'たき'},
      {next_id: 22, name: 'たち'},
      {next_id: 22, name: 'たれ'}
    ],
    [
      {next_id: 22, name: 'この'},
      {next_id: 22, name: 'これ'},
      {next_id: 22, name: 'こぬ'},
      {next_id: 22, name: 'こい'},
      {next_id: 22, name: 'こころに'},
      {next_id: 22, name: 'こころあ'}
    ],
    [
      {next_id: 22, name: 'おおけ'},
      {next_id: 22, name: 'おおこ'},
      {next_id: 22, name: 'おおえ'},
      {next_id: 22, name: 'おも'},
      {next_id: 22, name: 'おと'},
      {next_id: 22, name: 'おぐ'},
      {next_id: 22, name: 'おく'}
    ],
    [
      {next_id: 22, name: 'わたのはらこ'},
      {next_id: 22, name: 'わたのはらや'},
      {next_id: 22, name: 'わがい'},
      {next_id: 22, name: 'わがそ'},
      {next_id: 22, name: 'わすら'},
      {next_id: 22, name: 'わすれ'},
      {next_id: 22, name: 'わび'}
    ],
    [
      {next_id: 22, name: 'ながら'},
      {next_id: 22, name: 'ながか'},
      {next_id: 22, name: 'なげけ'},
      {next_id: 22, name: 'なげき'},
      {next_id: 22, name: 'なつ'},
      {next_id: 22, name: 'なにはが'},
      {next_id: 22, name: 'なにはえ'},
      {next_id: 22, name: 'なにし'}
    ],
    [
      {next_id: 22, name: 'あはれ'},
      {next_id: 22, name: 'あはじ'},
      {next_id: 22, name: 'あらし'},
      {next_id: 22, name: 'あらざ'},
      {next_id: 22, name: 'あまの'},
      {next_id: 22, name: 'あまつ'},
      {next_id: 22, name: 'あきの'},
      {next_id: 22, name: 'あきか'},
      {next_id: 22, name: 'ありあ'},
      {next_id: 22, name: 'ありま'},
      {next_id: 22, name: 'あい'},
      {next_id: 22, name: 'あけ'},
      {next_id: 22, name: 'あし'},
      {next_id: 22, name: 'あさぼらけあ'},
      {next_id: 22, name: 'あさぼらけう'},
      {next_id: 22, name: 'あさじ'}
    ]
  ]
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
