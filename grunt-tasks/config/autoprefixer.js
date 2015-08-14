/**
 * Autoprefixer
 * Adds vendor prefixes
 */

module.exports = function(grunt) {
    grunt.config.set('autoprefixer', {
        options: {
            browsers: ['last 2 version']
        },
        dist: {
            files: [{
                expand: true,
                cwd: '.tmp/styles/',
                src: '{,*/}*.css',
                dest: '.tmp/styles/'
            }]
        }
    });
};
