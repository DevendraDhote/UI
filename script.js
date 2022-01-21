// var scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });

var cir = document.querySelector('#cir');

window.addEventListener('mousemove', function (dets) {
    cir.style.left = `${dets.pageX}px`;
    cir.style.top = `${dets.pageY}px`;
})

function forback1anim() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#images",
            pin: true,
            start: "top top",
            scrub: 2,
        }
    });
    tl.to('.center', {
        width: '100%',
        duration: 2,
        // ease: Expo.easeInOut
    }, '-1.5')
    tl.to('#l1', {
        left: '-20%',
        opacity: 0,
        duration: 2
    }, "-0.04")
    tl.to('#l2', {
        right: '-20%',
        opacity: 0,
        delay: 0.1,
        duration: 2
    }, '-0.1')
    tl.to('#m2', {
        left: '-40%',
        opacity: 0,
        delay: 0.2,
        duration: 2
    }, '-0.1')
    tl.to('#m1', {
        right: '-40%',
        opacity: 0,
        delay: 0.2,
        duration: 2
    }, '-0.1')


    // textillate------------------------------

    $('#back1 h1').textillate({
        selector: '.texts',
        loop: false,
        minDisplayTime: 2000,
        initialDelay: 0,
        autoStart: true,
        inEffects: [],
        in: {
            effect: 'fadeInUp',
            delayScale: 1,
            delay: 30,
            sync: false,
            shuffle: false,
            reverse: false,
            callback: function () { }
        },
        type: 'char'
    });
}

forback1anim();

function forback2anim() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#back2",
            start: "top 40%",
            // markers: true,
        }
    });
    tl2
        .to('#back2 h1', {
            opacity: 1,
            duration: 1.5,
            onStart: function () {
                $('#back2 h1').textillate({
                    selector: '.texts',
                    satrt: "top 40%",
                    loop: false,
                    start: "top 40%",
                    minDisplayTime: 2000,
                    initialDelay: 0,
                    autoStart: true,
                    in: {
                        effect: 'fadeInUp',
                        delayScale: 1,
                        delay: 30,
                        sync: false,
                        shuffle: false,
                        reverse: false,
                    },
                    type: 'char'
                });
            }
        }, 'ab')
        .to('#back2 h2', {
            opacity: 1,
            duration: 1,
            onStart: function () {
                $('#back2 h2').textillate({
                    selector: '.texts',
                    satrt: "top 40%",
                    loop: false,
                    start: "top 40%",
                    minDisplayTime: 2000,
                    initialDelay: 0,
                    autoStart: true,
                    in: {
                        effect: 'fadeInUp',
                        delayScale: 1,
                        delay: 30,
                        sync: false,
                        shuffle: false,
                        reverse: false,
                    },
                    type: 'char'
                });
            }
        }, 'ab')
        .to('#back2 #line', {
            opacity: 1,
            width: '100%',
            duration: 1.5,
            ease: Expo.easeInOut
        }, 'ab')

    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '#back2 #line',
            start: "top 40%",
            // markers : true
        }
    })

    tl3
        .to('#back2 #left h4', {
            opacity: 1,
            duration: 2,
            onStart: function () {
                $('#back2  h4').textillate({
                    selector: '.texts',
                    satrt: "top 40%",
                    loop: false,
                    start: "top 40%",
                    minDisplayTime: 2000,
                    initialDelay: 0,
                    autoStart: true,
                    in: {
                        effect: 'fadeInUp',
                        delayScale: 1,
                        delay: 20,
                        sync: false,
                        shuffle: false,
                        reverse: false,
                    },
                    type: 'word'
                });
            }
        }, 'sath')
        .to('#image img', {
            opacity: 1,
            duration: 1.2,
            scale: 1,
        }, 'sath')

    tl3.to('#back2 #left p', {
        opacity: 1,
        duration: 1,
        onStart: function () {
            $('#back2  p').textillate({
                selector: '.texts',
                satrt: "top 40%",
                loop: false,
                start: "top 40%",
                minDisplayTime: 2000,
                initialDelay: 0,
                autoStart: true,
                in: {
                    effect: 'fadeInUp',
                    delayScale: 1,
                    delay: 20,
                    sync: false,
                    shuffle: false,
                    reverse: false,
                },
                type: 'word'
            });
        }
    })
}

forback2anim();

function forback3anim() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: '#back3',
            start: 'top 60%',
            // markers : true
        }
    });

    tl4
        .to('#back3 #pic', {
            opacity: 1,
            duration: 1,
            scale: 1
        }, 'ek')
        .to('#back3 #pic img', {
            scale: 1,
            duration: 1,
            ease: Expo.easeInOut
        }, 'ek')
        .to('#back3 .same', {
            opacity: 1,
            stagger: 0.25,
            duration: 1,
            ease: Expo.easeInOut
        }, 'ek')
}

forback3anim();

function forback4anim() {
    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: "#back4",
            start: "top 40%",
            markers: true,
        }
    });

    tl5.to($("#back4"), 1.5,
        {
            css: { borderRadius: "0px" },
        });
}

// forback4anim()  ; 