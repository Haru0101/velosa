# Advanced Custrom Field PROの値をMW WP Formに出力する  

## 実装したいこと  
今回はチェックボックス（またはラジオボタン・プルダウン）の選択肢を、カスタムフィールドで出力して設定したい！  

## 実装の仕方  
公式ドキュメントが日本語でわかりやすいです。  
https://plugins.2inc.org/mw-wp-form/filter-hook/mwform_choices/  

実際にfunctions.phpに記述した内容が以下の通り。
```php
function add_fruits( $children, $atts ) {
    if ( $atts['name'] == 'fruits' ) {
        while(the_repeater_field('fruits')) {
            $job_name = get_sub_field('fruit_name');
            $children[$job_name] = get_sub_field('fruit_name');
        }
    }
    return $children;
}
add_filter( 'mwform_choices_mw-wp-form-XXX', 'add_fruits', 10, 2 );
```


### 注意点  
get_sub_fieldがthe_sub_fieldになっていて、  
それだけで3時間費やした。要注意。  

そして、これはACF PROの繰り返しフィールドを使用しています。  
もちろん無料版ACFでどうこうしたい場合にも使えます。  
その場合も、the_fieldとget_fieldの違いには注意。  
文字として出力するときだけthe_fieldを使用。  