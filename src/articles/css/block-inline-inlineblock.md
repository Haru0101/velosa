# ブロック要素、インライン要素、インラインブロック要素の違いについて  

## いきなり結論  

### 余白と改行  
余白の設定ができるかどうか、勝手に改行されるかどうかあたりが主な違いです。  
余白（`margin`、`padding`両方）の設定ができる、勝手に改行されるがブロック要素。  
`padding`は設定できるけど、`margin`は設定できない、改行されないがインライン要素。  

インラインブロック要素はそのハイブリッド。  
余白は設定できるけど、改行はされません。  

### グラフにまとめるとこう  

<table>
    <tr>
        <th></th>
        <th>margin</th>
        <th>padding</th>
        <th>改行</th>
    </tr>
    <tr>
        <th>ブロック要素</th>
        <td>○</td>
        <td>○</td>
        <td>○</td>
    </tr>
    <tr>
        <th>インライン要素</th>
        <td>×</td>
        <td>○</td>
        <td>×</td>
    </tr>
    <tr>
        <th>インラインブロック要素</th>
        <td>○</td>
        <td>○</td>
        <td>×</td>
    </tr>

</table>

## 各要素のもうちょっと詳しい特徴  

### ほとんどの要素がブロック要素  
ほとんどっていうか、6割くらいはブロック要素です。  
`div`や`section`、`article`、`aside`、`p`、挙げたらキリがありません。  

主に名前の通り「かたまり」として使用されることが多いです。  
ページのレイアウトを構成している、`header`や`footer`、`main`などはこのブロック要素です。  

### 文中に差し込まれるのがインライン要素  
すべてのインライン要素がそうではありませんが、おおよそ文中に差し込まれるのがインライン要素です。  
代表的なのが`span`タグ。  

`h1`や`p`タグなどのブロック要素の中に差し込まれ、主に装飾目的（文字を太くしたり、色を変えたりする目的）で使用されることが多いです。  

### 意図的にインライン要素にmarginを設定したい時、インラインブロック要素にする  
たまにあります。インラインブロック要素にするとき。  
インライン、つまり改行されない文中の要素などで、どうしても`margin`を設定したいときはインラインブロック要素にします。  
具体的には、以下のように`display`プロパティを用いて設定します。  

```css  
span {
    display: inline-block;
    margin-bottom: 10px;
}
```  

このように設定すると、本来`margin`が設定できないインライン要素である`span`に`margin`が設定できます。  

## 実際にその違いを見てみよう  
1つのレイアウトの中に`div`（ブロック要素）、`p`（ブロック要素）、`span`（インライン要素）を入れてみました。  

<p class="codepen" data-height="469" data-theme-id="light" data-default-tab="css,result" data-user="haru0101" data-slug-hash="RwrgMjM" style="height: 469px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="RwrgMjM">
  <span>See the Pen <a href="https://codepen.io/haru0101/pen/RwrgMjM">
  RwrgMjM</a> by Haru (<a href="https://codepen.io/haru0101">@haru0101</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>