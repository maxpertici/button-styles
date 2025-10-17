/**
 * Build the styles library
 * ----------------------------
 */

const { consola } = require("consola");
consola.start("RUN   : make:styles");
consola.info("BUILD : Generate editor button styles...");

const fs = require('fs');
const path = require('path');

// Charger la config JS
const { buttonStyles, buttonBlockStyles } = require('../config.js');

// Charger le contenu du readme.js (dans le même dossier que ce script)
const readmePath = path.join(__dirname, 'readme.js');
let readmeContent = '';
if (fs.existsSync(readmePath)) {
    readmeContent = fs.readFileSync(readmePath, 'utf8') + '\n';
}

// Générer le contenu SCSS pour exmple.build.scss
function jsToScss(obj, indent = 0) {
    const pad = '    '.repeat(indent);
    if (Array.isArray(obj)) {
        return obj.map(v => jsToScss(v, indent)).join('\n');
    }
    if (typeof obj === 'object' && obj !== null) {
        let out = '';
        for (const key in obj) {
            // Si la valeur est un objet ou un tableau, on garde la structure
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                out += `${pad}${key} : (\n${jsToScss(obj[key], indent + 1)}\n${pad}),\n`;
            } else {
                // Sinon, on écrit la valeur directement
                out += `${pad}${key} : ${obj[key]},\n`;
            }
        }
        return out.trimEnd();
    }
    // Pour les valeurs simples (couleurs, etc.)
    return pad + obj + ',';
}

// Générer $button_styles
const scssButtonStyles = `$button_styles : (\n${jsToScss(buttonStyles, 1)}\n);\n`;

// Générer $button_block_styles
const blockStyles = [
    ...(buttonBlockStyles.register?.map(s => s.name) || []),
];
const scssButtonBlockStyles = `$button_block_styles : (\n    ${blockStyles.join(',\n    ')}\n);\n`;

// Contenu final
const scssContent =
    readmeContent +
    scssButtonBlockStyles +
    '\n' +
    scssButtonStyles;

// Écrire le fichier
const outputFile = path.join(__dirname, '..', 'scss/button-styles-collection.build.scss');
fs.writeFileSync(outputFile, scssContent);

consola.success("DONE\n");