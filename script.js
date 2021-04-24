addEventListener('load', function() {
    
})


function changeColor() {
    colorSquare.style.background = `rgb(${redText.value}, ${greenText.value}, ${blueText.value})`
}


let colorSquare = document.querySelector('.colorSquare')

let rangeRed = document.querySelector('#rangeRed')
let rangeGreen = document.querySelector('#rangeGreen')
let rangeBlue = document.querySelector('#rangeBlue')

let redText = document.querySelector('#textRed')
let greenText = document.querySelector('#textGreen')
let blueText = document.querySelector('#textBlue')

rangeRed.addEventListener('input', function() {
    redText.value = rangeRed.value
    changeColor()
})

rangeGreen.addEventListener('input', function() {
    greenText.value = rangeGreen.value
    changeColor()
})

rangeBlue.addEventListener('input', function() {
    blueText.value = rangeBlue.value
    changeColor()
})