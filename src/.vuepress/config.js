module.exports = {
    title: 'velosa',
    description: 'UIとインタラクティブ表現を追求して',
    head: [
        ['link', {
            rel: 'icon',
            href: '/img/favicon.png'
        }]
    ],
    themeConfig: {
        logo: '/img/img_logo.png',
        sidebar: {},
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