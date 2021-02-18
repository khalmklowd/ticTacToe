const Game = (function() {
    
    const gameBoard = () => {
        board = ['floof', 'chaff',];
        return board;
    };
    
    const player = () => {
        let sign = ['x'];
        return sign;
    };
    

    const player2 = () => {
        let sign = 'o';
        return sign;
    }; 
    return {player, player2, gameBoard}
})();

console.log(Game.player());
console.log(Game.gameBoard());
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
  
  Formatter.writeToDOM("#target", "Hi there");
