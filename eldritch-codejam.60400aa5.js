// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Oken":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setState = void 0;

var _global = require("./global");

const deckState = document.querySelector('.deck__state');
const firstStage = deckState.children[0];
const secondStage = deckState.children[1];
const thirdStage = deckState.children[2];
const stats = {
  firstStage: {
    greenCards: firstStage.children[0],
    blueCards: firstStage.children[2],
    brownCards: firstStage.children[1]
  },
  secondStage: {
    greenCards: secondStage.children[0],
    blueCards: secondStage.children[2],
    brownCards: secondStage.children[1]
  },
  thirdStage: {
    greenCards: thirdStage.children[0],
    blueCards: thirdStage.children[2],
    brownCards: thirdStage.children[1]
  }
}; // console.dir(deckState);
// console.log(secondStage);
// console.log(thirdStage);

console.log(stats);

const setStage = name => {
  // console.log(stats[name]);
  stats[name].greenCards.textContent = _global.game[name].greenCards;
  stats[name].blueCards.textContent = _global.game[name].blueCards;
  stats[name].brownCards.textContent = _global.game[name].brownCards;
};

const setState = () => {
  setStage('firstStage');
  setStage('secondStage');
  setStage('thirdStage');
};

exports.setState = setState;
},{"./global":"OZyt"}],"OZyt":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetGame = exports.game = exports.checkStart = void 0;

var _state = require("./state");

const game = {
  difficulty: '',
  level: '',
  isGame: false,
  firstStage: {
    greenCards: 0,
    blueCards: 0,
    brownCards: 0
  },
  secondStage: {
    greenCards: 0,
    blueCards: 0,
    brownCards: 0
  },
  thirdStage: {
    greenCards: 0,
    blueCards: 0,
    brownCards: 0
  }
};
exports.game = game;

const resetGame = () => {
  // console.log('reset');
  game.isGame = false;
  game.firstStage = {};
  game.secondStage = {};
  game.thirdStage = {};
  (0, _state.setState)();
};

exports.resetGame = resetGame;

const checkStart = () => {
  if (game.difficulty !== '' && game.level !== '' && !game.isGame) {
    // console.log('can start');
    return true;
  }
}; // export const startGame = () => {
//   if (game.difficulty !== '' && game.level !== '') {
//     console.log('can start');
//     return true
//   }
// }


exports.checkStart = checkStart;
},{"./state":"Oken"}],"BnAC":[function(require,module,exports) {
module.exports = "Azathoth.4927ae2d.png";
},{}],"xdKn":[function(require,module,exports) {
module.exports = "Cthulthu.12eb9044.png";
},{}],"NXph":[function(require,module,exports) {
module.exports = "IogSothoth.715bc021.png";
},{}],"nTCo":[function(require,module,exports) {
module.exports = "ShubNiggurath.26c4f501.png";
},{}],"dPcB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Azathoth = _interopRequireDefault(require("./Azathoth.png"));

var _Cthulthu = _interopRequireDefault(require("./Cthulthu.png"));

var _IogSothoth = _interopRequireDefault(require("./IogSothoth.png"));

var _ShubNiggurath = _interopRequireDefault(require("./ShubNiggurath.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ancients = {
  azathoth: _Azathoth.default,
  cthulhu: _Cthulthu.default,
  iogSothoth: _IogSothoth.default,
  shubNiggurath: _ShubNiggurath.default
};
var _default = ancients;
exports.default = _default;
},{"./Azathoth.png":"BnAC","./Cthulthu.png":"xdKn","./IogSothoth.png":"NXph","./ShubNiggurath.png":"nTCo"}],"cHZT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ancientsData = void 0;

