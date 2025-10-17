/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';

/**
 * Add the attributes needed for button icons.
 *
 * @since 0.1.0
 * @param {Object} settings
 */
function addAttributes( settings ) {
	if ( 'core/button' !== settings.name ) {
		return settings;
	}

	// Add the block visibility attributes.
	const buttonStylesAttributes = {
		buttonColor: {
			type: 'string',
		},
		buttonColorName: {
			type: 'string',
		}
	};

	const newSettings = {
		...settings,
		attributes: {
			...settings.attributes,
			...buttonStylesAttributes,
		},
	};

	return newSettings;
}

addFilter(
	'blocks.registerBlockType',
	'button-styles/add-attributes',
	addAttributes
);
