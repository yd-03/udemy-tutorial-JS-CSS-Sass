const obj = {
  first_name: "Mafia",
  last_name: "Code",
  printFullName: function () {
    // オブジェクトのメソッド内でのthisはそのオブジェクトを指す
    console.log(this);
    // 下で定義している関数内で、thisの中身をobjを参照するようにする
    const _that = this;
    window.setTimeout(
      function () {
        // 関数内でのthisはwindowオブジェクトを指す
        //   console.log(this);
        // thisはobjを指す
        //   console.log(_that);
        console.log(this);
        // bind()を使うことで、関数内でのthisを指定したオブジェクトにすることができる
      }.bind(this)
    );
  },
};

obj.printFullName();
