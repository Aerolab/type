/**
 * Grunt-copy
 * Prepares files for distribution
 */

module.exports = function(grunt) {
    grunt.config.set('copy', {
        dist: {
            files: [{
                expand: true,
                dot: true,
                cwd: '<%= vars.app %>',
                dest: '<%= vars.dist %>',
                src: [
                    '*.{ico,png,txt}',
                    '.htaccess'
                ]
            }]
        },
        styles: {
            expand: true,
            dot: true,
            cwd: '<%= vars.app %>/styles',
            dest: '.tmp/styles/',
            src: '{,*/}*.css'
        },
        assets: {
            files: [{
                expand: true,
                dot: true,
                cwd: '<%= vars.assets %>',
                dest: '<%= vars.dist %>/assets',
                src: [
                    'fonts/{,*/}*.*',
                    'images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}',
                    '!images/icons/*',
                    '!images/illus/*',
                    '!images/sprite/*'
                ]
            }]
        },
        grunticon: {
            files: [{
                expand: true,
                dot: true,
                cwd: '<%= vars.tmp %>/assets',
                dest: '<%= vars.dist %>/assets',
                src: [
                    'images/icons/*',
                    'images/illus/*',
                    'styles/**/*',
                    '!styles/base',
                    '!styles/**/{grunticon.loader.js,preview.html,*.scss,*.sass}'
                ]
            }]
        },
        sprite: {
            files: [{
                expand: true,
                dot: true,
                cwd: '<%= vars.tmp %>/assets/images',
                dest: '<%= vars.dist %>/assets/images',
                src: [
                    'sprite.png',
                    'sprite@2x.png'
                ]
            }]
        },
        webfonts: {
            files: [{
                expand: true,
                dot: true,
                cwd: '<%= vars.tmp %>/assets/fonts',
                dest: '<%= vars.dist %>/assets/fonts',
                src: '*'
            }]
        }
    });
};
