const arry = [1, 2, 3, 4, 5];

// reduceメソッド: 配列の各要素に対して処理を行い、その結果を累積していく
// reduceメソッドの引数にはコールバック関数を渡す
// 第一引数には累積値（accumulator）が入る
// 第二引数には配列要素（currentValue）が入る
arry.reduce(function (accu, curr) {
  console.log(accu, curr);
  return accu + curr;
});
