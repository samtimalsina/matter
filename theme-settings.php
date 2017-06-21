<?php

function matter_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface &$form_state, $form_id = NULL) {
  if (isset($form_id)) {
    return;
  }

  $form['matter'] = array(
    '#type' => 'vertical_tabs',
    '#title' => t('Matter Settings'),
    '#weight' => 0,
  );

  $form['matter_general'] = array(
    '#type' => 'details',
    '#title' => t('General Settings'),
    '#weight' => 1,
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#group' => 'matter',
  );

  $form['matter_general']['matter_persistent_helptext'] = array(
    '#type' => 'checkbox',
    '#title' => t('Make helptext persistent'),
    '#default_value' => theme_get_setting('matter_persistent_helptext'),
    '#description' => t('Enabled this if you’d like the help text to always be visible.'),
  );

  $form['matter_general']['matter_checkbox_to_toggle'] = array(
    '#type' => 'checkbox',
    '#title' => t('Checkbox to Toggle'),
    '#default_value' => theme_get_setting('matter_checkbox_to_toggle'),
    '#description' => t('Single Checkbox will be converted to a toogle button.'),
  );

  $form['material_advanced'] = array(
    '#type' => 'details',
    '#title' => t('Advanced'),
    '#weight' => 3,
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#group' => 'matter',
  );

  $form['material_advanced']['matter_should_use_custom_cdn'] = array(
    '#type' => 'checkbox',
    '#title' => t('Use Custom CDN for the Material Library?'),
    '#default_value' => theme_get_setting('matter_should_use_custom_cdn'),
    '#description' => t('By default Matter uses minified css and js from unpkg.com. Check this setting to specify custom locations for the Material Web Component library.'),
  );

  $form['material_advanced']['cdn_settings'] = array(
    '#type' => 'fieldset',
    '#title' => t('Custom CDN Settings'),
    '#states' => [
      'invisible' => [
        ':input[name="matter_should_use_custom_cdn"]' => ['checked' => FALSE],
      ]
    ]
  );

  $form['material_advanced']['cdn_settings']['matter_library_css'] = array(
    '#type' => 'textfield',
    '#title' => t('Material Web Component CSS'),
    '#default_value' => theme_get_setting('matter_library_css'),
    '#description' => t('URL of the Material Web Component CSS. '),
  );

  $form['material_advanced']['cdn_settings']['matter_library_js'] = array(
    '#type' => 'textfield',
    '#title' => t('Material Web Component JavaScript'),
    '#default_value' => theme_get_setting('matter_library_js'),
    '#description' => t('URL of the Material Web Component JavaScript.'),
  );

  $form['material_widgets'] = array(
    '#type' => 'details',
    '#title' => t('Widgets'),
    '#weight' => 4,
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#group' => 'matter',
  );

  $form['material_widgets']['matter_hide_exposed_form'] = array(
    '#type' => 'checkbox',
    '#title' => t('Hide Views Exposed Form by default.'),
    '#default_value' => theme_get_setting('matter_hide_exposed_form'),
    '#description' => t('Hide Views Exposed Form and add a toggle button.'),
  );
}
