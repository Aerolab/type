/**
 * HTMLmin
 * HTML minification
 */

module.exports = function(grunt) {
    grunt.config.set('htmlmin', {
        dist: {
            options: {
                removeCommentsFromCDATA: true,
                // https://github.com/yeoman/grunt-usemin/issues/44
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                // removeEmptyAttributes: true,
                // removeOptionalTags: true
            },
            files: [{
                expand: true,
                cwd: '<%= vars.app %>',
                src: '*.html',
                dest: '<%= vars.dist %>'
            }]
        }
    });
};
