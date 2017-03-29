<?php
//[carousel]
function carousel_func($atts)
{
  $template = file_get_contents(realpath(dirname(__FILE__))."/carousel.html");
  return $template;
}

//[cards wrap="row" small="12" medium="4" large="3"]
function cards_func($atts)
{
     $a = shortcode_atts( array(
        'wrap' => 'none',
        'small' => '12',
        'medium' => '4',
        'large' => '3'
    ), $atts );

  $css = 'col s'.$a['small'].' m'.$a['medium'].' l'.$a['large'];
  $card_template = file_get_contents(realpath(dirname(__FILE__))."/card.html");
  $isRowWrapped = $a['wrap'] === 'row' ? true : false;
  $template = $isRowWrapped ? '<div class="row">' : '';
  $template .= str_replace('$css', $css, $card_template);
  $template = $isRowWrapped ? '</div>' : '';
  return $template;
}
add_shortcode('carousel', 'carousel_func');
add_shortcode('cards', 'cards_func');
