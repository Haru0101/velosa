(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{348:function(t,a,s){"use strict";s.r(a);var e=s(34),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"基本編-ちょっとしたデータの保存に！ローカルストレージの使い方"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本編-ちょっとしたデータの保存に！ローカルストレージの使い方"}},[t._v("#")]),t._v(" [基本編]ちょっとしたデータの保存に！ローカルストレージの使い方")]),t._v(" "),s("h2",{attrs:{id:"ローカルストレージとは"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ローカルストレージとは"}},[t._v("#")]),t._v(" ローカルストレージとは")]),t._v(" "),s("p",[t._v("永続的にブラウザにデータを保存する方法です。"),s("br"),t._v("\nおもにショッピングサイトなどで『最近見た商品』みたいな機能を実装したいときに使用します。"),s("br"),t._v("\nちょっとしたデータを保存したいときには、データベースを使うよりもかなり手軽かと思います。")]),t._v(" "),s("p",[t._v("モダンなブラウザではほぼ対応していて、あのIEでさえも最新版では問題なく使えます。")]),t._v(" "),s("p",[t._v("jQueryにもローカルストレージを扱う方法がありますが、"),s("br"),t._v("\nここではvanillaJS、つまり普通のJavaScriptのローカルストレージについて説明します。")]),t._v(" "),s("h3",{attrs:{id:"cookieとの違いは？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookieとの違いは？"}},[t._v("#")]),t._v(" Cookieとの違いは？")]),t._v(" "),s("p",[t._v("似たような機能としてCookieなんかが思いつくと思いますが、"),s("br"),t._v("\nCookieは保存できるデータ量が極端に少ない上に、"),s("br"),t._v("\nサーバとのやり取りの方法も異なります。")]),t._v(" "),s("p",[t._v("Cookieはサーバにリクエストするたびにデータを自動で送信します。"),s("br"),t._v("\nそれに比べてローカルストレージはデータを利用するときのみデータを送信します。")]),t._v(" "),s("p",[t._v("なのでCookieと比べて軽量です。")]),t._v(" "),s("h3",{attrs:{id:"localstorageとsessionstorageの2種類がある"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localstorageとsessionstorageの2種類がある"}},[t._v("#")]),t._v(" localStorageとsessionStorageの2種類がある")]),t._v(" "),s("p",[t._v("これはローカルストレージについての記事なんですが、"),s("br"),t._v("\nローカルストレージって『Web Storage』の1つなんですよね。")]),t._v(" "),s("p",[t._v("そしてこの『Web Storage』には2種類あって、もう1つが『sessionStorage』と呼ばれるものです。"),s("br"),t._v("\nブラウザにデータを保存するという点では一緒なんですが、"),s("br"),t._v("\nローカルストレージと違ってタブを閉じた時点で失います。"),s("br"),t._v("\n（ローカルストレージは永続的にデータを保存する。）")]),t._v(" "),s("h2",{attrs:{id:"ローカルストレージの使い方"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ローカルストレージの使い方"}},[t._v("#")]),t._v(" ローカルストレージの使い方")]),t._v(" "),s("h3",{attrs:{id:"データを保存する方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#データを保存する方法"}},[t._v("#")]),t._v(" データを保存する方法")]),t._v(" "),s("p",[t._v("超シンプルです。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("こうやってデータを保存します。"),s("br"),t._v("\n必ずキー：値の形になるのが特徴です。")]),t._v(" "),s("p",[t._v("また、以下のような形でも保存できます。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"データを取得する方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#データを取得する方法"}},[t._v("#")]),t._v(" データを取得する方法")]),t._v(" "),s("p",[t._v("保存するのが"),s("code",[t._v("setItem")]),t._v("なら、取得するのは"),s("code",[t._v("getItem")]),t._v("です。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("また、以下のような形でも取得できます。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"データを削除する方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#データを削除する方法"}},[t._v("#")]),t._v(" データを削除する方法")]),t._v(" "),s("p",[t._v("保存が"),s("code",[t._v("setItem")]),t._v("、取得が"),s("code",[t._v("getItem")]),t._v("、となると削除は"),s("code",[t._v("removeItem")]),t._v("です。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("これで指定したキーの値を削除することができます。")]),t._v(" "),s("p",[t._v("また以下のような形でも削除できます。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("キーを指定せず、全部消してしまいたいときは"),s("code",[t._v("clear")]),t._v("してしまいましょう。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"まとめ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#まとめ"}},[t._v("#")]),t._v(" まとめ")]),t._v(" "),s("p",[t._v("今回はlocalStorageの簡単な説明と使い方を紹介しました。"),s("br"),t._v("\nもっと詳しい使い方などはまた別の記事で紹介いたします。")])])}),[],!1,null,null,null);a.default=n.exports}}]);