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
      document.getElementById(`box${a}`).addEventListener('click', function() {
          if (i % 2 == 0) {
            document.getElementById(`box${a}`).style.backgroundImage="url(images/xForTic.svg)";
            }
          else {
            document.getElementById(`box${a}`).style.backgroundImage="url(images/blueO.jpg)";
          }
          i += 1;
})
}
    return {turn, gameBoard}
})();

game.gameBoard();

// Add turn function to each div in the game board.
const gamePlay = (function() {

  document.getElementById("box0").onclick = game.turn(0);
  document.getElementById("box1").onclick = game.turn(1);
  document.getElementById("box2").onclick = game.turn(2);
  document.getElementById("box3").onclick = game.turn(3);
  document.getElementById("box4").onclick = game.turn(4);
  document.getElementById("box5").onclick = game.turn(5);
  document.getElementById("box6").onclick = game.turn(6);
  document.getElementById("box7").onclick = game.turn(7);
  document.getElementById("box8").onclick = game.turn(8);
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

