/* Glossario — ricerca live dei termini (condiviso IT/EN, usato anche in Storia) */
(function () {
    'use strict';

    function initCerca() {
        var cerca = document.getElementById('cerca-glossario');
        if (!cerca) return;
        var termini = document.querySelectorAll('.glossario-termo');
        cerca.addEventListener('input', function () {
            var q = cerca.value.trim().toLowerCase();
            termini.forEach(function (t) {
                t.style.display = t.innerText.toLowerCase().indexOf(q) !== -1 ? '' : 'none';
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCerca);
    } else {
        initCerca();
    }
})();