var _index = _interopRequireDefault(require("../assets/Ancients/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ancientsData = [{
  id: 'azathoth',
  name: 'azathoth',
  cardFace: _index.default.azathoth,
  firstStage: {
    greenCards: 1,
    blueCards: 1,
    brownCards: 2
  },
  secondStage: {
    greenCards: 2,
    blueCards: 1,
    brownCards: 3
  },
  thirdStage: {
    greenCards: 2,
    blueCards: 0,
    brownCards: 4
  }
}, {
  id: 'cthulhu',
  name: 'cthulhu',
  cardFace: _index.default.cthulhu,
  firstStage: {
    greenCards: 0,
    blueCards: 2,
    brownCards: 2
  },
  secondStage: {
    greenCards: 1,
    blueCards: 0,
    brownCards: 3
  },
  thirdStage: {
    greenCards: 3,
    blueCards: 0,
    brownCards: 4
  }
}, {
  id: 'iogSothoth',
  name: 'iogSothoth',
  cardFace: _index.default.iogSothoth,
  firstStage: {
    greenCards: 0,
    blueCards: 1,
    brownCards: 2
  },
  secondStage: {
    greenCards: 2,
    blueCards: 1,
    brownCards: 3
  },
  thirdStage: {
    greenCards: 3,
    blueCards: 0,
    brownCards: 4
  }
}, {
  id: 'shubNiggurath',
  name: 'shubNiggurath',
  cardFace: _index.default.shubNiggurath,
  firstStage: {
    greenCards: 1,
    blueCards: 1,
    brownCards: 2
  },
  secondStage: {
    greenCards: 3,
    blueCards: 1,
    brownCards: 2
  },
  thirdStage: {
    greenCards: 2,
    blueCards: 0,
    brownCards: 4
  }
}];
exports.ancientsData = ancientsData;
},{"../assets/Ancients/index":"dPcB"}],"HMLS":[function(require,module,exports) {
module.exports = "brown1.3e8ea676.png";
},{}],"mAsh":[function(require,module,exports) {
module.exports = "brown2.b1235466.png";
},{}],"gi2Z":[function(require,module,exports) {
module.exports = "brown3.26e5a2af.png";
},{}],"mzLO":[function(require,module,exports) {
module.exports = "brown4.8da24a4e.png";
},{}],"Kqvb":[function(require,module,exports) {
module.exports = "brown5.7aaedd02.png";
},{}],"o5kL":[function(require,module,exports) {
module.exports = "brown6.df08eed1.png";
},{}],"wmFQ":[function(require,module,exports) {
module.exports = "brown7.0ac4f3b9.png";
},{}],"ryP4":[function(require,module,exports) {
module.exports = "brown8.34b92aa7.png";
},{}],"fJzq":[function(require,module,exports) {
module.exports = "brown9.b02ec57a.png";
},{}],"hwiK":[function(require,module,exports) {
module.exports = "brown10.b67988b3.png";
},{}],"fewe":[function(require,module,exports) {
module.exports = "brown11.d10e67ac.png";
},{}],"hCfX":[function(require,module,exports) {
module.exports = "brown12.1c412a94.png";
},{}],"O6W5":[function(require,module,exports) {
module.exports = "brown13.03e9ed4d.png";
},{}],"KyW1":[function(require,module,exports) {
module.exports = "brown14.d0c15116.png";
},{}],"jhZh":[function(require,module,exports) {
module.exports = "brown15.eee82c73.png";
},{}],"sKuL":[function(require,module,exports) {
module.exports = "brown16.f2082e7f.png";
},{}],"L5C8":[function(require,module,exports) {
module.exports = "brown17.3672b4c8.png";
},{}],"Olq8":[function(require,module,exports) {
module.exports = "brown18.6a034c2a.png";
},{}],"uQMB":[function(require,module,exports) {
module.exports = "brown19.2bcee695.png";
},{}],"T4YN":[function(require,module,exports) {
module.exports = "brown20.a9bf7f4c.png";
},{}],"UEMS":[function(require,module,exports) {
module.exports = "brown21.a710138e.png";
},{}],"PRlK":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _brown = _interopRequireDefault(require("./brown1.png"));

var _brown2 = _interopRequireDefault(require("./brown2.png"));

var _brown3 = _interopRequireDefault(require("./brown3.png"));

var _brown4 = _interopRequireDefault(require("./brown4.png"));

var _brown5 = _interopRequireDefault(require("./brown5.png"));

var _brown6 = _interopRequireDefault(require("./brown6.png"));

var _brown7 = _interopRequireDefault(require("./brown7.png"));

var _brown8 = _interopRequireDefault(require("./brown8.png"));

var _brown9 = _interopRequireDefault(require("./brown9.png"));

var _brown10 = _interopRequireDefault(require("./brown10.png"));

var _brown11 = _interopRequireDefault(require("./brown11.png"));

var _brown12 = _interopRequireDefault(require("./brown12.png"));

var _brown13 = _interopRequireDefault(require("./brown13.png"));

var _brown14 = _interopRequireDefault(require("./brown14.png"));

var _brown15 = _interopRequireDefault(require("./brown15.png"));

var _brown16 = _interopRequireDefault(require("./brown16.png"));

