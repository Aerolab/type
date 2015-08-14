/**
 * Grunt-js-hint
 * Javascript lint
 * Rules difened on .jshintrc
 */

module.exports = function(grunt) {
    grunt.config.set('jshint', {
         dev: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: {
                src: [
                    '<%= vars.app %>/scripts/**/*.js',
                    '!<%= vars.app %>/scripts/vendor/*.js'
                ]
            }
        }
    });
};
