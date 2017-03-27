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
	<nav class="navbar navbar-toggleable-md  navbar-light " id="navbar">

			<button class="navbar-toggler navbar-toggler-left" type="button" data-toggle="sidebar"  data-target="#sidebar" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style="  padding-left: 0;">
				<i class="material-icons md-36">menu</i>
			</button>
			<div class="collapse navbar-collapse">
				<form class="form-inline  waves-effect waves-light" action="'.<?php home_url('/') ?>.'" role="search">
      		<input class="form-control" type="text" id="s" name="s" placeholder="Rechercher" style="width:100%"></form>
        </form>
      </div>

			<button class="navbar-toggler navbar-toggler-right" type="button"  aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style="padding-right : 0">
				<i class="material-icons md-36">search</i>
			</button>
			<!-- <ul class="nav navbar-nav nav-flex-icons ml-auto">
                <li class="nav-item ">
            <a class="nav-link waves-effect waves-light" href="https://mdbootstrap.com/product/mdb-big-bundle/"><span class="badge red z-depth-1 mr-1 hidden-sm-down">NEW </span><i class="fa fa-diamond"></i> <span class="hidden-sm-down">Big Bundle</span></a>
        </li>
        <li class="nav-item ">
            <a class="nav-link waves-effect waves-light" href="https://mdbootstrap.com/newsletter/"><i class="fa fa-newspaper-o"></i> <span class="hidden-sm-down">Newsletter</span></a>
        </li>
        <li class="nav-item ">
        <a href="#" class="nav-link waves-effect waves-light" data-toggle="modal" data-target="#contactForm"> <i class="fa fa-envelope-o"></i> <span class="hidden-sm-down">Contact</span></a></li>
        <li class="nav-item "><a href="https://mdbootstrap.com/forums/forum/support/" class="nav-link waves-effect waves-light"><i class="fa fa-comments-o"></i><span class="hidden-sm-down">Support</span></a></li>
                <li class="nav-item "><a href="#" id="show_login" class="nav-link waves-effect waves-light"><i class="fa fa-sign-in"></i><span class="hidden-sm-down">Log In</span></a></li>
            </ul> -->
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
				<!--Carousel Wrapper-->
				<div id="carousel-home" class="carousel slide carousel-fade" data-ride="carousel">


				    <!--Indicators-->
				    <ol class="carousel-indicators">
				        <li data-target="#carousel-home" data-slide-to="0" class="active"></li>
				        <li data-target="#carousel-home" data-slide-to="1"></li>
				        <li data-target="#carousel-home" data-slide-to="2"></li>
				    </ol>
				    <!--/.Indicators-->

				    <!--Slides-->
				    <div class="carousel-inner" role="listbox">

				        <!--First slide-->
				        <div class="carousel-item active">
	                <div class="card col-md-12">
	                    <img class="img-fluid" src="http://localhost:8080/topbanque/wp-content/uploads/2017/02/bforbanq.png" alt="Card image cap">
	                    <div class="card-block">
	                        <h4 class="card-title">Card title</h4>
	                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	                        <a href="#" class="btn btn-primary">Button</a>
	                    </div>
	                </div>
				        </div>
				        <!--/.First slide-->

				        <!--Second slide-->
				        <div class="carousel-item">
	                <div class="card col-md-12">
	                    <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg" alt="Card image cap">
	                    <div class="card-block">
	                        <h4 class="card-title">Card title</h4>
	                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	                        <a href="#" class="btn btn-primary">Button</a>
	                    </div>
	                </div>
				        </div>
				        <!--/.Second slide-->

				        <!--Third slide-->
				        <div class="carousel-item">
	                <div class="card col-md-12">
	                    <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(65).jpg" alt="Card image cap">
	                    <div class="card-block">
	                        <h4 class="card-title">Card title</h4>
	                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	                        <a href="#" class="btn btn-primary">Button</a>
	                    </div>
	                </div>

				        </div>
				        <!--/.Third slide-->

				    </div>
				    <!--/.Slides-->
						<!--Controls-->
				     <a class="carousel-control-prev" href="#carousel-home" role="button" data-slide="prev">
				         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
				         <span class="sr-only">Previous</span>
				     </a>
				     <a class="carousel-control-next" href="#carousel-home" role="button" data-slide="next">
				         <span class="carousel-control-next-icon" aria-hidden="true"></span>
				         <span class="sr-only">Next</span>
				     </a>
				     <!--/.Controls-->

				</div>
				<!--/.Carousel Wrapper-->
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
