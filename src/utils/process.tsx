import words from "./words";
import { IInputText } from "./interface";

const inputCharIndex: string[] = ["charA", "charB", "charC", "charD"];
let ans: string[] = [];

const notCharInRightPos = (
  word: string,
  char: string,
  indexOf: number
): boolean => {
  return word[indexOf] != char ? true : false;
};

const notCharInWrongPos = (
  word: string,
  char: string,
  indexOf: number
): boolean => {
  // console.log(inputChar);
  if (word.includes(char) && word[indexOf] != char) {
    return false;
  }
  return true;
};

const isOccurrCountNotMatch = (
  word: string,
  inputChar: IInputText,
  indexOf: number
): boolean => {
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

const findCorrCharAns = (
  word: string,
  inputChar: IInputText,
  excludeWord: string
): void => {
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

const countCharFreqEachAnsWord = (charMap: {
  [char: string]: number;
}): { [char: string]: number } => {
  ans.forEach((word) => {
    for (let char of word) {
      if (char in charMap) {
        charMap[char] += 1;
        continue;
      }
      charMap[char] = 1;
    }
  });
  return charMap;
};

const countWordWeight = (
  charMap: {
    [char: string]: number;
  },
  ansMap: Array<{ word: string; weight: number }>
): Array<{ word: string; weight: number }> => {
  ans.forEach((word, index) => {
    ansMap[index] = {
      word: word,
      weight: 0,
    };
    for (let char of word) {
      ansMap[index].weight += charMap[char];
    }
  });
  return ansMap;
};

const searchWord = (): string[] => {
  let charMap: { [char: string]: number } = {};
  let ansMap: Array<{ word: string; weight: number }> = [];
  let ans: string[] = [];
  countCharFreqEachAnsWord(charMap);
  countWordWeight(charMap, ansMap);
  ansMap.sort((a, b) => b.weight - a.weight);
  ansMap.forEach((word) => {
    ans.push(word.word);
  });
  return ans;
};

const getSuggestWords = (
  inputChar: IInputText,
  excludeWord: string
): string[] => {
  ans = [];
  // console.log(inputChar, excludeWord);
  words.forEach((word) => {
    findCorrCharAns(word, inputChar, excludeWord);
  });

  return searchWord();
};

export default getSuggestWords;
