<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function mcw_blocks_cgb_block_assets() { // phpcs:ignore
	// Styles.
	wp_enqueue_style(
		'mcw_blocks-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);
}

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'mcw_blocks_cgb_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function mcw_blocks_cgb_editor_assets() { // phpcs:ignore
	// Scripts.
	wp_enqueue_script(
		'mcw_blocks-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: File modification time.
		true // Enqueue the script in the footer.
	);

	// Styles.
	wp_enqueue_style(
		'mcw_blocks-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	wp_enqueue_script( 'mcw-product-accordion',
		plugins_url( '/dist/mcw-product-accordion.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' )
	);
}

function render_product_accordion(){
	$additionalcontentadded = false;

	$terms = get_terms(array(
    'taxonomy'  => 'product_category',
		'hide_empty'  =>  false
  ));


	$block = '<div class="wp-block-mcw-blocks-accordion alignfull">
	<div class="wp-block-mcw-blocks-accordion-trigger alignfull"><h4>Expand To View Product Catalog</h4><div class="mcw-accordion-indicator"><a class="btn round"><i class="fa fa-angle-double-down"></i></a></div></div>
	<div class="wp-block-mcw-blocks-accordion-content alignfull">
		<div class="container">';

$arrlen = count($terms);
for($i = 0; $i< $arrlen; $i+=3){
	$block.='<div class="wp-block-mcw-blocks-slidebox-holder">';
	for($j = 0; $j < 3; $j++){
		if($terms[$i+$j]){
			$img = get_field('category_image', $terms[$i+$j]);
			$link = get_term_link( $terms[$i+$j] );
			$desc = term_description( $terms[$i+$j] );
			if(is_string($img) != true){
				$img = 'http://fakeimg.pl/300';
			}
		$block.="<div class='wp-block-mcw-blocks-slidebox";
		if($j==0){
			$block.=" open";
		}
		$block.="'>
		<div class='wp-block-mcw-blocks-slidebox-img slidebox'>
			<figure class='wp-block-image'><img src=$img></figure>
			<div class='text-over'><p>{$terms[$i+$j]->name}</p></div>
		</div>
		<div class='wp-block-mcw-blocks-slidebox-content'>
			<div class='container'><h3>{$terms[$i+$j]->name}</h3>{$desc}<a class='btn more-link theme-col' href='$link'>more</a></div></div></div>";
		}
		elseif( $additionalcontentadded != true ){
			$block.="<div class='wp-block-mcw-blocks-slidebox'>
			<div class='wp-block-mcw-blocks-slidebox-img slidebox'>
			<figure class='wp-block-image'><img src='/wp-content/uploads/2019/03/technical_service.png'></figure>
			<div class='text-over'><p>Technical Service and Repair</p></div>
			</div>
			<div class='wp-block-mcw-blocks-slidebox-content'>
			<div class='container'><h3>Technical Service and Repair</h3><p>24-hour phone support on location or in our shop, AID provides competitively priced repairs and modifications. Call 1-888-487-8620.</p><a href='/aid-technical-service-department/' class='btn more-link theme-col'>more</a></div>
			</div>
			</div>
			";
			$block.="<div class='wp-block-mcw-blocks-slidebox'>
			<div class='wp-block-mcw-blocks-slidebox-img slidebox'>
			<figure class='wp-block-image'><img src='/wp-content/uploads/2019/03/customer_service.png'></figure>
			<div class='text-over'><p>Customer Service</p></div>
			</div>
			<div class='wp-block-mcw-blocks-slidebox-content'>
			<div class='container'><h3>Customer Service</h3><p>AID is not only committed to offering top-of-the-line products, but also unrivaled service after the sale. Call 1-888-487-8620.</p><a href='/customer-service' class='btn more-link theme-col'>more</a></div>
			</div>
			</div>
			";
			$additionalcontentadded = true;
		}
	}
	$block.='</div>';
}
$block.='</div></div></div>';
	return sprintf(
		$block
	);
};

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'mcw_blocks_cgb_editor_assets' );
register_block_type( 'mcw-blocks/products-accordion', array(
	'render_callback'	=> 'render_product_accordion'
) );

wp_enqueue_script( 'mcw-accordion-js', plugins_url('dist/accordion.js', dirname(__FILE__)), array('jquery'), null, true );
wp_enqueue_script( 'mcw-slideboxes-js', plugins_url('dist/slideboxes.js', dirname(__FILE__)), null, null, true );
