window.addEventListener("DOMContentLoaded", loadSVG);

function loadSVG() {
  console.log("load the SVG");

  fetch("car_and_road.svg")
    .then(response => response.text())
    .then(svgData => {
      console.log("SVG loaded");

      // TODO: put the SVG into the DOM

      document
        .querySelector("#thesvg")
        .insertAdjacentHTML("afterbegin", svgData);

      //remember the car

      car = document.querySelector("#car");

      //start the animation

      runAnimation();
    });
}

let car = null;
let curve = null;
let currentPosition;

let xpos = 20;

const speed = 5;

function runAnimation() {
  console.log("animate");

  //make sure the animation loops (every frame)

  requestAnimationFrame(runAnimation);

  //increment the x position

  xpos += speed;

  //move the car to the enw position

  car.style.transform = `translate( ${xpos}px, 10px )`;
}
