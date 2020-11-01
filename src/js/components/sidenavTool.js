//the accordions
const accordion=document.querySelector("#accordion");
const filterAccordion=document.querySelector("#filterAccordion");

//vars for toggling menus
const moduleToggler = document.querySelector("#moduletoggler");
const filterToggler = document.querySelector("#filtertoggler");

// vars for the cards 
const modudeCard= document.querySelector("#modulecard");
const filterCard=document.querySelector("#filtercard");

//The back buttons 
const moduleBackButton=document.querySelector("#moduleBack");
const filterBackButton=document.querySelector("#filterBack");


//methods for toggling expanded view
filterToggler.addEventListener("click", event => {
  if( filterCard.classList.contains("expanded"))  {
    filterAccordion.classList.add("display-none");
    filterCard.classList.remove("expanded");
    filterBackButton.classList.add("display-none");
    } else{
    filterAccordion.classList.remove("display-none");
    filterCard.classList.add("expanded");
    filterBackButton.classList.remove("display-none");
}
});

moduleToggler.addEventListener("click", event => {
    if(modudeCard.classList.contains("expanded")){
        accordion.classList.add("display-none");
        modudeCard.classList.remove("expanded");
        moduleBackButton.classList.add("display-none");
    } else{
        accordion.classList.remove("display-none");
        modudeCard.classList.add("expanded");
        moduleBackButton.classList.remove("display-none");
    }
});
