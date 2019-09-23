---
{
  "date": "2017-11-27",
  "title": "Angular + FlexLayout",
  "description": "Utilizando o módulo Angular baseado em flexbox",
  "image": "/media/angular+flexlayout.png",
  "tags": [
    "angular"
  ]
}
---

<Post>

# Angular + FlexLayout

Atualmente nos projetos em que estou trabalhando, utilizamos como tecnologia base para o Frontend o framework Angular2+, sendo assim poupamos muito tempo que poderia ser gasto construindo toda um setup para os projetos.

Apesar do Angular nos tornar mais produtivos e organizados, particulamente sempre tive dúvida em qual library css usar para estruturar os layouts, pois na maioria dos casos optei por usar determinadas libraries css pelo seu sistema de grid que geralmente são feitas em cima do Flexbox, como por exemplo o Bulma.

Infelizmente utilizando apenas css, não é possível controlar quando o código deve rodar alguma rotina, como por exemplo: esconder utilizando a diretiva *ngIf determinado elemento quando resolução for menor que 600px. Sendo assim, pesquisando por uma alternativa vinda do próprio Angular, encontrei o maravilhoso módulo [FlexLayout](https://github.com/angular/flex-layout)!

O FlexLayout é um módulo Angular oficial que permite o controle da media query que está ativa na atual resolução da aplicação em algum device, sendo possível registrar observers para rodar rotinas js quando a resolução da aplicação mudar (muito útil em modo de desenvolvimento) através de um service. Existem também várias diretivas que utilizam flexbox para construir o layout da aplicação.

## Beleza mas como uso o módulo?

Antes de tudo instale o módulo em sua aplicação:

```
npm i @angular/flex-layout
```

Para usar o módulo em um componente, você precisará importar o mesmo no módulo do componente que vai consumi-lo:

```ts
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule
  ]
  ...
}),
export class Module { }
```

Pronto! Agora já podemos usar as diretivas e o service do FlexLayout.

## Massa! Mas como uso essas diretivas?

[FlexLayout](https://github.com/angular/flex-layout) fornece inscríveis diretivas para estruturar o layout, como por exemplo: fxLayout, fxFlex e fxLayoutAlign. Essas diretivas podem ser utilizadas da seguinte forma:

```html
<!-- 
fxLayout="row" === display: flex; flex-direction: row
fxLayoutAlign="center center" === justify-content: center; align-items: center
fxFlex="50%" === flex-basis: 50%
-->
<div fxLayout="row" fxLayoutAlign="center center">
  <div fxFlex="50%">Flex item 1</div>
  <div fxFlex="50%">Flex item 1</div>
</div>
```

Todas as diretivas suportam os sufixos para as [media queries alias padrões](https://github.com/angular/flex-layout/wiki/Responsive-API#responsive-features): xs, gt-xs, sm, gt-sm, md, gt-md, lg, gt-lg e xl. Para utilizar as diretivas com sufixos é muito simples, um bom exemplo usando o padrão mobile-first seria:

```html
<div fxLayout="column" fxLayout.gt-sm="row" fxLayoutAlign="start center" fxLayoutAlign.gt-sm="center start">
  <div fxFlex="50%" fxFlex.gt-sm="75%">Item 1</div>
  <div fxFlex="50%" fxFlex.gt-sm="25%">Item 2</div>
</div>
```

Existem muitas diretivas que suprem as mais diversas funcionalidades do flexboxc, dê uma conferidade clicando [aqui](https://github.com/angular/flex-layout/wiki/API-Documentation).

## Legal e o service como uso?

Para utilizar o service do FlexLayout é muito simples.

Injete o service. Vamos supor que queremos utiliza-lo em um componente:

```ts
@Component({})
export class ExampleComponent {
  constructor(private media: ObservableMedia) { }
}
```

Se quisermos rodar alguma rotina no componente sempre quando a resolução for maior que sm (que no caso seria gt-sm) poderíamos fazer da seguinte forma:

```ts
@Component({})
export class ExampleComponent {
   
  gtSmWatcherSubscription: Subscription;
  
  constructor(private media: ObservableMedia) { }
  
  ngOnInit(): void {
    this.gtSmWatcherSubscription = this.media
      .asObservable()
      .filter(() => this.media.isActive('gt-sm'))
      .subscribe(() => {
        // Some code here
      })
  }
  
  // sempre remova as subscriptions para evitar erros inesperados 
  ngOnDestroy(): void {
    this.gtSmWatcherSubscription.unsubscribe();
  }
}
```

Existe uma documentação completa sobre o service ObservableMedia no repositório do FlexLayout, que pode ser acessada [aqui](https://github.com/angular/flex-layout/wiki).

## Conclusão

Para necessidades que vão além do css (como essa que apresentei no artigo) FlexLayout pode servir de extrema ajuda para o que se pretende fazer!

Se esse artigo ajudou você de alguma forma não deixe de compartilhar e recomendar, garanto que existem muitas pessoas com as mesmas necessidades!

Obrigado por ler e até a próxima! :)

</Post>