var _brown17 = _interopRequireDefault(require("./brown17.png"));

var _brown18 = _interopRequireDefault(require("./brown18.png"));

var _brown19 = _interopRequireDefault(require("./brown19.png"));

var _brown20 = _interopRequireDefault(require("./brown20.png"));

var _brown21 = _interopRequireDefault(require("./brown21.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cards = {
  brown1: _brown.default,
  brown2: _brown2.default,
  brown3: _brown3.default,
  brown4: _brown4.default,
  brown5: _brown5.default,
  brown6: _brown6.default,
  brown7: _brown7.default,
  brown8: _brown8.default,
  brown9: _brown9.default,
  brown10: _brown10.default,
  brown11: _brown11.default,
  brown12: _brown12.default,
  brown13: _brown13.default,
  brown14: _brown14.default,
  brown15: _brown15.default,
  brown16: _brown16.default,
  brown17: _brown17.default,
  brown18: _brown18.default,
  brown19: _brown19.default,
  brown20: _brown20.default,
  brown21: _brown21.default
};
var _default = cards;
exports.default = _default;
},{"./brown1.png":"HMLS","./brown2.png":"mAsh","./brown3.png":"gi2Z","./brown4.png":"mzLO","./brown5.png":"Kqvb","./brown6.png":"o5kL","./brown7.png":"wmFQ","./brown8.png":"ryP4","./brown9.png":"fJzq","./brown10.png":"hwiK","./brown11.png":"fewe","./brown12.png":"hCfX","./brown13.png":"O6W5","./brown14.png":"KyW1","./brown15.png":"jhZh","./brown16.png":"sKuL","./brown17.png":"L5C8","./brown18.png":"Olq8","./brown19.png":"uQMB","./brown20.png":"T4YN","./brown21.png":"UEMS"}],"i8hn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _brown = _interopRequireDefault(require("../../../assets/MythicCards/brown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cardsData = [{
  id: 'brown1',
  cardFace: _brown.default.brown1,
  difficulty: 'normal',
  color: 'brown'
}, {
  id: 'brown2',
  cardFace: _brown.default.brown2,
  difficulty: 'normal',
  color: 'brown'
}, {
  id: 'brown3',
  cardFace: _brown.default.brown3,
  difficulty: 'normal',
  color: 'brown'
}, {
  id: 'brown4',
  cardFace: _brown.default.brown4,
  difficulty: 'normal',
  color: 'brown'
}, {
  id: 'brown5',
  cardFace: _brown.default.brown5,
  difficulty: 'normal',
  color: 'brown'
}, {
  id: 'brown6',
  cardFace: _brown.default.brown6,
  difficulty: 'hard',
  color: 'brown'
}, {
  id: 'brown7',
  cardFace: _brown.default.brown7,
  difficulty: 'hard',
  color: 'brown'
}, {
  id: 'brown8',
  cardFace: _brown.default.brown8,
  difficulty: 'hard',
  color: 'brown'
}, {
  id: 'brown9',
  cardFace: _brown.default.brown9,
  difficulty: 'hard',
  color: 'brown'
}, {
  id: 'brown10',
  cardFace: _brown.default.brown10,
  difficulty: 'hard',
  color: 'brown'
}, {
  id: 'brown11',
  cardFace: _brown.default.brown11,
  difficulty: 'easy',
  color: 'brown'
}, {
  id: 'brown12',
  cardFace: _brown.default.brown12,
  difficulty: 'easy',
  color: 'brown'
}, {
  id: 'brown13',
  cardFace: _brown.default.brown13,
  difficulty: 'easy',
  color: 'brown'
}, {
  id: 'brown14',
  cardFace: _brown.default.brown14,
  difficulty: 'easy',
  color: 'brown'
}, {
  id: 'brown15',
  cardFace: _brown.default.brown15,
  difficulty: 'normal',
  color: 'brown'
}, {
  id: 'brown16',
  cardFace: _brown.default.brown16,
  difficulty: 'normal',
  color: 'brown'
}, {
  id: 'brown17',
  cardFace: _brown.default.brown17,
  difficulty: 'normal',
  color: 'brown'
}, {
  id: 'brown18',
  cardFace: _brown.default.brown18,
  difficulty: 'normal',
  color: 'brown'
}, {
  id: 'brown19',
  cardFace: _brown.default.brown19,
  difficulty: 'normal',
  color: 'brown'
}, {
  id: 'brown20',
  cardFace: _brown.default.brown20,
  difficulty: 'normal',
  color: 'brown'
}, {
  id: 'brown21',
  cardFace: _brown.default.brown21,
  difficulty: 'easy',
  color: 'brown'
}];
var _default = cardsData;
exports.default = _default;
},{"../../../assets/MythicCards/brown":"PRlK"}],"wwPa":[function(require,module,exports) {
module.exports = "blue1.4476a8cb.png";
},{}],"AIZJ":[function(require,module,exports) {
module.exports = "blue2.e79b4686.png";
},{}],"h435":[function(require,module,exports) {
module.exports = "blue3.c6b24b1a.png";
},{}],"UriF":[function(require,module,exports) {
module.exports = "blue4.0699997b.png";
},{}],"e8PM":[function(require,module,exports) {
module.exports = "blue5.fcd4df98.png";
},{}],"zfJ1":[function(require,module,exports) {
module.exports = "blue6.4f86ff4d.png";
},{}],"mflm":[function(require,module,exports) {
module.exports = "blue7.87cd157a.png";
},{}],"UHk6":[function(require,module,exports) {
module.exports = "blue8.c2cb0b6b.png";
},{}],"wEq0":[function(require,module,exports) {
module.exports = "blue9.9c3b376a.png";
},{}],"b2SL":[function(require,module,exports) {
module.exports = "blue10.dbab62e3.png";
},{}],"cT7z":[function(require,module,exports) {
module.exports = "blue11.29851433.png";
},{}],"oh74":[function(require,module,exports) {
module.exports = "blue12.09d850eb.png";
},{}],"lq38":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _blue = _interopRequireDefault(require("./blue1.png"));

