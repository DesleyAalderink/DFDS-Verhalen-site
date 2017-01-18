var hearts = document.querySelectorAll(".heart");
var star = document.querySelectorAll("main section footer ul li:nth-of-type(2)");

for (var i = 0; i < hearts.length; i++) {
	hearts[i].addEventListener("click", function(){
       this.classList.toggle("hearttransform");
	});
}

for (var i = 0; i < star.length; i++) {
	star[i].addEventListener("click", function(){
       this.classList.toggle("star");
	});
}
