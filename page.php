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

$container   = get_theme_mod('understrap_container_type');
$sidebar_pos = get_theme_mod('understrap_sidebar_position');

?>

<div class="wrapper layout-content" id="page-wrapper">
	<nav class="navbar navbar-toggleable-md  navbar-light" id="navbar">
			
			<button class="navbar-toggler navbar-toggler-left" type="button" data-toggle="sidebar"  data-target="#sidebar" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style="  padding-left: 0;">
				<i class="material-icons md-36">menu</i>
			</button>
			
			<button class="navbar-toggler navbar-toggler-right" type="button"  aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style="padding-right : 0">
				<i class="material-icons md-36">search</i>
			</button>
				<!-- Your site title as branding in the menu -->
				<?php if (! has_custom_logo()) {
    ?>

					<?php if (is_front_page() && is_home()) : ?>

						<h1 class="navbar-brand mb-0"><a rel="home" href="<?php echo esc_url(home_url('/')); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>"><?php bloginfo('name'); ?></a></h1>

					<?php else : ?>

						<a class="navbar-brand" rel="home" href="<?php echo esc_url(home_url('/')); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>"><?php bloginfo('name'); ?></a>

					<?php endif; ?>


				<?php

} else {
    //    the_custom_logo();
} ?><!-- end custom logo -->
			<!-- The WordPress Menu goes here -->
			<?php wp_nav_menu(
                                    array(
                                            'theme_location'  => 'primary',
                                            'container_class' => 'collapse navbar-collapse',
                                            'container_id'    => 'navbarNavDropdown',
                                            'menu_class'      => 'navbar-nav mr-auto',
                                            'fallback_cb'     => '',
                                            'menu_id'         => 'main-menu',
                                            'walker'          => new WP_Bootstrap_Navwalker(),
                                    )
                            ); ?>

</nav><!-- .site-navigation -->
	<div class="<?php echo esc_html($container); ?>" id="content" tabindex="-1">

		<div class="row">

			<!-- Do the left sidebar check -->
			<?php get_template_part('global-templates/left-sidebar-check', 'none'); ?>

			<main class="site-main" id="main">

				<?php while (have_posts()) : the_post(); ?>

					<?php get_template_part('loop-templates/content', 'page'); ?>

					<?php
                    // If comments are open or we have at least one comment, load up the comment template.
                    if (comments_open() || get_comments_number()) :
                        comments_template();
                    endif;
                    ?>

				<?php endwhile; // end of the loop.?>

			</main><!-- #main -->

		</div><!-- #primary -->

		<!-- Do the right sidebar check -->
		<?php if ('right' === $sidebar_pos || 'both' === $sidebar_pos) : ?>

			<?php get_sidebar('right'); ?>

		<?php endif; ?>

	</div><!-- .row -->

</div><!-- Container end -->


<?php get_footer(); ?>
</div><!-- Wrapper end -->


