import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBvuH7aN4Om5nuw6gFEyLfiiNK3P-_0sas',
  authDomain: 'todos-93f0e.firebaseapp.com',
  databaseURL: 'https://todos-93f0e.firebaseio.com',
  projectId: 'todos-93f0e',
  storageBucket: 'todos-93f0e.appspot.com',
  messagingSenderId: '1042771563613',
}
firebase.initializeApp(config)

export const db = firebase.firestore()
