/* Archivio — lightbox, trascrizione e filtri (condiviso IT/EN) */
(function () {
    'use strict';

    var page = (window.location.pathname.split('/').pop() || 'archivio.html').toLowerCase();
    var isEnglish = page.indexOf('-en.html') > -1;

    var L = {
        leggiTrascrizione: isEnglish ? 'Read Transcription' : 'Leggi Trascrizione',
        mostraOriginale: isEnglish ? 'Show Original' : 'Mostra Originale'
    };

    window.openLightbox = function (imgSrc, title, desc) {
        var box = document.getElementById('lightbox');
        if (!box) return;
        document.getElementById('lightbox-img').src = imgSrc;
        document.getElementById('lightbox-title').innerText = title;
        document.getElementById('lightbox-desc').innerText = desc;
        box.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    window.closeLightbox = function () {
        var box = document.getElementById('lightbox');
        if (!box) return;
        box.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    window.toggleTrascrizione = function () {
        var orig = document.getElementById('doc-originale');
        var trasc = document.getElementById('doc-trascrizione');
        var btn = document.getElementById('btn-trascrizione');
        if (!orig || !trasc || !btn) return;
        if (trasc.classList.contains('hidden')) {
            trasc.classList.remove('hidden');
            orig.classList.add('hidden');
            btn.innerText = L.mostraOriginale;
        } else {
            trasc.classList.add('hidden');
            orig.classList.remove('hidden');
            btn.innerText = L.leggiTrascrizione;
        }
    };

    function initFiltri() {
        var chips = document.querySelectorAll('.filtro-chip');
        var sezioni = document.querySelectorAll('section[data-tipo]');
        if (!chips.length) return;
        chips.forEach(function (chip) {
            chip.addEventListener('click', function () {
                var tipo = chip.getAttribute('data-tipo');
                chips.forEach(function (c) {
                    var on = c === chip;
                    c.classList.toggle('filtro-attivo', on);
                    c.setAttribute('aria-pressed', String(on));
                });
                sezioni.forEach(function (sec) {
                    var t = sec.getAttribute('data-tipo');
                    var matches = t === tipo || (tipo === 'documents' && t.indexOf('documents') === 0);
                    sec.style.display = (tipo === 'all' || matches) ? '' : 'none';
                });
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFiltri);
    } else {
        initFiltri();
    }
})();
