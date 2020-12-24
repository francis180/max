TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();
var t2 = new TimelineMax();

var ww = window.innerWidth;

var noSlides = $(".section1").length;
var slideWidth = $(".section1").width();
var slideContainerWidth = slideWidth*noSlides-ww;

console.log(noSlides, slideContainerWidth);

var ww = window.innerWidth;


var actionHorizontal = new TimelineMax()
.to("#slideContainer2", 1, {x: -slideContainerWidth})


var horizontal = createHorizontal();

function createHorizontal() {
    return new ScrollMagic.Scene({
  triggerElement: "#js-wrapper2",
  triggerHook: "onLeave",
  duration: slideContainerWidth
})
  .setPin("#js-wrapper2")
  .setTween(actionHorizontal)
  
  .addTo(controller);

}
 
  