const dcl = document.querySelector(".dcl");
const load = document.querySelector(".load");

// DOMContentLoaded: HTMLの読み込みが完了した時点で発火（画像などのリソースの読み込みを待たない）
document.addEventListener("DOMContentLoaded", function () {
  dcl.classList.add("done");
});
// load: 画像などの全てのリソースの読み込みが完了した時点で発火
window.addEventListener("load", function () {
  load.classList.add("done");
});
