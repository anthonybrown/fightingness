$("[role='navigation']").flexNav({
	'breakpoint' : '640', // default
	'animationSpeed' : 'fast' // default
});

/* Anchor Link Scroll */

 function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');

  $('.header_wrapper a[href*=#], footer a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });

  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
// $('a').click(function(){
//     $('html, body').animate({
//         scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
//     }, 500);
//     return false;
// });


	// Slideshow 3
  $(".rslides").responsiveSlides({
    auto: false,
      pager: true,
      nav: true,
      speed: 500,
      namespace: "transparent-btns"
  });

