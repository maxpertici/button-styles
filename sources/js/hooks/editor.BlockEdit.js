/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import {
	InspectorControls,
	PanelColorSettings,
	store as blockEditorStore
} from '@wordpress/block-editor';

import { buttonStyles } from '../../config';
console.log(buttonStyles);

/**
 * Filter the BlockEdit object and add button color inspector controls to button blocks.
 *
 * @since 0.1.0
 * @param {Object} BlockEdit
 */
function addInspectorControls( BlockEdit ) {

	return ( props ) => {

		if ( props.name !== 'core/button' ) {
			return <BlockEdit { ...props } />;
		}

		const { attributes, setAttributes } = props;
		const { buttonColor, buttonColorName } = attributes;

		return (
			<>
				<BlockEdit { ...props } />
				<InspectorControls group="styles">
					<ButtonColorSettings
                        buttonColor={buttonColor}
                        buttonColorName={buttonColorName}
                        setAttributes={setAttributes}
                    />
				</InspectorControls>
			</>
		);
	};
}


const getButtonColorName = ( buttonColor, colors ) => {
	if ( ! buttonColor || ! colors ) {
		return '';
	}
	const color = colors.find( ( c ) => c.color === buttonColor );
	return color ? color.slug : '';
}

const retrieveButtonPalette = () => {

	const palette = [];

	for ( const styleKey in buttonStyles ) {

		if ( ! buttonStyles.hasOwnProperty( styleKey ) ) continue;
		const style = buttonStyles[ styleKey ];
		
		let displayName = styleKey.replace('button-', '');
		displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);

		palette.push( {
			name: displayName,
			slug: styleKey,
			color: style.fill.link.backgroundColor
		} );
	}
	return palette ;
}

const ButtonColorSettings = ( { buttonColor, buttonColorName, setAttributes } ) => {

	const customButtonPalette = retrieveButtonPalette();

	return (
		<PanelColorSettings
			__experimentalIsRenderedInSidebar
			title={ __( 'Tint' ) }
			colors={ customButtonPalette }
			colorSettings={ [
				{
					value: buttonColor,
					onChange: ( color ) => {
						setAttributes( { buttonColor : color } );
						const colorName = getButtonColorName( color, customButtonPalette ); 
						setAttributes( { buttonColorName : colorName } );
					},
					label: __( 'Color', 'button-styles' ),
				}
			] }
		/>
	);
};

addFilter(
	'editor.BlockEdit',
	'button-styles/add-inspector-controls',
	addInspectorControls
);
