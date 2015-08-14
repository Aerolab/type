/**
 * Webfont
 * Builds webfont from SVGs
 * Source icons should be on app/webfont/ folder
 */

module.exports = function(grunt) {
    grunt.config.set('webfont', {
        icons: {
            src: '<%= vars.assets %>/webfont/*.svg',
            dest: '<%= vars.tmp %>/assets/fonts',
            destCss: '<%= vars.tmp %>/assets/styles/base/',
            options: {
                font: 'icons',
                stylesheet: 'scss',
                relativeFontPath: '../fonts/',
                htmlDemo: false,
                hashes: false,
                engine: 'node'
            }
        }
    });
};
