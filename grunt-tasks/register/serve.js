/**
 * Serve
 * Compiles, servers and watch all files for live development
 */
module.exports = function (grunt) {
    grunt.registerTask('serve', [
        'clean:server',
        'concurrent:spriteGen',
        'wiredep',
        'sass:server',
        'copy:styles',
        'jscs',
        'assemble:server',
        'autoprefixer',
        'configureProxies:livereload',
        'connect:livereload',
        'watch'
    ]);
};
