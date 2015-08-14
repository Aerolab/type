/**
 * Usemin
 *
 */

module.exports = function(grunt) {
    grunt.config.set('usemin', {
        options: {
            assetsDirs: ['<%= vars.dist %>', '<%= vars.dist %>/assets/images', '<%= vars.dist %>/assets/scripts', '<%= vars.dist %>/assets/styles', '<%= vars.dist %>/assets/fonts']
        },
        html: ['<%= vars.dist %>/{,*/}*.html'],
        css: ['<%= vars.dist %>/assets/styles/{,*/}*.css'],
        js: ['<%= vars.dist %>/assets/scripts/{,*/}*.js']
    });
};
