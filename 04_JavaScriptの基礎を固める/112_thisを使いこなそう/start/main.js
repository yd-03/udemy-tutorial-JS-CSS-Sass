// DOMの読み込みが完了したら実行されるイベントリスナーを追加
document.addEventListener("DOMContentLoaded", function () {
  // .animate-titleクラスを持つ要素に対してTextAnimationクラスのインスタンスを作成
  const ta = new TextAnimation(".animate-title");
  // .animate-title-2クラスを持つ要素に対してTextAnimationクラスのインスタンスを作成
  const ta2 = new TextAnimation(".animate-title-2");
  // taインスタンスのアニメーションを実行
  ta.animate();
  // ta2インスタンスのアニメーションを実行
  ta2.animate();
  // ボタンがクリックされたときにtaインスタンスのアニメーションを実行
  // bindメソッドを使ってthisを束縛
  // .bind()メソッドは、関数に対して、thisの値を固定するメソッド(thisがどのオブジェクトを指すかを固定する)
  btn.addEventListener("click", ta.animate.bind(ta));
});

// TextAnimationクラスの定義
class TextAnimation {
  // コンストラクタ関数: インスタンスを生成するときに実行される
  constructor(el) {
    // 指定されたセレクタに基づいて要素を取得
    this.el = document.querySelector(el);
    // 要素のテキストを1文字ずつ分割して配列に格納
    this.chars = this.el.innerHTML.trim().split("");
    // 要素の内容を分割されたテキストで更新
    this.el.innerHTML = this._splitText();
  }

  // プライベートメソッド: テキストを<span>タグで囲んだHTML文字列に変換
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      // 空白文字を&nbsp;に置き換え
      curr = curr.replace(/\s+/, "&nbsp;");
      // <span>タグで囲んで累積
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }

  // パブリックメソッド: 要素にinviewクラスをトグル（追加または削除）
  animate() {
    // 現在のインスタンスをコンソールに出力
    console.log(this);
    // inviewクラスをトグル
    this.el.classList.toggle("inview");
  }
}
