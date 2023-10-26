# FirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Developers comments:
Chapter 7>
Directives deep dive , 
Use Attribute Directives by declaring @Directive with selector inside as '[]' and apply on html element
but this is not preferable when working with dom and  service workers , sometimes you might get errors , so  use ng c d to create new directive and use eleRef , renderer2 in constructor. You can use host binding for mouse in mouse out events and use input to do custom binging on element also

* for structural indicates to angular

Lets create new Structural directive called unless using ng g d unless

Ngswitch in case if there are too many if condition
