/**
 * Grunt-version
 * Grunt task to handle versioning of a project.
 * grunt version:project:major/minor/patch/prerelease
 */

module.exports = function(grunt) {
    grunt.config.set('version', {
        project: {
            src: ['package.json', 'bower.json']
        }
    });
};
