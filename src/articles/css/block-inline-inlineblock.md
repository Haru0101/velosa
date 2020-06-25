# ブロック要素、インライン要素、インラインブロック要素の違いについて  

## いきなり結論  

余白の設定ができるかどうか、勝手に改行されるかどうかあたりが主な違いです。  
余白の設定ができる、勝手に改行されるがブロック要素。  
余白の設定ができない、改行されないがインライン要素。  

インラインブロック要素はそのハイブリッド。  
paddingは設定できるけど、marginは設定できません。改行はされません。  

### ほとんどの要素がブロック要素  
ほとんどっていうか、6割くらいはブロック要素です。  
divやsection、article、aside、p、挙げたらキリがありません。  

主に名前の通り「かたまり」として使用されることが多いです。  
ページのレイアウトを構成している、headerやfooter、mainなどはこのブロック要素です。  

### 文中に差し込まれるのがインライン要素  
すべてのインライン要素がそうではありませんが、おおよそ文中に差し込まれるのがインライン要素です。  
代表的なのがspanタグ。  

h1やpタグなどのブロック要素の中に差し込まれ、主に装飾目的（文字を太くしたり、色を変えたりする目的）で使用されることが多いです。  

## 実際にその違いを見てみよう  
1つのレイアウトの中にdiv（ブロック要素）、p（ブロック要素）、span（インライン要素）を入れてみました。  

<p class="codepen" data-height="171" data-theme-id="light" data-default-tab="css,result" data-user="haru0101" data-slug-hash="RwrgMjM" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="RwrgMjM">
  <span>See the Pen <a href="https://codepen.io/haru0101/pen/RwrgMjM">
  RwrgMjM</a> by Haru (<a href="https://codepen.io/haru0101">@haru0101</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## グラフにまとめるとこう  

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
        <td>×</td>
        <td>×</td>
    </tr>
    <tr>
        <th>インラインブロック要素</th>
        <td>×</td>
        <td>○</td>
        <td>×</td>
    </tr>

</table>


## 

### 

## まとめ  