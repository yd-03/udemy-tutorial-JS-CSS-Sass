class TextAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
    this.chars = this.DOM.el.innerHTML.trim().split("");
    // 要素の中身（innerHtml）をアニメーション用に分割する
    this.DOM.el.innerHTML = this._splitText();
  }
  _splitText() {
    // 空白文字を&nbsp;に変換してspan要素で囲む
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, "&nbsp;");
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  animate() {
    // クラスがあれば削除、なければ追加
    this.DOM.el.classList.toggle("inview");
  }
}
class TweenTextAnimation extends TextAnimation {
  constructor(el) {
    super(el);
    this.DOM.chars = this.DOM.el.querySelectorAll(".char");
  }

  animate() {
    this.DOM.el.classList.add("inview");
    // i: 各文字のインデックス
    this.DOM.chars.forEach((c, i) => {
      gsap.to(c, 0.6, {
        ease: Back.easeOut,
        delay: i * 0.05,
        // アニメーションの開始位置
        startAt: { y: "-50%", opacity: 0 },
        y: "0%",
        opacity: 1,
      });
    });
  }
}
