/**
 * Button configuration for the WordPress editor.
 * This module exports an object containing configuration for primary, secondary, and tertiary buttons.
 * Each button has styles that include properties for both the link and hover states.
 */

const { __ } = require('@wordpress/i18n');

const whiteColor      = '#ffffff';
const darkWhiteColor  = '#eeeeee';
const blackColor      = '#111111';
const lightBlackColor = '#333333';

const buttonStyles = {

    "primary": {

        "label": __( 'Primary', 'button-styles' ),

        "styles" : {

            "fill" : {

                "link" : {
                    "color"           : whiteColor,
                    "borderColor"     : blackColor,
                    "backgroundColor" : blackColor,
                    "boxShadowColor"  : blackColor,
                    "textDecoration"  : "none",
                },
                "hover" : {
                    "color"           : whiteColor,
                    "borderColor"     : lightBlackColor,
                    "backgroundColor" : lightBlackColor,
                    "boxShadowColor"  : lightBlackColor,
                    "textDecoration"  : "underline",
                }
            },

            "outline" : {

                "link" : {
                    "color"           : blackColor,
                    "borderColor"     : blackColor,
                    "backgroundColor" : "transparent",
                    "boxShadowColor"  : "transparent",
                    "textDecoration"  : "none",
                },
                "hover" : {
                    "color"           : lightBlackColor,
                    "borderColor"     : lightBlackColor,
                    "backgroundColor" : "transparent",
                    "boxShadowColor"  : "transparent",
                    "textDecoration"  : "underline",
                }
            },

            "as-link" : {

                "link" : {
                    "color"           : blackColor,
                    "borderColor"     : "transparent",
                    "backgroundColor" : "transparent",
                    "boxShadowColor"  : "transparent",
                    "textDecoration"  : "underline",
                },
                "hover" : {
                    "color"           : lightBlackColor,
                    "borderColor"     : "transparent",
                    "backgroundColor" : "transparent",
                    "boxShadowColor"  : "transparent",
                    "textDecoration"  : "none",
                }
            }
        },

    },

    "secondary": {

        "label": __( 'Secondary', 'button-styles' ),

        "styles" : {
            
            "fill" : {
                "link": {
                    "color"           : blackColor,
                    "borderColor"     : whiteColor,
                    "backgroundColor" : whiteColor,
                    "boxShadowColor"  : whiteColor,
                    "textDecoration"  : "none",
                },
                "hover": {
                    "color"           : blackColor,
                    "borderColor"     : darkWhiteColor,
                    "backgroundColor" : darkWhiteColor,
                    "boxShadowColor"  : darkWhiteColor,
                    "textDecoration"  : "underline",
                }
            },

            "outline" : {

                "link" : {
                    "color"           : whiteColor,
                    "borderColor"     : whiteColor,
                    "backgroundColor" : "transparent",
                    "boxShadowColor"  : "transparent",
                    "textDecoration"  : "none",
                },
                "hover" : {
                    "color"           : darkWhiteColor,
                    "borderColor"     : darkWhiteColor,
                    "backgroundColor" : "transparent",
                    "boxShadowColor"  : "transparent",
                    "textDecoration"  : "underline",
                }
            },

            "as-link" : {

                "link" : {
                    "color"           : whiteColor,
                    "borderColor"     : "transparent",
                    "backgroundColor" : "transparent",
                    "boxShadowColor"  : "transparent",
                    "textDecoration"  : "underline",
                },
                "hover" : {
                    "color"           : darkWhiteColor,
                    "borderColor"     : "transparent",
                    "backgroundColor" : "transparent",
                    "boxShadowColor"  : "transparent",
                    "textDecoration"  : "none",
                }
            }
        }
    },
}

const buttonBlockStyles = {

    "unregister": [
        'default',
        'fill',
        'outline'
    ],

    "register": [
        {
            label : __( 'Fill', 'button-styles' ),
            name  : 'fill',
            isDefault: true,
        },
        {
            label : __( 'Outline', 'button-styles' ),
            name  : 'outline',
            isDefault: false,
        },
        {
            label : __( 'Link', 'button-styles' ),
            name  : 'as-link',
            isDefault: false,
        }

    ]
}

module.exports = { buttonStyles, buttonBlockStyles }
