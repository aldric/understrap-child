<?php
function understrap_remove_scripts()
{
    wp_dequeue_style('understrap-styles');
    wp_deregister_style('understrap-styles');

    wp_dequeue_script('understrap-scripts');
    wp_deregister_script('understrap-scripts');

    // Removes the parent themes stylesheet and scripts from inc/enqueue.php
}
add_action('wp_enqueue_scripts', 'understrap_remove_scripts', 20);

add_action('wp_enqueue_scripts', 'theme_enqueue_styles');
function theme_enqueue_styles()
{

    // Get the theme data
    $the_theme = wp_get_theme();

    wp_enqueue_style('child-understrap-styles', get_stylesheet_directory_uri() . '/css/child-theme.min.css', array(), $the_theme->get('Version'));
    wp_enqueue_script('child-understrap-scripts', get_stylesheet_directory_uri() . '/js/child-theme.min.js', array(), $the_theme->get('Version'), true);
}

// define the bcn_li_attributes callback
function filter_bcn_li_attributes($li_class, $breadcrumb_type, $breadcrumb_get_id)
{
    // make filter magic happen here...
  // echo ' li >> .'.$li_class." >> type >> ".$breadcrumb_type ."<br/>";
   //print_r($breadcrumb_type );
    return ' class="breadcrumb-item '.(strpos($li_class, 'home') > -1 ? 'active' : '');
};

// add the filter
add_filter('bcn_li_attributes', 'filter_bcn_li_attributes', 10, 3);

// function my_bcn_template_tag($replacements, $type, $id)
// {
//    // echo 'rep ' ;
//  //   print_r($replacements);
//     //Add the %template_directory% template tag
// //    $replacements['%template_directory%'] = get_bloginfo('template_directory');
//     //Return our new set of templates and replacements
//     return $replacements;
// }
// add_filter('bcn_template_tags', 'my_bcn_template_tag', 3, 10);

// function my_bcn_breadcrumb_template($template, $type, $id)
// {
//     //print_r($template);
//     //Add the %template_directory% template tag
// //    $replacements['%template_directory%'] = get_bloginfo('template_directory');
//     //Return our new set of templates and replacements
//     return $replacements;
// }
// add_filter('bcn_breadcrumb_template', 'my_bcn_breadcrumb_template', 3, 10);

// add_action('bcn_after_fill', 'my_static_breadcrumb_adder');
// function my_static_breadcrumb_adder($breadcrumb_trail)
// {
//   //  print_r($breadcrumb_trail);
// }

    function understrap_post_nav()
    {
        // Don't print empty markup if there's nowhere to navigate.
        $previous = (is_attachment()) ? get_post(get_post()->post_parent) : get_adjacent_post(false, '', true);
        $next     = get_adjacent_post(false, '', false);

        if (! $next && ! $previous) {
            return;
        } ?>

		<div class="row">
			<div class="col-md-12">
				<nav class="navigation post-navigation">
					<h2 class="sr-only"><?php _e('Post navigation', 'understrap'); ?></h2>
					<div class="nav-links clearfix">
					<?php
              if (get_previous_post_link()) {
                  previous_post_link('<button type="button" class="btn nav-previous float-xs-left float-left" title="%title"><span class="truncate">%link</span></button>', _x('<i class="fa fa-angle-left"></i>&nbsp;%title', 'Previous post link', 'understrap'));
              }
        if (get_next_post_link()) {
            next_post_link('<button type="button" class="btn nav-next float-xs-right float-right" title="%title"><span class="truncate">%link</span>', _x('%title&nbsp;<i class="fa fa-angle-right"></i>', 'Next post link', 'understrap'));
        } ?>
					</div><!-- .nav-links -->
				</nav><!-- .navigation -->
			</div>
		</div>
		<?php

    }
    
if (function_exists('register_sidebar')) {
    register_sidebar(array(
      'name' => 'AGT : Top banner',
      'id' => 'sidebar-top-bank-banner',
      'description' => 'Display automatic bank banner',
      'before_widget' => '<div class="row">',
      'after_widget' => '</div>'//,
      //'before_title' => '<h3 class="widget-title">',
      //'after_title' => '</h3>',
  ));
}
