/**
 * Sass
 * Libsass compiler
 */

module.exports = function(grunt) {
    grunt.config.set('sass', {
        dist: {
            options: {
                sourcemap: 'none',
                style: 'compressed',
                includePaths: ['<%= vars.tmp %>/assets/styles', '<%= vars.app %>/bower_components']
            },
            files: {
                '<%= vars.dist %>/assets/styles/main.css' : ['<%= vars.app %>/assets/styles/main.sass']
            }
        },
        server: {
            options: {
                debugInfo: true,
                style: 'expanded',
                includePaths: ['<%= vars.tmp %>/assets/styles', '<%= vars.app %>/bower_components']
            },
            files: {
                '.tmp/assets/styles/main.css' : ['<%= vars.app %>/assets/styles/main.sass']
            }
        }
    });
};
