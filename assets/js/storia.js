/* Storia — modali delle epoche (condiviso IT/EN) */
(function () {
    'use strict';

    var page = (window.location.pathname.split('/').pop() || 'storia.html').toLowerCase();
    var isEnglish = page.indexOf('-en.html') > -1;
    var chiudiAria = isEnglish ? 'Close window' : 'Chiudi finestra';

    window.openModal = function (modalId) {
        var el = document.getElementById(modalId);
        if (!el) return;
        el.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        var closeBtn = el.querySelector('button[aria-label="' + chiudiAria + '"]');
        if (closeBtn) closeBtn.focus();
    };

    window.closeModal = function (modalId) {
        var el = document.getElementById(modalId);
        if (!el) return;
        el.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };
})();
