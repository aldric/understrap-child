<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package understrap
 */

$container = get_theme_mod('understrap_container_type');
$base_image = esc_url(home_url('/'))."wp-content/themes/understrap-child/images/";
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
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="<?php echo $base_image; ?>/f/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
	<link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet" type="text/css">
	<link rel="apple-touch-icon" sizes="57x57" href="<?php echo $base_image; ?>/f/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="<?php echo $base_image; ?>/f/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="<?php echo $base_image; ?>/f/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="<?php echo $base_image; ?>/f/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="<?php echo $base_image; ?>/f/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="<?php echo $base_image; ?>/f/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="<?php echo $base_image; ?>/f/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="<?php echo $base_image; ?>/f/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo $base_image; ?>/f/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"  href="<?php echo $base_image; ?>/f/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo $base_image; ?>/f/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="<?php echo $base_image; ?>/f/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo $base_image; ?>/f/favicon-16x16.png">
	<link rel="manifest" href="<?php echo $base_image; ?>/f/manifest.json">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div class="fixed-action-btn">
	 <a class="btn-floating btn-large amber darken-4 go-to-top">
		 <i class="large material-icons">publish</i>
	 </a>
	 <!-- <ul>
		 <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
		 <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
		 <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
		 <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
	 </ul> -->
 </div>
	<div class="navbar-fixed">
		<nav class="grey lighten-2" role="navigation">
			<div class="container">
				<div class="nav-wrapper">
					<a id="logo-container" href="#" class="brand-logo center">
						<img width="160" src="<?php echo $base_image; ?>topbanque-logo.svg" ="Home" alt="logo" style="padding-top: 13px;"/>
					</a>
					<!--<ul class="right hide-on-med-and-down">
						<li><a href="#">Navbar Link</a></li>
					</ul>
					<ul id="nav-mobile" class="side-nav fixed">
						<li><a href="#">Navbar Link</a></li>
					</ul>-->
				 <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
				</div>
			</div>
		</nav>
	</div>

	<ul id="nav-mobile" class="side-nav fixed" style="transform: translateX(0px);">
        <li class="logo">
			<a id="logo-container" href="https://www.topbanque.net/" class="brand-logo">
				<img width="180" src="<?php echo $base_image; ?>topbanque-logo.svg" ="Home" alt="logo" />
			</a>
		</li>
		<li><div class="separator"></div></li>
    <li class="search">
      <div class="search-wrapper card">
	  <form action="<?php home_url('/') ?>" role="search">
        		<input id="search" name="s" placeholder="Rechercher" class="validate" style="border:none;transition:none;box-shadow:none"><i class="material-icons">search</i>
		</form>
        <div class="search-results"></div>
      </div>
    </li>
		<li><div class="separator"></div></li>
		<li><a class="amber darken-4 waves-effect waves-light btn" style="margin:0 5px;"><i class="medium material-icons left">search</i>Trouver votre banque</a></li>
		<li><div class="separator"></div></li>
		<li>
		  <ul>
				<?php wp_nav_menu(
            array(
                    'menu'            => 'MainMenuBanks',
                    'container'       => '',
                    'menu_class'      => '',
                    'fallback_cb'     => '',
                    'menu_id'         => 'sidebar-menu',
                    'walker'          => new WP_BootstrapSidebar_Navwalker()
            )
                ); ?>
			</ul>
		</li>
		<li><div class="separator"></div></li>
		<!-- <ul>
		 <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
 		 <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
 		 <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
	 </ul> -->
</ul>
		<!-- breadcrumbs widget location -->
		<?php
        //echo 'plop'. get_page_template_slug();
        if (is_active_sidebar('sidebar-top-bank-breadcrumbs')) : ?>
   			<div class="wrapper wrapper-navbar" id="wrapper-breadcrumbs">
						<?php dynamic_sidebar('sidebar-top-bank-breadcrumbs'); ?>
  			</div>
		<?php endif; ?>
		<!-- end breadcrumbs -->
