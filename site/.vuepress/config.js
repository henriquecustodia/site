module.exports = {
    title: 'Henrique Custódia',
    description: 'Posts sobre minha experiência e o mundo Javascript',
    lang: 'pt-BR',
    base: '/site/',
    plugins: [
        [
            'seo',
            {
                url: (_, $site, path) => ($site.themeConfig.domain || '') + '/site' + path,
                image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + '/site' + $page.frontmatter.image),
            }
        ],
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-147966506-1'
            }
        ]
    ],
    themeConfig: {
        author: {
            name: 'Henrique Custódia',
            twitter: '@henricustodia'
        }
    },
    head: [
        ['meta', { name: 'robots', content: 'index,follow' }],
        ['link', { rel: 'stylesheet', href: '@fortawesome/fontawesome-free/css/all.min.css' }]
    ]
}
