/**
 * Grunt-watch
 * Watch for files and run task on change
 */

module.exports = function(grunt) {
    grunt.config.set('watch', {
         sass: {
            files: ['<%= vars.assets %>/styles/{,*/}*.{scss,sass}', '<%= vars.app %>/bower_components/{,*/}*.{scss,sass}'],
            tasks: ['sass:server']
        },
        bower: {
            files: './bower.json',
            tasks: ['wiredep']
        },
        assemble: {
            files: ['<%= vars.app %>/templates/layouts/{,*/}*.hbs',
                   '<%= vars.app %>/templates/pages/{,*/}*.hbs',
                   '<%= vars.app %>/templates/partials/{,*/}*.hbs',
                   '<%= vars.app %>/data/{,*/}*.json'],
            tasks: ['assemble:server']
        },
        scripts: {
            files: ['<%= vars.assets %>/scripts/**/*.js'],
            tasks: ['jshint', 'jscs']
        },
        grunticon: {
            files: ['<%= vars.assets %>/images/icons/*.{png,svg}','<%= vars.assets %>/images/illus/*.svg'],
            tasks: ['grunticon']
        },
        webfont: {
            files: ['<%= vars.app %>/webfont/*'],
            tasks: ['webfont', 'sass:server']
        },
        sprite: {
            files: ['<%= vars.assets %>/images/sprite/*'],
            tasks: ['sprite', 'sass:server']
        },
        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '{.tmp,<%= vars.app %>}/*.html',
                '.tmp/assets/styles/{,*/}*.css',
                '{.tmp,<%= vars.app %>}/assets/scripts/{,*/}*.js',
                '<%= vars.assets %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
            ]
        }
    });
};
