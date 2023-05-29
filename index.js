// left dice
var randomNum1 = Math.floor(Math.random()*6)+1 // random number from 1 to 6
var randomDice1 = "images/dice"+randomNum1+".png" // address of image

document.querySelector(".img1").setAttribute("src",randomDice1) // set image source to random dice image

// right dice
var randomNum2 = Math.floor(Math.random()*6)+1 // random number from 1 to 6
var randomDice2 = "images/dice"+randomNum2+".png" // address of image

document.querySelector(".img2").setAttribute("src",randomDice2) // set image source to random dice image

if(randomNum1>randomNum2) document.querySelector("h1").textContent = "Player 1 wins!!"
else if(randomNum1<randomNum2) document.querySelector("h1").textContent = "Player 2 wins!!"
else document.querySelector("h1").textContent = "Draw!!"