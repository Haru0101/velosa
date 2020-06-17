# 【疑似要素】before・after要素のよくある使い方を実践して、使いこなせるようになろう！  

## そもそも疑似要素とは  

### HTML要素だけどアクセシビリティに影響を与えない  
HTML要素なんですが、あくまで装飾のために使われます。  
pタグやdivタグのように、独立した要素ではなく、  
HTML要素に付随した形で使われます。  

とりわけ、before・after要素は、あるHTMLの前・後の要素として扱います。  

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="haru0101" data-slug-hash="JjGReZq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JjGReZq">
  <span>See the Pen <a href="https://codepen.io/haru0101/pen/JjGReZq">
  JjGReZq</a> by Haru (<a href="https://codepen.io/haru0101">@haru0101</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

```html
<p>1,000</p>
```

```css
p::after {
    content:'円';
}
```

通常このような使い方はしませんが、わかりやすい例として掲載します。  
上の例では、pタグの後の要素として単位の『円』をつけています。  

とりわけ、覚えていてほしいのは、contentプロパティは使っても使わなくても書いてください。  
中身が無いときは`content: '';`と書いてください。  

なぜなら、before、after要素はこのcontentプロパティがないと動かないからです。  

### だけどウェブ制作には必須の要素  
リストマーカーやボタンデザインなど、あらゆる場面でbefore、after要素は使われます。  
また、それらを習得すればまるでGIF動画のような複雑な動きや形をした高度なスタイルを実現したいときも柔軟に対応できます。  

## 具体的なbefore、after要素の使い方  
文章の説明だけではわかりにくいと思うので、実際の使い方を見てみましょう。  

### 例1：ボタンデザイン  
<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="haru0101" data-slug-hash="rNxWyBo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="rNxWyBo">
  <span>See the Pen <a href="https://codepen.io/haru0101/pen/rNxWyBo">
  rNxWyBo</a> by Haru (<a href="https://codepen.io/haru0101">@haru0101</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

```html
<button class="submitButton" value="送信">送信</button>
```

```css
.submitButton {
  position: relative;
  width: 120px;
  height: 60px;
  background-color: white;
  border: 4px double #333;
  border-radius: 20px;
  cursor: pointer;
}

.submitButton::after {
  content: '>';
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
}
.submitButton:hover{
  background-color: black;
  color: white;
  transition: 0.3s all;
}
```

本来は『>』などはFont Awesome Iconsなどで表現しますが、  
今回はbefore・after要素の解説なのでわかりやすく直接『>』を使っています。  

### 例2：吹き出し  
<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="haru0101" data-slug-hash="ZEQBLmR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="ZEQBLmR">
  <span>See the Pen <a href="https://codepen.io/haru0101/pen/ZEQBLmR">
  ZEQBLmR</a> by Haru (<a href="https://codepen.io/haru0101">@haru0101</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

```html
<div class="baloonWrap">
    <p class="baloonText">
    吹き出しどす〜
    </p>
</div>
```

```css
.baloonWrap {
    position: relative;
    padding: 10px 20px;
    background-color: skyblue;
    border-radius: 10px;
    width: 200px;
    margin-left: 20px;
    color: white;
    font-weight: bold;
}

.baloonText::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -20px;
    margin-top: -10px;
    border: 10px solid transparent;
    border-right: 15px solid skyblue;
    z-index:20;
}
```

### その他：補足情報
<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="haru0101" data-slug-hash="MWKbJpO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="MWKbJpO">
  <span>See the Pen <a href="https://codepen.io/haru0101/pen/MWKbJpO">
  MWKbJpO</a> by Haru (<a href="https://codepen.io/haru0101">@haru0101</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

```html
<ul>
  <li>HTML</li>
  <li >CSS</li>
  <li class="new">JavaScript</li>
</ul>
```

```css
li.new::after {
    content: 'NEW';
    border: 1px solid red;
    background-color: yellow;
    padding: 5px;
    margin-left: 6px;
    font-size: 12px;
}
```
補足情報として『NEW』の表示をつけるときなどにも使えます。  

## まとめ  
before・afterは初心者の方はなかなか掴みにくい内容かと思います。  
ですが、使われる場面がおおよそ決まっているので、  
パターンさえ覚えてしまえば難しいことはありません。  

少しずつ自分の案件などに取り入れて覚えていきましょう。  