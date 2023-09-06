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


