// const cards = [];

// for (let i = 1; i < 12; i++) {
//   if (i < 2) {
//     cards.push('ace');
//   } else if (i < 11) {
//   cards.push(i);
//   } else {
//     cards.push('jack');
//     cards.push('queen');
//     cards.push('king');
//   }
// }

// const suits = ['spades', 'hearts', 'clubs', 'diamonds'];

// const randomRank = () => cards[Math.floor(Math.random() * 13)];
// const randomSuit = () => suits[Math.floor(Math.random() * 4)];

// document.write(`You drew the ${randomRank()} of ${randomSuit()}`);

const game = [];
let crossGo = true;

const square = document.querySelectorAll('.board__square'); // This gets an array of objects

square.forEach((btn, index) => {
    // So you need to use the index of the object (element, index)
    btn.addEventListener('click', () => {
        if (crossGo) {
            let alreadyUsed = square[index].textContent;
            let player = 'X';
            if (!alreadyUsed) {
                square[index].textContent = 'X';
                game[index] = player;
                checkWinner(player);
                crossGo = false;
                console.log(game);
            }
        } else {
            let alreadyUsed = square[index].textContent;
            let player = 'O';
            if (!alreadyUsed) {
                square[index].textContent = 'O';
                game[index] = player;
                checkWinner(player);
                crossGo = true;
                console.log(game);
            }
        }
    });
});

const winMsg = document.querySelector('.results__message');

const checkFirstRow = (player) => {
    if (game[0] === player && game[3] === player && game[6] === player) {
        winMsg.textContent = `Player ${player} wins!`;
    }
};

const checkSecondRow = (player) => {
    if (game[1] === player && game[4] === player && game[7] === player) {
        winMsg.textContent = `Player ${player} wins!`;
    }
};

const checkThirdRow = (player) => {
    if (game[2] === player && game[5] === player && game[8] === player) {
        winMsg.textContent = `Player ${player} wins!`;
    }
};

const checkFirstColumn = (player) => {
    if (game[0] === player && game[1] === player && game[2] === player) {
        winMsg.textContent = `Player ${player} wins!`;
    }
};

const checkSecondColumn = (player) => {
    if (game[3] === player && game[4] === player && game[5] === player) {
        winMsg.textContent = `Player ${player} wins!`;
    }
};

const checkThirdColumn = (player) => {
    if (game[6] === player && game[7] === player && game[8] === player) {
        winMsg.textContent = `Player ${player} wins!`;
    }
};

const checkLRDiagonal = (player) => {
    if (game[0] === player && game[4] === player && game[8] === player) {
        winMsg.textContent = `Player ${player} wins!`;
    }
};

const checkRLDiagonal = (player) => {
    if (game[2] === player && game[4] === player && game[6] === player) {
        winMsg.textContent = `Player ${player} wins!`;
    }
};

const checkWinner = (player) => {
    checkFirstRow(player);
    checkFirstColumn(player);
    checkSecondRow(player);
    checkSecondColumn(player);
    checkThirdRow(player);
    checkThirdColumn(player);
    checkLRDiagonal(player);
    checkRLDiagonal(player);
};
