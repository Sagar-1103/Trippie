const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})

const aboutUs = document.querySelector(".about-us");
const contactUs = document.querySelector(".contact-us");
const signIn = document.querySelector(".sign-in");


aboutUs.addEventListener("click",()=>{
    contactUs.classList.remove("active");
    signIn.classList.remove("active");
    aboutUs.classList.add("active");
})
contactUs.addEventListener("click",()=>{
    aboutUs.classList.remove("active");
    signIn.classList.remove("active");
    contactUs.classList.add("active");
})
signIn.addEventListener("click",()=>{
    aboutUs.classList.remove("active");
    contactUs.classList.remove("active");
    signIn.classList.add("active");
})

const std = document.querySelector(".std");
const standard = document.querySelector(".standard");
const premium = document.querySelector(".premium");
const prem = document.querySelector(".prem");
const bas = document.querySelector(".bas");
const basic = document.querySelector(".basic");
const s = document.querySelector(".s");
const b = document.querySelector(".b");
const pr = document.querySelector(".pr");


std.addEventListener("click",()=>{
    b.classList.remove("dark");
    b.classList.add("light");
    pr.classList.remove("dark");
    pr.classList.add("light");
    premium.classList.remove("price-card");
    basic.classList.remove("price-card");
    s.classList.toggle("light");
    s.classList.toggle("dark");
    standard.classList.toggle("price-card");
})

bas.addEventListener("click",()=>{
    s.classList.remove("dark");
    s.classList.add("light");
    pr.classList.remove("dark");
    pr.classList.add("light");
    premium.classList.remove("price-card");
    standard.classList.remove("price-card");
    b.classList.toggle("light");
    b.classList.toggle("dark");
    basic.classList.toggle("price-card");
})

prem.addEventListener("click",()=>{
    s.classList.remove("dark");
    s.classList.add("light");
    b.classList.remove("dark");
    b.classList.add("light");
    standard.classList.remove("price-card");
    basic.classList.remove("price-card");
    pr.classList.toggle("light");
    pr.classList.toggle("dark");
    premium.classList.toggle("price-card");
})