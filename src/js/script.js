
// main function
let gameLogic = (name) => {
  return () => {
        name.changingImg();
        name.choosingWinner();
        name.mainDisplay();
  }
}

// Event Listeners
rockImg.addEventListener("click", gameLogic(rock));
paperImg.addEventListener("click", gameLogic(paper));
scissorsImg.addEventListener("click", gameLogic(scissors));
