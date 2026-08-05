/* Form dimostrativi (newsletter, segnalazioni, ricercatori) — nessun invio a server */
(function () {
    'use strict';

    function initNewsletter() {
        var form = document.getElementById('newsletter-form');
        var ok = document.getElementById('newsletter-ok');
        if (!form || !ok) return;
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var email = document.getElementById('newsletter-email');
            if (email && email.value && email.checkValidity()) {
                form.classList.add('hidden');
                var note = document.getElementById('newsletter-note');
                if (note) note.classList.add('hidden');
                ok.classList.remove('hidden');
            } else if (email) {
                email.reportValidity();
            }
        });
    }

    function initSegnalazione() {
        var form = document.getElementById('form-segnalazione');
        var ok = document.getElementById('segnalazione-ok');
        if (!form || !ok) return;
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var web = document.getElementById('campo-web');
            if (web && web.value) return;
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            form.classList.add('hidden');
            ok.classList.remove('hidden');
        });
    }

    function initRicercatori() {
        var form = document.getElementById('form-ricercatori');
        var ok = document.getElementById('ricercatori-ok');
        if (!form || !ok) return;
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var web = document.getElementById('campo-web-r');
            if (web && web.value) return;
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            form.classList.add('hidden');
            ok.classList.remove('hidden');
        });
    }

    function init() {
        initNewsletter();
        initSegnalazione();
        initRicercatori();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
