/**
 * Grunt-file-rev
 * Rewrites file name to avoid caching
 * Uses usemin for changing file name on source
 */

module.exports = function(grunt) {
    grunt.config.set('filerev', {
        options: {
            algorithm: 'md5',
            length: 8
        },
        images: {
            src: '<%= vars.dist %>/assets/images/**/*'
        },
        scripts: {
            src: '<%= vars.dist %>/assets/scripts/**/*'
        },
        fonts: {
            src: '<%= vars.dist %>/assets/fonts/**/*'
        },
        styles: {
            src: ['<%= vars.dist %>/assets/styles/**/*',
                '!<%= vars.dist %>/assets/styles/illus/*',
                '!<%= vars.dist %>/assets/styles/icons/*'
            ]
        }
    });
};
