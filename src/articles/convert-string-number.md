# [JavaScript] 文字列型⇔数値型の変換  

JavaScriptは動的型付け言語なので、  
変数の中身の型を気にせず書いてしまいがちです。  

その結果、意図しない型になっていて困ったことはないでしょうか。  
そこで今回は頻出の文字列型⇔数値型の変換についてまとめました。  

## 文字列型 → 数値型の変換  
`Number()`関数の引数に対象の変数を入れると、数値型に変換してくれます。  
`typeof()`関数は型の種類を出力してくれる関数です。  

```js
const luckyNumber = '777';
console.log(typeof(luckyNumber));
// 結果："string"

console.log(typeof(Number(luckyNumber)));
// 結果："number"
```

## 数値型 → 文字列型の変換  
`String()`関数の引数に対象の変数を入れると、文字列型に変換してくれます。  
こちらも先ほどと同様に`typeof()`を用いて型の種類を出力しています。  

```js
const luckyNumber = 777;
console.log(typeof(luckyNumber));
// 結果："number"

console.log(typeof(String(luckyNumber)));
// 結果："string"
```