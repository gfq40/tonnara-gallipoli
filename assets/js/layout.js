/* =========================================================
   Tonnara di Gallipoli — Layout condiviso
   Header, navigazione, banner patrocini e footer sono
   generati qui da un'unica sorgente per tutte le pagine.
   ========================================================= */

(function () {
    'use strict';

    var currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    var isEnglish = currentPage.indexOf('-en.html') > -1;

    var NAV_ITEMS = [
        { href: 'index.html', hrefEn: 'index-en.html', label: 'Home', labelEn: 'Home', page: 'index.html' },
        { href: 'storia.html', hrefEn: 'storia-en.html', label: 'La Storia', labelEn: 'History', page: 'storia.html' },
        { href: 'tonno.html', hrefEn: 'tonno-en.html', label: 'Il Tonno Rosso', labelEn: 'The Bluefin Tuna', page: 'tonno.html' },
        { href: 'museo.html', hrefEn: 'museo-en.html', label: 'Il Museo', labelEn: 'The Museum', page: 'museo.html' },
        { href: 'archivio.html', hrefEn: 'archivio-en.html', label: 'Archivio', labelEn: 'Archive', page: 'archivio.html' },
        { href: 'cronologia.html', hrefEn: 'cronologia-en.html', label: 'Cronologia', labelEn: 'Timeline', page: 'cronologia.html' },
        { href: 'hall-of-fame.html', hrefEn: 'hall-of-fame-en.html', label: 'Hall of Fame', labelEn: 'Hall of Fame', page: 'hall-of-fame.html' }
    ];

    function itemHref(item) {
        return isEnglish && item.hrefEn ? item.hrefEn : item.href;
    }

    function itemLabel(item) {
        return isEnglish && item.labelEn ? item.labelEn : item.label;
    }

    function isActive(item) {
        return currentPage === item.page || currentPage === item.hrefEn;
    }

    function langHref(toEn) {
        if (toEn) {
            return currentPage.indexOf('-en.html') > -1 ? currentPage : currentPage.replace('.html', '-en.html');
        }
        return currentPage.indexOf('-en.html') > -1 ? currentPage.replace('-en.html', '.html') : currentPage;
    }

    var T = {
        skipLink: isEnglish ? 'Skip to main content' : 'Salta al contenuto',
        languageBadgeTitle: isEnglish ? 'Site currently available in English' : 'Sito attualmente disponibile in italiano',
        participate: isEnglish ? 'Get Involved' : 'Partecipa',
        participateMobile: isEnglish ? 'Get Involved in the Project' : 'Partecipa al Progetto',
        languageLabel: isEnglish ? 'Language: ' : 'Lingua: ',
        menuOpen: isEnglish ? 'Open navigation menu' : 'Apri il menu di navigazione',
        switchToIt: isEnglish ? 'Switch to Italian' : "Passa all'italiano",
        switchToEn: isEnglish ? 'Switch to English' : "Passa all'inglese",
        patronage: isEnglish ? 'With the patronage and collaboration of' : 'Con il patrocinio e la collaborazione di',
        footerTagline: isEnglish ? 'A cultural heritage, historical memory and eco-museum project.' : 'Un progetto di valorizzazione culturale, memoria storica ed ecomuseo.',
        rights: isEnglish ? 'All rights reserved.' : 'Tutti i diritti riservati.',
        footerLinks: [
            { href: 'cronologia.html', hrefEn: 'cronologia-en.html', label: 'Cronologia', labelEn: 'Timeline' },
            { href: 'glossario.html', hrefEn: 'glossario-en.html', label: 'Glossario', labelEn: 'Glossary' },
            { href: 'fonti.html', hrefEn: 'fonti-en.html', label: 'Fonti & Bibliografia', labelEn: 'Sources & Bibliography' },
            { href: 'citare.html', hrefEn: 'citare-en.html', label: 'Come Citare', labelEn: 'How to Cite' },
            { href: 'privacy.html', hrefEn: 'privacy-en.html', label: 'Privacy Policy', labelEn: 'Privacy Policy' },
            { href: 'crediti.html', hrefEn: 'crediti-en.html', label: 'Crediti & Partner', labelEn: 'Credits & Partners' },
            { href: 'ringraziamenti.html', hrefEn: 'ringraziamenti-en.html', label: 'Ringraziamenti', labelEn: 'Acknowledgements' },
            { href: 'stampa.html', hrefEn: 'stampa-en.html', label: 'Area Stampa', labelEn: 'Press Area' },
            { href: 'partecipa.html', hrefEn: 'partecipa-en.html', label: 'Contatti', labelEn: 'Contact' }
        ]
    };

    function desktopNav() {
        return NAV_ITEMS.map(function (item) {
            var cls = isActive(item)
                ? 'text-corallo font-semibold transition duration-200'
                : 'hover:text-corallo text-sabbia/90 transition duration-200';
            return '<a href="' + itemHref(item) + '" class="' + cls + '">' + itemLabel(item) + '</a>';
        }).join('');
    }

    function mobileNav() {
        return NAV_ITEMS.map(function (item) {
            var cls = isActive(item)
                ? 'block py-2 text-corallo font-semibold'
                : 'block py-2 text-sabbia hover:text-corallo';
            return '<a href="' + itemHref(item) + '" class="' + cls + '">' + itemLabel(item) + '</a>';
        }).join('');
    }

    function headerHTML() {
        return [
            '<a href="#contenuto" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] bg-corallo text-white px-4 py-2 rounded-lg text-sm font-semibold" aria-label="' + T.skipLink + '">',
            T.skipLink,
            '</a>',
            '<header class="fixed top-0 w-full z-50 bg-abisso/95 backdrop-blur-md border-b border-sabbia/10">',
            '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">',
            '<div class="flex items-center justify-between h-20">',
            '<a href="' + (isEnglish ? 'index-en.html' : 'index.html') + '" class="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-corallo rounded-lg p-1" aria-label="Tonnara Gallipoli Home Page">',
            '<span class="text-2xl font-serif font-bold tracking-wider text-sabbia">TONNARA <span class="text-corallo">GALLIPOLI</span></span>',
            '</a>',
            '<nav class="hidden lg:flex items-center space-x-6 text-sm font-medium" aria-label="Menu Principale">',
            desktopNav(),
            '<span class="inline-flex items-center border border-sabbia/20 rounded-full px-3 py-1 text-xs font-bold text-corallo bg-abisso" title="' + T.languageBadgeTitle + '">' + (isEnglish ? 'EN' : 'IT') + '</span>',
            '<a href="' + langHref(!isEnglish) + '" class="text-sabbia/80 hover:text-corallo transition">' + (isEnglish ? 'IT' : 'EN') + '</a>',
            '<a href="' + (isEnglish ? 'partecipa-en.html' : 'partecipa.html') + '" class="bg-corallo hover:bg-ruggine text-white px-4 py-2 rounded-lg font-semibold transition duration-200 shadow-md">' + T.participate + '</a>',
            '</nav>',
            '<button id="menu-btn" class="lg:hidden text-sabbia p-2 focus:outline-none focus:ring-2 focus:ring-corallo rounded-lg" aria-label="' + T.menuOpen + '" aria-expanded="false" aria-controls="mobile-menu">',
            '<svg id="menu-icon" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>',
            '</button>',
            '</div>',
            '</div>',
            '<div id="mobile-menu" class="hidden lg:hidden bg-oltremare border-b border-sabbia/10 px-4 pt-2 pb-6 space-y-3">',
            mobileNav(),
            '<div class="flex items-center justify-between py-2 border-t border-sabbia/10 mt-2">',
            '<span class="text-xs text-sabbia/70">' + T.languageLabel + '</span>',
            '<div class="flex items-center gap-2">',
            '<a href="' + langHref(false) + '" class="text-xs font-bold px-2.5 py-1 rounded border ' + (isEnglish ? 'border-sabbia/20 text-sabbia/80' : 'bg-corallo border-corallo text-white') + '" aria-label="' + T.switchToIt + '">IT</a>',
            '<a href="' + langHref(true) + '" class="text-xs font-bold px-2.5 py-1 rounded border ' + (isEnglish ? 'bg-corallo border-corallo text-white' : 'border-sabbia/20 text-sabbia/80') + '" aria-label="' + T.switchToEn + '">EN</a>',
            '</div>',
            '</div>',
            '<a href="' + (isEnglish ? 'partecipa-en.html' : 'partecipa.html') + '" class="block text-center bg-corallo hover:bg-ruggine text-white py-3 rounded-lg font-bold text-base mt-4 shadow-lg">' + T.participateMobile + '</a>',
            '</div>',
            '</header>'
        ].join('\n');
    }

    function partnerBannerHTML() {
        return [
            '<div class="bg-oltremare/30 border-t border-b border-sabbia/10 py-8">',
            '<div class="max-w-7xl mx-auto px-4 text-center">',
            '<p class="text-xs font-semibold text-corallo uppercase tracking-widest mb-4">' + T.patronage + '</p>',
            '<div class="flex items-center justify-center gap-10 sm:gap-16 opacity-90 hover:opacity-100 transition duration-300">',
            '<a href="https://www.comune.gallipoli.le.it/" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition transform" title="Visita il sito del Comune di Gallipoli">',
            '<img src="assets/img/partner/comune-gallipoli-stemma.svg" alt="Stemma Ufficiale Comune di Gallipoli" class="h-12 sm:h-14 object-contain filter drop-shadow">',
            '</a>',
            '<a href="https://www.carolihotels.com/" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition transform" title="Visita il sito di Caroli Hotels">',
            '<img src="assets/img/partner/caroli-hotels.png" alt="Logo Caroli Hotels" class="h-9 sm:h-11 object-contain filter brightness-110">',
            '</a>',
            '</div>',
            '</div>',
            '</div>'
        ].join('\n');
    }

    function footerHTML() {
        return [
            '<footer class="mt-auto bg-abisso border-t border-sabbia/10 py-10 text-sabbia/70 text-sm">',
            '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">',
            '<div class="text-center md:text-left">',
            '<p class="font-serif font-bold text-sabbia text-lg">TONNARA DI GALLIPOLI</p>',
            '<p class="text-xs mt-1">' + T.footerTagline + '</p>',
            '</div>',
            '<div class="flex flex-wrap justify-center gap-6 text-xs">',
            T.footerLinks.map(function (l) {
                return '<a href="' + itemHref(l) + '" class="hover:text-sabbia transition">' + itemLabel(l) + '</a>';
            }).join(''),
            '</div>',
            '<div class="text-xs text-sabbia/60">&copy; ' + new Date().getFullYear() + ' Tonnara di Gallipoli. ' + T.rights + '</div>',
            '</div>',
            '</footer>'
        ].join('\n');
    }

    /* Iniezione layout */
    document.body.insertAdjacentHTML('afterbegin', headerHTML());
    document.body.insertAdjacentHTML('beforeend', partnerBannerHTML() + footerHTML());

    /* Menu mobile */
    var menuBtn = document.getElementById('menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');
    var menuIcon = document.getElementById('menu-icon');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function () {
            var isHidden = mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            menuBtn.setAttribute('aria-expanded', String(isHidden));
            if (menuIcon) {
                var menuPath = menuIcon.querySelector('path');
                if (menuPath) {
                    menuPath.setAttribute('d', isHidden ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16');
                }
            }
        });
        mobileMenu.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') {
                mobileMenu.classList.add('hidden');
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* Chiusura modali / lightbox con ESC o click sul fondo */
    function closeLayer(el) {
        var closeFn = el.getAttribute('data-close');
        if (closeFn && typeof window[closeFn] === 'function') {
            window[closeFn](el.id);
        } else {
            el.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            var open = document.querySelectorAll('.modal-backdrop:not(.hidden)');
            for (var i = 0; i < open.length; i++) {
                closeLayer(open[i]);
            }
        }
    });

    document.addEventListener('click', function (e) {
        var backdrop = e.target.closest('.modal-backdrop');
        if (backdrop && e.target === backdrop) {
            closeLayer(backdrop);
        }
    });

    /* Dati strutturati JSON-LD (Schema.org) — iniettati da un'unica sorgente */
    (function injectJSONLD() {
        var page = currentPage;
        var lang = isEnglish ? 'en' : 'it';
        var base = 'https://www.tonnaradigallipoli.it/';
        var canonical = page === 'index.html' ? base : base + page;
        var pageKey = page.replace(/-en\.html$/, '.html');

        var types = {
            'index.html': 'WebSite', 'storia.html': 'AboutPage', 'tonno.html': 'AboutPage',
            'museo.html': 'AboutPage', 'archivio.html': 'CollectionPage', 'hall-of-fame.html': 'CollectionPage',
            'cronologia.html': 'Article', 'glossario.html': 'ItemList', 'fonti.html': 'AboutPage',
            'citare.html': 'AboutPage', 'stampa.html': 'AboutPage', 'partecipa.html': 'ContactPage',
            'crediti.html': 'AboutPage', 'ringraziamenti.html': 'AboutPage', 'privacy.html': 'WebPage',
            '404.html': 'WebPage'
        };

        function build() {
            var schema = {
                '@context': 'https://schema.org',
                '@type': types[pageKey] || 'WebPage',
                'name': document.title,
                'url': canonical,
                'inLanguage': lang,
                'dateModified': new Date().toISOString().slice(0, 10),
            'isPartOf': {
                '@type': 'WebSite',
                'name': isEnglish ? 'Tonnara di Gallipoli — Multimedia Museum of the Tuna Fishery' : 'Museo Multimediale della Tonnara di Gallipoli',
                'url': base,
                'inLanguage': lang
            },
            'about': {
                '@type': 'Museum',
                'name': 'Tonnara di Gallipoli',
                'description': isEnglish ? 'Multimedia museum, historical memory and eco-museum of the Gallipoli tuna fishery.' : 'Museo multimediale, memoria storica ed ecomuseo della tonnara di Gallipoli.'
            }
        };

        function itemsFrom(selector) {
            var list = [];
            document.querySelectorAll(selector).forEach(function (h) {
                var card = h.closest('div[onclick], article[role="button"]');
                var img = card ? card.querySelector('img') : null;
                var name = h.textContent.trim();
                if (!name) return;
                var item = { '@type': 'CreativeWork', 'name': name };
                if (img && img.getAttribute('src')) item.image = base + img.getAttribute('src');
                list.push(item);
            });
            return list;
        }

        if (types[pageKey] === 'CollectionPage') {
            var parts = itemsFrom('section[data-tipo="documents-maps"] h3, section[data-tipo="photos"] h3');
            if (parts.length) {
                schema.mainEntity = {
                    '@type': 'ItemList',
                    'itemListElement': parts.map(function (p, i) {
                        return { '@type': 'ListItem', 'position': i + 1, 'item': p };
                    })
                };
            }
        } else if (types[pageKey] === 'ItemList') {
            var terms = [];
            document.querySelectorAll('.glossario-termo').forEach(function (card) {
                var name = card.querySelector('.font-serif');
                var def = card.querySelector('p');
                if (!name) return;
                var item = { '@type': 'DefinedTerm', 'name': name.textContent.trim() };
                if (def) item.description = def.textContent.trim();
                terms.push(item);
            });
            if (terms.length) {
                schema.mainEntity = {
                    '@type': 'ItemList',
                    'itemListElement': terms.map(function (t, i) {
                        return { '@type': 'ListItem', 'position': i + 1, 'item': t };
                    })
                };
            }
        }

            var el = document.createElement('script');
            el.type = 'application/ld+json';
            el.textContent = JSON.stringify(schema);
            document.body.appendChild(el);
        }

        if (types[pageKey] === 'CollectionPage') {
            window.addEventListener('load', build);
        } else {
            build();
        }
    })();
})();
