<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package understrap
 */

get_header();

$container   = /*get_theme_mod('understrap_container_type')*/ 'container';
$sidebar_pos = get_theme_mod('understrap_sidebar_position');

?>
<main>
		<div class="<?php echo esc_html($container); ?>" id="content" tabindex="-1">

			<div class="row">
				<!-- Do the left sidebar check -->
				<?php get_template_part('global-templates/left-sidebar-check', 'none'); ?>
					<?php while (have_posts()) : the_post(); ?>
						<?php get_template_part('loop-templates/content', 'page'); ?>

						<?php
                        // If comments are open or we have at least one comment, load up the comment template.
                        if (comments_open() || get_comments_number()) :
                            comments_template();
                        endif;
                        ?>

					<?php endwhile; // end of the loop.?>
				</div>
			<!-- Do the right sidebar check -->
			<?php if ('right' === $sidebar_pos || 'both' === $sidebar_pos) : ?>
				<?php get_sidebar('right'); ?>
			<?php endif; ?>

		</div><!-- .row -->
<?php get_footer(); ?>
</div><!-- Wrapper end -->
</main>
