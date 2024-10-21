const obj = {
  first_name: "Mafia",
  last_name: "Code",
  printFullName: function () {
    console.log("Hello");
  },
};

// クラスの定義
// オブジェクトを生成するための設計図
class MyObj {
  constructor() {
    this.first_name = "Mafia";
    this.last_name = "Code";
  }
  printFullName() {
    console.log("Hello");
  }
}

// new演算子を使ってオブジェクトを生成
const obj2 = new MyObj();

obj.printFullName();
obj2.printFullName();
