# udemy-tutorial-JS-CSS-Sass

## メモ

### Sass とは

CSS を拡張して、書きやすく扱いやすくしたメタ言語。メタ言語とは、ある言語に別のルールを定義するために使われる言語のことで、拡張言語と呼ばれることもある。Sass は、CSS をより効率的に記述するためのメタ言語として開発され 2006 年に登場した。Sass は「Syntactically Awesome Style Sheets」の略で、「構文的にイケてるスタイルシート」という意味。

Sass の記述方法は、「SCSS 記法」と「SASS 記法」の 2 種類ある。「SCSS 記法」が主流。

CSS では、

- 変数を定義できない
- ネスティングできない（一つのブロックの中に他のブロックを含めることはできない）

Sass では、

- 変数を定義できる
- ネスティングできる（一つのブロックの中に異なるブロックを含めることができる）

### Sass の主な機能

・入れ子
・変数
・四則演算
・関数
・Mixin 機能（継承）

#### Mixin 機能

mixin は、定義した CSS のスタイル（サイトで使用するボタンデザイン等）を別のところでも使えるようにする機能。Mixin は`@mixin`で定義し、`@include`で呼び出す。

### Sass の使用方法

- ファイルの拡張子を.sass にする
- VSCode 拡張機能（Live Sass Compiler）を使用して、.sass から.css にコンパイルする

### Sass の注意点

- CSS ファイルを直接触らない →Sass コンパイル時に上書きされてしまう
- 使用するには変換処理が必要
- ブラウザは CSS を読み込むことはできるが、直接 Sass を読み込むことはできない
- ネスト機能は便利だが、深すぎると CSS になったときかなり長い記述になってしまうため、
  一般的には 2、3 階層までがよいと言われている

### HTML Tips

- ブロック要素の `div` を左右中央揃えをするときは、`margin: 0 auto`を使用する。※ width の設定が必要となる
- `transform`はアニメーションをする Web サイトで活躍する

### CSS Tips

- `position`:
  - 画面の決まった位置に要素を移動したり、画面の特定の位置に要素を固定したりするプロパティ
  - `static`: デフォルト値
  - `relative`: 現在表示されている位置から相対的なポジションを取る場合に使用する
  - `absolute`:親要素に対して固定する
  - `fixed`: window の特定の位置に固定する
  - `sticky`:親要素の中で稼働する
  - `position: absolute`を子要素の中で使用する場合は、親要素に`position: relative`を設定することによって意図した場所に要素を指定する事ができる
