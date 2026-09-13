
var initialPath = `M 0 100 Q 750 100 1500 100`;

var string =document.querySelector("svg");

string.addEventListener("mousemove",function(dets){
   var finalPath=`M 0 100 Q ${dets.x} ${dets.y} 1500 100`
   gsap.to("svg path",{
    attr:{d:finalPath},
    duration: 0.1,
    ease: "power3.out",
   })
})

string.addEventListener("mouseleave",function(){
   gsap.to("svg path",{
    attr:{d:initialPath},
    duration: 0.8,
    ease: "elastic.out(1,0.2)",
   })
})
  



