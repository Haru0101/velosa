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

### pattern：パターンの指定  

### maxlength・minlength：最大・最小大文字数  

### step：入力単位の設定  

## まとめ  
HTMLである程度バリデーションできると言っても、  
ブラウザごとに差異がありますので、あくまでJSやバックエンド言語でのバリデーションを主として考えてください。  
HTMLでのバリデーションは補助的な役割です。  
