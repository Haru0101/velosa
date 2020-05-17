# getElementById、getElementsByClassNameの違いとは  
DOM操作の基本、要素の取得方法ですが、  
getElementById、getElementByClassName、getElementsByClassNameの3つが代表的なんじゃないでしょうか。  
でもそれぞれ微妙に挙動が違うので、  
それを今回は検証していきたいと思います。  

## 取得できる内容の比較  
それぞれ取得できる内容ですが、  
以下のHTMLを取得してみようと思います。  

```html
<div id="title" class="title">緋色の研究</div>
<div class="title">恐怖の谷</div>
```

### getElementById  

```html
<div id="title" class="title">緋色の研究</div>
<div class="title">恐怖の谷</div>
```

```javascript
const title = document.getElementById('title');
console.log(title);
// 結果
"<div id='title' class='title'>緋色の研究</div>"
```

いわずもがなIDをもとに取得するので、  
`緋色の研究`のHTML要素のみ出力されました。  
idは1ページに1つしか定義できませんからね。

### getElementsByClassName  

```html
<div id="title" class="title">緋色の研究</div>
<div class="title">恐怖の谷</div>
```

```javascript
const title = document.getElementByClassName('title');
console.log(title);
// 結果
"[object HTMLCollection]"
```

おっと、てっきりtitleのクラスを持つ2つのHTMLが出力されると思いきや、  
まさかの`[object HTMLCollection]`。  

そうなんです。  
getElementsByClassNameはそのままでは正しく出力できません。  

すべてを出力するためには以下のようにfor文で回して出力します。  
```javascript
const title = document.getElementsByClassName('title');
for ( let i = 0; i < title.length; i ++ ){
	console.log(title[i]);
}
// 結果
"<div id='title' class='title'>緋色の研究</div>"
"<div class='title'>恐怖の谷</div>"
```

補足ですが、getElementsByClassNameは、『Elements』と複数形になっていることに注意してくださいね。  

## まとめ  
基本的にgetElementByIdの使用頻度が高いと思いますが、  
getElementsByClassNameを使用する際はfor文で回すのを忘れずに…！  