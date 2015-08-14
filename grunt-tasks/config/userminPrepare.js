/**
 * UserminPrepare
 * Prepares files for usemin
 */

module.exports = function(grunt) {
    grunt.config.set('useminPrepare', {
        options: {
            dest: '<%= vars.dist %>'
        },
        html: '<%= vars.dist %>/*.html'
    });
};
