import { game, checkStart } from "./global";
import { setActiveMixBtn } from "./mix-button";

const difficulties = document.querySelector('.difficulties');
// console.dir(difficulties);

const diffs = {
  'Очень легко' : 1,
  'Легко' : 2,
  'Средне' : 3,
  'Тяжело' : 4,
  'Очень тяжко' : 5,
};

const resetActive = (div) => {
  for (const child of div.children) {
    // console.log(child);
    child.classList.remove('active');
  }
};

const setActive = (div) => {
  const text = div.textContent
  div.classList.add('active');
  // console.log(diffs[text]);
  game.difficulty = diffs[text];
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
