/**
 * Wiredep
 * Adds bower packages requirements to template
 */

module.exports = function(grunt) {
    grunt.config.set('wiredep', {
        target: {
            src: ['<%= vars.app %>/templates/partials/scripts.hbs','<%= vars.app %>/templates/layouts/layout.hbs'],
            ignorePath: '../../'
        },
        sass: {
            src: ['<%= vars.app %>/assets/styles/main.sass'],
            exclude: ['bourbon/app/assets/stylesheets/_bourbon.scss'],
            ignorePath: '../../bower_components/'
        }
    });
};
