<?php
/**
 * Partial template for content in page.php
 *
 * @package understrap
 */

?>
<article <?php post_class(); ?> id="post-<?php the_ID(); ?>">

	<header class="entry-header">

		<?php the_title('<h1 class="entry-title">', '</h1>'); ?>

	</header><!-- .entry-header -->

	<?php echo get_the_post_thumbnail($post->ID, 'large'); ?>

	<div class="entry-content">
		<div class="carousel carousel-slider center" data-indicators="true">
	     <div class="carousel-fixed-item center">
	       <a class="btn waves-effect white grey-text darken-text-2">button</a>
	     </div>
	     <div class="carousel-item red white-text" href="#one!">
	       <h2>First Panel</h2>
	       <p class="white-text">This is your first panel</p>
	     </div>
	     <div class="carousel-item amber white-text" href="#two!">
	       <h2>Second Panel</h2>
	       <p class="white-text">This is your second panel</p>
	     </div>
	     <div class="carousel-item green white-text" href="#three!">
	       <h2>Third Panel</h2>
	       <p class="white-text">This is your third panel</p>
	     </div>
	     <div class="carousel-item blue white-text" href="#four!">
	       <h2>Fourth Panel</h2>
	       <p class="white-text">This is your fourth panel</p>
	     </div>
	   </div>
		 <div class="row">
            <div class="col s12 m4">
              <div class="center promo">
                <i class="material-icons">flash_on</i>
                <p class="promo-caption">Développement accéléré</p>
                <p class="light center">Nous avons fait le gros du travail afin de vous fournir un style par défaut qui intègre nos composants personnalisés. De plus, nous avons raffinés les animations et transitions afin de fournir une expérience plus fluide aux développeurs.</p>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="center promo">
                <i class="material-icons">group</i>
                <p class="promo-caption">Centré sur l'experience utilisateur</p>
                <p class="light center">En appliquant les principes du Material Design, nous sommes parvenus à créer un framework qui incorpore des composants et animations fournissant plus de retour aux utilisateurs. De plus, un système unique adaptatif permet d'unifier l'experience utilsateur.</p>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="center promo">
                <i class="material-icons">settings</i>
                <p class="promo-caption">Facile à prendre en main</p>
                <p class="light center">Nous fournissons une documentation détaillée ainsi que des exemples spécifiques de code afin de faciliter la prise en main des nouveaux utilisateurs. Nous sommes également toujours ouverts au retours et répondons à toute question que vous pourriez avoir sur Materialize.</p>
              </div>
            </div>
          </div>
		<?php the_content(); ?>

		<?php
        wp_link_pages(array(
            'before' => '<div class="page-links">' . __('Pages:', 'understrap'),
            'after'  => '</div>',
        ));
        ?>

	</div><!-- .entry-content -->

	<footer class="entry-footer">

		<?php edit_post_link(__('Edit', 'understrap'), '<span class="edit-link">', '</span>'); ?>

	</footer><!-- .entry-footer -->

</article><!-- #post-## -->
