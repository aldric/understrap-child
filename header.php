<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package understrap
 */

$container = get_theme_mod('understrap_container_type');
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-title" content="<?php bloginfo('name'); ?> - <?php bloginfo('description'); ?>">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div class="hfeed site layout-container layout-sidebar-l3-md-up" id="page">

	<!-- ******************* The Navbar Area ******************* -->
	<div class="wrapper-fluid wrapper-navbar" id="wrapper-navbar">
		<a class="skip-link screen-reader-text sr-only" href="#content"><?php esc_html_e('Skip to content', 'understrap'); ?></a>
	</div><!-- .wrapper-navbar end -->
		<!-- breadcrumbs widget location -->
		<?php
        //echo 'plop'. get_page_template_slug();
        if (is_active_sidebar('sidebar-top-bank-breadcrumbs')) : ?>
   			<div class="wrapper wrapper-navbar" id="wrapper-breadcrumbs">
						<?php dynamic_sidebar('sidebar-top-bank-breadcrumbs'); ?>
  			</div>
		<?php endif; ?>
		<!-- end breadcrumbs -->
		<!-- BUTTON -->
		<div class="fixed-action-btn" style="bottom: 10px; right: 24px;">
			<a class="btn-floating btn-large link-hover-color waves-effect" id="go-to-top" >
			<i class="fa fa-angle-double-up"></i>
			</a>
		</div>
		<!-- END BUTTON -->

<!-- // BEGIN .Sidebar -->
<div class="sidebar sidebar-left sidebar-size-3 sidebar-light bg-white sidebar-visible" id="sidebar" data-scrollable="" data-position="left" data-size="3">

		<div class="sidebar-block text-center mt-1 ">
			<a href="/" class="navbar-brand custom-logo-link" rel="home" itemprop="url"><img width="145" height="32" src="<?php echo esc_url(home_url('/')); ?>wp-content/themes/understrap-child/images/topbanque-logo.svg" class="img-responsive" title="Home" alt="logo" itemprop="logo"></a>
		</div>

<!-- Dropdown sidebar menu -->
<ul class="sidebar-menu sm-active-button-bg sm-bordered">

  <!-- Menu item -->
  <li class="sidebar-menu-item open">
    <a href="#" class="sidebar-menu-button" data-toggle="sidebar-collapse">Banques</a>
	<ul class="sidebar-submenu">
		<?php wp_nav_menu(
                        array(
                                'menu'            => 'MainMenuBanks',
                                'container'       => '',
                                'menu_class'      => 'sidebar-menu',
                                'fallback_cb'     => '',
                                'menu_id'         => 'sidebar-menu',
                                'walker'          => new WP_BootstrapSidebar_Navwalker()
                        )
                            ); ?>
		</ul>
     </li>
</div>
<!-- // END .Sidebar -->
