var convert = (min) => {
  return min * 60;
};

console.log(convert(5));

var divideEvenly = (first, second) => {
  if (first > second) {
    if (Number.isInteger(first / second)) return true;
    else return false;
  } else console.log("worng input");
};

console.log(divideEvenly(28, 7));

var charCount = (ch, str) => {
  var count = 0;
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == ch) {
      count++;
    } else continue;
  }
  return count;
};
console.log(charCount("a", "Aman"));

var addUpto = (name) => {
  var sum = 0;
  for (var j = 1; j <= name; j++) sum = sum + j;
  return sum;
};
console.log(addUpto(13));

var replaceVowel = (s) => {
  //   let vowel = ["a", "i", "e", "o", "u"];
  let arr = [];

  for (i = 0; i < s.length; i++) {
    var c = s.charAt(i);
    if (c == "a") {
      arr.push("9");
    } else if (c == "e") {
      arr.push("9");
    } else if (c == "i") {
      arr.push("9");
    } else if (c == "o") {
      arr.push("9");
    } else if (c == "u") {
      arr.push("9");
    } else arr.push(c);
  }
  return arr;
};
console.log(replaceVowel("milee"));

function specialReverse(stri, key) {
  stri = stri.split(" ");
  for (let i = 0; i < stri.length; i++) {
    if (stri[i][0] == key) {
      stri[i] = stri[i].split("").reverse().join("");
    }
  }
  console.log(stri.join(" "));
}
specialReverse("milee sinha", "m");

const testJackpot = (ar) => ar.every((val) => val == ar[0]);
console.log(testJackpot(["ss", "s", "s", "s"]));

function uniq(a) {
  return Array.from(new Set(a));
}
console.log(uniq(["Aman", "milee", "aman"]));

var realType = (a) => {
  if (Array.isArray(a)) return console.log("array");
  else if (a == null) return null;
  else return typeof a;
};
console.log(realType(null));

function checkNum(a) {
  let n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  a = a.replace(/\s/g, "");
  a = a.split("");
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < n.length; j++) {
      if (a[i] == n[j]) return true;
    }
  }
}
function numInStr(a) {
  let b = [];
  for (let i = 0; i < a.length; i++) {
    if (checkNum(a[i])) {
      b.push(a[i]);
    }
  }
  console.log(b);
}
numInStr(["1a", "a", "2a", "b"]);
