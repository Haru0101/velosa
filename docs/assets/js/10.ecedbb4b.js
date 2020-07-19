(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{341:function(t,a,v){"use strict";v.r(a);var _=v(34),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"ブロック要素、インライン要素、インラインブロック要素の違いについて"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ブロック要素、インライン要素、インラインブロック要素の違いについて"}},[t._v("#")]),t._v(" ブロック要素、インライン要素、インラインブロック要素の違いについて")]),t._v(" "),v("h2",{attrs:{id:"いきなり結論"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#いきなり結論"}},[t._v("#")]),t._v(" いきなり結論")]),t._v(" "),v("h3",{attrs:{id:"余白と改行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#余白と改行"}},[t._v("#")]),t._v(" 余白と改行")]),t._v(" "),v("p",[t._v("余白の設定ができるかどうか、勝手に改行されるかどうかあたりが主な違いです。"),v("br"),t._v("\n余白（"),v("code",[t._v("margin")]),t._v("、"),v("code",[t._v("padding")]),t._v("両方）の設定ができて、勝手に改行されるのがブロック要素。"),v("br"),t._v(" "),v("code",[t._v("padding")]),t._v("は設定できるけど、"),v("code",[t._v("margin")]),t._v("は設定できない、改行もされないのがインライン要素。")]),t._v(" "),v("p",[t._v("インラインブロック要素はそのハイブリッド。"),v("br"),t._v("\n余白（"),v("code",[t._v("margin")]),t._v("、"),v("code",[t._v("padding")]),t._v("両方）の設定はできるけど、改行はされません。")]),t._v(" "),v("h3",{attrs:{id:"表にまとめるとこう"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#表にまとめるとこう"}},[t._v("#")]),t._v(" 表にまとめるとこう")]),t._v(" "),v("table",[v("tr",[v("th"),t._v(" "),v("th",[t._v("margin")]),t._v(" "),v("th",[t._v("padding")]),t._v(" "),v("th",[t._v("改行")])]),t._v(" "),v("tr",[v("th",[t._v("ブロック要素")]),t._v(" "),v("td",[t._v("○")]),t._v(" "),v("td",[t._v("○")]),t._v(" "),v("td",[t._v("○")])]),t._v(" "),v("tr",[v("th",[t._v("インライン要素")]),t._v(" "),v("td",[t._v("×")]),t._v(" "),v("td",[t._v("○")]),t._v(" "),v("td",[t._v("×")])]),t._v(" "),v("tr",[v("th",[t._v("インラインブロック要素")]),t._v(" "),v("td",[t._v("○")]),t._v(" "),v("td",[t._v("○")]),t._v(" "),v("td",[t._v("×")])])]),t._v(" "),v("h2",{attrs:{id:"各要素のもうちょっと詳しい特徴"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#各要素のもうちょっと詳しい特徴"}},[t._v("#")]),t._v(" 各要素のもうちょっと詳しい特徴")]),t._v(" "),v("h3",{attrs:{id:"ほとんどの要素がブロック要素"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ほとんどの要素がブロック要素"}},[t._v("#")]),t._v(" ほとんどの要素がブロック要素")]),t._v(" "),v("p",[t._v("ほとんどっていうか、6割くらいはブロック要素です。"),v("br"),t._v(" "),v("code",[t._v("div")]),t._v("や"),v("code",[t._v("section")]),t._v("、"),v("code",[t._v("article")]),t._v("、"),v("code",[t._v("aside")]),t._v("、"),v("code",[t._v("p")]),t._v("、挙げたらキリがありません。")]),t._v(" "),v("p",[t._v("主に名前の通り「かたまり」として使用されることが多いです。"),v("br"),t._v("\nページのレイアウトを構成している、"),v("code",[t._v("header")]),t._v("や"),v("code",[t._v("footer")]),t._v("、"),v("code",[t._v("main")]),t._v("などはこのブロック要素です。")]),t._v(" "),v("h3",{attrs:{id:"文中に差し込まれるのがインライン要素"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文中に差し込まれるのがインライン要素"}},[t._v("#")]),t._v(" 文中に差し込まれるのがインライン要素")]),t._v(" "),v("p",[t._v("すべてのインライン要素がそうではありませんが、おおよそ文中に差し込まれるのがインライン要素です。"),v("br"),t._v("\n代表的なのが"),v("code",[t._v("span")]),t._v("タグ。")]),t._v(" "),v("p",[v("code",[t._v("h1")]),t._v("や"),v("code",[t._v("p")]),t._v("タグなどのブロック要素の中に差し込まれ、主に装飾目的（文字を太くしたり、色を変えたりする目的）で使用されることが多いです。")]),t._v(" "),v("h3",{attrs:{id:"意図的にインライン要素にmarginを設定したい時、インラインブロック要素にする"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#意図的にインライン要素にmarginを設定したい時、インラインブロック要素にする"}},[t._v("#")]),t._v(" 意図的にインライン要素にmarginを設定したい時、インラインブロック要素にする")]),t._v(" "),v("p",[t._v("たまにあります。インラインブロック要素にするとき。"),v("br"),t._v("\nインライン、つまり改行されない文中の要素などで、どうしても"),v("code",[t._v("margin")]),t._v("を設定したいときはインラインブロック要素にします。"),v("br"),t._v("\n具体的には、以下のように"),v("code",[t._v("display")]),t._v("プロパティを用いて設定します。")]),t._v(" "),v("div",{staticClass:"language-css extra-class"},[v("pre",{pre:!0,attrs:{class:"language-css"}},[v("code",[v("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("p",[t._v("このように設定すると、本来"),v("code",[t._v("margin")]),t._v("が設定できないインライン要素である"),v("code",[t._v("span")]),t._v("に"),v("code",[t._v("margin")]),t._v("が設定できます。")]),t._v(" "),v("h2",{attrs:{id:"実際にその違いを見てみよう"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#実際にその違いを見てみよう"}},[t._v("#")]),t._v(" 実際にその違いを見てみよう")]),t._v(" "),v("p",[t._v("1つのレイアウトの中に"),v("code",[t._v("div")]),t._v("（ブロック要素）、"),v("code",[t._v("p")]),t._v("（ブロック要素）、"),v("code",[t._v("span")]),t._v("（インライン要素）を入れてみました。")]),t._v(" "),v("p",{staticClass:"codepen",staticStyle:{height:"469px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"469","data-theme-id":"light","data-default-tab":"css,result","data-user":"haru0101","data-slug-hash":"RwrgMjM","data-pen-title":"RwrgMjM"}},[v("span",[t._v("See the Pen "),v("a",{attrs:{href:"https://codepen.io/haru0101/pen/RwrgMjM"}},[t._v("\n  RwrgMjM")]),t._v(" by Haru ("),v("a",{attrs:{href:"https://codepen.io/haru0101"}},[t._v("@haru0101")]),t._v(")\n  on "),v("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),v("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}})])}),[],!1,null,null,null);a.default=e.exports}}]);