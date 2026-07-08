import { auth } from "./firebase.js";

import {
    signOut
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

document.getElementById("logoutBtn")
.addEventListener("click", async () => {

    await signOut(auth);

    window.location = "login.html";

});