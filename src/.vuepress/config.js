module.exports = {
    title: 'velosa',
    description: 'UIとインタラクティブな表現を追求するメディア',
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