<?php if (!defined('ABSPATH')) { exit; } get_header(); ?>
<div class="container mmas-mt-4 mmas-mb-4">
  <?php if (have_posts()) : while (have_posts()) : the_post(); $price = get_post_meta(get_the_ID(), '_mmas_price', true); ?>
    <article <?php post_class('mmas-product-single'); ?>></article>
    <div class="row">
      <div class="col">
        <?php if (has_post_thumbnail()) { the_post_thumbnail('large'); } ?>
      </div>
      <div class="col">
        <h1 class="mmas-page-title"><?php the_title(); ?></h1>
        <?php if (!empty($price)) : ?><div class="mmas-product-price mmas-mb-4"><?php echo esc_html($price); ?></div><?php endif; ?>
        <div class="mmas-content"><?php the_content(); ?></div>
      </div>
    </div>
    <?php endwhile; endif; ?>
</div>
<?php get_footer(); ?>
