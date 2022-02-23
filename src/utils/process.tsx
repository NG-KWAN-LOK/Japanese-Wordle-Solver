import words from "./words";

const inputCharIndex: string[] = ["charA", "charB", "charC", "charD"];
let ans: string[] = [];

const notCharInRightPos = (word, char, indexOf) => {
  return word[indexOf] != char ? true : false;
};

const notCharInWrongPos = (word, char, indexOf) => {
  // console.log(inputChar);
  if (word.includes(char) && word[indexOf] != char) {
    return false;
  }
  return true;
};

const isOccurrCountNotMatch = (word, inputChar, indexOf) => {
  const wordOccurrCount =
    word.split(inputChar[inputCharIndex[indexOf]].char).length - 1;
  let inputOccurrCount = 0;
  for (let i = 0; i < inputCharIndex.length; i++) {
    if (
      inputChar[inputCharIndex[indexOf]].char ===
      inputChar[inputCharIndex[i]].char
    )
      inputOccurrCount++;
  }
  return wordOccurrCount < inputOccurrCount ? true : false;
};

const findCorrCharAns = (word, inputChar, excludeWord) => {
  for (let i = 0; i < excludeWord.length; i++) {
    if (word.includes(excludeWord[i])) return;
  }
  for (let i = 0; i < inputCharIndex.length; i++) {
    if (inputChar[inputCharIndex[i]].type == 1) {
      if (notCharInRightPos(word, inputChar[inputCharIndex[i]].char, i)) return;
    } else if (inputChar[inputCharIndex[i]].type == 2) {
      if (notCharInWrongPos(word, inputChar[inputCharIndex[i]].char, i)) return;
    }
    if (isOccurrCountNotMatch(word, inputChar, i)) return;
  }
  ans.push(word);
};

const searchWord = (inputChar, excludeWord) => {
  ans = [];
  // console.log(inputChar, excludeWord);
  words.forEach((word) => {
    findCorrCharAns(word, inputChar, excludeWord);
  });
  return ans;
};

export default searchWord;
