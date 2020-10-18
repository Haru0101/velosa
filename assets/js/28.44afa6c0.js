(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{383:function(t,s,a){"use strict";a.r(s);var n=a(43),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ループさせるならarchiveページ-作成方法の基本をキッチリ押さえよう"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ループさせるならarchiveページ-作成方法の基本をキッチリ押さえよう"}},[t._v("#")]),t._v(" ループさせるならarchiveページ！作成方法の基本をキッチリ押さえよう")]),t._v(" "),a("h2",{attrs:{id:"まずはヘッダーとフッターを読み込む"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#まずはヘッダーとフッターを読み込む"}},[t._v("#")]),t._v(" まずはヘッダーとフッターを読み込む")]),t._v(" "),a("p",[t._v("アーカイブページにも、きっとヘッダーとフッターは必要でしょうから、\nまず読み込みましょう。")]),t._v(" "),a("p",[t._v("今回はarchive-posts-list.phpというファイルを準備してそこに記述しました。")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_footer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])]),a("h2",{attrs:{id:"ループを作成する"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ループを作成する"}},[t._v("#")]),t._v(" ループを作成する")]),t._v(" "),a("p",[t._v("今回は普通の投稿10件のタイトルを表示しますが、"),a("br"),t._v("\n場合によってカテゴリを絞ったり、件数を増やしたり、タイトルだけじゃなく内容や投稿日を出力したり、"),a("br"),t._v("\nいろいろカスタマイズしてみてください。")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paged")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_query_var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'paged'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_query_var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'paged'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$args")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'paged'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paged")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'posts_per_page'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表示件数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$query")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WP_Query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$query")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("have_posts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$query")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("have_posts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$query")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("the_post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n// 内容\n"),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("the_title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v(" // タイトルを出力する\n"),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endwhile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endif")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wp_reset_postdata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])]),a("p",[t._v("ループまで作成しましたが、これだけでは表示されません。"),a("br"),t._v("\n管理画面からアーカイブページが見れるようにしましょう。")]),t._v(" "),a("h2",{attrs:{id:"プラグイン『custom-post-type-ui』を使う"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#プラグイン『custom-post-type-ui』を使う"}},[t._v("#")]),t._v(" プラグイン『Custom Post Type UI』を使う")]),t._v(" "),a("p",[t._v("一応プラグインなしでもできますが、functions.phpを編集する必要があり、"),a("br"),t._v("\n初心者向けではないので今回はプラグインを使いましょう。")]),t._v(" "),a("p",[t._v("カスタム投稿タイプを作成するのですが、『Custom Post Type UI』という非常に有名なプラグインがあります。"),a("br"),t._v("\n検索するとすぐ出てくるので、早速インストールしてページを作成しましょう。")]),t._v(" "),a("p",[t._v("『Custom Post Type UI』の使い方は以下を参考にしてください。"),a("br"),t._v("\n※投稿タイプ作成時にhas archiveをtrueにするのだけは忘れないでくださいね。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://haniwaman.com/custom-post-type-ui/",target:"_blank",rel:"noopener noreferrer"}},[t._v("カスタム投稿タイプを簡単に作成できる「Custom Post Type UI」の使い方！"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("ちなみに、CPT UIでposts-listというスラッグで投稿タイプを作成して、投稿しても表示されない場合は、"),a("br"),t._v("\nパーマリンクの設定をもう一度見直しましょう。")]),t._v(" "),a("p",[t._v("デフォルトでは『日付と投稿名』になっていると思いますが、これを『基本』にして保存したあと、"),a("br"),t._v("\nもう一度『日付と投稿名』にして保存しなおすと表示されることがあります。")]),t._v(" "),a("h2",{attrs:{id:"ブラウザで確認する"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ブラウザで確認する"}},[t._v("#")]),t._v(" ブラウザで確認する")]),t._v(" "),a("p",[t._v("カスタム投稿のスラッグがファイル名と一致していれば、ブラウザで確認することができます。"),a("br"),t._v("\n今回なら、archive-posts-list.phpというファイル名で、Custom Post Type UIで作成した投稿タイプのスラッグはposts-listです。")])])}),[],!1,null,null,null);s.default=p.exports}}]);