/**
 * Assemble
 * Compiles templates inside app/templates
 * Also usefull for several helpers included
 */

module.exports = function(grunt) {
    grunt.config.set('assemble', {
        options: {
            flatten: true,
            layout: 'layout.hbs',
            layoutdir: '<%= vars.app %>/templates/layouts',
            assets: '<%= vars.dist %>/images',
            data: ['<%= vars.app %>/data/*.{json,yml}', './package.json'],
            partials: ['<%= vars.app %>/templates/partials/*.hbs'],
            helpers: ['handlebars-helpers', 'handlebars-helper-*']
        },
        dist: {
            files: {
                '<%= vars.dist %>/': ['<%= vars.app %>/templates/pages/*.hbs']
            }
        },
        server: {
            files: {
                '.tmp/': ['<%= vars.app %>/templates/pages/*.hbs']
            }
        }
    });
};
