// thisの特徴
// 1. オブジェクトへの参照を保持するキーワード
// 2. 呼ばれた状況によって取りうる値が変わる

const obj = {
  first_name: "Mafia",
  last_name: "Code",
  printFullName: function () {
    // thisはobjを指す
    console.log(this.first_name);
    const fn = function () {
      console.log(this);
    };
    // fnのthisはwindowを指す（一番最初に見つかるオブジェクト）
    window.setTimeout(fn);
  },
};

// classの場合
// new演算子で初期化処理がされたときにオブジェクトが生成される
class MyObj {
  constructor() {
    // class内でプロパティを定義する場合は必ずthisをつける
    this.first_name = "Mafia";
    this.last_name = "Code";
  }
  printFullName() {
    console.log(this.first_name);
    const fn = function () {
      console.log(this);
    };
    // fnのthisはwindowを指す（一番最初に見つかるオブジェクト）
    window.setTimeout(fn);
  }
}

const obj2 = new MyObj();

obj.printFullName();
obj2.printFullName();
