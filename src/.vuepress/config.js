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
                link: '/articles/',
                items: [
                    {
                        text: 'CSS',
                        link: '/articles/css/'
                    },
                    {
                        text: 'JavaScript',
                        link: '/articles/javascript/'
                    },
                ]
            }
        ]
    },
    dest: 'docs/',
    base: '/velosa/',
}