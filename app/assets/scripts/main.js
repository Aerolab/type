$( document ).ready( function() {
  console.log( 'Hello World' );

  // Loading Icons and Illustrations from Grunticon
  var iconsDir = '/assets/styles/icons/',
      illusDir = '/assets/styles/illus/';
  grunticon( [
      iconsDir + 'icons.data.svg.css',
      iconsDir + 'icons.data.png.css',
      iconsDir + 'icons.fallback.css'
  ], grunticon.svgLoadedCallback );
  grunticon( [
      illusDir + 'illus.data.svg.css',
      illusDir + 'illus.data.png.css',
      illusDir + 'illus.fallback.css'
  ], grunticon.svgLoadedCallback );

  var wow = new WOW({
    mobile: false
  });
  wow.init();
});
