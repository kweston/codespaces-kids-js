let count = 0;

const countElement = document.getElementById("count");
const increaseButton = document.getElementById("increase-btn");
const resetButton = document.getElementById("reset-btn");

function updateCount() {
  countElement.textContent = count;
}

increaseButton.addEventListener("click", () => {
  count += 1;
  updateCount();
});

resetButton.addEventListener("click", () => {
  count = 0;
  updateCount();
});

updateCount();
