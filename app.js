import { computerChoose, rock, paper, scissors } from "./export.js";

document.getElementById("rock").onclick = function () {
  computerChoose(); //This Function calls AI Random choice
  rock();
};

document.getElementById("paper").onclick = function () {
  computerChoose();
  paper();
};

document.getElementById("scissors").onclick = function () {
  computerChoose();
  scissors();
};
