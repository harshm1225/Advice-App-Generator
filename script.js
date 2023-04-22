// Fetching the Data
const diceButton = document.querySelector(".dice-image-container");

const message = document.querySelector(".advice-text-container");
const id = document.querySelector(".id");

const url = "https://api.adviceslip.com/advice";

async function getData() {
  diceButton.classList.add("fade");
  const { slip } = await fetch(url).then((response) => {
    return response.json();
  });
  updateUI(slip);
}

function updateUI(slip) {
  message.innerHTML = slip.advice;
  id.innerHTML = slip.id;
  setTimeout(() => {
    diceButton.classList.remove("fade");
  }, 1150);
}
diceButton.addEventListener("click", getData);
