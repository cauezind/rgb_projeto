let redRange = document.querySelector('#rangered');
let greenRange = document.querySelector('#rangegreen');
let blueRange = document.querySelector('#rangeblue');

let redInput = document.querySelector('#inputred');
let greenInput = document.querySelector('#inputgreen');
let blueInput = document.querySelector('#inputblue');

let red = 0;
let green = 0;
let blue = 0;

let bgColor = document.querySelector('.cor');
let body = document.querySelector("body")
bgColor.style.backgroundColor = '#fffff';

function start() {
  getRed();
  getGreen();
  getBlue();
  renderColors();
}

function getRed() {
  redRange.addEventListener('input', function () {
    let valueRed = redRange.value;
    red = valueRed;
    redInput.value = valueRed;
    renderColors();
  });
}

function getGreen() {
  greenRange.addEventListener('input', function () {
    let valueGreen = greenRange.value;
    green = valueGreen;
    greenInput.value = valueGreen;
    renderColors();
  });
}

function getBlue() {
  blueRange.addEventListener('input', function () {
    let valueBlue = blueRange.value;
    blue = valueBlue;
    blueInput.value = valueBlue;
    renderColors();
  });
}

function renderColors() {
  r = red;
  g = green;
  b = blue;
  bgColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue}, 0.1)`;
  body.style.boxShadow = `inset 0 0 50em rgb(${red}, ${green}, ${blue})`;
  bgColor.style.boxShadow = `0 0 10em rgb(${red}, ${green}, ${blue})`;

  
}

start();