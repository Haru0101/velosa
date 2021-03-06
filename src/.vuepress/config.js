module.exports = {
    title: 'velosa',
    description: 'Simple && Easy',
    locales: {
        '/': {
            lang: 'ja-JP'
        }
    },
    plugins: [
        "@vuepress/blog",
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-136957501-2'
            }
        ]
    ],
    head: [
        ['link', {
            rel: 'icon',
            href: '/img/favicon.png'
        }]
    ],
    themeConfig: {
        logo: '/img/img_logo.png',
        sidebar: 'auto',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'About',
                link: '/about/'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/haru0101'
            }
        ],
        lastUpdated: 'Last Updated'
    },
    dest: 'docs/',
    base: '/velosa/',
}