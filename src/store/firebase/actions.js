export function addApp({ commit }, payload) {
  if (payload)
    commit('ADD_FIREBASE_APP', payload);
}