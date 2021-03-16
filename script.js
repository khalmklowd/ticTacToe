//Main game function.
const game = (function() {
  let i = 2;     
  let winner = '';  
  let winnerO = '';
  let b = 0;

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

    //for use with removeEvenetListener.  
      const clickIt = function() {        
        if (i % 2 == 0) {
          document.getElementById(`box${a}`).style.backgroundImage = "url(images/xForTic.svg)";
          
          const xWins = function(n, b, c) {
            winner += `${a}, `;
            if (winner.includes(n) && winner.includes(b) && winner.includes(c)) {
              b += 1;
              document.getElementById("head").innerHTML = "<h1><b>X WINS!</b></h1>";
              setTimeout(function () { alert("New Game?"); location.reload(); }, 1000)
            }           
          };     
          xWins(0, 1, 2);
          xWins(0, 3, 6);
          xWins(0, 4, 8);
          xWins(3, 4, 5);
          xWins(6, 7, 8);
          xWins(1, 4, 7);
          xWins(2, 5, 8);
          xWins(2, 4, 6);
        }    

        else if (i % 2 != 0) {
          document.getElementById(`box${a}`).style.backgroundImage = "url(images/blueO.jpg)"; 
          
          const oWins = function(n, b, c) {
            winnerO += `${a}, `;
            if (winnerO.includes(n) && winnerO.includes(b) && winnerO.includes(c)) {
              b += 1;
              document.getElementById("head").innerHTML = "<h1><b>O WINS!</b></h1>";
              setTimeout(function () { alert("New Game?"); location.reload(); }, 1000);
            }     
          };
          oWins(0, 1, 2);
          oWins(0, 3, 6);
          oWins(0, 4, 8);
          oWins(3, 4, 5);
          oWins(6, 7, 8);
          oWins(1, 4, 7);
          oWins(2, 5, 8);
          oWins(2, 4, 6);
        }

        if (i == 10 && b == 0) {
          document.getElementById("head").innerHTML = "<h1><b>It's a tie!</b></h1>";
          setTimeout(function () { alert("New Game?"); location.reload(); }, 1000)  
        };    
        document.getElementById(`box${a}`).removeEventListener('mousedown', clickIt);
        i++;
        }

        document.getElementById(`box${a}`).addEventListener('mousedown', clickIt);
      }
    return {turn, gameBoard}
})();

//Initialize game
game.gameBoard();

// Add turn function to each div in the game board.
const gamePlay = (function() {
    let i = 0;
    for (i = 0; i <= 8; i++){
      document.getElementById(`box${i}`).mousedown = game.turn(i);    
  }
  }())

