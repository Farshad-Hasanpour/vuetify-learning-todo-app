import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyCmXwf5qq-tTBZ9kQ48YRPH-sEd4u673Mk",
	authDomain: "todo-ninja-7d959.firebaseapp.com",
	databaseURL: "https://todo-ninja-7d959.firebaseio.com",
	projectId: "todo-ninja-7d959",
	storageBucket: "todo-ninja-7d959.appspot.com",
	messagingSenderId: "984267669309",
	appId: "1:984267669309:web:f8ba3fc2363539b4c84f54",
	measurementId: "G-64FEZDCV4G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
