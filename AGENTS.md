# Linee guida del repository

## Stato attuale

Sito vetrina statico bilingue (IT/EN) del Museo Multimediale della Tonnara di Gallipoli.

- HTML + Tailwind CSS 3.4 (utility in `src/input.css` compilate in `assets/css/tailwind.css`); nessun framework JS e nessun build step oltre a Tailwind.
- Layout condiviso (skip-link, navbar, footer, switch lingua) generato da `assets/js/layout.js` tramite il dizionario i18n `T` e la funzione `langHref()`; ogni pagina include `<script src="assets/js/layout.js">` prima di `</body>`.
- Ogni pagina esiste in coppia IT/EN (`nome.html` / `nome-en.html`): tenere le due versioni allineate. Le pagine `-en.html` non devono contenere testo italiano, tranne termini culturali intenzionali (Rais, mattanza, tonnarotti, cialoma, titoli di documenti storici, nomi di file PDF).
- La Hall of Fame usa descrittori generici ("Un discendente di tonnarotti", "Una famiglia di Gallipoli"): non introdurre nomi fittizi.
- Pubblicazione: workflow `.github/workflows/pages.yml` (sorgente Pages = GitHub Actions) che copia in `_site/` solo i file del sito (*.html, assets, data, museo, pdf, sitemap, robots, CNAME, LICENSE). Nuove cartelle pubbliche vanno aggiunte lì.
- Sito pubblicato su GitHub Pages con dominio `www.tonnaragallipoli.it` (file `CNAME`, DNS su Register.it). Contatto: `info@tonnaragallipoli.it` (footer, privacy). Titolare privacy: Gianfranco Quaranta.
- Form funzionanti via Web3Forms (`assets/js/form-demo.js`, costante `ACCESS_KEY`, piano gratuito senza allegati): newsletter (`index`), segnalazione e ricercatori (`partecipa`). Ogni campo da inviare deve avere `name`; il campo honeypot `website` non viene inviato.
- La Borsa di Studio "Idee per un Mare Pulito" in `ecologia`/`ecologia-en` è un'iniziativa in preparazione: nessun form, solo invito a scrivere a info@.
- Sezione "Dati Aperti" in `fonti.html`/`fonti-en.html` (link a `data/catalogo.json`).
- JSON-LD Schema.org iniettato da `layout.js` su tutte le pagine (WebSite/AboutPage/CollectionPage/Article/ItemList/ContactPage a seconda della pagina), generato dinamicamente dal DOM (ItemList del glossario, CollectionPage di archivio).

## Comandi

- `npm run build` — compila Tailwind in `assets/css/tailwind.css` (minificato)
- `npm run watch` — compilazione in watch durante lo sviluppo
- `npm test` — non configurato; il sito è statico senza test

## Struttura del progetto

- Root: `index`, `storia`, `tonno`, `ecologia`, `museo`, `archivio`, `hall-of-fame`, `stampa`, `partecipa`, `crediti`, `ringraziamenti`, `privacy`, `404` + sezione studioso: `cronologia`, `glossario`, `fonti`, `citare` (+ versioni `-en`; totale 32 pagine in sitemap)
- `assets/js/layout.js` — layout condiviso + i18n + iniezione JSON-LD; script di pagina condivisi IT/EN (niente più inline JS duplicato): `archivio.js` (lightbox, trascrizione, filtri), `storia.js` (modali), `glossario.js` (ricerca live), `cronologia.js` (filtro epoche), `form-demo.js` (newsletter e form dimostrativi); `assets/js/gallery-foto-tricarico.js` — galleria Tricarico bilingue (card come `<article role="button" tabindex="0">` per accessibilità)
- `assets/img/` — `archivio/` (galleria WebP in `foto_tricarico/`), `mappe/` (incl. `mappe/piri_reis/`, 10 carte WebP q88), `partner/`, `storia/`, `tonno/`; ~34.5 MB totali (prima ~230 MB)
- `data/catalogo.json` — catalogo machine-readable (CC0) delle 10 carte Piri Reis con shelf-mark W.658, folio, permalink al Walters Art Museum; linkato da `fonti`/`fonti-en` (sezione "Dati Aperti") e `partecipa`/`partecipa-en` (sezione "Open Archive")
- Cartografia storica in `archivio.html`/`archivio-en.html`: sezione `data-tipo="documents-maps"` (10 carte del Kitab-ı Bahriye di Piri Reis, manoscritto W.658 del Walters Art Museum, CC0), card con `role="button"` + `openLightbox`, lazy loading; il chip "Documenti & Mappe" (`data-tipo="documents"`) la include tramite `t.indexOf('documents') === 0`. I `data-tipo` sono unificati (language-neutral: `photos`, `documents`, `documents-maps`, `documents-inventory`, `documents-pdf`, `audio`) sulle due versioni; sezioni con `id="galleria"` e `id="cartografia"` (anchor usati da `fonti`/`fonti-en`).
- Inventario d'archivio in `archivio.html`/`archivio-en.html`: sezione `data-tipo="documents-inventory"` (tabella: Libro Rosso I/II, Fascicoli "Tonnara Comunale", Verbale 1833 con link PDF) — ricade sotto il chip "Documenti & Mappe".
- Le immagini servite dal sito sono in WebP (~1600px lato lungo, quality 82/85/88), eccetto: `mattanza-1904.jpg`, `pesca-tonno-1782.jpg`, `vascelli-mare.jpg` (il WebP risultava più grande del JPEG), `hero-mare-1920.jpg` (hero), `partner/caroli-hotels.png` e `comune-gallipoli-stemma.svg` (loghi).
- `pdf/` — documenti scaricabili (23 PDF, tutti linkati: fonti primarie in `archivio`/`storia`/`museo`/`tonno`, bibliografia completa in `fonti`/`fonti-en`); `sitemap.xml` elenca le 30 pagine IT/EN (coppie con `hreflang` it/en/x-default)
- `foto_tricarico/` (originali JPG della galleria Tricarico), `immagini_gianni/`, `backup-originale/` (originali `museo/*.png` in `backup-originale/museo/`, foto singole convertite in `backup-originale/img-misc/`), `museo/` (concept del museo in WebP, usati da `museo.html`), `pres.pdf` — materiali di backup o non pubblicati

