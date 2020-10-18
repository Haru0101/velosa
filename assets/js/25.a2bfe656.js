(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{381:function(s,t,a){"use strict";a.r(t);var e=a(43),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue-cliで立ち上げたプロジェクトはそのままgithub-pagesには公開できない"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-cliで立ち上げたプロジェクトはそのままgithub-pagesには公開できない"}},[s._v("#")]),s._v(" Vue CLIで立ち上げたプロジェクトはそのままGitHub Pagesには公開できない")]),s._v(" "),a("h2",{attrs:{id:"ベースとなるurlを指定する"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ベースとなるurlを指定する"}},[s._v("#")]),s._v(" ベースとなるURLを指定する")]),s._v(" "),a("p",[s._v("GitHub Pagesではおおよそ以下のようなURLになります。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://haru0101.github.io/リポジトリ名/  \n")])])]),a("p",[s._v("このとき、例えば"),a("code",[s._v("./style.css")]),s._v("と指定していた場合、"),a("br"),s._v(" "),a("code",[s._v("https://haru0101.github.io/style.css")]),s._v("を参照してしまいます。")]),s._v(" "),a("p",[s._v("リポジトリ名の分だけ階層が一つ深くなるので、リポジトリ名を明示的に指定する必要があります。")]),s._v(" "),a("h3",{attrs:{id:"vue-config-jsを作成する"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-config-jsを作成する"}},[s._v("#")]),s._v(" vue.config.jsを作成する")]),s._v(" "),a("p",[s._v("デフォルトではないファイルなので、自分で作ります。"),a("br"),s._v("\nルート直下でOKです。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  publicPath"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/リポジトリ名/"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("こうすることで、"),a("code",[s._v("./style.css")]),s._v("と指定していた場合、"),a("br"),s._v(" "),a("code",[s._v("https://haru0101.github.io/リポジトリ名/style.css")]),s._v("と、正しく参照するようになります。")]),s._v(" "),a("h2",{attrs:{id:"静的なファイルだけを集めたブランチを作成し、公開するともっと良い"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静的なファイルだけを集めたブランチを作成し、公開するともっと良い"}},[s._v("#")]),s._v(" 静的なファイルだけを集めたブランチを作成し、公開するともっと良い")]),s._v(" "),a("p",[s._v("静的なファイルだけを公開するほうが軽さ的にも良いですよね。"),a("br"),s._v("\nそういう場合はgh-pagesを使いましょう。")]),s._v(" "),a("h3",{attrs:{id:"コマンドでインストール"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#コマンドでインストール"}},[s._v("#")]),s._v(" コマンドでインストール")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm add gh-pages --dev\n")])])]),a("p",[s._v("これでgh-pagesというツールを追加できます。"),a("br"),s._v("\n追加し終わったら、package.jsonに以下のように記述します。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deploy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gh-pages -d dist"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("distにコンパイル後の静的なファイルが入るので、"),a("br"),s._v("\ndistフォルダの中身だけをgh-pagesブランチに入れます。")]),s._v(" "),a("p",[s._v("これで"),a("code",[s._v("npm run deploy")]),s._v("とコマンドを打てばGitHub Pagesはgh-pagesブランチを公開するブランチに設定し、"),a("br"),s._v("\nその内容が見れるようになります。")]),s._v(" "),a("p",[s._v("※コマンドを打つ前にすべての変更をプッシュし終えてください。")])])}),[],!1,null,null,null);t.default=r.exports}}]);