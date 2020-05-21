# :first-childとfirst-of-type、:last-childと:last-of-typeの違い  
今日は曖昧に覚えがちな、  
`:first-child`と`:first-of-type`、`:last-child`と`:last-of-type`の違いについてまとめました。  

## :first-childと:first-of-typeの違い  

### :first-child  
<p class="codepen" data-height="321" data-theme-id="light" data-default-tab="result" data-user="haru0101" data-slug-hash="RwWEzvd" style="height: 321px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="RwWEzvd">
  <span>See the Pen <a href="https://codepen.io/haru0101/pen/RwWEzvd">
  RwWEzvd</a> by Haru (<a href="https://codepen.io/haru0101">@haru0101</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

これだと何も問題なく最初のh2要素が赤色になってますよね。  
しかし、問題は次です。  

<p class="codepen" data-height="385" data-theme-id="light" data-default-tab="result" data-user="haru0101" data-slug-hash="MWaZMxp" style="height: 385px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="MWaZMxp">
  <span>See the Pen <a href="https://codepen.io/haru0101/pen/MWaZMxp">
  MWaZMxp</a> by Haru (<a href="https://codepen.io/haru0101">@haru0101</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

h1が追加され、h2が一番最初の子要素ではなくなった途端、  
CSSが効かなくなりました。  

`:first-child`は指定した要素(今回ならh2)が一番最初の子要素である必要があります。  

### :first-of-type  
それに比べ、`:first-of-type`は指定した要素が一番最初でなくても有効です。  
つまり、h2が子要素の中で一番でなくても、h2の中で一番最初の要素にCSSを適用します。  

<p class="codepen" data-height="375" data-theme-id="light" data-default-tab="result" data-user="haru0101" data-slug-hash="Yzydogd" style="height: 375px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Yzydogd">
  <span>See the Pen <a href="https://codepen.io/haru0101/pen/Yzydogd">
  Yzydogd</a> by Haru (<a href="https://codepen.io/haru0101">@haru0101</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## :last-childと:last-of-typeの違い  
となると、`:last-child`と`:last-of-type`も同様です。  

### :last-child  
<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="result" data-user="haru0101" data-slug-hash="MWaZMRp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="MWaZMRp">
  <span>See the Pen <a href="https://codepen.io/haru0101/pen/MWaZMRp">
  MWaZMRp</a> by Haru (<a href="https://codepen.io/haru0101">@haru0101</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
指定したh2が最後の子要素ならCSSが適用されますが、  

<p class="codepen" data-height="376" data-theme-id="light" data-default-tab="result" data-user="haru0101" data-slug-hash="abvPgxq" style="height: 376px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="abvPgxq">
  <span>See the Pen <a href="https://codepen.io/haru0101/pen/abvPgxq">
  abvPgxq</a> by Haru (<a href="https://codepen.io/haru0101">@haru0101</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
h2が最後の子要素でなければ適用されません。  

### :last-of-type  
<p class="codepen" data-height="372" data-theme-id="light" data-default-tab="result" data-user="haru0101" data-slug-hash="Baovgea" style="height: 372px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Baovgea">
  <span>See the Pen <a href="https://codepen.io/haru0101/pen/Baovgea">
  Baovgea</a> by Haru (<a href="https://codepen.io/haru0101">@haru0101</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

`:last-of-type`なら、h2の中で一番最後の要素にCSSを適用するのでバッチリです。  

## まとめ  
これらの違いを見ると、基本的には、`:first-of-type`と`:last-of-type`を使用するのがわかりやすくてベタですね。  
違いを知っておくと思わぬ挙動に対して困らずに済みます。  
気になったらすぐ調べる癖をつけましょう！  