# JavaScriptのメソッドの基本について理解しよう  

## そもそもメソッドとは  

### 関数との違い  
よくメソッドは『関数とどう違うの？』と思われがちです。  
ですが、ちょっと違います。  

一言で言っていまうと、  
『オブジェクトの中で定義する関数』みたいなイメージです。  

なので基本的な振る舞いはほぼ関数と同じです。  

### どんなときに使うの  
『ほぼ同じなら関数でいいじゃん。』『わざわざメソッド使う必要なくね？』  
そんな声が聞こえてきそうですが、メソッドを使う理由はちゃんとあります。  

それは『他のプロパティを使える』点にあります。  
これだけではピンとこないかもしれませんが、  
言うなれば『変数みたいなデータと関数をひとまとめにできる』んです。  

実際に使ってみて具体的にイメージしてみましょう。  

## メソッドの使い方  

### 定義する  
まずは定義してみます。  
オブジェクトの中に関数を定義するというのがイメージできない人は普通のオブジェクトから復習しましょう。  

まず、オブジェクトはキーと値（バリュー）が紐付いたデータを定義できました。  
以下が例です。  

```js
const obj = {
    apple: 120,
    lemon: 80
}
```

これは果物の名前をキーに、値段や数量を値（バリュー）にしています。  

メソッドはデータの代わりに関数をオブジェクト内に定義したものになります。  

```js
const fruits = {
    showFavorite: function () {
        console.log('私の好きな果物はイチゴです。');
    }
}
```

### 呼び出す  
呼び出すときは`オブジェクト名.メソッド名`です。  
今回の場合は、

```js
fruits.showFavorite();
```
になります。  

もちろん出力されるのは、  
```
"私の好きな果物はイチゴです。"
```

### 引数を指定する  
関数と同じく引数を指定することもできます。  

```js
const fruits = {
    showFavorite: function (favorite) {
        console.log('私の好きな果物は' + favorite + 'です。');
    }
}

fruits.showFavorite('パイナップル');
```

すると、関数と同じように引数によって渡された`パイナップル`という値が使用されます。  

```js
"私の好きな果物はパイナップルです。"
```

### ほかのプロパティとセットで使ってみる  
これだけじゃ関数となんら変わらないので、ちゃんとメソッドらしい構文もやっていきます。  
ほかのプロパティと一緒に関数を使用する方法です。  

```js
const fruits = {
    apple: 120,
    calcTotalPrice: function (count) {
        const price = fruits.apple;
        const totalPrice = price * count;
        console.log(totalPrice);
    }
}

fruits.calcTotalPrice(10);
```

リンゴの合計金額を算出するメソッドです。  
変数のようにappleのデータが同じオブジェクト内に存在し、  
それを用いて合計金額を算出しています。  

引数countには10を渡していますので、  
10個のリンゴを購入した場合の合計金額です。  

```
1200
```

## まとめ  
基本的なメソッドの使い方についてまとめてみました。  
メソッドはクラスやコンストラクタなどの概念を理解するのに必要です。  
しっかり使えるようになりましょう。  