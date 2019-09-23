module.exports = {
    title: 'Henrique Custódia',
    description: 'Um pouco sobre mim, habilidades e muitos posts',
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
        ['link', { rel: 'stylesheet', href: 'https://unpkg.com/browse/@fortawesome/fontawesome-free@5.11.2/css/all.min.css' }]
    ]
}
