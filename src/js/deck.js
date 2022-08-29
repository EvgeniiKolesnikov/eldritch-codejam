// 'Очень легко' все снежинки + добираются обычные
// 'Легко' убираются с щупальцами
// 'Средне' набор остается нетронутым
// 'Тяжело' убираются карты со снежинками
// 'Очень тяжко' все с щупальцами + добираются обычные

import { greenCards } from '../../data/mythicCards';
import { game } from './global';

const deck = {};
let greenCardsDeck = [];
console.log(game.difficulty);

export const setDeck = () => {
  if (game.difficulty === 'veryeasy') {
    greenCardsDeck = greenCards.filter(
      (card) => card.difficulty === 'easy' || card.difficulty === 'normal'
    );
    console.log(greenCards);
    console.log(greenCardsDeck);
  }
};
