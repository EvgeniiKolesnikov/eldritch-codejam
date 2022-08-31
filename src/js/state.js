import { game } from "./global";

const deckState = document.querySelector('.deck__state');

const firstStage = deckState.children[0];
const secondStage = deckState.children[1];
const thirdStage = deckState.children[2];

const stats = {
  firstStage: {
    greenCards: firstStage.children[0],
    blueCards: firstStage.children[2],
    brownCards: firstStage.children[1],
  },
  secondStage: {
    greenCards: secondStage.children[0],
    blueCards: secondStage.children[2],
    brownCards: secondStage.children[1],
  },
  thirdStage: {
    greenCards: thirdStage.children[0],
    blueCards: thirdStage.children[2],
    brownCards: thirdStage.children[1],
  },
};

// console.dir(deckState);
// console.log(secondStage);
// console.log(thirdStage);

// console.log(stats);


const setStage = (name) => {
  // console.log(stats[name]);
  stats[name].greenCards.textContent = game[name].greenCards;
  stats[name].blueCards.textContent = game[name].blueCards;
  stats[name].brownCards.textContent = game[name].brownCards;
}

export const setState = () => {
  setStage('firstStage');
  setStage('secondStage');
  setStage('thirdStage');
}