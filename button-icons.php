<?php
/*
Plugin Name:  Button Styles
Plugin URI:   https://maxpertici.fr#button-styles
Description:  Add button styles for Gutenberg buttons.
Version:      0.1.0
Author:       @maxpertici
Author URI:   https://maxpertici.fr
Contributors:
License:      GPLv2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  button-styles
Domain Path:  /languages/
*/

defined( 'ABSPATH' ) or die();

use MXP\ButtonStyles\Core\App ;

require __DIR__ . '/vendor/autoload.php';

$app = App::instance();
$app->createFromFile( __FILE__ );
$app->load();
