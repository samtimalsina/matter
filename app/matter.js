(function (mdc, Drupal, drupalSettings) {
  'use strict';

  // Auto Initialize elements that have been defined in the templates.
  mdc.autoInit();

  /* Initialize the Drawer Component */
  const drawerEl = document.querySelector('.mdc-temporary-drawer');
  const MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer;
  const matter_drawer = new MDCTemporaryDrawer(drawerEl);
  document.querySelector('.matter' +
    '-menu').addEventListener('click', function () {
    matter_drawer.open = !matter_drawer.open;
  });

  /* Initialize and provide sync with native select element */
  const MDCSelect = mdc.select.MDCSelect;

  const selectList = document.querySelectorAll('.mdc-select');
  for (let i = 0, l = selectList.length; i < l; i++) {
    const select = new MDCSelect(selectList[i]);
    const parentNode = selectList[i].parentNode;
    const nativeSelect = parentNode.querySelector('select');
    select.listen('MDCSelect:change', () => {
      nativeSelect.value = select.selectedOptions[0].id;
    });
  }

  /* Bind dropbuttons with their SimpleMenus */
  const MDCSimpleMenu = mdc.menu.MDCSimpleMenu;

  const dropbuttonList = document.querySelectorAll('.icon--button-dropbutton');
  for (let i = 0, l = dropbuttonList.length; i < l; i++) {
    const parentNode = dropbuttonList[i].parentNode;
    const menuNode = parentNode.querySelector('.mdc-simple-menu');
    let simpleMenu = new MDCSimpleMenu(menuNode);
    dropbuttonList[i].addEventListener('click', () => simpleMenu.open = !simpleMenu.open);
  }

  /* Tuck Views Exposed Forms away until it is needed */
  const ViewsExposedForms = document.querySelectorAll('.views-exposed-form');
  for (let i = 0; i < ViewsExposedForms.length; i++) {
    let ViewsExposedForm = ViewsExposedForms[i];
    const ToggleButton = ViewsExposedForm.querySelector('.mdc-icon-toggle');
    mdc.iconToggle.MDCIconToggle.attachTo(ToggleButton);
    const FormWrapper = ViewsExposedForm.querySelector('.toggle-form');
    ToggleButton.addEventListener('MDCIconToggle:change', ({detail}) => {
      FormWrapper.classList.toggle('toggle-form--show', detail.isOn);
    });
  }

})(window.mdc, Drupal, drupalSettings);