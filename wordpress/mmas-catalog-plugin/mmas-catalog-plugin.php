<?php
/*
Plugin Name: MMAS Catalog Plugin
Description: Product catalog custom post type with categories and WhatsApp integration.
Version: 1.0.0
Author: MMAS / Justice Mulama
*/

if (!defined('ABSPATH')) { exit; }

// Constants
define('MMAS_PLUGIN_VERSION', '1.0.0');
define('MMAS_PLUGIN_FILE', __FILE__);
define('MMAS_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('MMAS_PLUGIN_URL', plugin_dir_url(__FILE__));

// Default Options
function mmas_default_options() {
  return [
    'whatsapp_number' => '+254 722 308 698',
  ];
}

// Load files
require_once MMAS_PLUGIN_DIR . 'includes/cpt.php';
require_once MMAS_PLUGIN_DIR . 'includes/admin.php';
require_once MMAS_PLUGIN_DIR . 'includes/shortcodes.php';
require_once MMAS_PLUGIN_DIR . 'includes/helpers.php';

// Assets
add_action('wp_enqueue_scripts', function() {
  wp_register_style('mmas-catalog', MMAS_PLUGIN_URL . 'assets/css/mmas-catalog.css', [], MMAS_PLUGIN_VERSION);
  wp_enqueue_style('mmas-catalog');
  wp_register_script('mmas-catalog', MMAS_PLUGIN_URL . 'assets/js/mmas-catalog.js', ['jquery'], MMAS_PLUGIN_VERSION, true);
  wp_enqueue_script('mmas-catalog');
});

// Activation: create options, terms, sample content
register_activation_hook(MMAS_PLUGIN_FILE, function() {
  // Options
   = get_option('mmas_catalog_options');
  if (!) {
    add_option('mmas_catalog_options', mmas_default_options());
  }

  // Register CPT/Tax for term insertion

  // Sample products if none exist
  if (!get_posts(['post_type' => 'mmas_product', 'posts_per_page' => 1])) {
     = [
      ['Premium Security Door Lock', 'exterior-locks', 'KES 5,979', 'High-security cylinder lock with anti-pick technology.'],
      ['Privacy Door Handle Set', 'interior-locks', 'KES 3,249', 'Elegant interior door handle with privacy lock.'],
      ['5-Lever Mortice Deadlock', 'deadlocks', 'KES 5,590', 'BS3621 approved 5-lever mortice deadlock.'],
      ['Thumb Turn Privacy Lock', 'bathroom-locks', 'KES 2,209', 'Easy-to-use thumb turn lock perfect for bathroom privacy.'],
      ['Cabinet Door Handles', 'kitchen-accessories', 'KES 1,169', 'Modern stainless steel cabinet handles.'],
      ['Wardrobe Door Handles', 'wardrobe-accessories', 'KES 1,949', 'Elegant long handles perfect for wardrobe doors.'],
    ];
    foreach ( as ) {
       = wp_insert_post([
        'post_title'   => [0],
        'post_type'    => 'mmas_product',
        'post_status'  => 'publish',
        'post_content' => [3],
        'post_excerpt' => [3],
      ]);
      if ( && !is_wp_error()) {
         = get_term_by('slug', [1], 'mmas_category');
        if () {
          wp_set_object_terms(, [->term_id], 'mmas_category', false);
        }
        update_post_meta(, '_mmas_price', [2]);
      }
    }
  }

  // Create a Catalog page with categories grid if not present
  mmas_register_cpt_tax();
  flush_rewrite_rules();

  // Predefined top-level categories
   = [
    'Locks' => [
      'slug' => 'locks',
      'children' => [
        ['Exterior Locks', 'exterior-locks'],
        ['Interior Locks', 'interior-locks'],
        ['Deadlocks', 'deadlocks'],
        ['Bathroom Locks', 'bathroom-locks'],
      ]
    ],
    'Wardrobe Accessories' => ['slug' => 'wardrobe-accessories'],
    'Bathroom Accessories' => ['slug' => 'bathroom-accessories'],
    'Kitchen Accessories' => [
      'slug' => 'kitchen-accessories',
      'children' => [
        ['#A1 Gas Burner', 'a1-gas-burner'],
        ['#A1 Gas Cooker', 'a1-gas-cooker', [
          ['Commercial gas cooker 1', 'commercial-gas-cooker-1'],
          ['Gas cooker 2', 'gas-cooker-2'],
        ]],
        ['Gas Hob', 'gas-hob'],
        ['Kitchen Hood', 'kitchen-hood'],
      ]
    ],
    'Bituminous Products' => ['slug' => 'bituminous-products'],
  ];

  // Insert terms if not existing
  foreach ( as  => ) {
     = is_array() ? ['slug'] : sanitize_title();
     = term_exists(, 'mmas_category');
    if (!) {
       = wp_insert_term(, 'mmas_category', ['slug' => ]);
    }
     = is_wp_error() ? 0 : (is_array() ? ['term_id'] : );

    if (is_array() && !empty(['children'])) {
      foreach (['children'] as ) {
         = [0];
         = [1];
         = isset([2]) ? [2] : [];
         = term_exists(, 'mmas_category');
        if (!) {
           = wp_insert_term(, 'mmas_category', [
            'slug' => ,
            'parent' => 
          ]);
        }
         = is_wp_error() ? 0 : (is_array() ? ['term_id'] : );
        foreach ( as ) {
           = [0];
           = [1];
          if (!term_exists(, 'mmas_category')) {
            wp_insert_term(, 'mmas_category', [
              'slug' => ,
              'parent' => 
            ]);
          }
        }
      }
    }
  }

  // Create a Catalog page with categories grid if not present
  if (!get_page_by_path('catalog')) {
    wp_insert_post([
      'post_title' => 'Catalog',
      'post_name' => 'catalog',
      'post_status' => 'publish',
      'post_type' => 'page',
      'post_content' => "[mmas_categories]",
    ]);
  }
});

// Deactivation: flush rules
register_deactivation_hook(MMAS_PLUGIN_FILE, function() {
  flush_rewrite_rules();
});

// Single product: append WhatsApp button
add_filter('the_content', function() {
  if (!is_singular('mmas_product')) return ;
   = mmas_get_product_whatsapp_number(get_the_ID());
   = rawurlencode('Hello, I have a query about: ' . get_the_title() . ' ' . get_permalink());
   = 'https://wa.me/' . mmas_phone_to_intl() . '?text=' . ;
   = '<p><a class="mmas-btn" target="_blank" rel="noopener" href="' . esc_url() . '">Enquire on WhatsApp</a></p>';
  return  . ;
});
?>
