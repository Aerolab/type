/**
 * Image min
 * Miifacation of images
 */

module.exports = function(grunt) {
    grunt.config.set('imagemin', {
        dist: {
            options: {
                optimizationLevel: 7
            },
            files: [{
                expand: true,
                cwd: '<%= vars.app %>/images',
                src: ['{,*/}*.{gif,jpeg,jpg,png}','!sprite/*.*'],
                dest: '<%= vars.dist %>/images'
            }]
        }
    });
};
