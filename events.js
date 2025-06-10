// stored html elements
let mario = document.querySelector(".mario");
let coin = document.querySelector(".coin");
let score = document.querySelector(".score");
let title = document.querySelector("h1");
let background = document.querySelector("body");
let jumpButton = document.querySelector(".jump");
let jumpDownButton = document.querySelector(".jump-down");
let changeColorButton = document.querySelector(".change-color");
let endGameButton = document.querySelector(".end-game");
let updateScoreButton = document.querySelector(".update-score");
let growButton = document.querySelector(".grow");

jumpButton.addEventListener("click", function() {
    mario.style.bottom = "120px";
    coin.style.display = "none";
});

/* 1. When jump button is clicked, Mario jumps and coin disappears.  

jumpButton.addEventListener("click", function() {
    mario.style.bottom = "120px";
    coin.style.display = "none";
});

*/
jumpDownButton.addEventListener("click", function() {
    mario.style = "bottom: 35px";
});

/* 2. When jump down button is clicked, Mario jumps down. 

jumpButtonDown.addEventListener("click", function() {
    mario.style = "bottom: 35px";
});

*/

changeColorButton.addEventListener("click", function() {
    background.style.backgroundColor = "springGreen"; // you can change the color to something different
});
/* 3. When change color button is clicked, background color changes. 

colorButton.addEventListener("click", function() {
    background.style.backgroundColor = "springGreen"; // you can change the color to something different
});

*/
endGameButton.addEventListener("click", function() {
    title.innerHTML = "Game over.";
});

/* 4. When end game button is clicked, the title of the page says game over. 

endGameButton.addEventListener("click", function() {
    title.innerHTML = "Game over.";
});

*/
updateScoreButton.addEventListener ("click", function() {
    score.innerHTML = +1;
});


/* 5. When update score button is clicked, the counter score becomes "1" instead of 0. 

updateScoreButton.addEventListener ("click", function() {
    score.innerHTML = 1;
});

*/

growButton.addEventListener("click", function(){
    mario.style.width = "200px";
});

/* 6: When clicking the "Grow" button the Mario image gets bigger. Write the whole click handler! 

growButton.addEventListener("click", function(){
    mario.style.width = "200px";
});

*/
