// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBoPosxH91NDyZQ7WWK5FbDFwv8HsgVjq0",
	authDomain: "netflix-gpt-acad8.firebaseapp.com",
	projectId: "netflix-gpt-acad8",
	storageBucket: "netflix-gpt-acad8.firebasestorage.app",
	messagingSenderId: "162173770771",
	appId: "1:162173770771:web:3e6e9627a819cf45e673e6",
	measurementId: "G-9BBMRH1MEK",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth()