var _blue2 = _interopRequireDefault(require("./blue2.png"));

var _blue3 = _interopRequireDefault(require("./blue3.png"));

var _blue4 = _interopRequireDefault(require("./blue4.png"));

var _blue5 = _interopRequireDefault(require("./blue5.png"));

var _blue6 = _interopRequireDefault(require("./blue6.png"));

var _blue7 = _interopRequireDefault(require("./blue7.png"));

var _blue8 = _interopRequireDefault(require("./blue8.png"));

var _blue9 = _interopRequireDefault(require("./blue9.png"));

var _blue10 = _interopRequireDefault(require("./blue10.png"));

var _blue11 = _interopRequireDefault(require("./blue11.png"));

var _blue12 = _interopRequireDefault(require("./blue12.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cards = {
  blue1: _blue.default,
  blue2: _blue2.default,
  blue3: _blue3.default,
  blue4: _blue4.default,
  blue5: _blue5.default,
  blue6: _blue6.default,
  blue7: _blue7.default,
  blue8: _blue8.default,
  blue9: _blue9.default,
  blue10: _blue10.default,
  blue11: _blue11.default,
  blue12: _blue12.default
};
var _default = cards;
exports.default = _default;
},{"./blue1.png":"wwPa","./blue2.png":"AIZJ","./blue3.png":"h435","./blue4.png":"UriF","./blue5.png":"e8PM","./blue6.png":"zfJ1","./blue7.png":"mflm","./blue8.png":"UHk6","./blue9.png":"wEq0","./blue10.png":"b2SL","./blue11.png":"cT7z","./blue12.png":"oh74"}],"beaj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _blue = _interopRequireDefault(require("../../../assets/MythicCards/blue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cardsData = [{
  id: 'blue1',
  cardFace: _blue.default.blue1,
  difficulty: 'hard',
  color: 'blue'
}, {
  id: 'blue2',
  cardFace: _blue.default.blue2,
  difficulty: 'hard',
  color: 'blue'
}, {
  id: 'blue3',
  cardFace: _blue.default.blue3,
  difficulty: 'easy',
  color: 'blue'
}, {
  id: 'blue4',
  cardFace: _blue.default.blue4,
  difficulty: 'easy',
  color: 'blue'
}, {
  id: 'blue5',
  cardFace: _blue.default.blue5,
  difficulty: 'easy',
  color: 'blue'
}, {
  id: 'blue6',
  cardFace: _blue.default.blue6,
  difficulty: 'hard',
  color: 'blue'
}, {
  id: 'blue7',
  cardFace: _blue.default.blue7,
  difficulty: 'normal',
  color: 'blue'
}, {
  id: 'blue8',
  cardFace: _blue.default.blue8,
  difficulty: 'hard',
  color: 'blue'
}, {
  id: 'blue9',
  cardFace: _blue.default.blue9,
  difficulty: 'normal',
  color: 'blue'
}, {
  id: 'blue10',
  cardFace: _blue.default.blue10,
  difficulty: 'easy',
  color: 'blue'
}, {
  id: 'blue11',
  cardFace: _blue.default.blue11,
  difficulty: 'normal',
  color: 'blue'
}, {
  id: 'blue12',
  cardFace: _blue.default.blue12,
  difficulty: 'normal',
  color: 'blue'
}];
var _default = cardsData;
exports.default = _default;
},{"../../../assets/MythicCards/blue":"lq38"}],"mGcP":[function(require,module,exports) {
module.exports = "green1.69c9dd9b.png";
},{}],"c67Z":[function(require,module,exports) {
module.exports = "green2.46374e13.png";
},{}],"UU0M":[function(require,module,exports) {
module.exports = "green3.704bee39.png";
},{}],"EA3E":[function(require,module,exports) {
module.exports = "green4.5c472b82.png";
},{}],"Q8o3":[function(require,module,exports) {
module.exports = "green5.6b1029ff.png";
},{}],"uLiB":[function(require,module,exports) {
module.exports = "green6.ff0ee317.png";
},{}],"Dwzn":[function(require,module,exports) {
module.exports = "green7.30ad73c0.png";
},{}],"yYKR":[function(require,module,exports) {
module.exports = "green8.35a15dcf.png";
},{}],"WFSb":[function(require,module,exports) {
module.exports = "green9.357a5d5d.png";
},{}],"yAqF":[function(require,module,exports) {
module.exports = "green10.a8e785e4.png";
},{}],"FpAR":[function(require,module,exports) {
module.exports = "green11.e5595a3c.png";
},{}],"n7hK":[function(require,module,exports) {
module.exports = "green12.15e9fc8d.png";
},{}],"alRI":[function(require,module,exports) {
module.exports = "green13.09d426f7.png";
},{}],"d0cZ":[function(require,module,exports) {
module.exports = "green14.9d6014a1.png";
},{}],"cSq4":[function(require,module,exports) {
module.exports = "green15.238d0d6c.png";
},{}],"cqRZ":[function(require,module,exports) {
module.exports = "green16.34edb8bc.png";
},{}],"OMmN":[function(require,module,exports) {
module.exports = "green17.5a5445ea.png";
},{}],"a9aW":[function(require,module,exports) {
module.exports = "green18.1d8a4b02.png";
},{}],"SNEp":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _green = _interopRequireDefault(require("./green1.png"));

