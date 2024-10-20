document.addEventListener("DOMContentLoaded", () => {
  const ta = new TextAnimation(".animate-title");
  const ta2 = new TextAnimation(".animate-title-2");
  setTimeout(() => {
    ta.animate();
    ta2.animate();
  }, 1000);
});

class TextAnimation {
  // コンストラクター関数: インスタンスを生成するときに実行される関数
  constructor(el) {
    // this: インスタンス自身を指す
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split("");
    this.el.innerHTML = this._splitText();
  }
  // プライベートメソッド: クラス内でしか使えないメソッド
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, "&nbsp;");
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  // パブリックメソッド: クラス外からでも使えるメソッド
  animate() {
    this.el.classList.toggle("inview");
  }
}
