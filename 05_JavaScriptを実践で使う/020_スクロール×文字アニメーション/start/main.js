document.addEventListener("DOMContentLoaded", function () {
  // インターセクションオブザーバーを使ってスクロールに合わせて要素を表示する
  const els = document.querySelectorAll(".animate-title"); // 監視対象の要素を取得

  // コールバック関数を定義
  const cb = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const ta = new TextAnimation(".animate-title");
        ta.animate();
        observer.unobserve(entry.target);
      } else {
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
  els.forEach((el) => io.observe(el)); // 監視を開始
});
