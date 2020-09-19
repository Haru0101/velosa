# Basic認証の作り方  
Basic認証を行うには、2つのファイルが必要になります。  
それが.htaccessと.htpasswdです。  

## .htpasswd  

### 役割  
.htpasswdは.htaccessと違いシンプルです。  
IDとパスワードを記述するだけ。  
それを管理するためのファイルです。  

### 作成方法  
IDはともかく、パスワードはそのままベタ書きできません。  
パスワードを暗号化したものを記述します。  

以下のようなジェネレータを用いて生成しましょう。  

http://www.luft.co.jp/cgi/htpasswd.php  

IDとPWがセットで生成されると思うので、それを.htpasswdに貼り付けるだけ。  
.htpasswdはどのディレクトリに配置してもいいですが、.htaccessとなるべく近い場所においていたほうがわかりやすくていいと思います。  

## .htaccess  

### 役割  
.htaccessの役割はずばり、認証の方式と先ほど作成した.htpasswd（IDとパスワードを記したファイル）の場所の指定です。  
.htpasswdもそうですが、先頭にピリオドのつくファイルは不可視ファイルと呼ばれていて、  
そのままではFinderなどで確認できない場合があります。（非表示になっている）  
その場合は、MacであればFinderを開いた状態で⌘ + Shift + . というショートカットで表示できます。  

### 作成方法  
作成方法はかんたん。  
以下のサンプルをベースに作成してください。  

サンプル  
```
AuthType Basic
AuthName "Input your ID and Password."
AuthUserFile ファイルパス（htpasswdがある場所）
require valid-user
```

1つ1つ見ていきます。  

#### AuthType  
これはBasic認証なので、Basicと指定します。  
ここはいじる必要なしです。  

#### AuthName  
ここも内容は何もでいいです。  
ただ、1つだけ注意点があります。  

.htaccessは大体認証を掛けたいファイルと同階層に配置します。  
なので、複数のフォルダに、複数の.htaccessを作成することがあると思います。  

この時、AuthNameがそれぞれバラバラだと、同じサイトなのに認証のかかった違うページに移動する度にIDとパスワードを要求されてしまいます。  
通常は一回認証したら、ページ移動してもそのままサイトを閲覧したいですよね。  

そういった理由から、.htaccessを複数作成するときはAuthNameを統一することをオススメします。  

#### AuthUserFile  
IDとパスワードを指定した.htpasswdの場所を記します。  
ルートからのパスを記述する必要があり、これを確認するかんたんな方法があります。  

file.phpというファイルを.htpasswdと同階層に作成し、  
以下の記述をして保存します。  

```php
<?php
    echo __FILE__;
?>
```

ブラウザでfile.phpにアクセスすると、そのファイルまでのフルパスが出力されます。  

そのパスの最後の/file.phpを/.htpasswdに置き換えればフルパスの完成です。  

#### require  
これも内容いじりません。そのまま。  
しかし、複数のIDとパスワードを管理したい場合は、  
require groupなどを活用します。  

これについては以下の記事が詳しかったので、そちらをご覧ください。  
[認証、承認、アクセス制御](https://httpd.apache.org/docs/2.4/ja/howto/auth.html)  

作成した.htaccessを認証をかけたいファイルと同階層にアップロードすれば完成です。  
これでページにアクセスすると表示される前にIDとパスワードを要求されるようになります。  