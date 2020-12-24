   
console.clear();

TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();

var ww = window.innerWidth;

var noSlides = $(".section").length;
var slideWidth = $(".section").width();
var slideContainerWidth = slideWidth*noSlides-ww;

console.log(noSlides, slideContainerWidth);

var ww = window.innerWidth;


var actionHorizontal = new TimelineMax()
.to("#slideContainer1", 1, {x: -slideContainerWidth})


var horizontal = createHorizontal();

function createHorizontal() {
    return new ScrollMagic.Scene({
  triggerElement: "#js-wrapper1",
  triggerHook: "onLeave",
  duration: slideContainerWidth
})
  .setPin("#js-wrapper1")
  .setTween(actionHorizontal)
  
  .addTo(controller);

}

 