var _green2 = _interopRequireDefault(require("./green2.png"));

var _green3 = _interopRequireDefault(require("./green3.png"));

var _green4 = _interopRequireDefault(require("./green4.png"));

var _green5 = _interopRequireDefault(require("./green5.png"));

var _green6 = _interopRequireDefault(require("./green6.png"));

var _green7 = _interopRequireDefault(require("./green7.png"));

var _green8 = _interopRequireDefault(require("./green8.png"));

var _green9 = _interopRequireDefault(require("./green9.png"));

var _green10 = _interopRequireDefault(require("./green10.png"));

var _green11 = _interopRequireDefault(require("./green11.png"));

var _green12 = _interopRequireDefault(require("./green12.png"));

var _green13 = _interopRequireDefault(require("./green13.png"));

var _green14 = _interopRequireDefault(require("./green14.png"));

var _green15 = _interopRequireDefault(require("./green15.png"));

var _green16 = _interopRequireDefault(require("./green16.png"));

var _green17 = _interopRequireDefault(require("./green17.png"));

var _green18 = _interopRequireDefault(require("./green18.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cards = {
  green1: _green.default,
  green2: _green2.default,
  green3: _green3.default,
  green4: _green4.default,
  green5: _green5.default,
  green6: _green6.default,
  green7: _green7.default,
  green8: _green8.default,
  green9: _green9.default,
  green10: _green10.default,
  green11: _green11.default,
  green12: _green12.default,
  green13: _green13.default,
  green14: _green14.default,
  green15: _green15.default,
  green16: _green16.default,
  green17: _green17.default,
  green18: _green18.default
};
var _default = cards;
exports.default = _default;
},{"./green1.png":"mGcP","./green2.png":"c67Z","./green3.png":"UU0M","./green4.png":"EA3E","./green5.png":"Q8o3","./green6.png":"uLiB","./green7.png":"Dwzn","./green8.png":"yYKR","./green9.png":"WFSb","./green10.png":"yAqF","./green11.png":"FpAR","./green12.png":"n7hK","./green13.png":"alRI","./green14.png":"d0cZ","./green15.png":"cSq4","./green16.png":"cqRZ","./green17.png":"OMmN","./green18.png":"a9aW"}],"zai5":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _green = _interopRequireDefault(require("../../../assets/MythicCards/green"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cardsData = [{
  id: 'green1',
  cardFace: _green.default.green1,
  difficulty: 'easy',
  color: 'green'
}, {
  id: 'green2',
  cardFace: _green.default.green2,
  difficulty: 'hard',
  color: 'green'
}, {
  id: 'green3',
  cardFace: _green.default.green3,
  difficulty: 'hard',
  color: 'green'
}, {
  id: 'green4',
  cardFace: _green.default.green4,
  difficulty: 'hard',
  color: 'green'
}, {
  id: 'green5',
  cardFace: _green.default.green5,
  difficulty: 'hard',
  color: 'green'
}, {
  id: 'green6',
  cardFace: _green.default.green6,
  difficulty: 'hard',
  color: 'green'
}, {
  id: 'green7',
  cardFace: _green.default.green7,
  difficulty: 'normal',
  color: 'green'
}, {
  id: 'green8',
  cardFace: _green.default.green8,
  difficulty: 'normal',
  color: 'green'
}, {
  id: 'green9',
  cardFace: _green.default.green9,
  difficulty: 'normal',
  color: 'green'
}, {
  id: 'green10',
  cardFace: _green.default.green10,
  difficulty: 'normal',
  color: 'green'
}, {
  id: 'green11',
  cardFace: _green.default.green11,
  difficulty: 'normal',
  color: 'green'
}, {
  id: 'green12',
  cardFace: _green.default.green12,
  difficulty: 'easy',
  color: 'green'
}, {
  id: 'green13',
  cardFace: _green.default.green13,
  difficulty: 'normal',
  color: 'green'
}, {
  id: 'green14',
  cardFace: _green.default.green14,
  difficulty: 'normal',
  color: 'green'
}, {
  id: 'green15',
  cardFace: _green.default.green15,
  difficulty: 'normal',
  color: 'green'
}, {
  id: 'green16',
  cardFace: _green.default.green16,
  difficulty: 'easy',
  color: 'green'
}, {
  id: 'green17',
  cardFace: _green.default.green17,
  difficulty: 'easy',
  color: 'green'
}, {
  id: 'green18',
  cardFace: _green.default.green18,
  difficulty: 'easy',
  color: 'green'
}];
var _default = cardsData;
exports.default = _default;
},{"../../../assets/MythicCards/green":"SNEp"}],"tS8o":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "blueCards", {
  enumerable: true,
  get: function () {
    return _blue.default;
  }
});
Object.defineProperty(exports, "brownCards", {
  enumerable: true,
  get: function () {
    return _brown.default;
  }
});
Object.defineProperty(exports, "greenCards", {
  enumerable: true,
  get: function () {
    return _green.default;
  }
});

