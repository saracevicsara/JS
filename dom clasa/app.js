let text = document.querySelector("#text");

function addclass() {
  console.log("jfieh");
  if (!text.classList.contains("red")) {
    text.classList.add("red");
  } else text.classList.remove("red");
}
