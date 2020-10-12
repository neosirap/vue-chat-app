import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: 'AIzaSyD3q0HVw-QSegg7ReHfyL-1QI1ezNEVO_w',
  authDomain: 'vue-chat-app-292010.firebaseapp.com',
  databaseURL: 'https://vue-chat-app-292010.firebaseio.com',
  projectId: 'vue-chat-app-292010',
  storageBucket: 'vue-chat-app-292010.appspot.com',
  messagingSenderId: '793963492074',
  appId: '1:793963492074:web:3b76d81aa7bf1de4d11d93',
  measurementId: 'G-V6WP2VQ198'
}

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.database()

// collection references

// export utils/refs
export default db