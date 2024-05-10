var randomNum = Math.ceil(Math.random() * 6);
var dice1 = "./images/dice" + randomNum + ".png";
document.querySelector(".dice .img1").setAttribute("src", dice1);

var randomNum2 = Math.ceil(Math.random() * 6);
var dice2 = "./images/dice" + randomNum2 + ".png";
document.querySelector(".dice .img2").setAttribute("src", dice2);

if (randomNum > randomNum2) {
  document.querySelector(".container h1").textContent = "Player 1 wins!";
} else if (randomNum < randomNum2) {
  document.querySelector(".container h1").textContent = "Player 2 wins!";
} else {
  document.querySelector(".container h1").textContent = "DRAW";
}
