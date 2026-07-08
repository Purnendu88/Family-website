import { storage, db } from "./firebase.js";

import {
    ref,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-storage.js";

import {
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const uploadBtn = document.getElementById("uploadBtn");

uploadBtn.addEventListener("click", async () => {

    const file = document.getElementById("photo").files[0];

    if(!file){
        alert("Select a photo");
        return;
    }

    const storageRef = ref(storage,"photos/"+Date.now()+file.name);

    await uploadBytes(storageRef,file);

    const url = await getDownloadURL(storageRef);

    await addDoc(collection(db,"photos"),{

        image:url,
        createdAt:new Date()

    });

    alert("Photo Uploaded Successfully");

});