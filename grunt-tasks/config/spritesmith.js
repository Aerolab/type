/**
 * Spritesmith
 * Builds image sprite using spritesmith
 * Source icons should be on app/images/sprite/ folder
 * You should provide both non-retina and retina (@2x) images
 */

module.exports = function(grunt) {
    grunt.config.set('sprite', {
        buildretina: {
            'src': ['<%= vars.assets %>/images/sprite/*@2x.png'],
            'dest': '<%= vars.tmp %>/assets/images/sprite@2x.png',
            'destCss': '<%= vars.tmp %>/assets/styles/base/_sprite.scss',
            'padding': 20
        },
        build: {
            'src': ['<%= vars.assets %>/images/sprite/*.png', '!<%= sprite.buildretina.src %>'],
            'dest': '<%= vars.tmp %>/assets/images/sprite.png',
            'padding': 10,
            'cssTemplate': '<%= vars.assets %>/styles/util/spritesmith-retina-mixins.template.mustache',
            'destCss': '<%= sprite.buildretina.destCss %>',
            'imgPath': '../images/sprite.png'
        }
    });
};