var _brown = _interopRequireDefault(require("./brown"));

var _blue = _interopRequireDefault(require("./blue"));

var _green = _interopRequireDefault(require("./green"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./brown":"i8hn","./blue":"beaj","./green":"zai5"}],"sFLM":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDeck = exports.setCountCards = exports.setColorDeck = exports.delCards = exports.deck = void 0;

var _mythicCards = require("../../data/mythicCards");

var _global = require("./global");

// 'Очень легко' все снежинки + добираются обычные
// 'Легко' убираются с щупальцами
// 'Средне' набор остается нетронутым
// 'Тяжело' убираются карты со снежинками
// 'Очень тяжко' все с щупальцами + добираются обычные
console.log(_global.game.difficulty);
const deck = {
  greenCardsCount: 0,
  blueCardsCount: 0,
  brownCardsCount: 0,
  greenCardsDeck: [],
  blueCardsDeck: [],
  brownCardsDeck: []
};
exports.deck = deck;

const setCountCards = () => {
  deck.greenCardsCount = _global.game.firstStage.greenCards + _global.game.secondStage.greenCards + _global.game.thirdStage.greenCards;
  deck.blueCardsCount = _global.game.firstStage.blueCards + _global.game.secondStage.blueCards + _global.game.thirdStage.blueCards;
  deck.brownCardsCount = _global.game.firstStage.brownCards + _global.game.secondStage.brownCards + _global.game.thirdStage.brownCards;
};

exports.setCountCards = setCountCards;
let greenCardsDeck = [];
let blueCardsDeck = [];
let brownCardsDeck = []; // export const setColorDeck = (colorDeck, arr, diff1, diff2, diff3) => {
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

const setColorDeck = (colorDeck, arr, diff1, diff2, diff3, count) => {
  // setCountCards();
  // console.log(colorDeck, diff1, diff2, diff3);
  // console.log('game.difficulty', game.difficulty);
  let filteredArr = arr.filter(card => card.difficulty === diff1 || card.difficulty === diff2 || card.difficulty === diff3);
  let filteredNormal = arr.filter(card => card.difficulty === 'normal');
  console.log('filteredArr = ', filteredArr);
  console.log('filteredNormal = ', filteredNormal);

  while (deck[colorDeck].length < filteredArr.length && deck[colorDeck].length < deck[count]) {
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
  } // deck[colorDeck] = filteredArr;


  console.log('deck = ', deck);
};

exports.setColorDeck = setColorDeck;

const setDeck = () => {
  setCountCards(); // console.log(deck);

  console.log(_global.game.difficulty);

  if (_global.game.difficulty === 'veryeasy') {
    setColorDeck('greenCardsDeck', _mythicCards.greenCards, 'easy', 'easy', 'easy', 'greenCardsCount');
    setColorDeck('blueCardsDeck', _mythicCards.blueCards, 'easy', 'easy', 'easy', 'blueCardsCount');
    setColorDeck('brownCardsDeck', _mythicCards.brownCards, 'easy', 'easy', 'easy', 'brownCardsCount');
  }

  if (_global.game.difficulty === 'easy') {
    setColorDeck('greenCardsDeck', _mythicCards.greenCards, 'easy', 'normal', 'normal', 'greenCardsCount');
    setColorDeck('blueCardsDeck', _mythicCards.blueCards, 'easy', 'normal', 'normal', 'blueCardsCount');
    setColorDeck('brownCardsDeck', _mythicCards.brownCards, 'easy', 'normal', 'normal', 'brownCardsCount');
  }

  if (_global.game.difficulty === 'normal') {
    setColorDeck('greenCardsDeck', _mythicCards.greenCards, 'easy', 'normal', 'hard', 'greenCardsCount');
    setColorDeck('blueCardsDeck', _mythicCards.blueCards, 'easy', 'normal', 'hard', 'blueCardsCount');
    setColorDeck('brownCardsDeck', _mythicCards.brownCards, 'easy', 'normal', 'hard', 'brownCardsCount');
  }

  if (_global.game.difficulty === 'hard') {
    setColorDeck('greenCardsDeck', _mythicCards.greenCards, 'hard', 'normal', 'normal', 'greenCardsCount');
    setColorDeck('blueCardsDeck', _mythicCards.blueCards, 'hard', 'normal', 'normal', 'blueCardsCount');
    setColorDeck('brownCardsDeck', _mythicCards.brownCards, 'hard', 'normal', 'normal', 'brownCardsCount');
  }

  if (_global.game.difficulty === 'veryhard') {
    setColorDeck('greenCardsDeck', _mythicCards.greenCards, 'hard', 'hard', 'hard', 'greenCardsCount');
    setColorDeck('blueCardsDeck', _mythicCards.blueCards, 'hard', 'hard', 'hard', 'blueCardsCount');
    setColorDeck('brownCardsDeck', _mythicCards.brownCards, 'hard', 'hard', 'hard', 'brownCardsCount');
  }
};

exports.setDeck = setDeck;

const delCards = arr => {
  console.log(arr);
};

exports.delCards = delCards;
},{"../../data/mythicCards":"tS8o","./global":"OZyt"}],"MpO1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setActiveMixBtn = void 0;

