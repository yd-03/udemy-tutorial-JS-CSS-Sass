// アロー関数
const hello = (name, age) => console.log("hello", name + "(" + age + ")");
hello("Tom", 10);

const hellohello = (name, age) => {
  console.log("hello", name + "(" + age + ")");
  console.log("hello", name + "(" + age + ")");
};
hellohello("Tim", 20);

// アロー関数の省略記法
const array = [1, 2, 3, 4, 5, 6];
array.forEach((v) => console.log(v));
