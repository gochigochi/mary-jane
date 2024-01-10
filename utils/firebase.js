import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBctkrW9cyCvJJc0lvqZV4xDaNebn8yjpo",
  authDomain: "mary-jane-app.firebaseapp.com",
  projectId: "mary-jane-app",
  storageBucket: "mary-jane-app.appspot.com",
  messagingSenderId: "232652940204",
  appId: "1:232652940204:web:05e693bcdbc1d38a025009"
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
