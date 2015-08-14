/**
 * Iconizr
 * Probably not going to be using iconizr. Use Grunticon
 * SVG + PNG icon kit generator
 * Source icons should be on app/iconizr/ folder
 */

module.exports = function(grunt) {
    grunt.config.set('iconizr', {
        options: {
            render: {
                css: '../../.tmp/assets/styles/icons/iconzr.css',
                scss: '../../app/assets/styles/base/iconizr/_iconizr'
            },
            dims: true,
            keep: true,
            common: 'iconz',
            sprite: 'iconz',
            spritedir: 'iconz'
        },
        base: {
            src: ['app/assets/iconizr'],
            dest: '.tmp/images/'
        }
    });
};
