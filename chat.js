import { auth, db } from "./firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp,
    query,
    orderBy,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");
const chatBox = document.getElementById("messages");

sendBtn.addEventListener("click", async () => {

    if (messageInput.value.trim() === "") return;

    await addDoc(collection(db, "familyChat"), {

        text: messageInput.value,
        sender: auth.currentUser.email,
        time: serverTimestamp()

    });

    messageInput.value = "";

});

const q = query(
    collection(db, "familyChat"),
    orderBy("time")
);

onSnapshot(q, (snapshot) => {

    chatBox.innerHTML = "";

    snapshot.forEach((doc) => {

        const data = doc.data();

        chatBox.innerHTML += `
        <div class="message">
            <strong>${data.sender}</strong><br>
            ${data.text}
        </div>
        `;

    });

    chatBox.scrollTop = chatBox.scrollHeight;

});