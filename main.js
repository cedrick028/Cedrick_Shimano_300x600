//Developed by bayhoncedrick@gmail.com
let tween;
var carouselCounter = 1;

replaceStringToImage();
setTimeout(function(){
    startAnimation();
},1000)

//replacing string [img] to an image
function replaceStringToImage() {
     var headline2Old = document.getElementById("headline2").innerHTML;
     var headline2New = headline2Old.replace("[img]", "<img id='xtr' src='images/xtr.png'/>");

     document.getElementById("headline2").innerHTML = headline2New;
}

function startAnimation() {  
     document.querySelector("#main").style.opacity = 1;
     tween = gsap.timeline();

     gsap.set("#headline2_container", {x: "-20px", opacity: 0})
     gsap.set(["#f2Product1", "#f2Product2", "#f2Product3"], {scale: 0, opacity: 0})
     gsap.set("#f3Product1Price_container", {opacity: 0})
     gsap.set("#carouselBtn_container", {opacity: 0})
     gsap.set(["#f3Product1Headline_container", "#f3Product1Subheadline_container"], {opacity: 0, x: "-20px"})
     gsap.set("#f3Product1Img_container", {opacity: 0, scale: 0})
     gsap.set("#cta_container", {opacity: 0, y: "20px"})
     gsap.set(["#f3Product2_container", "#f3Product3_container"], {x: 300})

     rightBtn.addEventListener("click", function(){
          setTimeout(function(){
            btn_blocker.style.zIndex = 2;
          })  
          carousel();
     })

     function carousel() {
        setTimeout(function(){
            btn_blocker.style.zIndex = 0;
        }, 1200)
          carouselCounter++;

          if(carouselCounter == 1){
               tween.to("#f3Product3_container", .8, {x: -300, ease: "back.out"})
               tween.to("#f3Product1_container", .8, {x: 0, ease: "back.out", onComplete: resetProductPosition}, "-=.6")
          } else if (carouselCounter == 2){
               tween.to("#f3Product1_container", .8, {x: -300, ease: "back.out"})
               tween.to("#f3Product2_container", .8, {x: "0", ease: "back.out"}, "-=.6")
          } else {
               tween.to("#f3Product2_container", .8, {x: -300, ease: "back.out"})
               tween.to("#f3Product3_container", .8, {x: 0, ease: "back.out", onComplete: resetProductPosition}, "-=.6")
               carouselCounter = 0;
          }
     }

     function resetProductPosition(){
          if(carouselCounter == 1){
               gsap.set("#f3Product3_container", {x: 300})
          } else{
               gsap.set(["#f3Product1_container", "#f3Product2_container"], {x: 300})
          }
     }
     
     // FRAME1
     tween.to("#logo_white", .3, {scale: 1.1, yoyo: true, repeat:1}, "+=2")
     tween.to("#background_container", 1,{rotate: "45deg", scale: "1.5", x: "-502px", y: "-160px", ease: "back.out"},"-=.1")
     tween.to("#footer_container", 1, {y: "-22px", ease: "back.out"},"-=1")

     //FRAME2
     tween.to("#headline2_container", .6, {x: 0, opacity: 1, ease: "back.out"}, "-=.2")
     tween.to("#logo2_container", .5, {opacity: 1}, "-=.6")

     tween.to("#f2Product1", .3, {scale: 1, opacity: 1, ease: "back.out"})
     tween.to("#f2Product2", .3, {scale: 1, opacity: 1, ease: "back.out"}, "-=.2")
     tween.to("#f2Product3", .3, {scale: 1, opacity: 1, ease: "back.out"}, "-=.1")

     tween.to("#subheadline2_container", .3, {opacity: 1}, "-=.2")

     //FRAME3
     tween.to("#headline2_container", .6, {x: "-20px", opacity: 0, ease: "back.in"}, "+=2")
     tween.to(["#f2Product1", "#f2Product2", "#f2Product3"], .6, {scale: 0, opacity: 0, ease: "back.in"}, "-=.1")
     tween.to("#subheadline2_container", .3, {opacity: 0}, "-=.1")

     //PRODUCTS
     tween.to("#f3Product1Headline_container", .3, {opacity: 1, x: 0, ease: "back.out"})
     tween.to("#f3Product1Subheadline_container", .3, {opacity: 1, x: 0, ease: "back.out"}, "-=.2")
     tween.to("#f3Product1Img_container", .3, {opacity: 1, scale: 1, ease: "back.out"})
     tween.to("#f3Product1Price_container", .3, {opacity: 1}, "-=.3")
     tween.to("#cta_container", .3, {opacity: 1, y: 0, ease: "back.out"}, "+=1")
     tween.to("#carouselBtn_container", .3, {opacity: 1}, "-=.3")

}