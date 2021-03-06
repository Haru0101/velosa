# メインループとサブループの違いをはっきり理解しよう  

## メインループとは  

### そのページに適した情報を表示する  
メインループはシンプルです。  
単純なループを書いてしまえば、WordPressが勝手にそのページに即した情報を表示してくれるからです。  

```php  
<?php while ( have_posts() ) : the_post(); ?>
// 内容
<?php endwhile; ?>
```  

こうやって表示される情報はパーマリンクをもとに取得されます。  
単純で分かりやすい一方で、記事詳細ページに同じカテゴリの記事を関連して表示させるなどのカスタマイズ性はありません。  

通常は、トップページに記事一覧をループさせるときに使用します。  


## サブループとは  

### 自分で条件を指定して情報を表示する  
サブループは自分で条件を指定して、出力する情報をカスタムすることができます。  

```php
 <?php
    // 連想配列の形で条件を指定する
    $paged = get_query_var('paged', 1);
    $args = array(
        'paged' => $paged,
        'post_type' => 'post',
        'posts_per_page' => 10,
    );
    // 指定した条件の入った変数をWP_Queryの引数に指定
    $query = new WP_Query($args);
    // 指定された条件下の記事があればそれをループする
    if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post(); ?>

    // 内容

        <?php endwhile; endif; ?>
    <?php wp_pagenavi(array('query' => $query)); ?>
<?php wp_reset_postdata(); ?>
```

WP_Queryの引数に、自分が得たい情報の条件を指定します。  
今回は投稿を10ページ取得する条件です。  

その条件（連想配列）をqueryという変数に入れ、それをWP_Queryの引数に指定していますね。  
`$paged`はページ送りが正しく機能するために必要な記述です。  
忘れないようにしましょう。  

このように、具体的な条件を指定するので、どのページで使用しても同じ結果が返ってきます。  

## まとめ  
記事一覧や固定ページ一覧を作成する場合はメインループ、  
それ以外で自分なりに条件を指定してループさせたい場合はサブループを使う、と覚えてください。  

メインループ、サブループはWordPressの中心的な機能です。  
ぜひ、覚えましょう！  