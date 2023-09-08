let burgerBtn = document.querySelector("#burger-btn");
let navContainer = document.querySelector("#nav-container");

let canISeeTheMenu = false;

burgerBtn.addEventListener("click", () => {
    if(canISeeTheMenu == false){
        navContainer.classList.add("showNavContainer");
        canISeeTheMenu = true;
    } else{
        navContainer.classList.remove("showNavContainer");
        canISeeTheMenu = false;
    }
})


let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

