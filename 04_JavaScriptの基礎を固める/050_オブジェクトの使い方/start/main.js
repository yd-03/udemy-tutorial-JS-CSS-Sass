// Objectの初期化
const person = {
  //  プロパティ
  name: ["Tom", "Tim"],
  age: 28,
  gender: "male",
  interests: {
    sports: "soccer",
    music: "piano",
  },
  // メソッド
  getFullName: function () {
    console.log(this.name[0] + this.name[1]);
  },
};

console.log(person.name);

// ドット記法
console.log(person.interests.music);

// ブラケット記法
console.log(person["name"]);

//オブジェクトのプロパティを変更する
person.age = 30;
console.log(person.age);

// ファンクションを呼び出す
person.getFullName();
