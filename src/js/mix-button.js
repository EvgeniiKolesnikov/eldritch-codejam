import ancientsData from '../../data/ancients';
import { game, checkStart } from './global';

const mixBtn = document.querySelector('.mix-button');
// console.dir(difficulties);

const resetActive = (div) => {
  div.classList.remove('active');
};

export const setActiveMixBtn = () => {
  if (checkStart()) {
    mixBtn.classList.add('active');
  }
  // console.log(game);
};

const setGame = () => {
  const ancient = ancientsData.find(item => item.id === game.level)
  game.firstStage = ancient.firstStage;
  game.secondStage = ancient.secondStage;
  game.thirdStage = ancient.thirdStage;
}

const startGame = (e) => {
  const className = e.target.className;
  const target = e.target;
  if (checkStart()) {
    game.isGame = true;
    resetActive(mixBtn);
    setGame();
  }
  console.log(game);

  // if (className === 'difficulties__difficulty') {
  //   // console.log(target.id);
  //   resetActive(difficulties);
  //   setActive(target);
  //   checkStart();
  // }
};

mixBtn.addEventListener('click', (e) => startGame(e));
