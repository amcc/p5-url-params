// get the url parameters
const url = window.location.search;
let params = new URLSearchParams(url);

// find the parameter for colour
const colour = params.get("colour");
console.log("colour", colour);

let slider;

function setup() {
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);

  // set a default colour
  let startPosition = 60;
  // check the colour parameter looks like a number
  if (!isNaN(colour)) {
    // set the type to a number (it comes in as a string)
    startPosition = Number(colour);
  }
  console.log(startPosition);
  slider = createSlider(0, 360, startPosition, 40);
  slider.position(10, 30);
  slider.style("width", "80px");

  // every time the slider is changed update the parameters in the link
  slider.changed(updateParams);
  // update it at the very start to make sure the url is correct if we dont slide the slider

  updateParams();
}

function draw() {
  let val = slider.value();
  background(val, 100, 100, 1);
}

function updateParams() {
  // get the link element (this is in the html)
  let link = document.getElementById("link");
  // update the link with the slider value
  link.href = "next.html?colour=" + slider.value();
}
