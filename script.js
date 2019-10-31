
$(function () {

  $('a[href^="#"]').click(function( ) {
      $('html, body').animate({
          'scrollTop': $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
      }, 500);
      $('html, body').animate({
          'scrollLeft': $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().left
      }, 500);

      return false;
  });









/* hitt */



  var $document = $(document),
      top = 0,
      scrollTimer = 0;
  
  // Detect horizontal scroll start and stop.
  $document.on("scroll", function ( e ) {

    var docTop = $document.scrollTop();

    if(top !== docTop) {
      var self = this, args = arguments;

      if(!scrollTimer) {
        // We've not yet (re)started the timer: It's the beginning of scrolling.
        startVScroll.apply(self, args);
      }

      window.clearTimeout(scrollTimer);

      scrollTimer = window.setTimeout(function () {
        scrollTimer = 0;

        // Our timer was never stopped: We've finished scrolling.
        stopVScroll.apply(self, args);
      }, 100);

      top = docTop;
    }
  });

  // Horizontal scroll started - Make div's absolutely positioned.
  function startVScroll () {
    console.log("Scroll Start");

    $(".fastAUtgafu")
    // Clear out any left-positioning set by stopHScroll.
    .css("top","")
    .each(function () {
      var $this = $(this),
          pos = $this.offset();
      // Preserve our current vertical position...
      $this.css("left", pos.left)
    })
    // ...before making it absolutely positioned.
    .css("position", "absolute");
  }
  
  // Horizontal scroll stopped - Make div's float again.
  function stopVScroll () {
    var topScroll = $(window).scrollTop();
    console.log("Scroll Stop");

//    var columnIndex = Math.round( leftScroll / $( window ).width( ) );
//    $( 'html,body' ).animate( { 'scrollLeft': columnIndex * $( window ).width( ) + 'px' }, 100 );

    $(".fastAUtgafu")
      // Clear out any top-positioning set by startHScroll.
      .css("left","")
      .each(function () {
        var $this = $(this), 
          pos = $this.position();
        // Preserve our current horizontal position, munus the scroll position...
        $this.css("top", pos.top-leftTop);
      })
      // ...before making it fixed positioned.
      .css("position", "fixed");
  }
});










document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;  

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
          window.removeEventListener("load", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
    window.addEventListener("load", lazyload);
  }
});

























var resizable = document.querySelector('.resizable'),
    resizer = document.querySelector( '.resizer' ),
    startX, startY, startWidth, startHeight;
    
resizer.addEventListener( 'mousedown', initDrag, false );

function initDrag( e ) {
   startX = e.clientX;
   startY = e.clientY;
   startWidth = parseInt( document.defaultView.getComputedStyle( resizable ).width, 10);
   startHeight = parseInt(document.defaultView.getComputedStyle( resizable ).height, 10);
   document.documentElement.addEventListener('mousemove', doDrag, false);
   document.documentElement.addEventListener('mouseup', stopDrag, false);
}

function doDrag(e) {
   resizable.style.width = (startWidth + e.clientX - startX) + 'px';
   resizable.style.height = (startHeight + e.clientY - startY) + 'px';
}

function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);    
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
}


















function autoScrollDown(){
    $(".FreeFlowCanvas").css({top:-$(".Menu").outerHeight()}) // jump back
               .animate({top:0},5000,"linear", autoScrollDown); // and animate
}
function autoScrollUp(){
    $(".FreeFlowCanvas").css({top:0}) // jump back
               .animate({top:-$(".Menu").outerHeight()},5000,"linear", autoScrollUp); // and animate
}
// fix hight of outer:
$('.Menu').css({maxHeight: $('.FreeFlowCanvas').height()});
// duplicate content of inner:
$('.FreeFlowCanvas').html($('.FreeFlowCanvas').html() + $('.FreeFlowCanvas').html());
autoScrollUp();
