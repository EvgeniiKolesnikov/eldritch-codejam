// 'Очень легко' все снежинки + добираются обычные
// 'Легко' убираются с щупальцами
// 'Средне' набор остается нетронутым
// 'Тяжело' убираются карты со снежинками
// 'Очень тяжко' все с щупальцами + добираются обычные

import { blueCards, brownCards, greenCards } from '../../data/mythicCards';
import { game } from './global';

console.log(game.difficulty);

export const deck = {
  greenCardsCount: 0,
  blueCardsCount: 0,
  brownCardsCount: 0,
  greenCardsDeck: [],
  blueCardsDeck: [],
  brownCardsDeck: [],
};

export const setCountCards = () => {
  deck.greenCardsCount =
    game.firstStage.greenCards +
    game.secondStage.greenCards +
    game.thirdStage.greenCards;
  deck.blueCardsCount =
    game.firstStage.blueCards +
    game.secondStage.blueCards +
    game.thirdStage.blueCards;
  deck.brownCardsCount =
    game.firstStage.brownCards +
    game.secondStage.brownCards +
    game.thirdStage.brownCards;
};

let greenCardsDeck = [];
let blueCardsDeck = [];
let brownCardsDeck = [];

// export const setColorDeck = (colorDeck, arr, diff1, diff2, diff3) => {
//   // setCountCards();
//   // console.log(colorDeck, diff1, diff2, diff3);
//   // console.log('game.difficulty', game.difficulty);

//   let filteredArr = arr.filter(
//     (card) =>
//       card.difficulty === diff1 ||
//       card.difficulty === diff2 ||
//       card.difficulty === diff3
//   );
//   console.log('filteredArr = ', filteredArr);
//   deck[colorDeck] = filteredArr;
//   console.log('deck = ', deck);
// };

export const setColorDeck = (colorDeck, arr, diff1, diff2, diff3, count) => {
  // setCountCards();
  // console.log(colorDeck, diff1, diff2, diff3);
  // console.log('game.difficulty', game.difficulty);
  let filteredArr = arr.filter(
    (card) =>
      card.difficulty === diff1 ||
      card.difficulty === diff2 ||
      card.difficulty === diff3
  );

  let filteredNormal = arr.filter((card) => card.difficulty === 'normal');

  console.log('filteredArr = ', filteredArr);
  console.log('filteredNormal = ', filteredNormal);

  while (
    deck[colorDeck].length < filteredArr.length &&
    deck[colorDeck].length < deck[count]
  ) {
    const rand = Math.floor(Math.random() * filteredArr.length);
    const newElem = filteredArr[rand];
    if (deck[colorDeck].indexOf(newElem) === -1) {
      deck[colorDeck].push(newElem);
    }
  }

  while (deck[colorDeck].length < deck[count]) {
    const rand = Math.floor(Math.random() * filteredNormal.length);
    const newElem = filteredNormal[rand];
    if (deck[colorDeck].indexOf(newElem) === -1) {
      deck[colorDeck].push(newElem);
    }
  }

  // deck[colorDeck] = filteredArr;
  console.log('deck = ', deck);
};

export const setDeck = () => {
  setCountCards();
  // console.log(deck);
  console.log(game.difficulty);

  if (game.difficulty === 'veryeasy') {
    setColorDeck(
      'greenCardsDeck',
      greenCards,
      'easy',
      'easy',
      'easy',
      'greenCardsCount'
    );
    setColorDeck(
      'blueCardsDeck',
      blueCards,
      'easy',
      'easy',
      'easy',
      'blueCardsCount'
    );
    setColorDeck(
      'brownCardsDeck',
      brownCards,
      'easy',
      'easy',
      'easy',
      'brownCardsCount'
    );
  }

  if (game.difficulty === 'easy') {
    setColorDeck(
      'greenCardsDeck',
      greenCards,
      'easy',
      'normal',
      'normal',
      'greenCardsCount'
    );
    setColorDeck(
      'blueCardsDeck',
      blueCards,
      'easy',
      'normal',
      'normal',
      'blueCardsCount'
    );
    setColorDeck(
      'brownCardsDeck',
      brownCards,
      'easy',
      'normal',
      'normal',
      'brownCardsCount'
    );
  }

  if (game.difficulty === 'normal') {
    setColorDeck(
      'greenCardsDeck',
      greenCards,
      'easy',
      'normal',
      'hard',
      'greenCardsCount'
    );
    setColorDeck(
      'blueCardsDeck',
      blueCards,
      'easy',
      'normal',
      'hard',
      'blueCardsCount'
    );
    setColorDeck(
      'brownCardsDeck',
      brownCards,
      'easy',
      'normal',
      'hard',
      'brownCardsCount'
    );
  }

  if (game.difficulty === 'hard') {
    setColorDeck(
      'greenCardsDeck',
      greenCards,
      'hard',
      'normal',
      'normal',
      'greenCardsCount'
    );
    setColorDeck(
      'blueCardsDeck',
      blueCards,
      'hard',
      'normal',
      'normal',
      'blueCardsCount'
    );
    setColorDeck(
      'brownCardsDeck',
      brownCards,
      'hard',
      'normal',
      'normal',
      'brownCardsCount'
    );
  }

  if (game.difficulty === 'veryhard') {
    setColorDeck(
      'greenCardsDeck',
      greenCards,
      'hard',
      'hard',
      'hard',
      'greenCardsCount'
    );
    setColorDeck(
      'blueCardsDeck',
      blueCards,
      'hard',
      'hard',
      'hard',
      'blueCardsCount'
    );
    setColorDeck(
      'brownCardsDeck',
      brownCards,
      'hard',
      'hard',
      'hard',
      'brownCardsCount'
    );
  }
};

export const delCards = (arr) => {
  console.log(arr);
};
