import { mainDeck, updateStages } from "./deck";
import { hideDeck, showDeck } from "./mix-button";

const nextCardElem = document.querySelector('.deck__next-card');
const currCardElem = document.querySelector('.deck__current-card');

let numCard = 0;

export const showCurrCard = (currCard) => {
  currCardElem.style.backgroundImage = `url(${currCard.cardFace})`;
}

export const showNextCard = () => {
  // console.log(mainDeck);
  showDeck();
  if (mainDeck.length > 0) {
    const nextCard = mainDeck.pop();
    // console.log(nextCard.color);
    updateStages(nextCard, numCard);
    showCurrCard(nextCard);
    numCard++;
  } else {
    resetNumCard()
    hideDeck();
  }
}

export const hideCardElem = (currCard) => {
  currCardElem.style.opacity = 0;
}

export const resetNumCard = () => {
  numCard = 0;
}


nextCardElem.addEventListener('click', showNextCard);