counterEl = document.getElementById("counter");
function countUp(value) {
  counter = Number(counterEl.innerText);
  counterEl.innerText = counter + value;
}

function countDown(value) {
  counter = Number(counterEl.innerText);
  counterEl.innerText = counter - value;
}
