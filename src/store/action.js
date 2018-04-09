export default {
  addNumbers1({commit,dispatch,state}, parmes) {
    setTimeout(() => {
      context.commit('addNumber')
    }, (parmes.s || 1) * 1000)
  }
}
