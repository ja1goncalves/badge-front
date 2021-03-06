# BadgeFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Instalation

Antes de instalar a aplicação é necessário ter o node.js instalado na máquina.

Segue alguns comandos que possam ser necessário na instalação da aplicação Front-end.
Ela consome uma [API Back-End específica](https://github.com/ja1goncalves/badge-back)

```bash
sudo npm install
sudo npm i @angular/cli -g
sudo npm install popper.js@^1.14.7
sudo npm install jquery --save
sudo npm install bootstrap
sudo npm install angular-notifier
```
## Development server

Para rodar o provejo, há uma linha especial no arquivo [personalize-badge.component.ts](https://github.com/ja1goncalves/badge-front/blob/master/src/app/personalize-badge/personalize-badge.component.ts) que é a:

```bash
...
82    reader.onload = function (e) {
83        // $('#img-badge').attr('src', e.target.result);
82    };
...
```

Primeiro você sobe a aplicação com o `sudo ng serve`, depois que o porcesso estiver completo, tire o comentario da linha deixando ela da seguinte forma:


```bash
...
82    reader.onload = function (e) {
83        $('#img-badge').attr('src', e.target.result);
82    };
...
```

E aperte Ctrl+S para salvar o projeto e o próprio Angular irá recompilar o projeto. E ele irá funcionar completamente da maneira certa!

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
