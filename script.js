//A work in progress.
const game = (function() {
  let i = 2;     
  
  // Create gameboard with 3x3 grid
    const gameBoard = () => {
        let board = document.createElement('DIV');
        x = 0;
        for (x = 0; x < 9; x++) {
          let spots = document.getElementById("target").appendChild(document.createElement('DIV'));
          spots.id = `box${x}`;
        }               
    };  
    
    //function to listen for clicks and switch turns.
    const turn = function(a) {
      document.getElementById(`box${a}`).addEventListener('click', () => {
          if (i % 2 == 0) {
            document.getElementById(`box${a}`).style.backgroundImage = "url(images/xForTic.svg)";
          }
          else {
            document.getElementById(`box${a}`).style.backgroundImage = "url(images/blueO.jpg)";
          }
          i += 1;
        })
}
    return {turn, gameBoard}
})();

game.gameBoard();

// Add turn function to each div in the game board.
const gamePlay = (function() {
    i = 0;
    for (i = 0; i <= 8; i++){
      document.getElementById(`box${i}`).onclick = game.turn(i);
    }
  }())
const stoppit = (function() {
    i = 0;
    for (i = 0; i <= 8; i++){
      document.getElementById(`box${i}`).removeEventListener("click", gamePlay);
    }
}())
  // something for me to reference.
const documentMock = (() => ({
    querySelector: (selector) => ({
      innerHTML: null,
    }),
  }))();
  
  const Formatter = (function(doc) {
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
  
    const makeUppercase = (text) => {
      log("Making uppercase");
      return text.toUpperCase();
    };
  
    const writeToDOM = (selector, message) => {
      doc.querySelector(selector).innerHTML = message;
    }
  
    return {
      makeUppercase,
      writeToDOM,
    }
  })(document || documentMock);

