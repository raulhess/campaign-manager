import { boot } from 'quasar/wrappers'
import Card from "components/Card.vue"
import PageWrapper from "components/PageWrapper.vue"

export default boot(async ({ app }) => {
  app.component('card', Card)
  app.component('pageWrapper', PageWrapper)
})
