window.addEventListener("load",()=>{

document.getElementById("loader").style.display="none";

});

const words=[
"Software Developer",
"Data Analyst",
"Cybersecurity Enthusiast",
"Online Tutor"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=words[i];

if(!isDeleting){

document.getElementById("typing").textContent=
current.substring(0,j++);

if(j>current.length){

isDeleting=true;

setTimeout(type,1000);

return;

}

}else{

document.getElementById("typing").textContent=
current.substring(0,j--);

if(j===0){

isDeleting=false;

i++;

if(i===words.length){

i=0;

}

}

}

setTimeout(type,isDeleting?50:120);

}

type();

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=
Math.ceil(count+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

const menuBtn=
document.getElementById("menuBtn");

const nav=
document.getElementById("nav");

menuBtn.addEventListener("click",()=>{

if(nav.style.display==="flex"){

nav.style.display="none";

}else{

nav.style.display="flex";

}

});