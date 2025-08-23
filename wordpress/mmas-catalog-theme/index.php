<?php if (!defined('ABSPATH')) { exit; } get_header(); ?>
<div class="container mmas-mt-4 mmas-mb-4">
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <article id="post-<?php the_ID(); ?>" <?php post_class('mmas-article'); ?>>
      <h1 class="mmas-page-title"><?php the_title(); ?></h1>
      <div class="mmas-content"><?php the_content(); ?></div>
    </article>
  <?php endwhile; else: ?>
    <p><?php _e('No content found.', 'mmas-catalog-theme'); ?></p>
  <?php endif; ?>
</div>
<?php get_footer(); ?>
