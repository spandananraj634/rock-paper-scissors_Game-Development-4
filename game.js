const user = document.querySelector(".user");
const user_img = document.querySelector("#user-hand");
const ai_img = document.querySelector("#ai-hand");
const option_selector = document.querySelectorAll(".options > img");
const options = document.querySelector(".options");
const user_score = document.querySelector(".score-user");
const ai_score = document.querySelector(".score-ai");
const replay = document.querySelector(".replay");
const hand_options = ["rock", "paper", "scissors"];

let user_score_temp = 0;
let ai_score_temp = 0;

// Getting input from user
option_selector.forEach((option) => {
  option.addEventListener("click", () => process_input(option.alt));
});

// Processing input
function process_input(option) {
  user_img.src = `assets/${option}-hand.png`;
  const ai_hand = hand_options[Math.floor(Math.random() * 3)];
  genetating_hand_for_ai(ai_hand);
  compare_hands(option, ai_hand);
}

// Generating random hand image for AI
function genetating_hand_for_ai(hand) {
  ai_img.src = `assets/${hand}-hand.png`;
}

function compare_hands(user_hand, ai_hand) {
  if (
    (user_hand === "rock" && ai_hand === "scissors") ||
    (user_hand === "paper" && ai_hand === "rock") ||
    (user_hand === "scissors" && ai_hand === "paper")
  ) {
    user_score.textContent = ++user_score_temp;
  } else if (user_hand !== ai_hand) {
    ai_score.textContent = ++ai_score_temp;
  }
  checking_score(user_score.textContent, ai_score.textContent);
}

function checking_score(user, ai) {
  if (user === "5" || ai === "5") {
    options.style.visibility = "hidden";
    replay.style.visibility = "visible";
  }
}

const playBtn = document.querySelector(".play-again-box");
playBtn.onclick = () => {
  window.location.href = "game.html";
};