/**
 * Grunt-modernizr
 * Adds required tech detection based on source
 */

module.exports = function(grunt) {
    grunt.config.set('modernizr', {
         dist: {
            devFile: '<%= vars.app %>/bower_components/modernizr/modernizr.js',
            outputFile: '<%= vars.dist %>/assets/scripts/vendor/modernizr.js',
            files: {
                src: [
                    '<%= vars.assets %>/scripts/{,*/}*.js',
                    '<%= vars.assets %>/styles/{,*/}*.css',
                    '!<%= vars.assets %>/scripts/vendor/*',
                    '<%= vars.app %>/bower_components/**/*'
                ]
            },
            uglify: true
        }
    });
};
