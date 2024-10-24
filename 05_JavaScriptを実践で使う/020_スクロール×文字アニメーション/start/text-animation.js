class TextAnimation {
  constructor(el) {
    this.DOM = {};
    // elがHTMLElementの場合はそのまま、そうでない場合はquerySelectorで取得する
    this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
    this.chars = this.DOM.el.innerHTML.trim().split("");
    this.DOM.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      // 空白文字を非改行スペースに変換
      curr = curr.replace(/\s+/, "&nbsp;");
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  animate() {
    // クラスが既に要素に存在していればそのクラスを削除し、存在していなければ追加する（トグル: 切り替える）
    // アニメーションを繰り返したり、要素の表示・非表示を切り替える際に使用する
    this.DOM.el.classList.toggle("inview");
  }
}
class TweenTextAnimation extends TextAnimation {
  constructor(el) {
    super(el);
    this.DOM.chars = this.DOM.el.querySelectorAll(".char");
  }

  animate() {
    // もしそのクラスがすでに存在していても、再度追加しようとはせず、クラスがただ存在する状態を保つ
    this.DOM.el.classList.add("inview");
    // iはインデックス番号、.charの要素の数だけ繰り返す
    this.DOM.chars.forEach((c, i) => {
      // TweenMax.toでも同じ意味。バージョン３以降はgsapの使用を推奨している。
      // GSAP（GreenSock Animation Platform）というアニメーションライブラリの関数で、要素の状態をアニメーションで変化させるために使用する
      // gsap.to(要素, アニメーションの時間, アニメーションの設定)
      gsap.to(c, 0.6, {
        ease: Back.easeOut,
        delay: i * 0.05,
        startAt: { y: "-50%", opacity: 0 },
        y: "0%",
        opacity: 1,
      });
    });
  }
}
