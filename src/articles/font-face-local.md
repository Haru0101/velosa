# @font-faceでローカルのフォントファイルを使おう  

## @font-faceとは  
WEBフォントやローカルにあるフォントを読み込んで使いたいときに便利な規則です。  
通常、WinやmacOSに用意されていないようなフォントを表示したいときに使用します。  
今回はローカルにあるフォントを読み込む場合を想定して解説します。  

## @font-faceの書き方  

### 基本的な記述  

```css
@font-face {
    font-family: 'フォント名';
    src: url('フォントファイルがあるパス') format('フォントの形式');
}
```

最低限、これだけ記述していれば表示されます。  
urlの部分は、今回ではローカルのパスを指定しますが、WEBフォントを使う場合は、そのURLを指定することもできます。  

実際に使用するときはいつものようなCSSの記述でOKです。  

```css

@font-face {
  font-family: 'Palanquin';
  src: url("/css/font/Palanquin-Regular.ttf") format('truetype');
}

p {
    font-family: 'Palanquin';
}
```

#### formatの種類  
ローカルのフォントファイルなら、  
基本的にwoffかttf形式のファイルしか扱わないと思います。  

woffを扱う場合、formatはそのまま`woff`。  
ttfなら`truetype`です。  

他にも`opentype`、`embedded-opentype`、`svg`などがあります。  
詳しくはMDN web docsを御覧ください。  

https://developer.mozilla.org/ja/docs/Web/CSS/@font-face  

## まとめ  
ローカルのフォントを読み込むのは非常に簡単です。  
font-faceにはlocal()関数など、他にもいろいろ書くべきことがありますが、  
それらはほとんどWEB上にあるフォント、WEBフォントを使う場合に必要となります。  
WEBフォントの読み込み方についてもまた、別記事にて解説する予定です。  
そちらもお楽しみに！  