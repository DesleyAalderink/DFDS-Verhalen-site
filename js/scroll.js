(function(){
  'use strict';

  var panels = document.querySelector( 'main section' );
  var content = document.querySelector( 'article' );
  var margin = parseInt(window.getComputedStyle(content, null).getPropertyValue("margin-right"));
  var allContent = document.querySelectorAll( 'main section article' );
  var width = content.offsetWidth + margin;
  var panLeft = 0;
console.log(margin);
  var touchManager = new Hammer.Manager( panels );
  touchManager.add( new Hammer.Pan({ threshold: 0}));

  touchManager.on( 'pan', function( e ) {
    //remove transition before drag/swipe
    panels.classList.remove('transition');
    panels.style.transform = 'translateX(' +  (panLeft + e.deltaX) + 'px)';
  });

  touchManager.on( 'panend', function( e ) {
    var rect = content.getBoundingClientRect();
    var left = rect.left;
    var right = rect.right;

    panels.classList.add('transition');

    if (Math.abs(left%width) > width/2 && left < 0 && !(left > panLeft && left < panLeft+(width/2)) && (-(allContent.length * width) + width/2) < left ) {
      panLeft += -width;
      panels.style.transform = 'translateX(' + panLeft + 'px)';
    } else if((-(allContent.length * width) + width/2) > left || (Math.abs(left%width) < width/2 && left < panLeft) || (left > panLeft && left < panLeft+(width/2))) {
      panels.style.transform = 'translateX(' + panLeft + 'px)';
    } else {
      panLeft += panLeft != 0 ? width : 0;
      panels.style.transform = 'translateX(' + panLeft + 'px)';
    }
  });

})();
