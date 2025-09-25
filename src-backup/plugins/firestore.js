import Firebase from 'firebase/app'

import 'firebase/firestore'

export default ({ Vue }) => {
  Firebase.initializeApp({
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
  })

  Firebase.firestore().settings({ timestampsInSnapshots: true })

  Vue.prototype.$firestore = Firebase
}
