document.querySelectorAll("#loginform")[0].addEventListener("click", function(){
  document.querySelectorAll("header nav ul li section")[0].classList.toggle("open");
});


(function(){
  'use strict';

  var panels = document.querySelector( 'main' );
  var content = document.querySelector( 'article' );
  var margin = parseInt(window.getComputedStyle(content, null).getPropertyValue("margin-right"));
  var allContent = document.querySelectorAll( 'main article' );
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

/* Bron: Joost Faber */


var hearts = document.querySelectorAll(".heart");
var star = document.querySelectorAll("main footer ul li:nth-of-type(2)");
var heartSpan = document.querySelector("body > nav li:first-child a span");

for (var i = 0; i < hearts.length; i++) {
	hearts[i].addEventListener("click", function(){
		var span = this.parentNode.querySelector("span");
       this.classList.toggle("hearttransform");
       if(this.classList.contains("hearttransform")){
       	span.innerHTML = parseInt(span.innerHTML) + 1;
       } else {
       	span.innerHTML = parseInt(span.innerHTML) - 1;
       }
	});
}

for (var i = 0; i < star.length; i++) {
	star[i].addEventListener("click", function(){
       this.classList.toggle("star");
       if (this.classList.contains("star")) {
       	heartSpan.innerHTML = parseInt(heartSpan.innerHTML) + 1;
       } else {
       	heartSpan.innerHTML = parseInt(heartSpan.innerHTML) - 1;
       }
	});
}

var form = document.querySelectorAll("form");


if (form[0]) {
	form[0].addEventListener("submit", function(event){
		event.preventDefault();
		window.location = "/poging4/";
		console.log(window);
	});
}

