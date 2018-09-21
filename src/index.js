module.exports = function check(str, bracketsConfig) {
  let bracketStack = [];

  let index = 0;
  str = str.split("");
  while(index < str.length) {
    const symbol = str[index];
    const currentBrackets = bracketStack.pop();
    if (!currentBrackets || currentBrackets[1] !== symbol){
      const pair = bracketsConfig.find(it => it[0] === symbol);
      if (!pair) return false;
      if (currentBrackets) bracketStack.push(currentBrackets);
      bracketStack.push(pair);
    }
    index++;
  }
  return bracketStack.length == 0;
}
