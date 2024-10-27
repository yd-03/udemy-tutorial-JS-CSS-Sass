// DOMContentLoaded イベント: DOMが読み込まれた時点で実行されるイベント
document.addEventListener("DOMContentLoaded", function () {
  // isIntersecting: 要素がビューポートに交差しているかどうかを示すboolean値
  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      // スクロールで要素が表示された時に実行する処理（アニメーション）
      const ta = new TextAnimation(el);
      // アニメーションを実行
      ta.animate();
    }
  };

  // インターセクションオブザーバーを使ってスクロールに合わせて要素を表示する
  const so = new ScrollObserver(".animate-title", cb);
});
