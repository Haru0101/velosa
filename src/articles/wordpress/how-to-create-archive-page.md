# ループさせるならarchiveページ！作成方法の基本をキッチリ押さえよう

## まずはヘッダーとフッターを読み込む

アーカイブページにも、きっとヘッダーとフッターは必要でしょうから、
まず読み込みましょう。

今回はarchive-posts-list.phpというファイルを準備してそこに記述しました。  

```php
<?php get_header(); ?>
<?php get_footer(); ?>
```

## ループを作成する

今回は普通の投稿10件のタイトルを表示しますが、  
場合によってカテゴリを絞ったり、件数を増やしたり、タイトルだけじゃなく内容や投稿日を出力したり、  
いろいろカスタマイズしてみてください。  

```php
<?php
    $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
    $args = array(
        'paged' => $paged,
        'posts_per_page' => 10, // 表示件数
    );
    $query = new WP_Query($args);
?>
<?php if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post(); ?>
// 内容
<?php the_title(); ?> // タイトルを出力する
<?php endwhile; endif; ?>
<?php wp_reset_postdata(); ?>
```

ループまで作成しましたが、これだけでは表示されません。  
管理画面からアーカイブページが見れるようにしましょう。  

## プラグイン『Custom Post Type UI』を使う  
一応プラグインなしでもできますが、functions.phpを編集する必要があり、  
初心者向けではないので今回はプラグインを使いましょう。  

カスタム投稿タイプを作成するのですが、『Custom Post Type UI』という非常に有名なプラグインがあります。  
検索するとすぐ出てくるので、早速インストールしてページを作成しましょう。  

『Custom Post Type UI』の使い方は以下を参考にしてください。  
※投稿タイプ作成時にhas archiveをtrueにするのだけは忘れないでくださいね。  

[カスタム投稿タイプを簡単に作成できる「Custom Post Type UI」の使い方！](https://haniwaman.com/custom-post-type-ui/)  

## ブラウザで確認する
カスタム投稿のスラッグがファイル名と一致していれば、ブラウザで確認することができます。  
今回なら、archive-posts-list.phpというファイル名で、Custom Post Type UIで作成した投稿タイプのスラッグはposts-listです。  