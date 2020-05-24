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
    <p itemprop="datePublished">1948年</p>
</div>
```

そんなに本は読まないので、大して太宰治についても知りませんが、  
とりあえず有名なので例として用いてみました。  

これで各項目が何について書かれているか、Googleも判断しやすいですね。  


### itemid  
書きたいモノの、『固有の品番やID』などを指定します。  
今回は書籍なので、ISBN番号というのがあります。  
これはその書籍に割り振られたIDとなるので、他の書籍のIDとかぶることはありません。  
完全にユニーク、一意なIDです。  

これを、URNまたはURLと一緒に記します。  
URNはUniform Resource Nameの略で、これもまた、固有の品番やIDといった意味を持ちます。  

itemidはitemscopeやitemtypeと同じ要素に指定します。  
というか、そこ以外に指定できません。  

```html
<div itemscope itemtype="https://schema.org/Book" itemid="urn:isbn:978-4101006055">
    <h2 itemprop="name">人間失格</h2>
    <p itemprop="author">太宰治</p>
    <p itemporp="genre">中編小説</p>
    <p itemprop="datePublished">1948年</p>
</div>
```

### itemref  
関連のあるアイテムは`itemref`を使用します。  
`itemref`で指定したIDのアイテムが、関連付けされます。  

これはよく`itemscope`外のアイテムを関連付けする際に用いられます。  

```html
<div itemscope itemtype="https://schema.org/Book" itemid="urn:isbn:978-4101006055" itemref="a">
    <h2 itemprop="name">人間失格</h2>
    <p itemprop="author">太宰治</p>
    <p itemporp="genre">中編小説</p>
    <p itemprop="datePublished">1948年</p>
</div>
<div id="a">
    <h2 itemprop="name">斜陽日記</h2>
    <p itemprop="author">太田静子</p>
</div>
```

太宰治の人間失格の関連項目ってなんだろうって考えたら、  
太宰の愛人の太田静子しか浮かびませんでした。  

## まとめ  
MicordataはHTMLに直接属性を書き足すだけなので、  
覚えるのは難しくありません。  

SEOの面でも有利になりますし、  
これを機に使ってみてはどうでしょうか。  