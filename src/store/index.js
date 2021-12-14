import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import firebase from './firebase'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function () {
  const Store = createStore({
    modules: {
      firebase
    },

  })

  return Store
})
