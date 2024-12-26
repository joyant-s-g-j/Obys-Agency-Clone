function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

function loadingAnimation() {
    var tl = gsap.timeline()
    tl.from(".line h1", {
        y:150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5 
    })
    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function() {
            var h5Timer = document.querySelector("#line1-part1 h5")
            var grow = 0
            setInterval(function(){
                if(grow < 100) {
                    h5Timer.innerHTML = grow++
                } else{
                    h5Timer.innerHTML = grow
                }
                
            }, 35)
        },
    });
    tl.to(".line h2", {
        animationName: "anime",
        opacity: 1
    })
    tl.to("#loader", {
        opacity: 0,
        duration: 0.4,
        delay: 0,
    });
    tl.from("#page1", {
        delay: 0.2,
        y: 1600,
        opacity: 1,
        duration: 0.5,
        ease: Power4
    })
    tl.to("#loader", {
        display: "none"
    })
    tl.from("#nav", {
        opacity: 0
    })
    tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
        y: 140,
        stagger: 0.2
    });
    tl.from("#hero1, #page2", {
        opacity: 0,
    }, "-=1.2");
}
function cursorAnimation() {
    document.addEventListener("mousemove", function(dets){
        gsap.to("#crsr", {
            left: dets.x,
            top: dets.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
    var videoContainer = document.querySelector("#video-container")
    var video = document.querySelector("#video-container video")
    var videoImage = document.querySelector("#video-container img")
    var flag = 0
    videoContainer.addEventListener("mouseenter", function(){
        videoContainer.addEventListener("mousemove", function(dets){
            gsap.to("#crsr", {
                opacity: 0
              });
            gsap.to("#video-cursor", {
                left:dets.x - 500,
                y:dets.y -130
            })
        })
    })
    videoContainer.addEventListener("mouseleave", function(){
        gsap.to("#crsr", {
            opacity: 1
        })
        gsap.to("#video-cursor", {
            left: "70%",
            top: "-15%"
        })
    })
    videoContainer.addEventListener("click", function() {
       if (flag == 0) {
        video.play()
        videoImage.style.opacity = 0
        video.style.opacity = 1
        document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-mini-fill"></i>`
        gsap.to("#video-cursor", {
            scale: 0.5
        })
        flag = 1
       } else {
        video.pause()
        videoImage.style.opacity = 1
        video.style.opacity = 0
        document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-mini-fill"></i>`
        gsap.to("#video-cursor", {
            scale: 1
        })
        flag = 0
       }
    })
}

function sheryAnimation() {
    Shery.imageEffect(".image-div", {
        style:5,
        gooey:true,
        // config: {"a":{"value":2,"range":[0,30]},"b":{"value":0.7501875468867217,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749429015005},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    })
}

function flagAnimation() {
    document.addEventListener("mousemove", function(dets) {
        gsap.to("#flag",{
            x:dets.x,
            y:dets.y
        })
    })
    document.querySelector("#hero3").addEventListener("mouseenter", function() {
        gsap.to("#crsr", {
            opacity: 0
        })
        gsap.to("#flag", {
            opacity: 1
        })
    })
    document.querySelector("#hero3").addEventListener("mouseleave", function() {
        gsap.to("#crsr", {
            opacity: 1
        })
        gsap.to("#flag", {
            opacity: 0
        })
    })
}
function footerAnimation() {

    var clutter = ""
    var clutter2 = ""
    document.querySelector("#footer h1").textContent.split("").forEach(function (elem) {
      clutter += `<span>${elem}</span>`
    })
    document.querySelector("#footer h1").innerHTML = clutter
    document.querySelector("#footer h2").textContent.split("").forEach(function (elem) {
      clutter2 += `<span>${elem}</span>`
    })
    document.querySelector("#footer h2").innerHTML = clutter2
  
  
    document.querySelector("#footer-text").addEventListener("mouseenter", function () {
      gsap.to("#footer h1 span", {
        opacity: 0,
        stagger: 0.05
      })
      gsap.to("#footer h2 span", {
        delay: 0.35,
        opacity: 1,
        stagger: 0.1
      })
    })
    document.querySelector("#footer-text").addEventListener("mouseleave", function () {
      gsap.to("#footer h1 span", {
        opacity: 1,
        stagger: 0.1,
        delay: 0.35,
  
      })
      gsap.to("#footer h2 span", {
        opacity: 0,
        stagger: 0.05
      })
    })
  }


loadingAnimation()
cursorAnimation()
locomotiveAnimation()
sheryAnimation()
flagAnimation()
footerAnimation()