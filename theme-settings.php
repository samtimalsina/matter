<?php

function matter_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface &$form_state, $form_id = NULL) {
  if (isset($form_id)) {
    return;
  }

  $form['matter_color_primary'] = array(
    '#type' => 'color',
    '#title' => t('Primary Color'),
    '#default_value' => theme_get_setting('matter_color_primary'),
    '#description' => t('Theme Primary Color')
  );

  $form['matter_color_accent'] = array(
    '#type' => 'color',
    '#title' => t('Accent Color'),
    '#default_value' => theme_get_setting('matter_color_accent'),
    '#description' => t('Theme Accent Color')
  );

  $form['matter_color_background'] = array(
    '#type' => 'color',
    '#title' => t('Background Color'),
    '#default_value' => theme_get_setting('matter_color_background'),
    '#description' => t('Theme Background Color')
  );

  $form['matter_persistent_helptext'] = array(
    '#type' => 'checkbox',
    '#title' => t('Make helptext persistent'),
    '#default_value' => theme_get_setting('matter_persistent_helptext'),
    '#description' => t('Enabled this if you’d like the help text to always be visible.')
  );

  $form['matter_checkbox_to_toggle'] = array(
    '#type' => 'checkbox',
    '#title' => t('Checkbox to Toggle'),
    '#default_value' => theme_get_setting('matter_checkbox_to_toggle'),
    '#description' => t('Single Checkbox will be converted to a toogle button.')
  );
}
