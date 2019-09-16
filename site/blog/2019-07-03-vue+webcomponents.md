---
{
  "date": "2019-07-03",
  "description": "Criando Webcomponents utilizando Vue!",
  "image": "/vue+webcomponents.jpg",
  "tags": [
    "vue",
    "webcomponents"
  ]
}
---

<Post>

# Vue + Webcomponents

Recentemente onde trabalho, foi requisitado o desenvolvimento de uma biblioteca para fornecer componentes que deveriam funcionar em qualquer página web. 

Logo pensei em usar [webcomponents](https://www.webcomponents.org/introduction), pois atualmente é a tecnologia mais recomendada para distribuir componentes pela web. 

Mas escrever [webcomponents](https://www.webcomponents.org/introduction) apenas com vanilla é um trabalho bem árduo, especialmente se houver uma lógica complexa.

Após algumas horas de pesquisa e testes, cheguei a conclusão que o melhor custo benefício seria usar Vue, através do plugin [vue-custom-element](https://github.com/karol-f/vue-custom-element).

## Mas o que esse plugin faz?

O plugin [vue-custom-element](https://github.com/karol-f/vue-custom-element) permite transformar um [Vue Component](https://vuejs.org/v2/guide/components.html) comum em [Webcomponent](https://www.webcomponents.org/introduction). 

Pode até parecer ser complexo usar o plugin no começo, mas na verdade é extramamente simples seu funcionamento!

> Para entender como o plugin faz toda a mágica, acesse esse link [aqui](https://github.com/karol-f/vue-custom-element#how-does-it-work).

## Criando um componente em Vue

Instale [Vue](https://vuejs.org/v2/guide/installation.html) na sua página.

Após o Vue ser instalado no seu ambiente, vamos criar um componente bem básico. 

```js
const Component = {
    props: ['name'],
    template: '<h1>{{ name }}</h1>'
}
```

Tendo nosso componente criado, vamos registra-lo dentro de uma app Vue. 

```js
Vue.component('my-component', Component);
```

Assim poderemos usar o componente, dessa forma:

```js
new Vue({
    el: document.body,
    template: '<my-component name="Ooop" />'
})
```

Nossa app irá renderizar isso na página web: 

```html
<h1>Ooop</h1>
```

Massa! Criamos um componente Vue simples, mas como transformaremos esse componente em um webcomponent?

## Criando um webcomponent 

Uma vez criado um componente Vue, meio caminho já foi andado.

Instale o plugin [vue-custom-element](https://github.com/karol-f/vue-custom-element#installation) no seu ambiente. 

Para criar um webcomponent é extramamente simples, uma vez que nós temos o esqueleto de um componente Vue!

```js
Vue.customElement('my-component', {
    props: ['name'],
    template: '<h1>{{ name }}</h1>'
});
```

Após registrar o componente como um webcomponent, podemos utiliza-lo na nossa página web.

```html
<body>
    <my-component name="Joker"></my-component> 
</body>
```

Rodando sua página web em um browser veremos isso:

```html
<h1>Joker</h1>
```

Simples, não?! 

Se esse artigo ajudou você de alguma forma não deixe de compartilhar e recomendar, garanto que existem muitas pessoas com as mesmas necessidades!

Obrigado por ler e até a próxima! :) 

</Post>
