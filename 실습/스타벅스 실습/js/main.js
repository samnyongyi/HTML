const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});
searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


const badgeE1=document.querySelector('header .badges');
window.addEventListener('scroll', function(){
    console.log('scroll!!');
});
window.addEventListener('scroll', _.throttle(
    function(){
        console.log('scroll!!');
        if(window.scrollY >500){
            gsap.to(badgeE1, 0.6,{
                opacity: 0, 
                display: 'none'
            })
        }
        else{
            gsap.to(badgeE1, 0.6,{
                opacity: 1, 
                display: 'block'
            })
        }
    }, 300));
// "to" tween - animate to provided values
gsap.to(".selector", { // selector text, Array, or object
    x: 100, // any properties (not limited to CSS)
    backgroundColor: "red", // camelCase
    duration: 1, // seconds
    delay: 0.5,
    ease: "power2.inOut",
    stagger: 0.1, // stagger start times
    paused: true, // default is false
    overwrite: "auto", // default is false
    repeat: 2, // number of repeats (-1 for infinite)
    repeatDelay: 1, // seconds between repeats
    repeatRefresh: true, // invalidates on each repeat
    yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
    yoyoEase: true, // or ease like "power2"
    immediateRender: false,
    onComplete: () => {
      console.log("finished")
    },
    // other callbacks:
    // onStart, onUpdate, onRepeat, onReverseComplete
  });    

const fadeEls=document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
gsap.to(fadeEl, 1,{
delay: (index+1)*0.7, //0.7 1.4 2.1 2.7 sec
opacity:1
}); 
});