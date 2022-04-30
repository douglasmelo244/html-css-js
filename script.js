var hamburger=document.querySelector(".hamburger");

hamburger.addEventListener("click",function(){
    document.querySelector(".sidebar").classList.toggle("show-menu");
    document.querySelector(".hamburger").classList.toggle("show-menu");



});