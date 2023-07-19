let randomNum = Math.trunc(Math.random() * 20) + 1;
const check = document.getElementById("check");
const again = document.getElementById("again");
let message = document.querySelector(".message");
const number = document.querySelector(".number");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore")


check.addEventListener("click", function(){
    let value = +document.querySelector(".guess").value;

    if(score.textContent == 0){
        message.innerHTML = "Game Over";
        document.body.style.backgroundColor = "red";
        return
    }


    if(randomNum === value){
        win();
        return
    }else if(randomNum > value){
        message.innerHTML = "Too low";
        score.textContent--
    }else{
        message.innerHTML = "Too high";
        score.textContent--
    }
});

again.addEventListener("click", function(){
    document.body.style.backgroundColor = "black";
    message.innerHTML = "Start guessing...";
    number.textContent = "?";
    score.textContent = 20;
    randomNum = Math.trunc(Math.random() * 20) + 1;
});

function win(){
    document.body.style.backgroundColor = "green";
    message.innerHTML = "You win!";
    number.textContent = randomNum;

    if(highScore.textContent < score.textContent){
        highScore.textContent = score.textContent
    }
}