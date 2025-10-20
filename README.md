# Button Styles

## Introduction
A WordPress plugin that adds unified styles to Gutenberg button blocks.

## Overview
This plugin provides a way to manage button styles, handling hover colors and block styles elegantly for your various users' needs.
You can create and manage button styles with:
* Block Styles
* CSS Styles and theme.json

### Key Features
- **Unified Button Styles**: Seamlessly integrates consistent styles for Gutenberg button blocks
- **Easy Variant Management**: Simple configuration-based organization for your style collection
- **Automated Build Process**: Converts your style configurations into ready-to-use CSS
- **Three Base Styles**: Fill, Outline, and Link for all your design needs
- **theme.json**: Properties can be overridden with theme.json for more flexibility

### Available Block Styles
The plugin includes by default:
- **Fill**: Buttons with colored background
- **Outline**: Buttons with border only
- **Link**: Buttons with link appearance

### Included Colors
- **Primary**: Default black style
- **Secondary**: Alternative white style

### Customization
1. Modify/add styles in `/sources/config.js`
3. Adapt `/sources/scss/button-styles.scss` to your needs
5. Run the build process `npm run build`
6. Your custom styles are now available for contributors

### Note:
Currently, the default style and default color IS "fill" and "primary". If your nedd are different, you must adapt scss styles.
