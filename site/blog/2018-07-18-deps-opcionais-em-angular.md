---
{
  "lang": "pt-BR",
  "date": "2018-07-18",
  "title": "Deps opcionais em Angular",
  "description": "Injetando providers opcionais de forma inteligente!",
  "image": "/media/deps-opcionais-em-angular-cover.jpeg",
  "tags": [
    "angular"
  ]
}
---

<Post>

# Deps opcionais em Angular

Geralmente quando crio componentes em Angular, é preciso fornecer uma maneira de customizar como a lógica do mesmo vai funcionar. Uma boa maneira para fazer isso, é criar uma classe de configuração com algumas propriedades que vão ditar como a lógica funcionará. Assim, poderíamos usar essa classe de configuração da seguinte forma em um componente:


```ts
// Classe de configuração
export class Config {
  show: boolean = true;
}

// Componente que receberá a classe
@Component({ 
  selector: 'component',
  template: '<div *ngIf="show">Can you see me?</div>'
})
export class Component {  
  @Input() config: Config = new Config(); // instancia a classe para evitar erros
  
  show: boolean = this.config.show;
}

// usando ambos
<component [config]="config"><component>
```

Passando a configuração via Input é uma maneira muito boa de customizar o comportamento de um componente. Porém, há casos em que precisamos usar determinado componente várias vezes pela aplicação e replicar a mesma configuração para todos os lugares que o componente está sendo usado será ruim para a manutenção da aplicação. Uma boa solução para isso é registrar a classe de configuração como um Provider:

```ts
// Classe de configuração e token de injeção
export const CONFIG: InjectionToken<Config> = new InjectionToken('Config')
export class Config {
  show: boolean = true;
}

// Componente que consumirá a configuração  
@Component({ 
  selector: 'component',
  template: '<div *ngIf="show">Can you see me?</div>'
})
export class Component {  
  @Input() config: Config;
  
  show: boolean = this.config.show;
  
  constructor(@Optional() @Inject(CONFIG) private config: Config) { 
    this.config = this.config || new Config();
  }
}
```

> Note que usamos o decorator Optional para evitar que o Angular não dispare um erro de injeção, caso o Provider da CONFIG não exista. 

Seguindo o exemplo acima, poderíamos registrar a configuração customizada como um Provider para toda a aplicação poder consumir, sem precisar replicar a mesma.

```ts
// Customiza a configuração padrão
export class MyCustomConfig extends Config {
  show: boolean = false;
}

@NgModule({
  // Registra a configuração customizada   
  providers: [
    { provider: CONFIG, useClass: MyCustomConfig }
  ]
})
export class AppModule { }
```

Agora que foi registrado o Provider da CONFIG no módulo root da aplicação, a configuração customizada existirá para todos os lugares em que o componente for usado, assim não há necessidade de replicar a mesma configuração! Simples não?!

## Eis o problema

Apesar da solução a cima ser muito boa em relação ao reuso, caso o Provider da CONFIG precise ser usado em outro componente, service ou diretiva, teríamos que replicar o tratamento para quando o Provider da Config não existir:

```ts
constructor(@Optional() @Inject(CONFIG) private config: Config) { 
 this.config = this.config || new Config();
}
```

## Eis a solução

A solução para melhorar ainda mais o reuso e evitar problemas com manutenção desse código, é criar um Factory Provider para quando o Provider da CONFIG não existir, a factory retornará uma instância padrão da configuração. Dito isso, vamos ver como fica a implementação:

```ts
// Classe de configuração e token de injeção
export const CONFIG: InjectionToken<Config> = new InjectionToken('Config');
  
export class Config {
  show: boolean = true;
}
 
// Função factory que verificará se existe um provider 
export function configFactory(parent: Config): Config {
  return parent || new Config();
}

// Componente que consumirá a configuração  
@Component({ 
  selector: 'component',
  template: '<div *ngIf="show">Can you see me?</div>',
  providers: [
    {
      provide: CONFIG,
      useFactory: configFactory,
      deps: [
        [new Optional(), new SkipSelf(), new Inject(Config)],
      ]
    }
  ]
})
export class Component {  
  @Input() config: Config;
  
  show: boolean = this.config.showSomething;
  
  constructor(@Inject(CONFIG) private config: Config) { }
}
```

Note que a propriedade deps recebe um array com as instâncias dos decorators Optional, SkipSelf e Inject. Basicamente estamos dizendo ao Injector do Angular:

- Optional: o Provider da CONFIG pode não existir, então não dispare erros.
- SkipSelf: o Injector deve procurar Provider da CONFIG apenas nos injectors parents e não no mesmo Injector do componente.
- Inject: o Injector deve injetar o Provider da CONFIG.

## Agora ficou bom!

Após todas essas alterações, agora podemos injetar o Provider da Config sem precisar fazer qualquer tratamento, pois a config factory estará cuidando disso para nós!

Se esse artigo ajudou você de alguma forma não deixe de compartilhar e recomendar, garanto que existem muitas pessoas com as mesmas necessidades!

Obrigado por ler e até a próxima! :)

</Post>
