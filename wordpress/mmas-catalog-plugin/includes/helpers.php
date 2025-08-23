<?php
if (!defined('ABSPATH')) { exit; }

function mmas_get_options() {
   = get_option('mmas_catalog_options');
  if (! || !is_array())  = mmas_default_options();
  return ;
}

function mmas_phone_to_intl() {
   = preg_replace('/\D+/', '', (string));
  if (strpos(, '0') === 0) {
    // naive KE assumption: replace leading 0 with 254
     = '254' . substr(, 1);
  }
  return ;
}

function mmas_get_product_whatsapp_number() {
   = get_post_meta(, '_mmas_whatsapp_override', true);
  if (!empty()) return ;
   = mmas_get_options();
  return isset(['whatsapp_number']) ? ['whatsapp_number'] : '+254 722 308 698';
}
?>
