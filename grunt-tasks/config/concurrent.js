/**
 * Concurrent
 * Creates concurrent tasks for taks optimization
 */

module.exports = function(grunt) {
    grunt.config.set('concurrent', {
        spriteGen: ['webfont', 'sprite', 'grunticon']
    });
};
