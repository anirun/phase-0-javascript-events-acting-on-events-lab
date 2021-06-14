// grab dodger
const dodger = document.getElementById("dodger");

// change dodger color
dodger.style.backgroundColor = "#FF69B4"; 

// set start point
dodger.style.bottom = "0px"; 

// moveleft fxn
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 3}px`;
  }
} 

// moveRight fxn
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 3}px`;
  }
} 

// move dodger left when left pressed
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
}); 