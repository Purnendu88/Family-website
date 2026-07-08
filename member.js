import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const membersContainer = document.getElementById("members");

async function loadMembers(){

    membersContainer.innerHTML = "";

    const querySnapshot = await getDocs(collection(db,"users"));

    querySnapshot.forEach((doc)=>{

        const user = doc.data();

        membersContainer.innerHTML += `

        <div class="member-card">

            <img src="images/default-profile.png">

            <h3>${user.name}</h3>

            <p>${user.email}</p>

            <p>${user.phone}</p>

            <button>View Profile</button>

        </div>

        `;

    });

}

loadMembers();