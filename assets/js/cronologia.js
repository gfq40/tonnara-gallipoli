/* Cronologia — filtro per epoche (condiviso IT/EN) */
(function () {
    'use strict';

    function initFiltri() {
        var chips = document.querySelectorAll('.filtro-chip');
        var items = document.querySelectorAll('.timeline-item');
        if (!chips.length) return;
        chips.forEach(function (chip) {
            chip.addEventListener('click', function () {
                var era = chip.getAttribute('data-era');
                chips.forEach(function (c) {
                    var on = c === chip;
                    c.classList.toggle('filtro-attivo', on);
                    c.setAttribute('aria-pressed', String(on));
                });
                items.forEach(function (item) {
                    var show = era === 'tutte' || item.getAttribute('data-era') === era;
                    item.style.display = show ? '' : 'none';
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
