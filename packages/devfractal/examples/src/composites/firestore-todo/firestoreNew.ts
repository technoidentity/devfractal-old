import * as firebase from 'firebase/app'
import 'firebase/firestore'

// tslint:disable-next-line: typedef
const firebaseConfig = {
  apiKey: 'AIzaSyD_vE2djpC2jjNVljOzEjqvWy2GKu79W38',
  authDomain: 'todo-app-90837.firebaseapp.com',
  databaseURL: 'https://todo-app-90837.firebaseio.com',
  projectId: 'todo-app-90837',
  storageBucket: 'todo-app-90837.appspot.com',
  messagingSenderId: '129747528296',
  appId: '1:129747528296:web:081de1f30d88e2b52ba9dd',
}

firebase.initializeApp(firebaseConfig)

export const db: firebase.firestore.Firestore = firebase.firestore()
