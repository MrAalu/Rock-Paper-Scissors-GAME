import { computerChoose } from "./export.js";

document.getElementById("rock").onclick = function () {
  computerChoose();
  document.getElementById("mypick").innerText = "You Choosed : Rock";
};

document.getElementById("paper").onclick = function () {
  computerChoose();
  document.getElementById("mypick").innerText = "You Choosed : Paper";
};

document.getElementById("scissors").onclick = function () {
  computerChoose();
  document.getElementById("mypick").innerText = "You Choosed : Scissors";
};
