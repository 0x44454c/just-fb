import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
	apiKey: "AIzaSyDLcvhm59AL5KPKaqKTkvISLQU7m8kofLA",
	authDomain: "just-fb.firebaseapp.com",
	projectId: "just-fb",
	storageBucket: "just-fb.appspot.com",
	messagingSenderId: "995783182541",
	appId: "1:995783182541:web:36c6b51865fcf575ba8184",
	measurementId: "G-DKN8QZV5MJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db