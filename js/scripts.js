let burgerBtn = document.querySelector("#burger-btn");
let navContainer = document.querySelector( "#nav-container")
let canISeeTheMenu = false;
burgerBtn.addEventListener("click", () => {
if(canISeeTheMenu == false) { 
console.log ("Show Menu");
navContainer.classList.add("showNavContainer");
burgerBtn.classList.add("open");
canISeeTheMenu = true;
} else {
navContainer.classList.remove("showNavContainer");
burgerBtn.classList.remove("open");
canISeeTheMenu = false;
} } )

navContainer.addEventListener("click", () => {
navContainer.classList.remove ("showNavContainer") ;
burgerBtn.classList.remove ("open");
canISeeTheMenu = false;
} )