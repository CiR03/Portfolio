// <-------------TestCase--------------->
var btn = document.querySelector(".btn")
var inner = document.querySelector(".inner")
var front = document.querySelector(".frontout")
var anime = document.querySelector(".frotate")

btn.addEventListener("click", ()=>{
    front.classList.toggle("frotate")
})
// <------------Contact Toggle---------->
var Contactbtn = document.querySelector("#contact");
    mbl = document.querySelector(".mobilimg");
    contact = document.querySelector(".contactbox");

Contactbtn.addEventListener("click",()=>{
    contact.classList.toggle("contacttoggle")
    mbl.classList.toggle("mbltoggle")
})

// <------------Project Toggle---------->
var Projectbtn = document.querySelector("#Project")
    Project = document.querySelector(".project")
    zoombtn = document.querySelector(".zoom")


Projectbtn.addEventListener("click",()=>{
    Project.classList.toggle("projecttoggle")
})

zoombtn.addEventListener("click", ()=>{
    Project.classList.toggle("projectactive")
})
// <---------------Skill Plus Icon Toggle----------------->


var Skillbtn = document.querySelector("#Skills")
var skillslot = document.querySelector(".menubody")

Skillbtn.addEventListener("click", ()=>{
    skillslot.classList.toggle("menuactive")
})
var plus = document.querySelector(".plusicon")
var menuList = document.querySelector(".menu")

plus.addEventListener("click",()=>{
    plus.classList.toggle("plusactive");
    menuList.classList.toggle("active");
    skillslot.classList.toggle("menuactiveanime")
})

// <---------------Skill Plus Icon Toggle----------------->

var Profile = document.querySelector(".profile");
var Resumebody = document.querySelector(".Resumebody");
var Card = document.querySelector(".card");

Profile.addEventListener("click", ()=>{
    Resumebody.classList.toggle("Resumebodyactive")
    Card.classList.toggle("cardactive")
})