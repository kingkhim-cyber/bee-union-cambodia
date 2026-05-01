/* COVERAGE CHECK */

document.getElementById("checkCoverage")
.onclick=()=>{
const input=document.querySelector(".coverage-box input").value;

if(!input) return alert("Enter address");

alert("✅ Fiber available near "+input);
};

/* SPEED TEST */

const start=document.getElementById("startSpeed");
const number=document.getElementById("speedNumber");

start.onclick=()=>{
let speed=0;

const test=setInterval(()=>{
speed+=Math.random()*20;
number.innerText=Math.floor(speed);

if(speed>=300){
clearInterval(test);
number.innerText="300";
}
},120);
};

/* PAY BILL MODAL */

const modal=document.getElementById("billModal");
document.getElementById("payBill").onclick=
()=>modal.style.display="flex";

modal.onclick=e=>{
if(e.target===modal)
modal.style.display="none";
};

/* LANGUAGE SWITCH */

document.getElementById("langSwitch")
.onclick=()=>{
const title=document.querySelector(".hero-title");

title.innerText=
title.innerText.includes("Fastest")
? "អ៊ីនធឺណិតលឿនបំផុតនៅកម្ពុជា"
: "Fastest Fiber in Cambodia";
};

/* NEWSLETTER */

document.getElementById("subscribeBtn")
.onclick=()=>{
const email=document.getElementById("emailInput").value;

if(!email.includes("@"))
return alert("Invalid email");

alert("Subscribed!");
};

/* BOOK INSTALL */

document.getElementById("bookInstall")
.onclick=()=>{
alert("Installation scheduled!");
};
