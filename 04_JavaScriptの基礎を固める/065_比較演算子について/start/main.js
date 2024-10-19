// jsでは比較演算子については、== と === がある
// == は型の変換をしてから比較を行う
// === は型の変換をせずに比較を行う

if (1 === "1") {
  console.log("this is true");
} else {
  console.log("this is false");
}

if (1 == "1") {
  console.log("this is true");
} else {
  console.log("this is false");
}

// trueは1として扱われる
if (true == 1) {
  console.log("this is true");
} else {
  console.log("this is false");
}
const num = Number(true);
console.log(num);

// nullはfalseとして扱われる
const number = null;
const bool = Boolean(number);
console.log(bool);

// nullはfalseとして扱われる
if (number) {
  console.log("this is true");
} else {
  console.log("this is false");
}
