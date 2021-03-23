import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA67XZN8T3FpNLHQ3YV7iLijEJFrrvloEM",
    authDomain: "crwn-db-26ea8.firebaseapp.com",
    projectId: "crwn-db-26ea8",
    storageBucket: "crwn-db-26ea8.appspot.com",
    messagingSenderId: "987218853145",
    appId: "1:987218853145:web:15112c2791688f0e5d1988",
    measurementId: "G-6ZHZBHR1LB"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase