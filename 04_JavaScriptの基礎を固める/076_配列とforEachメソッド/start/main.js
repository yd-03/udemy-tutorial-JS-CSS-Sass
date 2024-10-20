const array = [1, 2, 3, 4, 5, 6];

// メソッドにコールバック関数を渡す
array.forEach(function (val) {
  console.log(val);
});

// アロー関数で書き換え
array.forEach((v) => console.log(v));
