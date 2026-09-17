(() => {
  const V = window.ELIA;
  const $ = (s, k = document) => k.querySelector(s);
  const $$ = (s, k = document) => [...k.querySelectorAll(s)];
  const hoverVar = matchMedia("(hover: hover)").matches;
  const OYNAT = '<span class="oynat" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>';

  const kacis = (m) => String(m).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const waLink = (mesaj) => `https://wa.me/${V.iletisim.whatsapp}?text=${encodeURIComponent(mesaj)}`;

  /* ---------- İletişim bağlantıları ve metinler ---------- */
  const linkler = {
    tel: `tel:${V.iletisim.telefon}`,
    whatsapp: waLink(V.iletisim.whatsappMesaj),
    instagram: V.iletisim.instagramUrl,
    harita: V.iletisim.haritaUrl,
    yolTarifi: V.iletisim.yolTarifiUrl,
  };
  $$("[data-link]").forEach((a) => { a.href = linkler[a.dataset.link]; });
  $$("[data-alan]").forEach((el) => {
    if (V.iletisim[el.dataset.alan] !== undefined) el.textContent = V.iletisim[el.dataset.alan];
  });
  $("#harita").src = V.iletisim.haritaGomme;
  $("#yil").textContent = new Date().getFullYear();

  /* ---------- Hero videosu ---------- */
  const hero = $("#heroVideo");
  hero.poster = V.hero.poster;
  hero.src = innerWidth < 900 ? V.hero.videoMobil : V.hero.video;
  hero.play().catch(() => {});

  /* ---------- Üzerine gelince oynayan önizleme videoları ---------- */
  function onizleme(kart, src) {
    if (!hoverVar || !src) return;
    let video;
    kart.addEventListener("mouseenter", () => {
      if (!video) {
        video = Object.assign(document.createElement("video"), { src, muted: true, loop: true, playsInline: true, preload: "auto" });
        kart.querySelector("img").after(video);
      }
      video.play().catch(() => {});
    });
    kart.addEventListener("mouseleave", () => video && video.pause());
  }

  /* ---------- Bahçeler ---------- */
  const bahceListesi = $("#bahceListesi");
  V.bahceler.forEach((b, i) => {
    const el = document.createElement("article");
    el.className = "bahce gorun";
    el.innerHTML = `
      <button class="bahce__medya" aria-label="${kacis(b.ad)} videosunu izle" style="border:0;padding:0">
        <img src="${b.gorsel}" alt="${kacis(b.ad)}" loading="lazy">
        ${b.video ? OYNAT : ""}
      </button>
      <div>
        <div class="bahce__no">0${i + 1}</div>
        <p class="bahce__etiket">${kacis(b.etiket)}</p>
        <h3>${kacis(b.ad)}</h3>
        <p>${kacis(b.metin)}</p>
        <ul>${b.ozellikler.map((o) => `<li>${kacis(o)}</li>`).join("")}</ul>
        <a class="dugme dugme--cizgi" href="${waLink(`Merhaba, ${b.ad} için tarih ve fiyat bilgisi almak istiyorum.`)}" target="_blank" rel="noopener">Bu Bahçe İçin Tarih Sor</a>
      </div>`;
    const medya = $(".bahce__medya", el);
    onizleme(medya, b.video);
    medya.addEventListener("click", () => {
      const liste = b.video
        ? [{ tur: "video", src: b.video, poster: b.gorsel, baslik: b.ad }]
        : [{ tur: "foto", src: b.gorsel, baslik: b.ad }];
      isikKutusuAc(liste, 0);
    });
    bahceListesi.append(el);
  });

  /* ---------- Organizasyonlar ---------- */
  const orgIzgara = $("#orgIzgara");
  V.organizasyonlar.forEach((o) => {
    const a = document.createElement("a");
    a.className = "org-kart gorun";
    a.href = "#galeri";
    a.innerHTML = `
      <img src="${o.gorsel}" alt="${kacis(o.ad)}" loading="lazy">
      <div class="org-kart__ic">
        <h3>${kacis(o.ad)}</h3>
        <p>${kacis(o.metin)}</p>
        <span class="org-kart__ok">Galeriyi gör →</span>
      </div>`;
    a.addEventListener("click", () => filtreSec(o.kategori));
    orgIzgara.append(a);
  });

  /* ---------- Videolar ---------- */
  const videoIzgara = $("#videoIzgara");
  const videoListesi = V.videolar.map((v) => ({ tur: "video", ...v }));
  V.videolar.forEach((v, i) => {
    const b = document.createElement("button");
    b.className = "video-kart gorun";
    b.setAttribute("aria-label", `${v.baslik} videosunu izle`);
    b.innerHTML = `
      <img src="${v.poster}" alt="" loading="lazy">
      ${OYNAT}
      <span class="video-kart__yazi"><strong>${kacis(v.baslik)}</strong>${v.sure ? `<span>${kacis(v.sure)}</span>` : ""}</span>`;
    onizleme(b, v.src);
    b.addEventListener("click", () => isikKutusuAc(videoListesi, i));
    videoIzgara.append(b);
  });

  /* ---------- Galeri ---------- */
  const SAYFA = 12;
  let aktifKategori = "hepsi";
  let gosterilen = SAYFA;
  const filtreler = $("#filtreler");
  const galeriIzgara = $("#galeriIzgara");
  const dahaFazla = $("#dahaFazla");

  V.galeriKategorileri.forEach((k) => {
    const b = document.createElement("button");
    b.className = "filtre";
    b.setAttribute("role", "tab");
    b.dataset.kategori = k.id;
    b.textContent = k.ad;
    b.addEventListener("click", () => filtreSec(k.id));
    filtreler.append(b);
  });

  const suzulmus = () => V.galeri.filter((g) => aktifKategori === "hepsi" || g.kategori === aktifKategori);

  function galeriCiz() {
    const liste = suzulmus();
    galeriIzgara.innerHTML = "";
    liste.slice(0, gosterilen).forEach((g, i) => {
      const b = document.createElement("button");
      b.className = "galeri-oge";
      b.style.animationDelay = `${Math.min(i, 8) * 50}ms`;
      b.setAttribute("aria-label", g.baslik || "Görseli büyüt");
      const kapak = g.tur === "video" ? g.poster : g.src.replace(/w=\d+/, "w=800");
      b.innerHTML = `<img src="${kapak}" alt="${kacis(g.baslik || "")}" loading="lazy">${g.tur === "video" ? OYNAT : ""}${g.baslik ? `<span class="galeri-oge__yazi">${kacis(g.baslik)}</span>` : ""}`;
      b.addEventListener("click", () => isikKutusuAc(liste, i));
      galeriIzgara.append(b);
    });
    dahaFazla.hidden = liste.length <= gosterilen;
    $$(".filtre").forEach((f) => f.setAttribute("aria-selected", f.dataset.kategori === aktifKategori));
  }

  function filtreSec(id) {
    aktifKategori = id;
    gosterilen = SAYFA;
    galeriCiz();
  }
  dahaFazla.addEventListener("click", () => { gosterilen += SAYFA; galeriCiz(); });
  galeriCiz();

  /* ---------- Yorumlar ---------- */
  $("#yorumIzgara").innerHTML = V.yorumlar.map((y) => `
    <figure class="yorum gorun">
      <blockquote>${kacis(y.metin)}</blockquote>
      <figcaption>${kacis(y.ad)} <span>· Google yorumu</span></figcaption>
    </figure>`).join("");

  /* ---------- Instagram şeridi ---------- */
  $("#instaSerit").innerHTML = V.instagramGorselleri.map((src) => `
    <a href="${V.iletisim.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram'da gör"><img src="${src}" alt="" loading="lazy"></a>`).join("");

  /* ---------- Teklif formu → WhatsApp ---------- */
  $("#teklifFormu").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const tarih = f.get("tarih") ? new Date(f.get("tarih")).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" }) : "";
    const ayrintilar = [
      `Ad: ${f.get("ad")}`,
      `Organizasyon: ${f.get("tur")}`,
      tarih && `Tarih: ${tarih}`,
      f.get("kisi") && `Misafir sayısı: ${f.get("kisi")}`,
      f.get("not") && `Not: ${f.get("not")}`,
    ].filter(Boolean);
    const mesaj = `Merhaba, Elia Garden için bilgi almak istiyorum.\n\n${ayrintilar.join("\n")}`;
    window.open(waLink(mesaj), "_blank", "noopener");
  });

  /* ---------- Işık kutusu ---------- */
  const lb = $("#isikkutusu");
  const sahne = $("#lbSahne");
  const yazi = $("#lbYazi");
  let lbListe = [];
  let lbSira = 0;
  let oncekiOdak = null;

  function isikKutusuAc(liste, sira) {
    lbListe = liste;
    oncekiOdak = document.activeElement;
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    goster(sira);
    $("#lbKapat").focus();
  }

  function goster(sira) {
    lbSira = (sira + lbListe.length) % lbListe.length;
    const g = lbListe[lbSira];
    sahne.innerHTML = g.tur === "video"
      ? `<video src="${g.src}" poster="${g.poster || ""}" controls autoplay playsinline></video>`
      : `<img src="${g.src.replace(/w=\d+/, "w=2000")}" alt="${kacis(g.baslik || "")}">`;
    yazi.textContent = [g.baslik, lbListe.length > 1 ? `${lbSira + 1} / ${lbListe.length}` : ""].filter(Boolean).join("  ·  ");
    const tek = lbListe.length < 2;
    $("#lbOnceki").hidden = tek;
    $("#lbSonraki").hidden = tek;
  }

  function kapat() {
    lb.hidden = true;
    sahne.innerHTML = "";
    document.body.style.overflow = "";
    oncekiOdak && oncekiOdak.focus();
  }

  $("#lbKapat").addEventListener("click", kapat);
  $("#lbOnceki").addEventListener("click", () => goster(lbSira - 1));
  $("#lbSonraki").addEventListener("click", () => goster(lbSira + 1));
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target === sahne) kapat(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") kapat();
    if (e.key === "ArrowLeft") goster(lbSira - 1);
    if (e.key === "ArrowRight") goster(lbSira + 1);
  });
  let dokunX = null;
  lb.addEventListener("touchstart", (e) => { dokunX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (dokunX === null || lbListe.length < 2) return;
    const fark = e.changedTouches[0].clientX - dokunX;
    if (Math.abs(fark) > 50) goster(lbSira + (fark < 0 ? 1 : -1));
    dokunX = null;
  });

  /* ---------- Menü ---------- */
  const menu = $("#menu");
  const menuAc = $("#menuAc");
  menuAc.addEventListener("click", () => {
    const acik = menu.classList.toggle("acik");
    menuAc.setAttribute("aria-expanded", acik);
  });
  $$("a", menu).forEach((a) => a.addEventListener("click", () => {
    menu.classList.remove("acik");
    menuAc.setAttribute("aria-expanded", false);
  }));

  const baslik = $("#baslik");
  addEventListener("scroll", () => baslik.classList.toggle("kaydi", scrollY > 60), { passive: true });

  const menuLinkleri = $$("a", menu);
  const bolumGozcu = new IntersectionObserver((girdiler) => {
    girdiler.forEach((g) => {
      if (g.isIntersecting) menuLinkleri.forEach((a) => a.classList.toggle("aktif", a.hash === `#${g.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  menuLinkleri.forEach((a) => { const b = $(a.hash); b && bolumGozcu.observe(b); });

  /* ---------- Kaydırınca beliren öğeler ---------- */
  const gorunGozcu = new IntersectionObserver((girdiler) => {
    girdiler.forEach((g) => {
      if (g.isIntersecting) { g.target.classList.add("gorundu"); gorunGozcu.unobserve(g.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  $$(".gorun").forEach((el) => gorunGozcu.observe(el));
})();
