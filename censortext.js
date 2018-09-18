var censorWords = ["bad", "mad", "sad"];
var customCensorWords = [];

/** replace censor word with ***** */

function censor(inStr) {
  for (idx in censorWords) {
    inStr = instr.replace(censorWords[idx], "****");
  }
  for (idx in customCensorWords) {
    inStr = instr.replace(customCensorWords[idx], "****");
  }
  return inStr;
}
/** Add customCensorWords */
function addCensorWords(word) {
  customCensorWords.push(word);
}
/** Get censor Words */
function getCensorWord() {
  return censorWords.concat(customCensorWords);
}

exports.censor = censor;
exports.addCensorWords = addCensorWords;
exports.getCensorWord = getCensorWord;
