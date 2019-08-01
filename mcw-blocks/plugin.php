<?php
/**
 * Plugin Name: Custom AID Blocks
 * Description: Custom Blocks for AID website
 * Author: Jro
 * Version: 1.0.0
 * License: Limited
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
