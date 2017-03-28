<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package understrap
 */

$the_theme = wp_get_theme();
$container = get_theme_mod('understrap_container_type');
?>

<?php get_sidebar('footerfull'); ?>
<footer>
<div class="wrapper" id="wrapper-footer">

	<div class="<?php echo esc_html($container); ?>">

		<div class="row">

			<div class="col m12">

				<footer class="site-footer" id="colophon">

					<div class="site-info">
						<!--Copyright-->
							<div class="footer-copyright">
								<div class="container-fluid text-center">
									&copy; <?php echo date("Y"); ?> Copyright: <a href="https://www.topbanque.net"> topbanque.net </a>
								</div>
							</div>
							<!--/.Copyright-->
					</div><!-- .site-info -->

				</footer><!-- #colophon -->

			</div><!--col end -->

		</div><!-- row end -->

	</div><!-- container end -->

</div><!-- wrapper end -->

<footer>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>
