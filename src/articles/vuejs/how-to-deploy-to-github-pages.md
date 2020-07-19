# Vue CLIで立ち上げたプロジェクトはそのままGitHub Pagesには公開できない  

## ベースとなるURLを指定する  
GitHub Pagesではおおよそ以下のようなURLになります。  
```  
https://haru0101.github.io/リポジトリ名/  
```  

このとき、例えば`./style.css`と指定していた場合、  
`https://haru0101.github.io/style.css`を参照してしまいます。  

リポジトリ名の分だけ階層が一つ深くなるので、リポジトリ名を明示的に指定する必要があります。  

### vue.config.jsを作成する  
デフォルトではないファイルなので、自分で作ります。  
ルート直下でOKです。  

```js
module.exports = {
  publicPath: "/リポジトリ名/"
}
```

こうすることで、`./style.css`と指定していた場合、  
`https://haru0101.github.io/リポジトリ名/style.css`と、正しく参照するようになります。  

## 静的なファイルだけを集めたブランチを作成し、公開するともっと良い  
静的なファイルだけを公開するほうが軽さ的にも良いですよね。  
そういう場合はgh-pagesを使いましょう。  

### コマンドでインストール  
```  
npm add gh-pages --dev
```  

これでgh-pagesというツールを追加できます。  
追加し終わったら、package.jsonに以下のように記述します。  

```js
"scripts": {
    "deploy": "gh-pages -d dist"
}
```

distにコンパイル後の静的なファイルが入るので、  
distフォルダの中身だけをgh-pagesブランチに入れます。  

これで`npm run deploy`とコマンドを打てばGitHub Pagesはgh-pagesブランチを公開するブランチに設定し、  
その内容が見れるようになります。  

※コマンドを打つ前にすべての変更をプッシュし終えてください。  