import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyA91obAJExReQAUAFhuogqqmdBJzeX0VWw",
    authDomain: "connectchat-8f911.firebaseapp.com",
    projectId: "connectchat-8f911",
    storageBucket: "connectchat-8f911.appspot.com",
    messagingSenderId: "514720956034",
    appId: "1:514720956034:web:af6d6ac2b3e6ac9de57e9b",
    measurementId: "G-3SCQ760CBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const db = getFirestore(app)
const storage = getStorage(app)

export { db }
export { storage }
export { auth };
