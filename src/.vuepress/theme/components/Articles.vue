<template>
    <div class="category">
        <div class="category__list-wrap">
            <div class="category__list-inner">
                <h2>HTML</h2>
                <Categories :pages="this.$site.pages" prefix="/articles/html" />
            </div>
        </div>
        <div class="category__list-wrap">
            <div class="category__list-inner">
                <h2>CSS</h2>
                <Categories :pages="this.$site.pages" prefix="/articles/css" />
            </div>
        </div>
        <div class="category__list-wrap">
            <div class="category__list-inner">
                <h2>JavaScript</h2>
                <Categories :pages="this.$site.pages" prefix="/articles/javascript" />
            </div>
        </div>
        <div class="category__list-wrap">
            <div class="category__list-inner">
                <h2>Vue.js</h2>
                <Categories :pages="this.$site.pages" prefix="/articles/vuejs" />
            </div>
        </div>
        <div class="category__list-wrap">
            <div class="category__list-inner">
                <h2>PHP</h2>
                <Categories :pages="this.$site.pages" prefix="/articles/php" />
            </div>
        </div>
        <div class="category__list-wrap">
            <div class="category__list-inner">
                <h2>Book review</h2>
                <Categories :pages="this.$site.pages" prefix="/articles/bookreview" />
            </div>
        </div>
        <!-- <div class="category__list-wrap">
            <div class="category__list-inner">
                <h2>Laravel</h2>
                <Categories :pages="this.$site.pages" prefix="/articles/laravel" />
            </div>
        </div>
        <div class="category__list-wrap">
            <div class="category__list-inner">
                <h2>WordPress</h2>
                <Categories :pages="this.$site.pages" prefix="/articles/wordpress" />
            </div>
        </div> -->
        <div class="category__list-wrap">
            <div class="category__list-inner">
                <h2>Others</h2>
                <Categories :pages="this.$site.pages" prefix="/articles/others" />
            </div>
        </div>
    </div>
</template>

<script>
    import Categories from './Categories.vue';
    export default {
        name: 'Articles',
        props: ['pages', 'prefix'],
        components: {
            Categories
        },
        computed: {
            filteredPages() {
                return this.pages.filter(page => page.path.includes(this.prefix || ''))
            }
        }
    }
</script>
<style lang="scss" scoped>
    h2 {
        border-bottom: 2px solid #9C9289;
        margin-top: 5px;
    }

    .category {
        display: flex;
        flex-wrap: wrap;
        margin-top: 100px;
        width: 100%;
        justify-content: space-between;

        &__list-wrap {
            width: 49%;
            background-color: #FCFBFA;
            margin: {
                right: 0;
                left: 0;
                top: 0;
                bottom: 20px;
            }

            @media (max-width: 834px) {
                width: 100%;
            }
        }
        &__list-inner {
            padding: 15px 25px;
        }
    }
</style>