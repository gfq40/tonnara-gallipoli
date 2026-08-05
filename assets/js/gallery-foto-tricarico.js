/* Gallery dinamica per le foto Tricarico in archivio.html */
const tricaricoIsEnglish = (window.location.pathname.split('/').pop() || 'archivio.html').toLowerCase().indexOf('-en.html') > -1;
const tricaricoDesc = tricaricoIsEnglish ? 'Historic photograph and documentation from the Tricarico collection.' : 'Fotografia storica e documentazione dalla collezione Tricarico.';
const tricaricoAriaLabel = tricaricoIsEnglish ? 'Open photo: ' : 'Apri la foto: ';
const tricaricoItems = [
    { src: "assets/img/archivio/foto_tricarico/ANTONIOvallebona.webp", title: "Antoniovallebona" },
    { src: "assets/img/archivio/foto_tricarico/BELVEDERE palazzo Vallebona.webp", title: "Belvedere Palazzo Vallebona" },
    { src: "assets/img/archivio/foto_tricarico/BIANCOnero.webp", title: "Bianconero" },
    { src: "assets/img/archivio/foto_tricarico/BITTA d'ormeggio del patale.webp", title: "Bitta D'Ormeggio Del Patale" },
    { src: "assets/img/archivio/foto_tricarico/Cariscia.webp", title: "Cariscia" },
    { src: "assets/img/archivio/foto_tricarico/Cartolina.webp", title: "Cartolina" },
    { src: "assets/img/archivio/foto_tricarico/DSC_0617.webp", title: "DSC 0617" },
    { src: "assets/img/archivio/foto_tricarico/Disegno Tonnara.webp", title: "Disegno Tonnara" },
    { src: "assets/img/archivio/foto_tricarico/Donato Casalino e la Tonnara 3.webp", title: "Donato Casalino E La Tonnara 3" },
    { src: "assets/img/archivio/foto_tricarico/LA VECCHIA TORRE 1.webp", title: "La Vecchia Torre 1" },
    { src: "assets/img/archivio/foto_tricarico/LA VECCHIA TORRE 2.webp", title: "La Vecchia Torre 2" },
    { src: "assets/img/archivio/foto_tricarico/PALAZZO VALLEBONA con il caratteristico belvedere.webp", title: "Palazzo Vallebona Con Il Caratteristico Belvedere" },
    { src: "assets/img/archivio/foto_tricarico/PAPA natali.webp", title: "Papa Natali" },
    { src: "assets/img/archivio/foto_tricarico/Particolare.webp", title: "Particolare" },
    { src: "assets/img/archivio/foto_tricarico/Pianta Tonnara 18170001.webp", title: "Pianta Tonnara 18170001" },
    { src: "assets/img/archivio/foto_tricarico/TOMMASO PEDONE.webp", title: "Tommaso Pedone" },
    { src: "assets/img/archivio/foto_tricarico/Tonno in primo piano  (fam. Mario Carrozza (balilla)0001.webp", title: "Tonno In Primo Piano (Fam. Mario Carrozza (Balilla)0001" },
    { src: "assets/img/archivio/foto_tricarico/Vincenti 20001.webp", title: "Vincenti 20001" },
    { src: "assets/img/archivio/foto_tricarico/Vincenti0001.webp", title: "Vincenti0001" },
    { src: "assets/img/archivio/foto_tricarico/olio su tela di laura franco.webp", title: "Olio Su Tela Di Laura Franco" },
    { src: "assets/img/archivio/foto_tricarico/pesca.webp", title: "Pesca" },
    { src: "assets/img/archivio/foto_tricarico/tONNARELLA 1.webp", title: "Tonnarella 1" },
    { src: "assets/img/archivio/foto_tricarico/tONNARELLA 2.webp", title: "Tonnarella 2" },
    { src: "assets/img/archivio/foto_tricarico/tONNARELLA 3.webp", title: "Tonnarella 3" },
    { src: "assets/img/archivio/foto_tricarico/tonnara 1.webp", title: "Tonnara 1" },
    { src: "assets/img/archivio/foto_tricarico/tonni.webp", title: "Tonni" },
    { src: "assets/img/archivio/foto_tricarico/tonnra pizzo.webp", title: "Tonnra Pizzo" },
    { src: "assets/img/archivio/foto_tricarico/x 1.webp", title: "X 1" },
    { src: "assets/img/archivio/foto_tricarico/x 100001.webp", title: "X 100001" },
    { src: "assets/img/archivio/foto_tricarico/x 10001.webp", title: "X 10001" },
    { src: "assets/img/archivio/foto_tricarico/x 110001.webp", title: "X 110001" },
    { src: "assets/img/archivio/foto_tricarico/x 120001.webp", title: "X 120001" },
    { src: "assets/img/archivio/foto_tricarico/x 130001.webp", title: "X 130001" },
    { src: "assets/img/archivio/foto_tricarico/x 140001.webp", title: "X 140001" },
    { src: "assets/img/archivio/foto_tricarico/x 150001.webp", title: "X 150001" },
    { src: "assets/img/archivio/foto_tricarico/x 160001.webp", title: "X 160001" },
    { src: "assets/img/archivio/foto_tricarico/x 170001.webp", title: "X 170001" },
    { src: "assets/img/archivio/foto_tricarico/x 170002.webp", title: "X 170002" },
    { src: "assets/img/archivio/foto_tricarico/x 180002.webp", title: "X 180002" },
    { src: "assets/img/archivio/foto_tricarico/x 190001.webp", title: "X 190001" },
    { src: "assets/img/archivio/foto_tricarico/x 2.webp", title: "X 2" },
    { src: "assets/img/archivio/foto_tricarico/x 200001.webp", title: "X 200001" },
    { src: "assets/img/archivio/foto_tricarico/x 20001.webp", title: "X 20001" },
    { src: "assets/img/archivio/foto_tricarico/x 210001.webp", title: "X 210001" },
    { src: "assets/img/archivio/foto_tricarico/x 220001.webp", title: "X 220001" },
    { src: "assets/img/archivio/foto_tricarico/x 230001.webp", title: "X 230001" },
    { src: "assets/img/archivio/foto_tricarico/x 240001.webp", title: "X 240001" },
    { src: "assets/img/archivio/foto_tricarico/x 250001.webp", title: "X 250001" },
    { src: "assets/img/archivio/foto_tricarico/x 3.webp", title: "X 3" },
    { src: "assets/img/archivio/foto_tricarico/x 30001.webp", title: "X 30001" },
    { src: "assets/img/archivio/foto_tricarico/x 4.webp", title: "X 4" },
    { src: "assets/img/archivio/foto_tricarico/x 40001.webp", title: "X 40001" },
    { src: "assets/img/archivio/foto_tricarico/x 50001.webp", title: "X 50001" },
    { src: "assets/img/archivio/foto_tricarico/x 6.webp", title: "X 6" },
    { src: "assets/img/archivio/foto_tricarico/x 60001.webp", title: "X 60001" },
    { src: "assets/img/archivio/foto_tricarico/x 7.webp", title: "X 7" },
    { src: "assets/img/archivio/foto_tricarico/x 70001.webp", title: "X 70001" },
    { src: "assets/img/archivio/foto_tricarico/x 8.webp", title: "X 8" },
    { src: "assets/img/archivio/foto_tricarico/x 80001.webp", title: "X 80001" },
    { src: "assets/img/archivio/foto_tricarico/x 9.webp", title: "X 9" },
    { src: "assets/img/archivio/foto_tricarico/x 90001.webp", title: "X 90001" },
    { src: "assets/img/archivio/foto_tricarico/x ANT6.webp", title: "X Ant6" },
    { src: "assets/img/archivio/foto_tricarico/x ANT8.webp", title: "X Ant8" },
    { src: "assets/img/archivio/foto_tricarico/x Armando Perrone (Ndarrau)0001.webp", title: "X Armando Perrone (Ndarrau)0001" },
    { src: "assets/img/archivio/foto_tricarico/x Barca Tonnara0001.webp", title: "X Barca Tonnara0001" },
    { src: "assets/img/archivio/foto_tricarico/x Barche tonnara.webp", title: "X Barche Tonnara" },
    { src: "assets/img/archivio/foto_tricarico/x DSC01916 b.webp", title: "X Dsc01916 B" },
    { src: "assets/img/archivio/foto_tricarico/x Donato Casalino e la Tonnara 1.webp", title: "X Donato Casalino E La Tonnara 1" },
    { src: "assets/img/archivio/foto_tricarico/x Donato Casalino e la Tonnara 2.webp", title: "X Donato Casalino E La Tonnara 2" },
    { src: "assets/img/archivio/foto_tricarico/x Gruppo di tonnaroti fine anni '30 (fam. Perrone-De Noto).webp", title: "X Gruppo Di Tonnaroti Fine Anni '30 (Fam. Perrone-De Noto)" },
    { src: "assets/img/archivio/foto_tricarico/x LA TONNARA 1.webp", title: "X La Tonnara 1" },
    { src: "assets/img/archivio/foto_tricarico/x Rocchetto tonnara0001.webp", title: "X Rocchetto Tonnara0001" },
    { src: "assets/img/archivio/foto_tricarico/x Scena dalla tonnara fine anni '30 (fam. Perrone-De Noto).webp", title: "X Scena Dalla Tonnara Fine Anni '30 (Fam. Perrone-De Noto)" },
    { src: "assets/img/archivio/foto_tricarico/x TONNARA__PESCA_TESTUGGINE_.webp", title: "X Tonnara Pesca Testuggine" },
    { src: "assets/img/archivio/foto_tricarico/x Tonnara 10001.webp", title: "X Tonnara 10001" },
    { src: "assets/img/archivio/foto_tricarico/x Tonnara 2.webp", title: "X Tonnara 2" },
    { src: "assets/img/archivio/foto_tricarico/x Tonnara 20001.webp", title: "X Tonnara 20001" },
    { src: "assets/img/archivio/foto_tricarico/x Tonnara.webp", title: "X Tonnara" },
    { src: "assets/img/archivio/foto_tricarico/x Ultime foto tonnara.webp", title: "X Ultime Foto Tonnara" },
    { src: "assets/img/archivio/foto_tricarico/x cialona 2.webp", title: "X Cialona 2" },
    { src: "assets/img/archivio/foto_tricarico/x cialona.webp", title: "X Cialona" },
    { src: "assets/img/archivio/foto_tricarico/x coda.webp", title: "X Coda" },
    { src: "assets/img/archivio/foto_tricarico/x foto Cosimo de Vita.webp", title: "X Foto Cosimo De Vita" },
    { src: "assets/img/archivio/foto_tricarico/x insieme.webp", title: "X Insieme" },
    { src: "assets/img/archivio/foto_tricarico/x pesce su traino.webp", title: "X Pesce Su Traino" },
    { src: "assets/img/archivio/foto_tricarico/x pianta Tonnara0002.webp", title: "X Pianta Tonnara0002" },
    { src: "assets/img/archivio/foto_tricarico/x scansione0001.webp", title: "X Scansione0001" },
    { src: "assets/img/archivio/foto_tricarico/x scansione0002.webp", title: "X Scansione0002" },
    { src: "assets/img/archivio/foto_tricarico/x scansione0003.webp", title: "X Scansione0003" },
    { src: "assets/img/archivio/foto_tricarico/x scansione0004.webp", title: "X Scansione0004" },
    { src: "assets/img/archivio/foto_tricarico/x scansione0005.webp", title: "X Scansione0005" },
    { src: "assets/img/archivio/foto_tricarico/x scansione0006.webp", title: "X Scansione0006" },
    { src: "assets/img/archivio/foto_tricarico/x scansione0007.webp", title: "X Scansione0007" },
    { src: "assets/img/archivio/foto_tricarico/x scansione0008.webp", title: "X Scansione0008" },
    { src: "assets/img/archivio/foto_tricarico/x scansione0009.webp", title: "X Scansione0009" },
    { src: "assets/img/archivio/foto_tricarico/x scansione0010.webp", title: "X Scansione0010" },
    { src: "assets/img/archivio/foto_tricarico/x scansione0011.webp", title: "X Scansione0011" },
    { src: "assets/img/archivio/foto_tricarico/x scansione0012.webp", title: "X Scansione0012" },
    { src: "assets/img/archivio/foto_tricarico/x scansione0013.webp", title: "X Scansione0013" },
    { src: "assets/img/archivio/foto_tricarico/x scansione0014.webp", title: "X Scansione0014" },
    { src: "assets/img/archivio/foto_tricarico/x scansione0016.webp", title: "X Scansione0016" },
    { src: "assets/img/archivio/foto_tricarico/x scansione0017.webp", title: "X Scansione0017" },
    { src: "assets/img/archivio/foto_tricarico/x scansione0018.webp", title: "X Scansione0018" },
    { src: "assets/img/archivio/foto_tricarico/x scansione0019.webp", title: "X Scansione0019" },
    { src: "assets/img/archivio/foto_tricarico/x tonnara cosimo abbruzzese.webp", title: "X Tonnara Cosimo Abbruzzese" },
    { src: "assets/img/archivio/foto_tricarico/x tonno a bordo.webp", title: "X Tonno A Bordo" },
];
const tricaricoBatchSize = 12;
let tricaricoLoadedCount = 0;
function renderTricaricoBatch() {
  const container = document.getElementById("tricarico-grid");
  const button = document.getElementById("load-more-tricarico");
  if (!container || !button) return;
  const nextItems = tricaricoItems.slice(tricaricoLoadedCount, tricaricoLoadedCount + tricaricoBatchSize);
  nextItems.forEach((item) => {
    const card = document.createElement("article");
    card.role = "button";
    card.tabIndex = 0;
    card.setAttribute("aria-label", tricaricoAriaLabel + item.title);
    card.className = "group bg-oltremare/30 border border-sabbia/10 rounded-2xl overflow-hidden cursor-pointer hover:border-corallo/50 transition duration-300 text-left focus:outline-none focus:ring-2 focus:ring-corallo/50";
    card.innerHTML = `
      <div class="h-64 overflow-hidden relative">
        <img src="${item.src}" loading="lazy" alt="${item.title}" class="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-abisso via-transparent to-transparent opacity-75"></div>
      </div>
      <div class="p-5">
        <h3 class="font-serif text-lg font-bold text-sabbia group-hover:text-corallo transition">${item.title}</h3>
        <p class="text-sabbia/80 text-xs mt-1 font-light line-clamp-2">${tricaricoDesc}</p>
      </div>`;
    card.addEventListener("click", () => openLightbox(item.src, item.title, tricaricoDesc));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(item.src, item.title, tricaricoDesc);
      }
    });
    container.appendChild(card);
  });
  tricaricoLoadedCount += nextItems.length;
  if (tricaricoLoadedCount >= tricaricoItems.length) {
    button.style.display = "none";
  } else {
    button.style.display = "inline-flex";
  }
}
function initTricaricoGallery() {
  renderTricaricoBatch();
  const button = document.getElementById("load-more-tricarico");
  if (button) {
    button.addEventListener("click", renderTricaricoBatch);
  }
}
document.addEventListener("DOMContentLoaded", initTricaricoGallery);
