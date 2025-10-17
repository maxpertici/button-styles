import { addFilter } from '@wordpress/hooks';

const customizeButtonSettings = ( settingValue, settingName, clientId, blockName ) => {
        if ( blockName !== 'core/button' ) {
            return settingValue;
        }
        if( settingName === 'color.text' || settingName === 'color.background' || settingName === 'color.custom' ) {
            return false ;
        }
        return settingValue;
}

addFilter(
	'blockEditor.useSetting.before',
	'button-styles/curate-button-settings',
	customizeButtonSettings
);
