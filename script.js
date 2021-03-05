//A work in progress.
const game = (function() {
    // Create gameboard with 3x3 grid
    const gameBoard = () => {
        let board = document.createElement('DIV');
        x = 0;
        for (x = 0; x < 9; x++) {
          let spots = document.getElementById("target").appendChild(document.createElement('DIV'));
          spots.id = `box${x}`;
        }
        
        
    };
    const player = () => {
        let sign = ['x', 'o'];
        return sign;
    };
     
    return {player, gameBoard}
})();

game.gameBoard();

// Add event listeners and creates images and player turns.
const gamePlay = (function() {
  let i = 2;

  document.getElementById("box0").addEventListener('click', function() {

      if (i % 2 == 0) {
        document.getElementById("box0").style.backgroundImage="url(images/xForTic.svg)";
        }
      else {
        document.getElementById("box0").style.backgroundImage="url(images/blueO.jpg)";
      }
      i += 1;
    
  })

  document.getElementById("box1").addEventListener('click', function() {

      if (i % 2 == 0) {
        document.getElementById("box1").style.backgroundImage="url(images/xForTic.svg)";
          
      }
        else {
          document.getElementById("box1").style.backgroundImage="url(images/blueO.jpg)";
        
        }
        i += 1;
        
    
  })

  document.getElementById("box2").addEventListener('click', function() {
  
      if (i%2 == 0) {
        document.getElementById("box2").style.backgroundImage="url(images/xForTic.svg)";
        }
      else {
        document.getElementById("box2").style.backgroundImage="url(images/blueO.jpg)";
        }
        i += 1;
    
  })

  document.getElementById("box3").addEventListener('click', function() {
    
      if (i%2 == 0) {
        document.getElementById("box3").style.backgroundImage="url(images/xForTic.svg)";
        }
        else {
          document.getElementById("box3").style.backgroundImage="url(images/blueO.jpg)";
        }
        i += 1;
    
  })

  document.getElementById("box4").addEventListener('click', function() {
    
      if (i%2 == 0) {
        document.getElementById("box4").style.backgroundImage="url(images/xForTic.svg)";
        }
        else {
          document.getElementById("box4").style.backgroundImage="url(images/blueO.jpg)";
        }
        i += 1;
    
  })

  document.getElementById("box5").addEventListener('click', function() {
    
      if (i%2 == 0) {
        document.getElementById("box5").style.backgroundImage="url(images/xForTic.svg)";
        }
        else {
          document.getElementById("box5").style.backgroundImage="url(images/blueO.jpg)";
        }
        i += 1;
    
  })

  document.getElementById("box6").addEventListener('click', function() {
    
      if (i%2 == 0) {
        document.getElementById("box6").style.backgroundImage="url(images/xForTic.svg)";
        }
        else {
          document.getElementById("box6").style.backgroundImage="url(images/blueO.jpg)";
        }
        i += 1;
    
  })

  document.getElementById("box7").addEventListener('click', function() {
    
      if (i%2 == 0) {
        document.getElementById("box7").style.backgroundImage="url(images/xForTic.svg)";
        }
        else {
          document.getElementById("box7").style.backgroundImage="url(images/blueO.jpg)";
        }
        i += 1;
    
  })

  document.getElementById("box8").addEventListener('click', function() {
    
      if (i%2 == 0) {
        document.getElementById("box8").style.backgroundImage="url(images/xForTic.svg)";
        }
        else {
          document.getElementById("box8").style.backgroundImage="url(images/blueO.jpg)";
        }
        i += 1;
    
  })
  }())

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

