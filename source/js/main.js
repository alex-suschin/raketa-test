window.onload = function() {
    document.body.classList.add('loaded');
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