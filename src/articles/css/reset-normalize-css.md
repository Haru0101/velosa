# reset.css、normalize.css、sanitize.cssの違いとそれぞれの役割を解説！  

## そもそもなぜreset.css、normalize.css、sanitize.cssを使うのか  

### ブラウザによる表示の違いを修正するため  
Google ChromeやSafari、IE、Edgeなどには、あらかじめpタグやh1タグなどにスタイルがあたっています。  
試しに見出しやボタンを、スタイルをあてずにマークアップしてみましょう。  

#### Chrome  
![Google Chrome](/img/img-article/chrome.png)


#### Safari  
![Safari](/img/img-article/safari.png)

するとどうでしょう。  
あらかじめ大きさやフォントなどがスタイリングされています。  

WEB制作においては、どのブラウザで見ても極力同じデザインにしたいため、  
これらのブラウザ間での差異を調整します。  

その調整に使われるのが、今から紹介するreset.css、normalize.css、sanitize.cssです。  

## reset.cssとは  
全部0。  
marginとかpaddingとか全部0です。  
一切全てのブラウザによるスタイルをなくします。  

私はよくこのreset.cssをプライベートでも案件でも使っています。  

このreset.cssをあてた状態が以下です。  

#### Google Chrome  
![Google Chrome](/img/img-article/chrome_reset.png)  

#### Safari  
![Safari](/img/img-article/safari_reset.png)  

綺麗サッパリ。  
フォントの違いはあるものの、余白はすっかり取り除かれています。  

### よく使われているreset.cssはコチラ  

[CSS Tools: Reset CSS](https://meyerweb.com/eric/tools/css/reset/index.html)  

2011年製なので今使うにはちょっと調整が必要かもしれません。  
私はこのReset CSSをもとにカスタムしたものをよく使用します。  

## normalize.cssとは  
次がnormalize.css。  
reset.cssと違う点は、実用性のあるスタイルは残しておくということです。  
reset.cssがすべての余白や、フォントサイズをリセットしたのに対し、  
normalize.cssはある程度スタイルを残し、  
プレーンなHTMLでもそれなりの見た目になるように調整します。  

以下がnormalize.cssをあてた状態です。  

#### Google Chrome  
![Google Chrome](/img/img-article/chrome_normalize.png)  

#### Safari  
![Safari](/img/img-article/safari_normalize.png)  

ガッツリスタイル残ってます。  

### よく使われているnormalize.cssはコチラ  
[Normalize.css](https://necolas.github.io/normalize.css/)  


## sanitize.cssとは  


### ブラウザ間の違いを調整しつつ、よくある補正も含まれている  

## まとめ  