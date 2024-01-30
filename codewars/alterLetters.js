// String.prototype.toAlternatingCase = function () {
//     let alterStr = "";
//     for (let i = 0; i< toAlternatingCase; i++) {
// alterStr += toAlternatingCase[i];

//     }
//     return alterStr;
//   }

//   console.log("HeLLo WoRLD".toAlternatingCase());

String.prototype.toAlternatingCase = function () {
    let word = this;
let alterStr = "";
    for (let i = 0; i < word.length; i++) {
  if(word[i].toUpperCase() === word[i]) {
    alterStr += word[i].toLowerCase();
  }
  else {
    alterStr += word[i].toUpperCase();
  }
    }
    return alterStr;
}

console.log("HeLLo WoRLD".toAlternatingCase());


