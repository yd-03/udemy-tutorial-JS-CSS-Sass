document.addEventListener("DOMContentLoaded", function () {
  // インターセクションオブザーバーを使ってスクロールに合わせて要素を表示する
  // クラス名 animate-title が付与された全ての要素を NodeList として取得する
  const els = document.querySelectorAll(".animate-title"); // 監視対象の要素を取得

  // コールバック関数を定義
  const cb = function (entries, observer) {
    entries.forEach((entry) => {
      // 監視対象の要素がビューポートに交差した（表示領域に入った）かどうかを判定
      if (entry.isIntersecting) {
        // スクロールで要素が表示された時に実行する処理（アニメーション）
        const ta = new TextAnimation(entry.target);
        ta.animate();
        // 一度要素が表示された後、その要素の監視を解除する
        observer.unobserve(entry.target);
      } else {
      }
    });
  };

  // インターセクションオブザーバーの設定
  const options = {
    root: null, //ビューポート（ブラウザの画面内表示領域）をルート要素とする
    rootMargin: "0px", // ビューポートのマージンを設定
    threshold: 0, // 閾値を設定
  };

  const io = new IntersectionObserver(cb, options); // コールバック関数を設定
  els.forEach((el) => io.observe(el)); // 監視を開始
});
