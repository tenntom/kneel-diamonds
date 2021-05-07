import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

//this will render the HTML and console.log when the button is pressed (stateChanged event)
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})


//This is now listening for all "change" events and rendering the page again. 
document.addEventListener("change", event => {
    console.log("You chose some stuff.")
    renderAllHTML()
})