class TextAnimation {
  constructor(el) {
    this.DOM = {};
    // elがHTMLElementの場合はそのまま、そうでない場合はquerySelectorで取得する
    this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
    // 文字列の前後にある空白文字を削除し（trim）、一文字ずつ分割して配列に格納する（split）
    this.chars = this.DOM.el.innerHTML.trim().split("");
    this.DOM.el.innerHTML = this._splitText();
  }
  _splitText() {
    // reduceメソッドは、配列の各要素に対して処理を行い、その結果を累積して返す
    // accはアキュムレータ（累積値）、currはカレント（現在の値）
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
      // gsap.to(要素, アニメーションの実行時間, アニメーションの設定)
      gsap.to(c, 0.6, {
        // アニメーションのイージング（動きの加速度）を設定
        ease: Back.easeOut, // Back.easeOut: アニメーションの最後に少し戻るような動きをする
        delay: i * 0.05,
        // アニメーションの開始時の状態
        startAt: { y: "-50%", opacity: 0 },
        y: "0%",
        opacity: 1,
      });
    });
  }
}

// TextAnimation: 各文字を <span class="char">文字</span> で分割してラップし、toggle メソッドで単純な表示切り替えアニメーションを行う
// TweenTextAnimation: TextAnimation を継承し、GSAP を使ってカスタムアニメーションを実装する。文字ごとにアニメーションを行う
