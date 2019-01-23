document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)
document.querySelector("#activate-mindreading").addEventListener("click", mindHandlerFunction)
document.querySelector("#activate-xray").addEventListener("click", xRayHandlerFunction)
document.querySelector("#activate-all").addEventListener("click", toggleClasses)
document.querySelector("#deactivate-all").addEventListener("click", unToggleClasses)


let flightButton = document.getElementById("activate-flight")
let mindButton = document.getElementById("activate-mindreading")
let xRayButton = document.getElementById("activate-xray")
let allButton = document.getElementById("activate-all")
let delAllButton = document.getElementById("deactivate-all")

function toggleClasses () {


    let all = document.querySelectorAll("section")
    all.forEach(section => {

        section.classList.add("enabled")
    })

}

function unToggleClasses () {


    let all = document.querySelectorAll("section")
    all.forEach(section => {
        section.classList.add("disabled")
        section.classList.remove("enabled")
    })

}


let flight = document.getElementById("flight")

function toggleClassFlight(newClass) {
    flight.classList.toggle(newClass)
    // console.log("!!!")
}
function flightHandlerFunction() {
    toggleClassFlight("enabled")
}


let mind = document.getElementById("mindreading")

function toggleClassMind(newClass) {
    mind.classList.toggle(newClass)
   
}
function mindHandlerFunction(newClass) {
    toggleClassMind("enabled")
   
}


let xRay = document.getElementById("xray")

function toggleClassxRay(newClass) {
    xRay.classList.toggle(newClass)
 
}

function xRayHandlerFunction() {
    toggleClassxRay("enabled")

}


function delAllHandlerFunction() {
    toggleClassxRay("disabled")
    toggleClassFlight("disabled")
    toggleClassMind("disabled")
}