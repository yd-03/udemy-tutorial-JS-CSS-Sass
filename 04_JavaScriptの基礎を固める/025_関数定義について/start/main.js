// 無名関数（annonymous function）
function hello(name, age) {
  console.log("hello", name + "(" + age + ")");
  return name + age;
}

hello("Tom", 10);
const val = hello("Tim", 20);
console.log(val);
