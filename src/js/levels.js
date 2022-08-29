import { game, checkStart, resetGame } from "./global";
import { setActiveMixBtn } from "./mix-button";

const levels = document.querySelector('.levels')
console.dir(levels);

const resetActive = (div) => {
  // console.dir(div);
  for (const child of div.children) {
    // console.dir(child);
    child.children[0].classList.remove('active');
  }
}

const setActive = (div) => {
  div.classList.add('active');
  // console.log(div.textContent);
  resetGame();
  game.level = div.id;
  game.isGame = false;
  // console.log(game);
}

const changeLevel = (e) => {
  const className = e.target.className;
  const target = e.target;
  // console.dir(target);
  if (className === 'levels__logo') {
    // console.dir(target);
    console.log(target.id);
    resetActive(levels);
    setActive(target);
    // checkStart();
    setActiveMixBtn();
  }
}

levels.addEventListener('click', e => changeLevel(e))