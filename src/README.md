---
home: true
heroImage: /img/img_hero.png
footer: Copyright 2020 Haruki
---

### 記事一覧  
<Articles :pages="this.$site.pages" prefix="/articles" />

<script>
import Articles from './.vuepress/theme/components/Articles';
export default {
    components: {
        Articles
    }
}
</script>