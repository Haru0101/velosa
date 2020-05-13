# [Microdata]HTMLの構造化マークアップについて学んでみよう  

## Microdataとは  

### 構造化マークアップの手法の1つ  
Microdataは構造化データをマークアップする仕様の1つです。  
HTMLのタグの中に組み込むのが特徴で、  
そんなに仕様は複雑ではありません。  

構造化データについては別の記事にまとめていますので、そちらをご覧ください。  
[リンクテキスト](リンクURL)  

## Microdataの文法  
では早速Microdataの書き方を見ていきましょう。  

### itemscope  
名前の通り、スコープです。データのひとまとまり。  
本の情報をコーディングするんだったら、1つの本のタイトル、著者、発行年、出版社などをすべて内包している一番外側のタグにつけます。  
あくまで1つのデータのまとまりです。  

```html
<div itemscope>
...
</div>
```

### itemtype  
itemtypeには以降に出てくるアイテムの種別が定義されたファイルを指定します。  
いわば、『仕様が書かれたページの指定』です。  
どの仕様を使用するかは自由ですが、もっともポピュラーなのが[Schema.org](https://schema.org)です。  
てか、Schema.org以外を使用している人、見たことありません。  

[このページ](https://schema.org/CreativeWork)にいろいろなジャンルがあるので、  
自分がコーディングしたい題材に近いものを選んで、そのURLを指定しましょう。  

今回は本の情報をコーディングするので、  
[こちらの仕様](https://schema.org/Book)を参考にします。  

```html
<div itemscope itemtype="https://schema.org/Book">
...
</div>
```

### itemprop  
itempropはその項目の情報を書きます。  
ですが、自由に英単語をブチ込んでいいわけではありません。  

せっかく使用する仕様をitemtypeに定義したので、  
そこに書いてある項目名をブチ込みます。  

今回は本の情報だったので前述のBookの仕様を見てみます。  
https://schema.org/Book  

author（著者）やname（名前）、genre（分野）など、  
いろいろな項目が定義されていますね。早速使いましょう。  

```html
<div itemscope itemtype="https://schema.org/Book">
    <h2 itemprop="name">人間失格</h2>
    <p itemprop="author">太宰治</p>
    <p itemporp="genre">中編小説</p>
</div>
```

```html

```

### itemid  

```html

```

### itemref  

```html

```

### content  

```html

```

## まとめ  