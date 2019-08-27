module.exports = {
    title: 'Henrique Custódia',
    description: 'Posts sobre minha experiência e o mundo Javascript',
    lang: 'pt-BR',
    base: '/',
    plugins: {
        'seo': {}
    },
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