const arry = [1, 2, 3, 4, 5, 6];

// for in: indexを取得, iはindex
for (let i in arry) {
  console.log(i, arry[i]);
}

// for of: valueを取得, vはvalue
for (let v of arry) {
  console.log(v);
}
