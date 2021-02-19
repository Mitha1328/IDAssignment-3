// Lottie scroll effect
var animData = {
    container: document.getElementById('lottie-three'),
    path: 'https://assets2.lottiefiles.com/temp/lf20_Dyby8d.json',
    
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "animScroll",
    }, animScroll, tl;


    var animScroll = bodymovin.loadAnimation(animData)


    animScroll.addEventListener('DOMLoaded', function () {
    tl = new TimelineMax({repeat: 0})
    tl.to({frame: 0}, 1, {
        frame: animScroll.totalFrames-1,
        onUpdate: function() {
        animScroll.goToAndStop(Math.round(this.target.frame), true)
        },
        Ease:Linear.easeNone
    })
    
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
    triggerElement: ".env-three",
    offset: 300,
    duration: 3000 }).setTween(tl).setPin("#lottie-three").addTo(controller);

    })