var _ancients = require("../../data/ancients");

var _deck = require("./deck");

var _global = require("./global");

var _state = require("./state");

const mixBtn = document.querySelector('.mix-button'); // console.dir(difficulties);

const resetActive = div => {
  div.classList.remove('active');
};

const setActiveMixBtn = () => {
  if ((0, _global.checkStart)()) {
    mixBtn.classList.add('active');
  } // console.log(game);

};

exports.setActiveMixBtn = setActiveMixBtn;

const setGame = () => {
  const ancient = _ancients.ancientsData.find(item => item.id === _global.game.level);

  _global.game.firstStage = ancient.firstStage;
  _global.game.secondStage = ancient.secondStage;
  _global.game.thirdStage = ancient.thirdStage;
  (0, _state.setState)();
  (0, _deck.setDeck)();
};

const startGame = e => {
  const className = e.target.className;
  const target = e.target;

  if ((0, _global.checkStart)()) {
    _global.game.isGame = true;
    resetActive(mixBtn);
    setGame();
  }

  console.log(_global.game); // if (className === 'difficulties__difficulty') {
  //   // console.log(target.id);
  //   resetActive(difficulties);
  //   setActive(target);
  //   checkStart();
  // }
};

mixBtn.addEventListener('click', e => startGame(e));
},{"../../data/ancients":"cHZT","./deck":"sFLM","./global":"OZyt","./state":"Oken"}],"Qwc0":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diffData = void 0;
const diffData = [{
  id: 'veryeasy',
  name: 'Мокрая Снежинка'
}, {
  id: 'easy',
  name: 'Легкая походка'
}, {
  id: 'normal',
  name: 'Середина Экватора'
}, {
  id: 'hard',
  name: 'Высокий стиль'
}, {
  id: 'veryhard',
  name: 'Ярость Щупальцы'
}];
exports.diffData = diffData;
},{}],"SIY2":[function(require,module,exports) {
"use strict";

var _global = require("./global");

var _mixButton = require("./mix-button");

var _difficulties = require("../../data/difficulties");

const difficulties = document.querySelector('.difficulties');
const diffs = new Map();

for (let i = 0; i < _difficulties.diffData.length; i++) {
  diffs.set(_difficulties.diffData[i].name, _difficulties.diffData[i].id);
}

console.log(diffs);

const resetActive = div => {
  for (const child of div.children) {
    child.classList.remove('active');
  }
};

const setActive = div => {
  const text = div.textContent.trim();
  div.classList.add('active');
  (0, _global.resetGame)();
  console.log(text);
  console.log(diffs.get(text));
  _global.game.difficulty = diffs.get(text);
  _global.game.isGame = false;
  console.log(_global.game);
};

const changeDiddiculty = e => {
  const className = e.target.className;
  const target = e.target;

  if (className === 'difficulties__difficulty') {
    // console.log(target.id);
    resetActive(difficulties);
    setActive(target); // checkStart();

    (0, _mixButton.setActiveMixBtn)();
  }
};

difficulties.addEventListener('click', e => changeDiddiculty(e));
},{"./global":"OZyt","./mix-button":"MpO1","../../data/difficulties":"Qwc0"}],"Ibj8":[function(require,module,exports) {
"use strict";

var _global = require("./global");

var _mixButton = require("./mix-button");

const levels = document.querySelector('.levels');
console.dir(levels);

const resetActive = div => {
  // console.dir(div);
  for (const child of div.children) {
    // console.dir(child);
    child.children[0].classList.remove('active');
  }
};

const setActive = div => {
  div.classList.add('active'); // console.log(div.textContent);

  (0, _global.resetGame)();
  _global.game.level = div.id;
  _global.game.isGame = false; // console.log(game);
};

const changeLevel = e => {
  const className = e.target.className;
  const target = e.target; // console.dir(target);

  if (className === 'levels__logo') {
    // console.dir(target);
    console.log(target.id);
    resetActive(levels);
    setActive(target); // checkStart();

    (0, _mixButton.setActiveMixBtn)();
  }
};

levels.addEventListener('click', e => changeLevel(e));
},{"./global":"OZyt","./mix-button":"MpO1"}],"Focm":[function(require,module,exports) {
"use strict";

require("./src/js/global");

require("./src/js/difficulties");

require("./src/js/levels");

require("./src/js/mix-button");

require("./src/js/state");

require("./src/js/deck");

console.warn('!!! Ахаха. о5 я не успеваю. капец какой-то... :(');
console.warn('!!! Если возможно, проверяйте после 30 числа... я сделал тут только верстку и трекер. загоняюсь с замешиванием карт...');
},{"./src/js/global":"OZyt","./src/js/difficulties":"SIY2","./src/js/levels":"Ibj8","./src/js/mix-button":"MpO1","./src/js/state":"Oken","./src/js/deck":"sFLM"}]},{},["Focm"], null)
//# sourceMappingURL=eldritch-codejam.60400aa5.js.map