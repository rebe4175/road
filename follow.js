window.addEventListener("DOMContentLoaded", loadSVG);

function loadSVG() {
  console.log("load the SVG");

  fetch("car_and_road.svg")
    .then(response => response.text())
    .then(svgData => {
      console.log("SVG loaded");

      // put the SVG into the DOM

      document
        .querySelector("#thesvg")
        .insertAdjacentHTML("afterbegin", svgData);

      // create snap object (from Snap.svg library)

      const snap = Snap("#thesvg svg");

      //remember the car

      car = snap.select("#car");

      //the curve

      curve = snap.select("#theCurve");

      //start the animation

      currentPosition = 0;

      runAnimation();
    });
}

let car = null;
let curve = null;
let currentPosition;

const speed = 5;

function runAnimation() {
  console.log("animate");

  //make sure the animation loops (every frame)

  if (currentPosition < curve.getTotalLength()) {
    requestAnimationFrame(runAnimation);
  }
  //change current-position

  currentPosition += speed;

  // find the x and y
  const pos = curve.getPointAtLength(currentPosition);

  if (pos.x === 1536) {
    cancelAnimationFrame(runAnimation);
  }

  //move the car to the new position

  car.node.style.transform = `translate( ${pos.x}px, ${pos.y}px) rotate(${
    pos.alpha
  }deg)`;
}
