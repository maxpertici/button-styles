# Button Styles

## Introduction
A WordPress plugin that adds unified styles to Gutenberg button blocks.

## Overview
This plugin provides a way to manage button styles for handling nicely the hover colors and block styles for your different users' needs.
You can therefore create and manage button styles with:
* Block Styles
* CSS Styles and theme.json

### Key Features
- **Unified Button Styles**: Seamlessly integrates consistent styles for Gutenberg button blocks
- **Easy Variant Management**: Simple configuration-based organization for your style collection
- **Automated Build Process**: Converts your style configurations into ready-to-use CSS
- **Three Base Styles**: Fill, Outline, and Link for all your design needs

### Available Block Styles
The plugin includes by default:
- **Fill**: Buttons with colored background
- **Outline**: Buttons with border only
- **Link**: Buttons with link appearance

### Included Colors
- **Primary**: Default black style
- **Secondary**: Alternative white style

### Style Structure
Styles are configured in `/sources/config.js` with the following structure:
```javascript
"button-[tint]": {
    "fill": {
        "link": { /* styles for normal state */ },
        "hover": { /* styles for hover state */ }
    },
    "outline": { /* same structure */ },
    "as-link": { /* same structure */ }
}
```

### Customization
To add new styles:
1. Modify the `/sources/config.js` file
2. Add your new color or style configurations
3. Run `npm run make:styles` to generate SCSS files
4. Compile with `npm run build`

### Getting Started
1. Install and activate the plugin
2. Modify/add styles in `/sources/config.js`
3. Follow the same naming and structure conventions as existing styles
4. Adapt `/sources/scss/button-styles.scss` for your needs
5. Run the build process `npm run build`
6. Your custom styles are available for the contributors