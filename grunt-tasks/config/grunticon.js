/**
 * Grunticon
 * Builds SVG/PNG sprite using grunticon
 * Source images should be on app/grunticon/ folder
 *
 * Good for flat icons (PNG or SVG) and SVG illustrations with SVG inline embed and PNG fallback
 */

module.exports = function(grunt) {
    grunt.config.set('grunticon', {
        icons: {
            files: [{
                expand: true,
                cwd: '<%= vars.assets %>/images/icons',
                src: ['*.svg', '*.png'],
                dest: '<%= vars.tmp %>/assets/styles/icons/'
            }],
            options: {
                enhanceSVG: true,
                compressPNG: true,
                pngfolder: '../../../assets/images/icons',
                pngpath: '../images/icons',
                cssprefix: '.icon-',
                datasvgcss: 'icons.data.svg.css',
                datapngcss: 'icons.data.png.css',
                urlpngcss: 'icons.fallback.css'
            }
        },
        illus: {
            files: [{
                expand: true,
                cwd: '<%= vars.assets %>/images/illus',
                src: ['*.svg'],
                dest: '<%= vars.tmp %>/assets/styles/illus/'
            }],
            options: {
                enhanceSVG: true,
                compressPNG: true,
                pngfolder: '../../../assets/images/illus',
                pngpath: '../images/illus',
                cssprefix: '.illus-',
                datasvgcss: 'illus.data.svg.css',
                datapngcss: 'illus.data.png.css',
                urlpngcss: 'illus.fallback.css'
            }
        }
    });
};
