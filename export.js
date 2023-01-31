// AI Random Choice Generator

export let aiPick;
// computerChoose();
export function computerChoose() {
  let num;
  num = Math.random() * 3;
  num = Math.ceil(num);
  switch (true) {
    case num == 1:
      aiPick = "Rock";
      break;

    case num == 2:
      aiPick = "Paper";
      break;

    default:
      aiPick = "Scissors";
      break;
  }
  document.getElementById("aipick").textContent = "AI Choose : " + aiPick;
  //   console.log(num);
  //   console.log(aiPick);
}

// USER Picking ROCK - PAPER - Scissors
let winLose;

// User Choose ROCK
export function rock() {
  document.getElementById("mypick").innerText = "You Choosed : Rock";
  checkRock();
  output();
}

// User Choose Paper
export function paper() {
  document.getElementById("mypick").innerText = "You Choosed : Paper";
  checkPaper();
  output();
}

// User Choose Scissors
export function scissors() {
  document.getElementById("mypick").innerText = "You Choosed : Scissors";
  checkScissors();
  output();
}

// Condition Checking Function

// User choose Rock and Checking Condition
export function checkRock() {
  if (aiPick === "Rock") {
    winLose = "Its a Draw";
  } else {
    winLose = aiPick === "Paper" ? "You Lost" : "You Win";
  }
}

// User choose Paper and Checking Condition
export function checkPaper() {
  if (aiPick === "Paper") {
    winLose = "Its a Draw";
  } else {
    winLose = aiPick === "Scissors" ? "You Lost" : "You Win";
  }
}

// User choose Scissors and Checking Condition
export function checkScissors() {
  if (aiPick === "Scissors") {
    winLose = "Its a Draw";
  } else {
    winLose = aiPick === "Rock" ? "You Lost" : "You Win";
  }
}

// Output Function to show the Result

export function output() {
  document.getElementById("result").innerText = "Result : " + winLose;
}
