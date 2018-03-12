///CACHING DOM ELEMENTS
const rockImg = document.getElementsByClassName('choice-img')[0];
const paperImg = document.getElementsByClassName('choice-img')[1];
const scissorsImg = document.getElementsByClassName('choice-img')[2];
const playerPoints = document.getElementsByClassName('top-bar__score')[0];
const computerPoints = document.getElementsByClassName('top-bar__score')[1];
const winner = document.getElementsByClassName('winner-bar__winner')[0];
const versusBar = document.getElementsByClassName('versus-bar')[0];
const playerImg = document.getElementsByClassName('choosen-img')[0];
const computerImg = document.getElementsByClassName('choosen-img')[1];
const winnerBar = document.getElementsByClassName('winner-bar')[0];
const choiceImg = document.getElementsByClassName('choice-img');
const gamesNumber = document.getElementsByClassName('games-played')[0];
const title = document.getElementsByClassName('title')[0];
const winRatio2 = document.getElementsByClassName('win-ratio')[0];
// Score variables
let playerChoice = 0;
let computerChoice = 0;
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let ratio = 0;
let winRatio = 0;

//Win ratio - function
let winRatioCount = () =>{
  ratio = playerScore + computerScore;
  winRatio = Math.floor((playerScore / ratio) * 100 );
  winRatio2.innerHTML= ` ${winRatio}%`
}
// Show title - function
let showTitle =() =>{
    gamesPlayed += 1;
  if (gamesPlayed <= 3) {
    title.innerHTML = ` novice`
  }else if (gamesPlayed > 3 &&  gamesPlayed < 8) {
    title.innerHTML = ` Advance`
  }else{
    title.innerHTML = ` Expert`
  }
}
// Showing versus - function
let showVersus = () =>{
  setTimeout(function(){
      versusBar.style.display = "flex";
      gamesNumber.innerHTML = ` ${gamesPlayed}`
      showTitle();
  }, 200);
}
// Showing winner - function
let showWinner = () =>{
    winnerBar.style.display = "none";
    setTimeout(function(){
    winnerBar.style.display = "flex";
  }, 1000)
}
// Removing border - function
let removeBorder = () =>{
  playerImg.classList.remove("green-border", "green-border-win", "draw-border")
  computerImg.classList.remove("green-border", "green-border-win", "draw-border")
  for (var i = 0; i < choiceImg.length; i++) {
    choiceImg[i].classList.remove("green-border")
  }
}

// Computer winning - function
let computerWon = () => {
      setTimeout(function(){
      computerScore += 1;
      computerPoints.innerHTML = computerScore;
      winner.innerHTML = "Computer Won!"
      computerImg.classList.toggle("green-border")
      playerImg.classList.toggle("green-border-win")
      winRatioCount();
    },1000)
}
// Player winning - function
let test2 = (score,points,text,img,img2) =>{
  score += 1;
  points.innerHTML = score;
  winner.innerHTML = text;
  img.classList.toggle("green-border");
  img2.classList.toggle("green-border-win");
  winRatioCount();
};

let playerWon = () => {
    setTimeout(function(){
    playerScore += 1;
    playerPoints.innerHTML = playerScore;
    winner.innerHTML = "Player Won!"
    playerImg.classList.toggle("green-border")
    computerImg.classList.toggle("green-border-win")
    winRatioCount();
  }, 1000)
}
// draw
let draw = () =>{
    setTimeout(function(){
    winner.innerHTML = "Its a draw!";
    playerImg.classList.toggle("draw-border")
    computerImg.classList.toggle("draw-border")
  }, 1000)
}
// Main class
class Game {
  constructor(name, value){
    this.name = name;
    this.value = value;
    }
    changingImg(){
      playerImg.src = `img/${this.name}.png`
      computerImg.src = 'img/waiting.png'
      computerChoice = Math.floor(Math.random()*3);

      setTimeout(function(){
        if (computerChoice === 0) {
          computerImg.src = `img/rock.png`;
        }else if (computerChoice === 1 ) {
          computerImg.src = `img/paper.png`;
        }else {
          computerImg.src = `img/scissors.png`;
        }
      }, 1000)
    }
    mainDisplay(){
      removeBorder();
      event.target.classList.toggle("green-border");
      showVersus();
      showWinner();
    }
    // main logic
    choosingWinner(){
      if (this.value === computerChoice) {
        draw();
      }else if (this.value === 0 && computerChoice === 2
            || this.value === 1 && computerChoice === 0
            || this.value === 2 && computerChoice ===1 ) {
              playerWon();
      }else if (this.value === 0 && computerChoice === 1
            || this.value === 1 && computerChoice === 2
            || this.value ===2 && computerChoice === 0) {
        computerWon();
      }
    }
}

// new classes instance
let rock = new Game("rock", 0)
let paper = new Game("paper", 1)
let scissors = new Game("scissors", 2)
