## ????  
<Articles :pages="this.$site.pages" :prefix="this.$page.path" />

<script>
import Articles from '../.vuepress/theme/components/Articles';
export default {
    components: {
        Articles
    }
}
</script>