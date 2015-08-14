/**
 * Build
 * Compiles all assets and templates into dist folder
 */
module.exports = function (grunt) {
    grunt.registerTask('build', [
        'clean:dist',
        'concurrent:spriteGen',
        'wiredep',
        'sass:dist',
        'copy',
        'htmlmin',
        'assemble:dist',
        'useminPrepare',
        'autoprefixer',
        'concat:generated',
        // 'cssmin:generated',
        'uglify:generated',
        'copy:dist',
        'imagemin',
        'modernizr',
        'filerev',
        'usemin'
    ]);
};
