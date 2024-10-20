const btn = document.querySelector("#btn");

function hello() {
  alert("クリックされました");
}

function changeColor() {
  // btn.style.color = "red";
  // thisはイベントが発生した要素を指す
  this.style.color = "red";
  console.log(this);
}

// イベントを登録
// btn.addEventListener("click", hello);
btn.addEventListener("click", changeColor);
