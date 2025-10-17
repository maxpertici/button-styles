/**
 * Blocks Styles
 * Register or Unregister Block Styles in the Editor
 */

import { buttonBlockStyles } from '../config.js';

wp.domReady( () => {

	const { __ } = wp.i18n ;

	setTimeout( () => {

        const unRegistration = buttonBlockStyles["unregister"] || [];

        unRegistration.forEach( ( style ) => {
            wp.blocks.unregisterBlockStyle(
                'core/button',
                style
            );
        });

        const registration   = buttonBlockStyles["register"] || [];

        registration.forEach( ( style ) => {
            wp.blocks.registerBlockStyle(
                'core/button',
                {
                    label: __( style.label, 'button-styles' ),
                    name: style.name,
                    isDefault: style.isDefault || false
                }
            );
        });

	}, 50 );
})
