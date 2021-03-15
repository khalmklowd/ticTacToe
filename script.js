//A work in progress.
const game = (function() {
  let i = 2;     
  let winner = '';  
  let winnerO = '';
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
      
      
      document.getElementById(`box${a}`).addEventListener('mousedown', () => {
        
        if (i % 2 == 0) {
          document.getElementById(`box${a}`).style.backgroundImage = "url(images/xForTic.svg)";
          
          const xWins = (function() {
            winner += `${a}, `;
            console.log(winner);
            if (winner.includes('0') && winner.includes('1') && winner.includes('2')) {
              console.log("X Wins!")
              document.getElementById("head").innerHTML = "<h1><b>X WINS!</b></h1>";
              setTimeout(function () { alert("New Game?"); location.reload(); }, 3000)
            }
            if (winner.includes('0') && winner.includes('3') && winner.includes('6')) {
              console.log('X Wins!');
              console.log("X Wins!")
              document.getElementById("head").innerHTML = "<h1><b>X WINS!</b></h1>";
              setTimeout(function () { alert("New Game?"); location.reload(); }, 3000)
            }  
            if (winner.includes('0') && winner.includes('4') && winner.includes('8')) {
              console.log('X Wins!');
              console.log("X Wins!")
              document.getElementById("head").innerHTML = "<h1><b>X WINS!</b></h1>";
              setTimeout(function () { alert("New Game?"); location.reload(); }, 3000)
            }
            if (winner.includes('3') && winner.includes('4') && winner.includes('5')) {
              console.log('X Wins!');
              console.log("X Wins!")
              document.getElementById("head").innerHTML = "<h1><b>X WINS!</b></h1>";
              setTimeout(function () { alert("New Game?"); location.reload(); }, 3000)
            }
            if (winner.includes('6') && winner.includes('7') && winner.includes('8')) {
              console.log('X Wins!');
              console.log("X Wins!")
              document.getElementById("head").innerHTML = "<h1><b>X WINS!</b></h1>";
              setTimeout(function () { alert("New Game?"); location.reload(); }, 3000)
            }
            if (winner.includes('1') && winner.includes('4') && winner.includes('7')) {
              console.log('X Wins!');
              console.log("X Wins!")
              document.getElementById("head").innerHTML = "<h1><b>X WINS!</b></h1>";
              setTimeout(function () { alert("New Game?"); location.reload(); }, 3000)
            }
            if (winner.includes('2') && winner.includes('5') && winner.includes('8')) {
              console.log('X Wins!');
              console.log("X Wins!")
              document.getElementById("head").innerHTML = "<h1><b>X WINS!</b></h1>";
              setTimeout(function () { alert("New Game?"); location.reload(); }, 3000)
            }
            if (winner.includes('2') && winner.includes('4') && winner.includes('6')) {
              console.log('X Wins!');
              console.log("X Wins!")
              document.getElementById("head").innerHTML = "<h1><b>X WINS!</b></h1>";
              setTimeout(function () { alert("New Game?"); location.reload(); }, 3000)
            }
          }());
        }
        else {
          document.getElementById(`box${a}`).style.backgroundImage = "url(images/blueO.jpg)";
        
          const yWins = (function() {
            winnerO += `${a}, `;
            console.log(winnerO);
            if (winnerO.includes('0') && winnerO.includes('1') && winnerO.includes('2')) {
              console.log('O Wins!');
              window.location.href = "https://www.youtube.com/watch?v=U9DyHthJ6LA";
              document.getElementById("head").innerHTML = "<h1><b>O WINS!</b></h1>";
              setTimeout(function () { alert("New Game?"); location.reload(); }, 3000)
            }
            if (winnerO.includes('0') && winnerO.includes('3') && winnerO.includes('6')) {
              console.log('O Wins!');
              document.getElementById("head").innerHTML = "<h1><b>O WINS!</b></h1>";
              setTimeout(function () { alert("New Game?"); location.reload(); }, 3000)
            }  
            if (winnerO.includes('0') && winnerO.includes('4') && winnerO.includes('8')) {
              console.log('O Wins!');
              document.getElementById("head").innerHTML = "<h1><b>O WINS!</b></h1>";
              setTimeout(function () { alert("New Game?"); location.reload(); }, 3000)
            }
            if (winnerO.includes('3') && winnerO.includes('4') && winnerO.includes('5')) {
              console.log('O Wins!');
              document.getElementById("head").innerHTML = "<h1><b>O WINS!</b></h1>";
              setTimeout(function () { alert("New Game?"); location.reload(); }, 3000)
            }
            if (winnerO.includes('6') && winnerO.includes('7') && winnerO.includes('8')) {
              console.log('O Wins!');
              document.getElementById("head").innerHTML = "<h1><b>O WINS!</b></h1>";
              setTimeout(function () { alert("New Game?"); location.reload(); }, 3000)
            }
            if (winnerO.includes('1') && winnerO.includes('4') && winnerO.includes('7')) {
              console.log('O Wins!');
              document.getElementById("head").innerHTML = "<h1><b>O WINS!</b></h1>";
              setTimeout(function () { alert("New Game?"); location.reload(); }, 3000)
            }
            if (winnerO.includes('2') && winnerO.includes('5') && winnerO.includes('8')) {
              console.log('O Wins!');
              document.getElementById("head").innerHTML = "<h1><b>O WINS!</b></h1>";
              setTimeout(function () { alert("New Game?"); location.reload(); }, 3000)
            }
            if (winnerO.includes('2') && winnerO.includes('4') && winnerO.includes('6')) {
              console.log('O Wins!');
              document.getElementById("head").innerHTML = "<h1><b>O WINS!</b></h1>";
              setTimeout(function () { alert("New Game?"); location.reload(); }, 3000)
            }
          }());
        }
          i++;
        })
      
      }

      

    return {turn, gameBoard}
})();

game.gameBoard();



// Add turn function to each div in the game board.
const gamePlay = (function() {
    let i = 0;
    let box = document.getElementById(`box${i}`).style.backgrounImage = "url(images/xForTic.svg)";
    let box1 = document.getElementById(`box${i}`).style.backgrounImage = "url(images/blueO.jpg)";
    for (i = 0; i <= 8; i++){
      document.getElementById(`box${i}`).mousedown = game.turn(i);
    
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

