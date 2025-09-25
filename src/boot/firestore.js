import { boot } from 'quasar/wrappers'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
}

export default boot(({ app }) => {
  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)

  app.config.globalProperties.$firestore = db
  app.config.globalProperties.$firebase = firebaseApp
})

export { firebaseConfig }
