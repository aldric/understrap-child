<?php
function understrap_remove_scripts() {
    wp_dequeue_style( 'understrap-styles' );
    wp_deregister_style( 'understrap-styles' );

    wp_dequeue_script( 'understrap-scripts' );
    wp_deregister_script( 'understrap-scripts' );

    // Removes the parent themes stylesheet and scripts from inc/enqueue.php
}
add_action( 'wp_enqueue_scripts', 'understrap_remove_scripts', 20 );

add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {

	// Get the theme data
	$the_theme = wp_get_theme();

    wp_enqueue_style( 'child-understrap-styles', get_stylesheet_directory_uri() . '/css/child-theme.min.css', array(), $the_theme->get( 'Version' ) );
    wp_enqueue_script( 'child-understrap-scripts', get_stylesheet_directory_uri() . '/js/child-theme.min.js', array(), $the_theme->get( 'Version' ), true );
}

// define the bcn_li_attributes callback 
function filter_bcn_li_attributes( $li_class, $breadcrumb_type, $breadcrumb_get_id ) { 
    // make filter magic happen here... 
  // echo ' li >> .'.$li_class." >> type >> ".$breadcrumb_type ."<br/>";
   //print_r($breadcrumb_type );
    return ' class="breadcrumb-item '.( strpos($li_class, 'home') > -1 ? 'active' : '' ); 
}; 
         
// add the filter 
add_filter( 'bcn_li_attributes', 'filter_bcn_li_attributes', 10, 3 ); 

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