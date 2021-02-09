window.onload = function() {
    document.body.classList.add('loaded');
    document.getElementById('big-logo').classList.add("active")
    document.getElementById('text-loader').classList.add("active")
}


window.addEventListener("keypress", function(e) {
    if (e.keyCode !== 13) return;

    document.getElementById('loader').style.opacity = '0';
});




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