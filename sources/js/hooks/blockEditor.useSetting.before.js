import { addFilter } from '@wordpress/hooks';

const customizeButtonSettings = ( settingValue, settingName, clientId, blockName ) => {
        if ( blockName !== 'core/button' ) {
            return settingValue;
        }

        const excludeSettings = [
            'color.text',
            'color.background',
            'color.custom',
            'border.color',
            'border.radius',
            'border.style',
            'border.width',
            'shadow'
        ];

        if ( excludeSettings.includes( settingName ) ) {
            return false;
        }

        return settingValue;
}

addFilter(
	'blockEditor.useSetting.before',
	'button-styles/curate-button-settings',
	customizeButtonSettings
);
