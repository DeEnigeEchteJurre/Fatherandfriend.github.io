const hints = [
  "Hint 1: Look for a hidden key.",
  "Hint 2: The key is not where you think it is.",
  "Hint 3: It's somewhere in the room.",
  "Hint 4: Check under the furniture.",
  "Hint 5: The key is under the rug."
];

let currentHint = 0;
const hintElement = document.querySelector("#hint");
const nextHintButton = document.querySelector("#next-hint");
const countdownTimer = document.createElement("span");
countdownTimer.id = "countdown";
nextHintButton.appendChild(countdownTimer);

nextHintButton.addEventListener("click", showNextHint);

function showNextHint() {
  hintElement.textContent = hints[currentHint];
  currentHint++;
  nextHintButton.disabled = true;

  if (currentHint === hints.length) {
    nextHintButton.style.display = "none";
    return;
  }

  let countdown = 5 * 60;
  countdownTimer.textContent = `(${Math.floor(countdown / 60)}m ${countdown % 60}s)`;
  const intervalId = setInterval(function() {
    countdown--;
    countdownTimer.textContent = `(${Math.floor(countdown / 60)}m ${countdown % 60}s)`;
    if (countdown === 0) {
      nextHintButton.disabled = false;
      clearInterval(intervalId);
      countdownTimer.textContent = "";
    }
  }, 1000);
}

showNextHint();
