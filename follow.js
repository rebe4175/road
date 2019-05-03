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

      //the curve

      curve = document.querySelector("#theCurve");

      //start the animation

      currentPosition = 0;

      runAnimation();
    });
}

let car = null;
let curve = null;
let currentPosition;

const speed = 3;

function runAnimation() {
  console.log("animate");

  //make sure the animation loops (every frame)

  requestAnimationFrame(runAnimation);

  //change current-position

  currentPosition += speed;

  // find the x and y
  const pos = curve.getPointAtLength(currentPosition);

  //move the car to the new position

  car.style.transform = `translate( ${pos.x}px, ${pos.y}px )`;
}
