import anime from '../../node_modules/animejs/lib/anime.es.js';

anime({
    targets: '.nav-movile',
    keyframes: [
        {opacity: .5},
        {translateY: -10},
        {opacity: 1},
        {translateY: 0}
    ],
    duration: 3000,
    easing: 'easeInOutSine'
});