window.onload = function() {
    document.body.classList.add('loaded');
    document.getElementById('big-logo').classList.add("active")
    document.getElementById('text-loader').classList.add("active")
}


window.addEventListener("keypress", function(e) {
    if (e.keyCode !== 13) return;

    document.getElementById('wrapper').classList.add("show");
    document.getElementById('loader').classList.add("hide");
});


document.getElementById('hamburger-icon').addEventListener('click', () => {
    var hamb = document.getElementById('hamburger-icon');
    var menu = document.getElementById('menu');
    var body = document.getElementsByClassName('loaded');
    hamb.classList.toggle('active');
    if (hamb.classList.contains('active')) {
        menu.classList.add('active');
        body.classList.add('ov-hidden');
    } else {
        menu.classList.remove('active');
        body.classList.remove('ov-hidden');
    }
});
// $(this).toggleClass('active');
// if ($(this).hasClass('active')) {
//     $('.mobile-menu').addClass('active');
//     $('html').addClass('ov-hidden');
// } else {
//     $('.mobile-menu').removeClass('active');
//     $('html').removeClass('ov-hidden');
// }



import { ieFix } from './utils/ie-fix';
import { iosVhFix } from './utils/ios-vh-fix';

import { initModals } from './modules/init-modals';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();