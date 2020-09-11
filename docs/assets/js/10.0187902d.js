(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{369:function(t,a,s){"use strict";s.r(a);var n=s(43),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"font-faceでローカルのフォントファイルを使おう"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#font-faceでローカルのフォントファイルを使おう"}},[t._v("#")]),t._v(" @font-faceでローカルのフォントファイルを使おう")]),t._v(" "),s("h2",{attrs:{id:"font-faceとは"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#font-faceとは"}},[t._v("#")]),t._v(" @font-faceとは")]),t._v(" "),s("p",[t._v("WEBフォントやローカルにあるフォントを読み込んで使いたいときに便利な規則です。"),s("br"),t._v("\n通常、WinやmacOSに用意されていないようなフォントを表示したいときに使用します。"),s("br"),t._v("\n今回はローカルにあるフォントを読み込む場合を想定して解説します。")]),t._v(" "),s("h2",{attrs:{id:"font-faceの書き方"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#font-faceの書き方"}},[t._v("#")]),t._v(" @font-faceの書き方")]),t._v(" "),s("h3",{attrs:{id:"基本的な記述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本的な記述"}},[t._v("#")]),t._v(" 基本的な記述")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@font-face")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'フォント名'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string url"}},[t._v("'フォントファイルがあるパス'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'フォントの形式'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("最低限、これだけ記述していれば表示されます。"),s("br"),t._v("\nurlの部分は、今回ではローカルのパスを指定しますが、WEBフォントを使う場合は、そのURLを指定することもできます。")]),t._v(" "),s("p",[t._v("実際に使用するときはいつものようなCSSの記述でOKです。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@font-face")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Palanquin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string url"}},[t._v('"/css/font/Palanquin-Regular.ttf"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'truetype'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Palanquin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"formatの種類"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#formatの種類"}},[t._v("#")]),t._v(" formatの種類")]),t._v(" "),s("p",[t._v("ローカルのフォントファイルなら、"),s("br"),t._v("\n基本的にwoffかttf形式のファイルしか扱わないと思います。")]),t._v(" "),s("p",[t._v("woffを扱う場合、formatはそのまま"),s("code",[t._v("woff")]),t._v("。"),s("br"),t._v("\nttfなら"),s("code",[t._v("truetype")]),t._v("です。")]),t._v(" "),s("p",[t._v("他にも"),s("code",[t._v("opentype")]),t._v("、"),s("code",[t._v("embedded-opentype")]),t._v("、"),s("code",[t._v("svg")]),t._v("などがあります。"),s("br"),t._v("\n詳しくはMDN web docsを御覧ください。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/ja/docs/Web/CSS/@font-face",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN web docs"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"まとめ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#まとめ"}},[t._v("#")]),t._v(" まとめ")]),t._v(" "),s("p",[t._v("ローカルのフォントを読み込むのは非常に簡単です。"),s("br"),t._v("\nfont-faceにはlocal()関数など、他にもいろいろ書くべきことがありますが、"),s("br"),t._v("\nそれらはほとんどWEB上にあるフォント、WEBフォントを使う場合に必要となります。"),s("br"),t._v("\nWEBフォントの読み込み方についてもまた、別記事にて解説する予定です。"),s("br"),t._v("\nそちらもお楽しみに！")])])}),[],!1,null,null,null);a.default=r.exports}}]);