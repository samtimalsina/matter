# Matter - Material Admin Theme

![Screenshot](./screenshot.png)

> A cleaner Drupal 8 Admin Theme using [Material Components for the Web](https://material.io/components/web/).

Matter uses `stable` as the base theme to have the minimal markup necessary to render Drupal elements. Preference is given to adding/overriding classes in twig templates rather than using preprocessors.

## To install:

In your Drupal root, using composer, run:

```bash
$ composer require drupal/matter
```

## How to contribute:

This project uses webpack to compile the JavaScript and Style assets. To contribute, first install the npm libraries that this theme depends on.

```bash
$ npm install
```

To start compiling sass:

```bash
$ npm run watch
```
