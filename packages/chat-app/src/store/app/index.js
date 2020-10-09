import configs from '../../configs'
import actions from './actions'
import mutations from './mutations'
import { dbRef } from '../../firebase'

const { product, time, theme, currencies  } = configs

const { globalTheme, menuTheme, toolbarTheme, isToolbarDetached, isContentBoxed, isRTL } = theme
const { currency, availableCurrencies } = currencies

// state initial values
const state = {
  product,

  time,

  // currency
  currency,
  availableCurrencies,

  // themes and layout configurations
  globalTheme,
  menuTheme,
  toolbarTheme,
  isToolbarDetached,
  isContentBoxed,
  isRTL,

  // App.vue main toast
  toast: {
    show: false,
    color: 'black',
    message: '',
    timeout: 3000
  },

  channels: ['general', 'lifestyle', 'sports', 'entertainment', 'tech'],

  user: null,

  messages: [dbRef.ref().once('value')]
}

console.log(dbRef.ref().once('value').then(function(snapshot) {
  const username = (snapshot.val() && snapshot.val().username) || 'Anonymous'
  // ...
}))

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
