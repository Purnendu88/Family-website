import { auth, db } from "./firebase.js";

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

onAuthStateChanged(auth, async(user)=>{

if(!user){

window.location="login.html";

return;

}

const snap = await getDoc(doc(db,"users",user.uid));

if(snap.exists()){

const data=snap.data();

document.getElementById("userName").textContent=data.name;
document.getElementById("userEmail").textContent=data.email;
document.getElementById("userPhone").textContent=data.phone;

}

});