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

  if (aiPick === "Rock") {
    winLose = "Its a Draw";
  } else {
    winLose = aiPick === "Paper" ? "You Lost" : "You Win";
  }
  document.getElementById("result").innerText = "Result : " + winLose;
}

// User Choose Paper
export function paper() {
  document.getElementById("mypick").innerText = "You Choosed : Paper";

  if (aiPick === "Paper") {
    winLose = "Its a Draw";
  } else {
    winLose = aiPick === "Scissors" ? "You Lost" : "You Win";
  }
  document.getElementById("result").innerText = "Result : " + winLose;
}

// User Choose Scissors
export function scissors() {
  document.getElementById("mypick").innerText = "You Choosed : Scissors";

  if (aiPick === "Scissors") {
    winLose = "Its a Draw";
  } else {
    winLose = aiPick === "Rock" ? "You Lost" : "You Win";
  }
  document.getElementById("result").innerText = "Result : " + winLose;
}
