counterElement = document.querySelector("counter");
function counterUp(value) {
  let counter = Number(counterElement.innerText);
  counterElement.innerText = counter + value;
}
function counterDown(value) {
  let counter = Number(counterElement.innerText);
  counterElement.innerText = counter - value;
}
