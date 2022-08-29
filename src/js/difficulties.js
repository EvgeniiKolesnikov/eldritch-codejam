import { game, checkStart, resetGame } from "./global";
import { setActiveMixBtn } from "./mix-button";
import { diffData } from '../../data/difficulties';

const difficulties = document.querySelector('.difficulties');

const diffs = new Map();
for (let i = 0; i < diffData.length; i++) {
  diffs.set(diffData[i].name, diffData[i].id)
}

console.log(diffs);

const resetActive = (div) => {
  for (const child of div.children) {
    child.classList.remove('active');
  }
};

const setActive = (div) => {
  const text = div.textContent
  div.classList.add('active');
  resetGame();
  game.difficulty = diffs.get(text);
  game.isGame = false;
  console.log(game);
};

const changeDiddiculty = (e) => {
  const className = e.target.className;
  const target = e.target;

  if (className === 'difficulties__difficulty') {
    // console.log(target.id);
    resetActive(difficulties);
    setActive(target);
    // checkStart();
    setActiveMixBtn();
  }
};

difficulties.addEventListener('click', (e) => changeDiddiculty(e));
