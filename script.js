const game = () => {
     const player = () => {
        let sign = 'x';
        return sign;
    };

     const player2 = () => {
        let sign = 'o';
        return sign;
    }; 
    return {player, player2};
};

const player1 = game();

console.log(player1.player2());
console.log(player1.player());
