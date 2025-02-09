let singupbtn=document.getElementById("singupbtn");
let singinbtn=document.getElementById("singinbtn");
let namefield=document.getElementById("namefield");
let title=document.getElementById("title");

singinbtn.onclick=function(){
    namefield.style.maxHeight="0" ;
    title.innerHTML="sign in";
    singupbtn.classList.add("disable");
    singinbtn.classList.remove("disable")

}

singupbtn.onclick=function(){
    namefield.style.maxHeight="60px" ;
    title.innerHTML="sign up";
    singupbtn.classList.remove("disable");
    singinbtn.classList.add("disable")

}
