import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyC8iQvA45om0ijm50uUCbokCTmy-jR5cjw",
    authDomain: "sharma-family-8925b.firebaseapp.com",
    projectId: "sharma-family-8925b",
    storageBucket: "sharma-family-8925b.firebasestorage.app",
    messagingSenderId: "995221460531",
    appId: "1:995221460531:web:c03fb0be407df517e1b546"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };