const btn = document.getElementById("sendBtn");

btn.onclick=()=>{

const input=document.getElementById("message");

if(input.value=="") return;

const box=document.getElementById("messages");

box.innerHTML +=

`<div class="right">${input.value}</div>`;

input.value="";

box.scrollTop=box.scrollHeight;

}