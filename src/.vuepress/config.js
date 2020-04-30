module.exports = {
    title: 'velosa',
    description: 'UIとインタラクティブな表現を追求するメディア',
    locales: {
        '/': {
            lang: 'ja'
        }
    },
    plugins: [
        "@vuepress/blog"
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
                text: 'Articles',
                link: '/articles/'
            }
        ]
    },
    dest: 'docs/',
    base: '/velosa/',
}