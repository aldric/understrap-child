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
    
  register_sidebar(array(
      'name' => 'AGT : Top breadcrumbs',
      'id' => 'sidebar-top-bank-breadcrumbs',
      'description' => 'to display the breadcrumbs',
      'before_widget' => '<nav class="breadcrumb">',
      'after_widget' => '</nav>'//,
      //'before_title' => '<h3 class="widget-title">',
      //'after_title' => '</h3>',
  ));

    register_sidebar(array(
      'name' => 'AGT : Top banner',
      'id' => 'sidebar-top-bank-banner',
      'description' => 'Display automatic bank banner',
      'before_widget' => '<div class="rowss">',
      'after_widget' => '</div>'//,
      //'before_title' => '<h3 class="widget-title">',
      //'after_title' => '</h3>',
  ));
 
//BEL :: <a title="Visiter : %title%." href="%link%" class="%type% breadcrumb-item" content="%position%"><span property="name">%htitle%</span></a>
//BEL U :: <span class="breadcrumb-item active" content="%position%"><span property="name">%htitle%</span></span>