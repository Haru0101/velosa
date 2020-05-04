# [応用編]ローカルストレージのいろいろな使い方を実際にコードを書いて試してみる  

## 前回までの記事  
前回はローカルストレージについて、簡単にまとめています。  
今回の詳しい内容に入る前に、前の記事でローカルストレージのあらましを学ぶことをオススメします。  

[ちょっとしたデータの保存に！ローカルストレージの基本的な使い方](https://haru0101.github.io/velosa/articles/localstorage.html)  

## オブジェクトを格納したいとき  
これ、簡単なように思えてちょっと工夫が必要なんです。  
まずは普通にトライしてみましょう。  

```js
const favoriteList = {
    'John': 'apples',
    'Michael': 'lemons'
};

const storage = localStorage;

storage.setItem('favoriteList', favoriteList);

console.log(storage.favoriteList);
```

一見、正しく動くコードに見えますが、consoleを見てみると……。  

```
"[object Object]"
```

ちゃんと表示されていません。  
この原因はJSON形式のデータだからです。  

JSON形式のデータは文字列に変換する必要があります。  

```js
const favoriteList = {
    'John': 'apples',
    'Michael': 'lemons'
};

const storage = localStorage;

storage.setItem('favoriteList', JSON.stringify(favoriteList));

console.log(storage.favoriteList);
```

`JSON.stringify`はJSON形式のデータを文字列へ変換する際に使用します。  



## 

## 

## 