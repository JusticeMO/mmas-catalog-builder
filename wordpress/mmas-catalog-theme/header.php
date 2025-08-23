<?php if (!defined('ABSPATH')) { exit; } ?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="mmas-header">
  <div class="container mmas-header-inner">
    <div class="mmas-brand">
      <a href="<?php echo esc_url(home_url('/')); ?>" class="mmas-logo">
        <?php if (has_custom_logo()) { the_custom_logo(); } else { bloginfo('name'); } ?>
      </a>
    </div>
    <nav class="mmas-nav">
      <?php wp_nav_menu(['theme_location' => 'primary', 'container' => false, 'fallback_cb' => false]); ?>
      <div class="mmas-all-cats">
        <button class="mmas-all-cats-btn">ALL CATEGORIES</button>
        <div class="mmas-all-cats-dropdown">
          <?php echo function_exists('mmas_theme_categories_menu_html') ? mmas_theme_categories_menu_html() : ''; ?>
        </div>
      </div>
    </nav>
    <button class="mmas-burger" aria-label="Toggle menu">☰</button>
  </div>
</header>
<main class="mmas-main">

