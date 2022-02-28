var SHORYAKU = true;
var table = {
  none: "あいうえお",
  k: "かきくけこ",
  g: "がぎぐげご",
  s: "さxすせそ",
  z: "ざじずぜぞ",
  t: "たxxてと",
  d: "だぢづでど",
  n: "なにぬねの",
  h: "はひxへほ",
  b: "ばびぶべぼ",
  p: "ぱぴぷぺぽ",
  m: "まみむめも",
  y: "やxゆxよ",
  r: "らりるれろ",
  w: "わゐxゑを",
};
var consonant = {};
for (var key in table) {
  var arr = table[key].split("");
  for (var i = 0, _i = arr.length; i < _i; i++) {
    if (arr[i] === "x") continue;
    consonant[arr[i]] = key;
  }
}
consonant["し"] = "sh";
consonant["ち"] = "ch";
var smallChar = /[ゃゅょ]/;
function isConsonant(s) {
  return /[kgsztdnhbpmyrw]/.test(s);
}
function isVowel(s) {
  return /[aiueo]/.test(s);
}
function YAYUYO(str) {
  return "ゃゅょ".charAt("auo".indexOf(str));
}
export function romeToHiragana(str) {
  var res = "";
  if (SHORYAKU)
    str = str.replace(/(.)\^/g, function (_, a) {
      //ここを変えることで「おうさか」府、「とおきょお」都問題をいじれる
      return a + a; //おおさか
      //return a+'u';//とうきょう
    });
  for (var i = 0, _i = str.length; i < _i; i++) {
    if (isConsonant(str.charAt(i))) {
      if (
        (str.charAt(i) === "m" &&
          (str.charAt(i + 1) === "b" ||
            str.charAt(i + 1) === "m" ||
            str.charAt(i + 1) === "p")) ||
        (str.charAt(i) === "n" && isConsonant(str.charAt(i + 1)))
      ) {
        //namba or kanno
        return res + "ん" + romeToHiragana(str.slice(i + 1));
      } else if (str.charAt(i + 1) === str.charAt(i)) {
        //促音
        return res + "っ" + romeToHiragana(str.slice(i + 1));
      } else if (
        str.charAt(i) === "t" &&
        str.charAt(i + 1) === "c" &&
        str.charAt(i + 2) === "h"
      ) {
        //特殊な促音
        res += "っち";
        res += YAYUYO(str.charAt(i + 3));
        return res + romeToHiragana(str.slice(i + 4));
      } else if (str.charAt(i + 1) === "y") {
        //kyotoのkyo部分
        res += table[str.charAt(i)].charAt(1);
        res += YAYUYO(str.charAt(i + 2));
        i += 2;
      } else {
        //普通の子音+母音
        if (str.slice(i, i + 2) === "sh" || str.slice(i, i + 2) === "ch") {
          if ("auo".indexOf(str.charAt(i + 2)) !== -1) {
            res += str.slice(i, i + 2) === "sh" ? "し" : "ち";
            res += YAYUYO(str.charAt(i + 2));
          } else {
            //sheは考慮しない
            res += str.slice(i, i + 2) === "sh" ? "し" : "ち";
          }
          i += 2;
        } else {
          if (isVowel(str.charAt(i + 1))) {
            res += table[str.charAt(i)].charAt(
              "aiueo".indexOf(str.charAt(i + 1))
            );
            i += 1;
          } else {
            throw "unexpected " + str.slice(i);
          }
        }
      }
    } else if (isVowel(str.charAt(i))) {
      res += "あいうえお".charAt("aiueo".indexOf(str.charAt(i)));
    }
    //撥音
  }
  return res;
}
export function hiraganaToRome(str) {
  var res = "";
  for (var i = 0, _i = str.length; i < _i; i++) {
    if (str.charAt(i) === "ん") {
      if (
        consonant[str.charAt(i + 1)] === "b" ||
        consonant[str.charAt(i + 1)] === "m" ||
        consonant[str.charAt(i + 1)] === "p"
      ) {
        res += "m";
      } else {
        res += "n";
      }
    } else if (str.charAt(i) === "っ") {
      //直後がCH(=ち)?T:直後の子音
      res += "du";
    } else if (str.charAt(i) === "ゃ") {
      //直後がCH(=ち)?T:直後の子音
      res += "ya";
    } else if (str.charAt(i) === "ゅ") {
      //直後がCH(=ち)?T:直後の子音
      res += "yu";
    } else if (str.charAt(i) === "ょ") {
      //直後がCH(=ち)?T:直後の子音
      res += "yo";
    } else if (str.charAt(i) === "ぅ") {
      //直後がCH(=ち)?T:直後の子音
      res += "u";
    } else if (str.charAt(i) === "ぃ") {
      //直後がCH(=ち)?T:直後の子音
      res += "i";
    } else if (str.charAt(i) === "ぇ") {
      //直後がCH(=ち)?T:直後の子音
      res += "e";
    } else if (str.charAt(i) === "ぉ") {
      //直後がCH(=ち)?T:直後の子音
      res += "o";
    } else if (str.charAt(i) === "し") {
      res += "shi";
    } else if (str.charAt(i) === "ち") {
      res += "ti";
    } else if (str.charAt(i) === "つ") {
      res += "tsu";
    } else if (str.charAt(i) === "ふ") {
      res += "hu";
    } else {
      if (consonant[str.charAt(i)] !== "none") res += consonant[str.charAt(i)];
      res += "aiueo".charAt(
        table[consonant[str.charAt(i)]].indexOf(str.charAt(i))
      );
    }
  }
  res = res
    .replace(/oo/g, "o" + (SHORYAKU ? "^" : ""))
    .replace(/uu/g, "u" + (SHORYAKU ? "^" : ""))
    .replace(/ou/g, "o" + (SHORYAKU ? "^" : ""));
  return res;
}
