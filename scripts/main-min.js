jQuery(document).ready(function($){var n=!1;$(".cd-nav-trigger").on("click",function(t){t.preventDefault(),n||($(this).parents(".csstransitions").length>0&&(n=!0),$("body").toggleClass("navigation-is-open"),$(".cd-navigation-wrapper").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){n=!1}))})}),function(n){"use strict";n(document).ready(function(){function t(){window.location=s}var e=n(".site-title"),i=n("body");setTimeout(function(){i.addClass("loaded")},150);var o=n(".project-assets").children("div");n.each(o,function(t,e){var i=n(this);i.imagesLoaded(function(){setTimeout(function(){i.addClass("loaded")},50+150*t)})});var a=n(".projects-feed .project");n.each(a,function(t,e){var i=n(this);i.imagesLoaded(function(){setTimeout(function(){i.addClass("loaded")},50+50*t)})});var s;n("a").on("click",function(n){return""==this.href||null==this.href?void n.preventDefault():void(-1==this.href.indexOf("#")&&-1==this.href.indexOf("mailto:")&&-1==this.href.indexOf("javascript:")&&"_blank"!=this.target&&(n.preventDefault(),s=this.href,i.removeClass("loaded"),setTimeout(t,250)))})})}(window.jQuery);