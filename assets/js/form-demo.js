/* Form del sito (newsletter, segnalazioni, ricercatori): invio tramite Web3Forms a info@tonnaragallipoli.it */
(function () {
    'use strict';

    var ACCESS_KEY = '__WEB3FORMS_KEY__';
    var ENDPOINT = 'https://api.web3forms.com/submit';
    var EN = (document.documentElement.lang || '').indexOf('en') === 0;

    var MSG = {
        sending: EN ? 'Sending…' : 'Invio in corso…',
        error: EN
            ? 'Sending failed. Please try again or write to info@tonnaragallipoli.it.'
            : 'Invio non riuscito. Riprova oppure scrivi a info@tonnaragallipoli.it.'
    };

    function showError(form, text) {
        var box = form.querySelector('.form-error');
        if (!box) {
            box = document.createElement('p');
            box.className = 'form-error text-sm text-corallo mt-3';
            box.setAttribute('role', 'alert');
            form.appendChild(box);
        }
        box.textContent = text;
    }

    function send(form, subject, onOk) {
        var button = form.querySelector('button[type="submit"]');
        var label = button ? button.textContent : '';
        if (button) { button.disabled = true; button.textContent = MSG.sending; }

        var data = new FormData(form);
        data.delete('website'); // campo anti-spam
        data.append('access_key', ACCESS_KEY);
        data.append('subject', subject);
        data.append('from_name', 'Sito Tonnara di Gallipoli');
        var email = form.querySelector('input[type="email"]');
        if (email && email.value) data.append('replyto', email.value);
        data.append('lingua', EN ? 'en' : 'it');

        fetch(ENDPOINT, { method: 'POST', headers: { Accept: 'application/json' }, body: data })
            .then(function (r) { return r.json(); })
            .then(function (res) {
                if (!res || !res.success) throw new Error('fail');
                onOk();
            })
            .catch(function () {
                showError(form, MSG.error);
                if (button) { button.disabled = false; button.textContent = label; }
            });
    }

    function bind(formId, okId, honeypotId, subject, beforeOk) {
        var form = document.getElementById(formId);
        var ok = document.getElementById(okId);
        if (!form || !ok) return;
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var hp = honeypotId && document.getElementById(honeypotId);
            if (hp && hp.value) return;
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            send(form, subject, function () {
                form.classList.add('hidden');
                if (beforeOk) beforeOk();
                ok.classList.remove('hidden');
            });
        });
    }

    function init() {
        bind('newsletter-form', 'newsletter-ok', null,
            EN ? 'Newsletter subscription' : 'Iscrizione newsletter',
            function () {
                var note = document.getElementById('newsletter-note');
                if (note) note.classList.add('hidden');
            });
        bind('form-segnalazione', 'segnalazione-ok', 'campo-web',
            EN ? 'New material report' : 'Nuova segnalazione di materiale');
        bind('form-ricercatori', 'ricercatori-ok', 'campo-web-r',
            EN ? 'Researcher access request' : 'Richiesta accesso ricercatori');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
