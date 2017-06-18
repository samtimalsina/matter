# Matter - Material Admin Theme

![Screenshot](./screenshot.png)

> A cleaner Drupal 8 Admin Theme using [Material Components for the Web](https://material.io/components/web/).

Matter uses `stable` as the base theme to have the minimal markup necessary to render Drupal elements. Preference is given to adding/overriding classes in twig templates rather than using preprocessors.

## How to contribute:

This project uses webpack to compile the JavaScript and Style assets. To contribute, first install the npm libraries that this theme depends on.

```
$ npm install
```

To start compiling sass:

```
$ npm run watch
```

## ToDo:
  - [ ] Allow adding of Material icons to menu items.
  - [ ] Allow changing the style of the drawer.
  - [ ] The shortcut link in the header title is not clearly visible. Consider changing this to the Icon Toggle Component.
  - [ ] Until the data table component is ready, find a better alternative to how tables are rendered.  
  - [ ] Update the look and feel of all the remaining core fields:
    - [ ] CKEditor
    - [ ] File field
  - [ ] The node creation form needs improvement and does not follow Material principals.
  - [ ] Only selectively apply drop button. For example, the drop button should be removed from node create forms.