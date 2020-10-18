# Vue.jsのフィルタを使って消費税と3桁ごとのカンマをつける  

## フィルタとは  
dataなどを整形するときに用います。  
今回では、『1000』というdataを渡したら、消費税込みの『1100』、3桁ごとのカンマのついた『1,100』を表示させるのがゴールです。  

## computedとの違いは？  
フィルターはcomputedと違い、連結することができます。  
先に述べたように、消費税の税率をかけたあとに、その値を3桁ごとにカンマで区切ることができます。  
また、もとのdataを変更せずにあくまで表示するときだけのフィルターです。  

## 実際のコード  
『|』でフィルタを連結することができます。  
引数はフィルタ側では受け取れますが、呼び出すときは第1引数のみ省略することができます。  

```html
<div id="app">
    <h2>消費税込み価格</h2>
    <p>{{ price | includedTax }}</p>
    <!-- 結果：1100 -->

    <h2>消費税込み + 3桁ごとのカンマ</h2>
    <p>{{ price | includedTax | formatNumber }}</p>
    <!-- 結果：1,100 -->

</div>
```
```vue
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            price: 1000
        },
        filters: {
            includedTax: function (price) {
                return price * 1.1
            },
            formatNumber: function (price) {
                return price.toLocaleString()
            }
        }
    })
</script>
```

### 第2引数以上ある場合  
第1引数はかってにフィルタをかけるdata、今回でいうpriceだと判断してくれます。  
よって第2引数以上になった場合から、フィルタの呼び出しの際に引数を指定します。  

```html
<div id="app">
    <h2>消費税込み価格</h2>
    <!-- 第1引数のpriceは省略できる -->
    <!-- 第2引数のtaxRateから指定する -->
    <p>{{ price | includedTax(1.1) }}</p>
    <!-- 結果：1100 -->
</div>
```
```vue
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            price: 1000
        },
        filters: {
            includedTax: function (price, taxRate) {
                return price * taxRate
            }
        }
    })
</script>
```

## グローバルフィルタについて  
今まで定義したのはローカルフィルタであり、コンポーネント内でしか参照することができません。  
どのコンポーネントからも参照できるようにするには、グローバルフィルタを定義する必要があります。  
呼び出し方は一緒ですが、定義の仕方が違います。  

ポイントは、Vueの読み込みのあと、かつ、インスタンス化の前です。  

## 書き方  
```html
<div id="app">
    <h2>消費税込み価格</h2>
    <!-- 第1引数のpriceは省略できる -->
    <!-- 第2引数のtaxRateから指定する -->
    <p>{{ price | includedTax(1.1) }}</p>
    <!-- 結果：1100 -->
</div>
```
```vue
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    Vue.filter('includedTax', function(price){
        return price * 1.1
    })
    var app = new Vue({
        el: '#app',
        data: {
            price: 1000
        }
    })
</script>
```