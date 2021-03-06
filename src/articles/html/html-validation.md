# HTMLだけでできるバリデーションについてまとめてみた  

## HTMLでもバリデーションはできる  
通常、お問い合わせフォームで使うようなバリデーションはJavaScriptやサーバサイド言語で実装します。  
しかし、HTML5になってからというもの、HTMLタグだけでも結構バリデーションできちゃうんです。  
今回はそのHTMLのバリデーションについてまとめてみました。  

## HTMLのバリデーション  
それぞれ入力エリアと送信ボタンを設置しているので、  
実際に入力したり、ボタンを押してみたりしてください。  

### require：必須項目の設定  
<p class="codepen" data-height="204" data-theme-id="light" data-default-tab="html,result" data-user="haru0101" data-slug-hash="jOWGLPj" style="height: 204px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="jOWGLPj">
  <span>See the Pen <a href="https://codepen.io/haru0101/pen/jOWGLPj">
  jOWGLPj</a> by Haru (<a href="https://codepen.io/haru0101">@haru0101</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

```html
<form>
  <input type="text" required>
  <button>送信</button>
</form>
```

テキスト入力エリアが空の場合、  
送信できないようにメッセージが出ます。（実際に空の状態でボタンを押してみてください！）  
また、未入力のままフォームを送信することはできません。  

### max・min：最大値・最小値  
<p class="codepen" data-height="201" data-theme-id="light" data-default-tab="html,result" data-user="haru0101" data-slug-hash="wvMrqxV" style="height: 201px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="wvMrqxV">
  <span>See the Pen <a href="https://codepen.io/haru0101/pen/wvMrqxV">
  wvMrqxV</a> by Haru (<a href="https://codepen.io/haru0101">@haru0101</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

```html
<form>
  <input type="number" max="10" min="5">
  <button>送信</button>
</form>
```

入力できる最大値と最小値を指定します。  
今回の場合は最大値（max）が10、最小値（min）が5です。  

最大値を超える11や、最小値未満の4などを入力して送信を押すと、エラーアラートが出ます。  
また、今回は`type="number"`と指定しているので、数値のみしか入力できません。  

### pattern：パターンの指定  
<p class="codepen" data-height="232" data-theme-id="light" data-default-tab="html,result" data-user="haru0101" data-slug-hash="GRoQRNg" style="height: 232px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="pattern属性">
  <span>See the Pen <a href="https://codepen.io/haru0101/pen/GRoQRNg">
  pattern属性</a> by Haru (<a href="https://codepen.io/haru0101">@haru0101</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

```html
<form>
  <input pattern="^[0-9A-Za-z]+$">
  <button>送信</button>
</form>
```

JavaScriptやPHPで使うような正規表現がHTMLで使えるようになります。  
今回は半角英数字のみを許可するパターンを指定しています。  
指定された形式以外の文字などを入力するとエラーアラートが出ます。  

便利な属性ですが、注意点としてSafariやAndroid標準ブラウザではサポートしていませんので、  
動作保証すべきブラウザを再確認してくださいね。  

### maxlength・minlength：最大・最小大文字数  
<p class="codepen" data-height="213" data-theme-id="light" data-default-tab="html,result" data-user="haru0101" data-slug-hash="PoZQoQz" style="height: 213px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="maxlength、minlength">
  <span>See the Pen <a href="https://codepen.io/haru0101/pen/PoZQoQz">
  maxlength、minlength</a> by Haru (<a href="https://codepen.io/haru0101">@haru0101</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

```html
<form>
  <input maxlength="10" minlength="5">
  <button>送信</button>
</form>
```

最大文字数と最小文字数を指定できます。  
max、min属性が最大値と最小値の指定でしたが、こちらは『文字数』の指定です。  

今回は最大文字数が10、最小文字数が5なので、『あいう』とか3文字だけ入力して送信するとエラーが出ます。  
半角も全角もどちらも1文字ずつカウントされます。  
（『あいう』も『aiu』もどっちも3文字とカウント）  

### step：入力単位の設定  
<p class="codepen" data-height="218" data-theme-id="light" data-default-tab="html,result" data-user="haru0101" data-slug-hash="BajYaxp" style="height: 218px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="step属性">
  <span>See the Pen <a href="https://codepen.io/haru0101/pen/BajYaxp">
  step属性</a> by Haru (<a href="https://codepen.io/haru0101">@haru0101</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

```html
<form>
  <input type="number" step="5">
  <button>送信</button>
</form>
```

入力単位を設定できます。今回は5刻みです。  
なので、12とか、11とか、5の倍数ではない数値を入力するとエラーが出ます。  

## まとめ  
HTMLである程度バリデーションできると言っても、  
ブラウザごとに差異がありますので、あくまでJSやバックエンド言語でのバリデーションを主として考えてください。  
HTMLでのバリデーションは補助的な役割です。  

ですが、お手軽にリアルタイムでエラーが出せるバリデーションを実装できるので、  
上手く活用していきましょう。  
