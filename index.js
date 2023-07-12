// alert("haha");

// Dice 1:
var randomNumber1 = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomDiceImg1 = "dice" + randomNumber1 + ".png";  // dice1.png to dice6.png
var randomDiceImgSrc1 = "images/" + randomDiceImg1;  // images/dice1.png to images/dice6.png

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomDiceImgSrc1);

// Dice 2:
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImgSrc2 = "images/" + "dice" + randomNumber2 + ".png";  // images/dice1.png to images/dice6.png

var img2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImgSrc2);


// Result:
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 won!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 won!";
}
else{
  document.querySelector("h1").innerHTML = "It's a tie!";
}
