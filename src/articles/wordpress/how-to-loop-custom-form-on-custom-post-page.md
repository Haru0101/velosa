# 【WordPress】アーカイブページでカスタムフォームを使用のループ出力

## 早速サンプルコード  

```php
<?php
  $args = array(
  'post_type' => 'news', // 投稿タイプがnews
  'posts_per_page' => 5, // 表示する件数
  );
?>
<?php $query = new WP_Query( $args ); ?>
<?php while ( $query->have_posts() ) : $query->the_post(); ?>
<!-- ▽ ループ開始 ▽ -->
<?php the_field('title'); ?>
<!-- △ ループ終了 △ -->
<?php endwhile; ?>
<?php wp_reset_postdata(); ?>
```

## ゆるい解説  
上の場合は、news（お知らせ）というカスタム投稿を表示したいページで記述。  

注意すべきは、newsはCPT UIによる投稿タイプとarchiveページがそれぞれ作成されていることが条件。  
（サーバ上にarchive-news.phpが作成されていて、上記のコードが書かれている）  

また、CPT UIで投稿タイプを作成すると、管理画面のサイドバーに今回の場合は「お知らせ」とピン留めされてしまうが、  
それはプラグインの設定より非表示にできる。  
（Show UIをfalseにすれば良い）  