export const game = {
  difficulty: '',
  level: '',
  isGame: false,
  firstStage: {
    greenCards: 0,
    blueCards: 0,
    brownCards: 0,
  },
  secondStage: {
    greenCards: 0,
    blueCards: 0,
    brownCards: 0,
  },
  thirdStage: {
    greenCards: 0,
    blueCards: 0,
    brownCards: 0,
  },
};

export const checkStart = () => {
  if (game.difficulty !== '' && game.level !== '' && !game.isGame) {
    console.log('can start');
    return true;
  }
};

// export const startGame = () => {
//   if (game.difficulty !== '' && game.level !== '') {
//     console.log('can start');
//     return true
//   }
// }
