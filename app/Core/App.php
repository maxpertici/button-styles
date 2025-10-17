<?php

namespace MXP\ButtonStyles\Core;

final class App extends Plugin {

	/**
	 * Load the plugin
	 *
	 * @return void
	 */
	public function load() {
		add_action( 'plugins_loaded', [ $this, 'init' ] );
	}

	/**
	 * Init the plugin
	 *
	 * @return void
	 */
	public function init(){
		add_action('init', [ $this, 'loadTranslations' ]);
		add_action( 'enqueue_block_editor_assets', [ $this, 'editorEnqueues' ] );
		add_action( 'wp_enqueue_scripts', [ $this, 'frontEnqueues' ] );
		add_action( 'render_block_core/button', [ $this, 'customizeButtonBlock' ], 10, 2 );
	}


	/**
	 * Get Translations
	 *
	 * @return void
	 */
	public function loadTranslations(){
		$locale = get_user_locale();
		$locale = apply_filters( 'plugin_locale', $locale, 'button-styles' );
		load_textdomain( 'button-styles', WP_LANG_DIR . '/plugins/button-styles-' . $locale . '.mo' );
		load_plugin_textdomain( 'button-styles', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	}


	/**
	 * Enqueue block editor assets.
	 */
	public function editorEnqueues(){

		if( ! is_admin() ){
			return ;
		}

		$plugin_path = untrailingslashit( $this->directoryPath );
		$pluginUrl   = untrailingslashit( $this->pluginUrl );

		$asset_file  = include untrailingslashit( $plugin_path ) . '/dist/editor.asset.php';

		wp_enqueue_script(
			'button-styles-editor-scripts',
			$pluginUrl . '/dist/editor.js',
			$asset_file['dependencies'],
			$asset_file['version']
		);

		wp_set_script_translations(
			'button-styles-editor-scripts',
			'button-styles',
			$plugin_path . '/languages'
		);

		wp_enqueue_style(
			'button-styles-editor-styles',
			$pluginUrl . '/dist/editor.css'
		);
	}


	/**
	 * Frontend Styles
	 *
	 * @return void
	 */
	public function frontEnqueues(){

		if( is_admin() ){
			return ;
		}

		$plugin_path = untrailingslashit( $this->directoryPath );
		$pluginUrl   = untrailingslashit( $this->pluginUrl );

		wp_enqueue_style(
			'button-styles-front-styles',
			$pluginUrl . '/dist/front.css',
			[],
			filemtime( $plugin_path . '/dist/front.css' )
		);
	}

	/**
	 * Customize the render of block button
	 *
	 * @param string $block_content
	 * @param array $block
	 * @return void
	 */
	public function customizeButtonBlock( $block_content, $block ) {

		if ( ! isset( $block['attrs']['buttonColor'] ) || ! isset( $block['attrs']['buttonColorName'] ) ) {
			return $block_content;
		}

		$buttonColorName = $block['attrs']['buttonColorName'] ?? '';

		// Append the icon class to the block.
		$p = new \WP_HTML_Tag_Processor( $block_content );

		if ( $p->next_tag() ) {
			$p->add_class( 'has-button-color' );
			$p->add_class( 'has-button-color-' . $buttonColorName );
		}

		$block_content = $p->get_updated_html();

		return $block_content;
	}
}