# Museo Multimediale della Tonnara di Gallipoli

Sito vetrina statico bilingue (IT/EN) del Museo Multimediale della Tonnara di Gallipoli: memoria storica, cartografia storica, archivio fotografico e sezione studioso della tonnara di Gallipoli (Salento, Puglia).

Bilingual (IT/EN) static showcase website of the Multimedia Museum of the Gallipoli Tuna Fishery: historical memory, historical cartography, photographic archive and a scholars' section on the Gallipoli tonnara (Salento, Apulia).

- **Demo live / Live demo**: https://gfq40.github.io/tonnara-gallipoli/
- **Lingue / Languages**: italiano · english

## Funzionalità / Features

- **30 pagine** bilingue con `hreflang` IT/EN, layout condiviso e switch lingua (senza framework JS)
- **Cartografia storica**: 10 carte del *Kitab-ı Bahriye* di Piri Reis (Walters Art Museum, W.658, CC0) in WebP con lightbox
- **Archivio fotografico**: galleria Tricarico (1904–1909) con filtri, paginazione "Carica altre foto" e lightbox
- **Inventario d'archivio**: Libro Rosso I/II, fascicoli "Tonnara Comunale", Verbale 1833 con PDF scaricabili
- **Sezione studioso**: cronologia con fonti, glossario con ricerca live e permalink, bibliografia, formati di citazione Chicago/APA
- **Dati strutturati**: JSON-LD Schema.org iniettato dinamicamente su tutte le pagine
- **Dati aperti**: catalogo machine-readable `data/catalogo.json` (CC0) delle carte Piri Reis
- **Accessibilità**: HTML semantico, `alt`/`aria-label`, focus visibile, menu mobile accessibile
- **Performance**: immagini WebP (~1600px), lazy loading, SEO (sitemap, canonical, `og:image`)

## Stack

- HTML + [Tailwind CSS](https://tailwindcss.com/) 3.4 (utility in `src/input.css`, compilate in `assets/css/tailwind.css`)
- JavaScript vanilla: `assets/js/layout.js` (layout + i18n + JSON-LD) e script di pagina condivisi IT/EN
- Nessun framework JS, nessun build step oltre a Tailwind

## Struttura del progetto / Project structure

```
├── *.html, *-en.html          # 30 pagine IT/EN
├── assets/
│   ├── css/tailwind.css       # CSS compilato
│   ├── js/                    # layout.js + script di pagina
│   └── img/                   # WebP (archivio, mappe, storia, tonno, partner)
├── data/catalogo.json         # Catalogo machine-readable CC0 (Piri Reis)
├── pdf/                       # 23 PDF scaricabili (fonti primarie e bibliografia)
├── src/input.css              # Sorgente Tailwind
├── tailwind.config.js         # Palette e font custom
└── sitemap.xml                # 30 URL con hreflang it/en/x-default
```

## Avvio in locale / Getting started

```bash
npm install
npm run build     # compila Tailwind in assets/css/tailwind.css
npm run watch     # compilazione in watch durante lo sviluppo
```

Il sito è statico: basta servire la cartella radice (es. `python3 -m http.server 8000`) e aprire `http://localhost:8000`.

## Licenze / Licenses

- **Contenuti originali del sito (testi, design, foto del fondo Tricarico convertite)**: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) — vedi [LICENSE](LICENSE)
- **Carte Piri Reis e `data/catalogo.json`**: CC0 (fonte: Walters Art Museum / Wikimedia Commons)
- **Font**: [Cinzel](https://fonts.google.com/specimen/Cinzel) e [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Google Fonts)

Il sito è un prototipo/vetrina: i form (newsletter, contatti, ricercatori) sono dimostrativi e non inviano dati a server.

## Crediti / Credits

Progetto promosso da Gianfranco Quaranta, Giuseppe Albahara e Luigi Tricarico — Gallipoli, 2024–2026.
