---
category: JavaScript
description: 前回はローカルストレージについて、簡単にまとめています。今回の詳しい内容に入る前に、前の記事でローカルストレージのあらましを学ぶことをオススメします。
---

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
    "John": "apples",
    "Michael": "lemons"
};

const storage = localStorage;

storage.setItem('favoriteList', JSON.stringify(favoriteList));

console.log(storage.favoriteList);
```

`JSON.stringify`はJSON形式のデータを文字列へ変換する際に使用します。  
こうして文字列に変換するとconsoleには、  

```
"{'John':'apples','Michael':'lemons'}"
```
と正しく出力されます。  

## localStorageに保存されたデータをすべて取り出す  
すべてのvalueを取り出すためには、for文を使用する必要があります。  

```js
// 2つのデータをセットしてみる
localStorage.setItem('John','apples');
localStorage.setItem('Michael','lemons');

// for文ですべてのデータを取り出す
let keyName;
for(let i = 0; i < localStorage.length; i++){
    keyName = localStorage.key(i);
    console.log(localStorage.getItem(keyName));
}
```

`localStorage.key(i)`でそのインデックス番号のkey名が取得できます。  
なので、それを代入したkeyNameを引数（`localStorage.getItem(keyName);`）にすれば、  
取得できるわけです。  

出力されるデータは以下の通り。  
```
"apples"
"lemons"
```

## まとめ  
前回よりもより実践的な内容をまとめてみました。  
localStorageはWebStorageの種類の1つです。  
次はもう一方のsessionStorageについてもまとめてみたいと思います。  

といってもsessionStorageはlocalStorageと非常によく似ているので、  
localStorageの基本的な使い方を理解していれば簡単に利用できるようになると思います。  

また次回もお楽しみに！  
