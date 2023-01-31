// AI Random Choice Generator

export let aiPick;
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
  document.getElementById("aipick").innerText = "AI Choose : " + aiPick;
  console.log(aiPick);
}
