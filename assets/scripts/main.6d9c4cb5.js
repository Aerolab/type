$(document).ready(function(){console.log("Hello World");var a="/assets/styles/icons/",b="/assets/styles/illus/";grunticon([a+"icons.data.svg.css",a+"icons.data.png.css",a+"icons.fallback.css"],grunticon.svgLoadedCallback),grunticon([b+"illus.data.svg.css",b+"illus.data.png.css",b+"illus.fallback.css"],grunticon.svgLoadedCallback);var c=new WOW({mobile:!1});c.init(),$("#space h2").lettering(),$(".scrollable").onepage_scroll({sectionContainer:"section",loop:!1})});