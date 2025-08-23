<?php if (!defined('ABSPATH')) { exit; } get_header(); ?>
<div class="container mmas-mt-4 mmas-mb-4">
  <h1 class="mmas-page-title"><?php post_type_archive_title(); ?></h1>
  <div class="mmas-products-grid">
    <?php if (have_posts()) : while (have_posts()) : the_post(); $price = get_post_meta(get_the_ID(), '_mmas_price', true); ?>
      <div class="mmas-product-card">
        <a href="<?php the_permalink(); ?>">
          <?php if (has_post_thumbnail()) { the_post_thumbnail('medium'); } ?>
          <h3 class="mmas-product-title"><?php the_title(); ?></h3>
        </a>
        <div class="mmas-product-excerpt"><?php the_excerpt(); ?></div>
        <?php if (!empty($price)) : ?><div class="mmas-product-price"><?php echo esc_html($price); ?></div><?php endif; ?>
      </div>
    <?php endwhile; endif; ?>
  </div>
  <div class="mmas-pagination"><?php the_posts_pagination(); ?></div>
</div>
<?php get_footer(); ?>
