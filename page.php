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
	<nav class="navbar navbar-toggleable-md  navbar-light">

			<button class="navbar-toggler navbar-toggler-left" type="button" data-toggle="sidebar"  data-target="#sidebar" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
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



</div><!-- Wrapper end -->
<!-- // BEGIN .Sidebar -->
<div class="sidebar sidebar-left sidebar-size-3 sidebar-light bg-white sidebar-visible" id="sidebar" data-scrollable="" data-position="left" data-size="3">

		<!-- Brand -->
		<a href="http://localhost:8080/topbanque/" class="navbar-brand custom-logo-link" rel="home" itemprop="url"><img width="145" height="32" src="<?php echo esc_url(home_url('/')); ?>wp-content/themes/understrap-child/images/topbanque-logo.svg" class="img-responsive" title="Home" alt="logo" itemprop="logo"></a>

		<div class="sidebar-block" style="height: 20px;">
			<iframe src="https://ghbtns.com/github-btn.html?user=themekit&amp;repo=bootstrap-layout&amp;type=star&amp;count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
		</div>

		<ul class="sidebar-menu sm-active-button-bg sm-bordered">
			<li class="sidebar-menu-item">
				<a class="sidebar-menu-button" href="../index.html">Installation</a>
			</li>
		</ul>

		<div class="sidebar-heading">Components</div>
		<ul class="sidebar-menu sm-active-button-bg">
			<li class="sidebar-menu-item open">
				<a href="#" class="sidebar-menu-button" data-toggle="sidebar-collapse">Layout</a>
				<ul class="sidebar-submenu sm-condensed">
					<li class="sidebar-menu-item active">
						<a href="../layout/index.html" class="sidebar-menu-button">Layout component</a>
					</li>
					<li class="sidebar-menu-item">
						<a href="../layout/nested.html" class="sidebar-menu-button">Nested layouts</a>
					</li>
				</ul>
			</li>
			<li class="sidebar-menu-item">
				<a href="#" class="sidebar-menu-button" data-toggle="sidebar-collapse">Sidebar</a>
				<ul class="sidebar-submenu sm-condensed">
					<li class="sidebar-menu-item">
						<a href="../sidebar/index.html" class="sidebar-menu-button">Sidebar component</a>
					</li>
					<li class="sidebar-menu-item">
						<a href="../sidebar/toggle.html" class="sidebar-menu-button">Sidebar toggle</a>
					</li>
					<li class="sidebar-menu-item">
						<a href="../sidebar/position.html" class="sidebar-menu-button">Sidebar position</a>
					</li>
					<li class="sidebar-menu-item">
						<a href="../sidebar/size.html" class="sidebar-menu-button">Sidebar size</a>
					</li>
					<li class="sidebar-menu-item">
						<a href="../sidebar/visibility.html" class="sidebar-menu-button">Sidebar visibility</a>
					</li>
					<li class="sidebar-menu-item">
						<a href="../sidebar/layout.html" class="sidebar-menu-button">Sidebar layout</a>
					</li>
					<li class="sidebar-menu-item">
						<a href="../sidebar/skins.html" class="sidebar-menu-button">Sidebar skins</a>
					</li>
				</ul>
			</li>
			<li class="sidebar-menu-item">
				<a href="#" class="sidebar-menu-button" data-toggle="sidebar-collapse">Sidebar elements</a>
				<ul class="sidebar-submenu sm-condensed">
					<li class="sidebar-menu-item">
						<a href="../sidebar/brand.html" class="sidebar-menu-button">Sidebar brand</a>
					</li>
					<li class="sidebar-menu-item">
						<a href="../sidebar/text.html" class="sidebar-menu-button">Sidebar text</a>
					</li>
					<li class="sidebar-menu-item">
						<a href="../sidebar/utilities.html" class="sidebar-menu-button">Sidebar utilities</a>
					</li>
				</ul>
			</li>
			<li class="sidebar-menu-item">
				<a href="#" class="sidebar-menu-button" data-toggle="sidebar-collapse">Sidebar menus</a>
				<ul class="sidebar-submenu sm-condensed">
					<li class="sidebar-menu-item">
						<a href="../sidebar-menu/index.html" class="sidebar-menu-button">Sidebar menu</a>
					</li>
					<li class="sidebar-menu-item">
						<a href="../sidebar-menu/icons.html" class="sidebar-menu-button">Sidebar menu icons</a>
					</li>
					<li class="sidebar-menu-item">
						<a href="../sidebar-menu/utilities.html" class="sidebar-menu-button">Sidebar menu utilities</a>
					</li>
					<li class="sidebar-menu-item">
						<a href="../sidebar-menu/submenu.html" class="sidebar-menu-button">Sidebar submenu</a>
					</li>
					<li class="sidebar-menu-item">
						<a href="../sidebar-menu/collapse.html" class="sidebar-menu-button">Sidebar collapse</a>
					</li>
					<li class="sidebar-menu-item">
						<a href="../sidebar-menu/dropdown.html" class="sidebar-menu-button">Sidebar dropdown</a>
					</li>
				</ul>
			</li>
		</ul>

		<div class="sidebar-heading">Extensions</div>
		<ul class="sidebar-menu sm-active-button-bg">
			<li class="sidebar-menu-item">
				<a class="sidebar-menu-button" href="../scrollbars.html">Scrollable</a>
			</li>
		</ul>

		<div class="sidebar-block sidebar-b-b sidebar-p-b">
			<a target="_blank" href="https://github.com/themekit/bootstrap-layout" class="btn btn-block bg-white">Source on Github</a>
		</div>

		<div class="sidebar-block">
			<p><a href="https://badge.fury.io/js/bootstrap-layout"><img src="https://badge.fury.io/js/bootstrap-layout.svg" alt="npm version"></a></p>

		</div>

		<p class="sidebar-p-b">Get help directly from our team via our Slack channel. <br><a href="http://themekit-slack-invite.stamplayapp.com" target="_blank" class="sidebar-link">Request invite</a></p>

	</div>
<!-- // END .Sidebar -->
<?php get_footer(); ?>
