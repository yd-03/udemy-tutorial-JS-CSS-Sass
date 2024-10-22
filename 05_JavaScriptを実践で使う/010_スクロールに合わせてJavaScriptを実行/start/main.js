// インターセクションオブザーバーを使ってスクロールに合わせて要素を表示する
const child = document.querySelector(".child"); // 監視対象の要素を取得

// コールバック関数を定義
const cb = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("intview");
      entry.target.classList.add("inview");
      //   observer.unobserve(entry.target);
    } else {
      console.log("outview");
      entry.target.classList.remove("inview");
    }
  });
  //   alert("intersecting");
};

// インターセクションオブザーバーの設定
const options = {
  root: null, //ビューポートをルート要素とする
  rootMargin: "-300px 0px", // ビューポートのマージンを設定
  threshold: [0, 0.5, 1], // 閾値を設定
};

const io = new IntersectionObserver(cb, options); // コールバック関数を設定
io.observe(child); // 監視を開始
