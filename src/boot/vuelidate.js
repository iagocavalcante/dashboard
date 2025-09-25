import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
  // Note: Vuelidate v2 for Vue 3 doesn't need global installation
  // It's used directly in components via useVuelidate composable
  // Import useVuelidate from '@vuelidate/core' and validators from '@vuelidate/validators'
  // in components where validation is needed
})
