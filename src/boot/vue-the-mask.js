import { boot } from 'quasar/wrappers'
import { mask } from 'vue-the-mask'

export default boot(({ app }) => {
  app.directive('mask', mask)
})
