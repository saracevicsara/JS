function inflationCalculator() {
  let inflationRate = document.querySelector("#inflationRate");
  let money = document.querySelector("#money");
  let years = document.querySelector("#years");
  money = parseFloat(money.value);
  inflationRate = parseFloat(inflationRate.value);
  years = parseFloat(years.value);
  let worth = money + money * (inflationRate / 100);
  for (let i = 0; i < years; i++) {
    worth += worth * (inflationRate / 100);
  }
  let newElement = document.createElement("div");
  newElement.classList.add("new-value");
  newElement.innerText = `Your worth after ${years} years is ${worth}`;
  document.querySelector(".container").appendChild(newElement);
}
