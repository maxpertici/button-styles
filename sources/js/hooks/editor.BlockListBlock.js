/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';

/**
 * External dependencies
 */
import classnames from 'classnames';


/**
 * Add button color classes in the Editor.
 *
 * @since 0.1.0
 * @param {Object} BlockListBlock
 */
function addClasses( BlockListBlock ) {

	return ( props ) => {

		const { name, attributes } = props;

		if ( 'core/button' !== name || ! attributes?.buttonColor ) {
			return <BlockListBlock { ...props } />;
		}

		const classes = classnames( props?.className, {
			'has-button-color' : attributes?.buttonColor,
			[ `has-button-color-${ attributes?.buttonColorName }` ]: attributes?.buttonColorName,
		} );

		return <BlockListBlock { ...props } className={ classes } />;
	};
}

addFilter(
	'editor.BlockListBlock',
	'button-styles/add-classes',
	addClasses
);