(function(){
  'use strict';
  
  var panels = document.querySelector( '.panels' );
  var content = document.querySelector( 'article' );
  var width = content.offsetWidth;

  var touchManager = new Hammer.Manager( panels );
  touchManager.add( new Hammer.Pan({ threshold: 0}));

  touchManager.on( 'pan', function( e ) {
    //remove transition before drag/swipe
    panels.classList.remove('transition');
    panels.style.transform = 'translateX(' +  e.deltaX + 'px)';  
  });

  touchManager.on( 'panend', function( e ) {
    var rect = content.getBoundingClientRect();
    var left = rect.left;
    var right = rect.right;

    panels.classList.add('transition');

    if (right < width/2) {
      panels.style.transform = 'translateX(' + -width + 'px)';
    } else {
      panels.style.transform = 'translateX(' + 0 + 'px)';
    }

  });
  
})();