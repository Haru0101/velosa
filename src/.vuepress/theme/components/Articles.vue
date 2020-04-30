<template>
    <div>
        <p v-for="post in posts">
            <a :href="post.path">{{post.title}}</a>
        </p>
    </div>
</template>

<script>
    export default {
        computed: {
            posts() {
                return this.$site.pages
                    .filter(page => page.id === 'post');
            }
        }
    }
</script>