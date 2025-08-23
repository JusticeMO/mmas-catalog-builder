<?php /* Template Name: Catalog */ if (!defined('ABSPATH')) { exit; } get_header(); ?>
<div class="container mmas-mt-4 mmas-mb-4">
  <h1 class="mmas-page-title"><?php the_title(); ?></h1>
  <div class="mmas-categories-grid">
    <?php
      $terms = get_terms(['taxonomy' => 'mmas_category', 'hide_empty' => false, 'parent' => 0]);
      if (!empty($terms) && !is_wp_error($terms)) :
        foreach ($terms as $t) : ?>
          <a class="mmas-card" href="<?php echo esc_url(get_term_link($t)); ?>">
            <div class="mmas-card-img"></div>
            <div class="mmas-card-title"><?php echo esc_html($t->name); ?></div>
          </a>
        <?php endforeach; endif; ?>
  </div>
</div>
<?php get_footer(); ?>