## Convenzioni di codice

- Palette custom (`abisso`, `oltremare`, `sabbia`, `corallo`, `ruggine`, `pietra`) e font (Cinzel per i titoli, Plus Jakarta Sans per il testo) definiti in `tailwind.config.js`.
- HTML semantico e accessibile: `alt`, `aria-label`, `lang`, focus visibile; modali con `closeModal('id')`, lightbox con `closeLightbox()`.
- Stile: classi Tailwind inline, niente CSS custom fuori da `src/input.css`.
- Quando si modifica il testo di una pagina, aggiornare sempre anche la controparte EN (o IT).

## Migliorie completate

- SEO: versioni EN aggiunte alla `sitemap.xml` (con `hreflang`), tag `canonical`/`hreflang` IT/EN su tutte le pagine.
- Performance: lazy loading sistematico delle immagini (archivio, museo, storia, tonno, crediti); formati moderni (WebP) e riduzione peso: galleria Tricarico da 188.6 MB a 27 MB, `museo/` da 32 MB a 0.7 MB, totale `assets/img/` da ~230 MB a ~31 MB.
- Galleria: paginazione "Carica altre foto" (batch da 12) verificata in browser, lightbox funzionante con le immagini WebP.
- Cartografia: aggiunta sezione "Cartografia Storica" (IT/EN) con 10 carte di Piri Reis (Kitab-ı Bahriye, W.658, CC0) da Wikimedia Commons, convertite in WebP q88 (~1600px, 3.5 MB totali) in `assets/img/mappe/piri_reis/`; verificata in browser la visibilità con il filtro "Documenti & Mappe", il lightbox e il caricamento delle immagini.
- Responsive: verificato su 4 viewport (320/375/768/1280), nessun overflow orizzontale; corretti `aria-expanded` del menu mobile e `langHref()` (prima generava `index-en-en.html` sulle pagine EN).
- Sezione studioso: `cronologia`/`cronologia-en` (timeline con fonti e filtro per epoche), `glossario`/`glossario-en` (10 termini con etimologia e permalink `#rais` etc.), `fonti`/`fonti-en` (fonti primarie, cartografiche, fotografiche + bibliografia reale), `citare`/`citare-en` (formati Chicago/APA). Nav a 8 voci e footer a 10 link aggiornati; sitemap a 32 URL; link incrociati da `storia`/`storia-en`.
- Ecologia: pagina `ecologia`/`ecologia-en` (il mare che cambia: riscaldamento del Mediterraneo, rotte del tonno rosso con proiezioni AZTI/ICCAT, inquinamento e SDG 14) con la Borsa di Studio dimostrativa "Idee per un Mare Pulito" (form `#form-concorso` gestito da `form-demo.js`, due categorie, nota di trasparenza) e il museo come punto di partenza di iniziative (Giornata del Mare, laboratori scolastici, rete delle tonnare). Link in nav/footer/sitemap e da `tonno`/`tonno-en`.
- Inventario d'archivio + note di provenienza in `archivio`/`archivio-en` (fotografie, cartografia, documenti non digitalizzati) con filtro "Documenti & Mappe" verificato in browser.
- Dati strutturati e aperti: JSON-LD iniettato da `layout.js` su tutte le pagine (tipi per pagina; ItemList del glossario e CollectionPage dell'archivio generati dal DOM); `data/catalogo.json` CC0 (10 carte Piri Reis con permalink W.658); sezione "Dati Aperti" in `fonti`/`fonti-en` e "Open Archive" con form ricercatori dimostrativo in `partecipa`/`partecipa-en`.
- Refactor pulizia: inline JS duplicato IT/EN centralizzato in `assets/js/{archivio,storia,glossario,cronologia,form-demo}.js`; `data-tipo` unificati language-neutral su archivio IT/EN; aggiunti `id="galleria"`/`id="cartografia"` in archivio (anchor usati da `fonti`); `og:image` su tutte le pagine (tranne 404); JSON-LD CollectionPage corretto e funzionante anche sulle pagine EN (selettori language-neutral, canonical index-en coerente, `dateModified` dinamico); galleria Tricarico bilingue; corretta icona hamburger del menu mobile, aria-label del menu e dello switch lingua localizzati, anno del footer dinamico; `footerLink()` rimosso; immagini non referenziate spostate in `backup-originale/img-misc/`; `.gitignore` esteso a `foto_tricarico/`, `backup-originale/`, `immagini_gianni/`, `/pres.pdf`.
- Bibliografia: i 23 PDF in `pdf/` sono tutti linkati; i 18 ex-orfani (articoli, monografie e materiali documentari identificati tramite `pdfinfo`/`pdftotext`) sono citati nella sezione "Contributi digitali in PDF" di `fonti`/`fonti-en` (link con `%20` per i nomi con spazi: `Bombace Tonno 1.pdf`, `Tonnara - Wikipedia.pdf`); `pdf/pres.pdf` è versionato, il duplicato in root no.
