/**
 * Grunt-jscs
 * Javascript style checker
 * Rules difened on .jscsrc
 */

module.exports = function(grunt) {
    grunt.config.set('jscs', {
         dev: {
            options: {
                config: '.jscsrc'
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
