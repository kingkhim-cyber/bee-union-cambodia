/* ================= MOBILE NAV TOGGLE ================= */

const menuBtn = document.createElement("button");
menuBtn.innerHTML = "☰";
menuBtn.classList.add("menu-toggle");

document.querySelector(".nav-content").prepend(menuBtn);

menuBtn.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll("a[href^='#']").forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    if(target){
      target.scrollIntoView({
        behavior:"smooth"
      });
    }
  });
});


/* ================= COVERAGE CHECKER ================= */

const coverageBtn = document.querySelector(".coverage-box button");

if(coverageBtn){
coverageBtn.addEventListener("click",()=>{

  const input =
    document.querySelector(".coverage-box input").value;

  if(input.trim()===""){
    alert("Please enter your address.");
    return;
  }

  coverageBtn.innerText="Checking...";
  coverageBtn.disabled=true;

  setTimeout(()=>{
    alert(`✅ Fiber available near "${input}"`);
    coverageBtn.innerText="Check Coverage";
    coverageBtn.disabled=false;
  },1500);
});
}


/* ================= PRICING SELECTION ================= */

document.querySelectorAll(".price-card button")
.forEach(btn=>{
  btn.addEventListener("click",()=>{

    document
    .querySelectorAll(".price-card")
    .forEach(card=>card.classList.remove("selected"));

    btn.closest(".price-card")
       .classList.add("selected");

    alert("Plan selected! Our team will contact you.");
  });
});


/* ================= NEWSLETTER ================= */

const subscribeBtn =
document.querySelector(".footer button");

if(subscribeBtn){
subscribeBtn.addEventListener("click",()=>{

  const email =
  document.querySelector(".footer input").value;

  const valid =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!valid.test(email)){
    alert("Enter a valid email.");
    return;
  }

  alert("🎉 Subscribed successfully!");
});
}


/* ================= NAVBAR SCROLL EFFECT ================= */

window.addEventListener("scroll",()=>{
  const nav=document.querySelector(".navbar");

  if(window.scrollY>50){
    nav.style.boxShadow="0 8px 25px rgba(0,0,0,.15)";
  }else{
    nav.style.boxShadow="0 2px 10px rgba(0,0,0,.05)";
  }
});