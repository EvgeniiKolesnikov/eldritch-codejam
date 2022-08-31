// 'Очень легко' все снежинки + добираются обычные
// 'Легко' убираются с щупальцами
// 'Средне' набор остается нетронутым
// 'Тяжело' убираются карты со снежинками
// 'Очень тяжко' все с щупальцами + добираются обычные

import { blueCards, brownCards, greenCards } from '../../data/mythicCards';
import { game } from './global';
import { setState } from './state';

// console.log(game.difficulty);

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

export let mainDeck = [];
let firstDeck = [];
let secondDeck = [];
let thirdDeck = [];

export const getRandom = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

export const setColorDeck = (
  colorDeck,
  arr,
  diffMust,
  diff1,
  diff2,
  diff3,
  count
) => {
  let arrMust = arr.filter((card) => card.difficulty === diffMust);
  let arrMaybe = arr.filter(
    (card) =>
      card.difficulty === diff1 ||
      card.difficulty === diff2 ||
      card.difficulty === diff3
  );

  // console.log('arrMust = ', arrMust);
  // console.log('arrMaybe = ', arrMaybe);

  deck[colorDeck].length = 0;

  while (
    deck[colorDeck].length < arrMust.length &&
    deck[colorDeck].length < deck[count]
  ) {
    const rand = getRandom(arrMust);
    const newElem = arrMust[rand];

    if (deck[colorDeck].indexOf(newElem) === -1) {
      deck[colorDeck].push(newElem);
    }
  }

  while (deck[colorDeck].length < deck[count]) {
    const rand = getRandom(arrMaybe);
    const newElem = arrMaybe[rand];
    if (deck[colorDeck].indexOf(newElem) === -1) {
      const randPlace = getRandom(deck[colorDeck]);
      deck[colorDeck].splice(randPlace, 0, newElem);
    }
  }
  // console.log('deck = ', deck);
};

export const setDeck = () => {
  setCountCards();
  // console.log(deck);
  // console.log('difficulty =', game.difficulty);

  if (game.difficulty === 'veryeasy') {
    setColorDeck(
      'greenCardsDeck',
      greenCards,
      'easy',
      'normal',
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
      'normal',
      'blueCardsCount'
    );
    setColorDeck(
      'brownCardsDeck',
      brownCards,
      'easy',
      'normal',
      'normal',
      'normal',
      'brownCardsCount'
    );
  }

  if (game.difficulty === 'easy') {
    setColorDeck(
      'greenCardsDeck',
      greenCards,
      '',
      'easy',
      'normal',
      'normal',
      'greenCardsCount'
    );
    setColorDeck(
      'blueCardsDeck',
      blueCards,
      '',
      'easy',
      'normal',
      'normal',
      'blueCardsCount'
    );
    setColorDeck(
      'brownCardsDeck',
      brownCards,
      '',
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
      '',
      'easy',
      'normal',
      'hard',
      'greenCardsCount'
    );
    setColorDeck(
      'blueCardsDeck',
      blueCards,
      '',
      'easy',
      'normal',
      'hard',
      'blueCardsCount'
    );
    setColorDeck(
      'brownCardsDeck',
      brownCards,
      '',
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
      '',
      'hard',
      'normal',
      'normal',
      'greenCardsCount'
    );
    setColorDeck(
      'blueCardsDeck',
      blueCards,
      '',
      'hard',
      'normal',
      'normal',
      'blueCardsCount'
    );
    setColorDeck(
      'brownCardsDeck',
      brownCards,
      '',
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
      'normal',
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
      'normal',
      'blueCardsCount'
    );
    setColorDeck(
      'brownCardsDeck',
      brownCards,
      'hard',
      'normal',
      'normal',
      'normal',
      'brownCardsCount'
    );
  }
};

export const setStageDeck = (stageDeck, stageDeck2, stageDeck3, stage) => {
  stageDeck.length = 0;

  const blueArr = game[stage].blueCards;
  const brownArr = game[stage].brownCards;
  const greenArr = game[stage].greenCards;

  while (stageDeck.length < blueArr) {
    const rand = getRandom(deck.blueCardsDeck);
    const newElem = deck.blueCardsDeck[rand];
    if (
      stageDeck.indexOf(newElem) === -1 &&
      stageDeck2.indexOf(newElem) === -1 &&
      stageDeck3.indexOf(newElem) === -1
    ) {
      stageDeck.push(newElem);
    }
  }

  while (stageDeck.length < blueArr + greenArr) {
    const rand = getRandom(deck.greenCardsDeck);
    const newElem = deck.greenCardsDeck[rand];
    if (
      stageDeck.indexOf(newElem) === -1 &&
      stageDeck2.indexOf(newElem) === -1 &&
      stageDeck3.indexOf(newElem) === -1
    ) {
      stageDeck.push(newElem);
    }
  }

  while (stageDeck.length < blueArr + greenArr + brownArr) {
    const rand = getRandom(deck.brownCardsDeck);
    const newElem = deck.brownCardsDeck[rand];
    if (
      stageDeck.indexOf(newElem) === -1 &&
      stageDeck2.indexOf(newElem) === -1 &&
      stageDeck3.indexOf(newElem) === -1
    ) {
      const randPlace = getRandom(stageDeck);
      stageDeck.splice(randPlace, 0, newElem);
    }
  }
  // console.log(stageDeck);
};

export const setAllDecks = () => {
  mainDeck.length = 0;

  setStageDeck(firstDeck, secondDeck, thirdDeck, 'firstStage');
  mainDeck.unshift(...firstDeck);
  setStageDeck(secondDeck, firstDeck, thirdDeck, 'secondStage');
  mainDeck.unshift(...secondDeck);
  setStageDeck(thirdDeck, firstDeck, secondDeck, 'thirdStage');
  mainDeck.unshift(...thirdDeck);
  console.log('deck = ', mainDeck);
};

export const updateStages = (shownCard, numCard) => {
  if (shownCard.color === 'green') {
    if (numCard < firstDeck.length) {
      game.firstStage.greenCards -= 1;
    } else if (numCard < firstDeck.length + secondDeck.length) {
      game.secondStage.greenCards -= 1;
    } else {
      game.thirdStage.greenCards -= 1;
    }
  } 
  if (shownCard.color === 'blue') {
    if (numCard < firstDeck.length) {
      game.firstStage.blueCards -= 1;
    } else if (numCard < firstDeck.length + secondDeck.length) {
      game.secondStage.blueCards -= 1;
    } else {
      game.thirdStage.blueCards -= 1;
    }
  } 
  if (shownCard.color === 'brown') {
    if (numCard < firstDeck.length) {
      game.firstStage.brownCards -= 1;
    } else if (numCard < firstDeck.length + secondDeck.length) {
      game.secondStage.brownCards -= 1;
    } else {
      game.thirdStage.brownCards -= 1;
    }
  } 
  setState();
};