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
    mbl = document.querySelector(".mblbody");
    contact = document.querySelector(".contactbox");
    mblbtn = document.querySelector(".mblbtn")
    var bigmobile = false;

Contactbtn.addEventListener("click",()=>{
    mbl.classList.toggle("mbltoggle");
    contact.classList.remove("contactactive")
    mblbtn.classList.toggle("mblbtnanime")

    bigmobile =!bigmobile
})

mblbtn.addEventListener("click", ()=>{
    if(bigmobile==true){
    contact.classList.toggle("contactactive")
}
})
// <------------Project Toggle---------->
var Projectbtn = document.querySelector("#Project")
    Project = document.querySelector(".prjtbody")
    zoombtn = document.querySelector(".zoom")


Projectbtn.addEventListener("click",()=>{
    Project.classList.toggle("projecttoggle")
    Project.classList.remove("zoomtgl")

})

zoombtn.addEventListener("click", ()=>{
    Project.classList.toggle("zoomtgl")
})
// <---------------Skill Plus Icon Toggle----------------->


var Skillbtn = document.querySelector("#Skills")
var skillslot = document.querySelector(".menubody")

Skillbtn.addEventListener("click", ()=>{
    skillslot.classList.toggle("menuactive")
    plus.classList.remove("plusactive");
    menuList.classList.remove("active");
    skillslot.classList.remove("menuactiveanime")

})
var plus = document.querySelector(".plusicon")
var menuList = document.querySelector(".menu")

plus.addEventListener("click",()=>{
    plus.classList.toggle("plusactive");
    menuList.classList.toggle("active");
    skillslot.classList.toggle("menuactiveanime")
})

// <---------------Resume ---------------->

var Profile = document.querySelector(".profile");
var Resumebody = document.querySelector(".Resumebody");
var Card = document.querySelector(".card");
var Cover = document.querySelector(".cover");
var BigCv = false;

Profile.addEventListener("click", ()=>{
    Resumebody.classList.toggle("Resumebodyactive")
    Card.classList.toggle("cardactive")
    Cover.classList.remove("covertgl")
    Card.classList.remove("cardtgl")
    BigCv = !BigCv

})
Card.addEventListener("click", ()=>{
    if(BigCv==true){
    Cover.classList.toggle("covertgl")
    Card.classList.toggle("cardtgl")
    }   
})