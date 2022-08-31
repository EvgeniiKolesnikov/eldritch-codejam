import { ancientsData } from '../../data/ancients';
import { resetNumCard } from './cardFlipper';
import { setAllDecks, setDeck } from './deck';
import { game, checkStart } from './global';
import { setState } from './state';

const mixBtn = document.querySelector('.mix-button');
const deckCards = document.querySelector('.deck__cards');
const currCardElem = document.querySelector('.deck__current-card');

export const hideDeck = () => {
  currCardElem.classList.add('hide');
};

export const showDeck = () => {
  currCardElem.classList.remove('hide');
};

const resetActive = (div) => {
  div.classList.remove('active');
};

export const setActiveMixBtn = () => {
  if (checkStart()) {
    mixBtn.classList.add('active');
  }
};

const setGame = () => {
  const ancient = ancientsData.find((item) => item.id === game.level);
  game.firstStage = structuredClone(ancient.firstStage);
  game.secondStage = structuredClone(ancient.secondStage);
  game.thirdStage = structuredClone(ancient.thirdStage);
  console.log('game = ', game);
  setState();
  setDeck();
  setAllDecks();
  resetNumCard();
};

const startGame = (e) => {
  const className = e.target.className;
  const target = e.target;
  if (checkStart()) {
    game.isGame = true;
    resetActive(mixBtn);
    setGame();
  }
  // console.log(game);
};

mixBtn.addEventListener('click', (e) => startGame(e));
