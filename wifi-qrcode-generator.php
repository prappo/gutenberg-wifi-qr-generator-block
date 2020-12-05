<?php
/**
 * Plugin Name: WIFI QRcode Generator
 * Plugin URI: https://prappo.dev
 * Description: Simple wifi QRcode generator
 * Author: Prappo Prince
 * Author URI: https://prappo.dev
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
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
