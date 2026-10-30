/*
 * ELIA GARDEN — SİTE VERİSİ
 * ------------------------------------------------------------------
 * Sitedeki bütün iletişim bilgileri, bahçeler, galeri ve videolar
 * bu dosyadan okunur. Fotoğraf/video değiştirmek için HTML'e dokunmak
 * gerekmez: dosyayı medya/ klasörüne koyup buradaki listeye ekleyin.
 *
 * ŞU AN KULLANILANLAR YER TUTUCUDUR (Unsplash + Mixkit, ücretsiz lisans).
 * Müşterinin gerçek fotoğrafları geldiğinde "src" alanları
 * "medya/galeri/dosya-adi.jpg" biçiminde değiştirilecek.
 */

const U = (id, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;
const MK = (id, boyut = 720) => `https://assets.mixkit.co/videos/${id}/${id}-${boyut}.mp4`;
const MKP = (id) => `https://assets.mixkit.co/videos/${id}/${id}-thumb-720-0.jpg`;

window.ELIA = {
  iletisim: {
    ad: "Elia Garden Kır Bahçesi",
    telefonGorunen: "0533 085 49 47",
    telefon: "+905330854947",
    whatsapp: "905330854947",
    eposta: "info@eliagardenevents.com",
    whatsappMesaj: "Merhaba, Elia Garden'da organizasyon için tarih ve fiyat bilgisi almak istiyorum.",
    adres: "Emirler, Atatürk 5 Caddesi No:102/D",
    ilce: "33112 Yenişehir / Mersin",
    instagram: "eliagardenevents",
    instagramUrl: "https://www.instagram.com/eliagardenevents/",
    haritaUrl: "https://www.google.com/maps/place/Elia+Garden+K%C4%B1r+Bah%C3%A7esi/@36.8316238,34.5031683,17z",
    yolTarifiUrl: "https://www.google.com/maps/dir/?api=1&destination=36.8316238,34.5031683",
    haritaGomme: "https://maps.google.com/maps?q=Elia+Garden+K%C4%B1r+Bah%C3%A7esi,+Emirler,+Yeni%C5%9Fehir,+Mersin&z=14&output=embed",
    googlePuan: "4,9",
    googleYorumSayisi: 28,
  },

  // Hero (açılış) videosu — müşterinin drone çekimi (6 Eyl 2026).
  hero: {
    video: "medya/video/gun-batimi-genel.mp4",
    videoMobil: "medya/video/gun-batimi-genel-720.mp4",
    poster: "medya/poster/gun-batimi-genel.jpg",
  },

  // Şu an tek bahçe var. İkinci bahçe açılırsa listeye yeni öğe eklenir.
  bahceler: [
    {
      ad: "Elia Garden",
      etiket: "Dağ manzaralı kır bahçesi",
      metin: "Yamacın üzerinde, ışık zincirleriyle çevrili açık hava bahçesi. Ortada dans pisti, etrafında masa düzeni; arkada gün batımında dağ manzarası.",
      ozellikler: ["Işık zincirli açık hava dans pisti", "Sütunlu tören yolu ve kırmızı halı", "Dağ ve gün batımı manzarası"],
      gorsel: "medya/galeri/gece-genel.jpg",
      video: "medya/video/alan-yukaridan.mp4",
    },
  ],

  organizasyonlar: [
    { ad: "Düğün", metin: "Işıklar altında, doğanın ortasında unutulmaz bir kır düğünü.", gorsel: "medya/galeri/kare-toren-kemerleri.jpg", kategori: "dugun" },
    { ad: "Kına Gecesi", metin: "Geleneksel kına gecenizi bahçenin sıcak atmosferinde yaşayın.", gorsel: U("1768611873658-5f041a413341", 900), kategori: "kina" },
    { ad: "Nişan & Söz", metin: "Aileniz ve sevdiklerinizle butik, zarif bir nişan töreni.", gorsel: U("1764593821636-0b40b6ec25e6", 900), kategori: "nisan" },
    { ad: "Sünnet Düğünü", metin: "Çocuklar için geniş, güvenli alan; misafirler için keyifli bir gün.", gorsel: U("1578298880489-ff269cea9894", 900), kategori: "sunnet" },
  ],

  // Galeri filtreleri: "id" değeri, galerideki "kategori" alanıyla eşleşir.
  galeriKategorileri: [
    { id: "hepsi", ad: "Tümü" },
    { id: "dugun", ad: "Düğün" },
    { id: "kina", ad: "Kına" },
    { id: "nisan", ad: "Nişan" },
    { id: "sunnet", ad: "Sünnet" },
    { id: "bahce", ad: "Bahçe & Dekor" },
  ],

  // Galeri öğeleri. tur: "foto" veya "video". video için "poster" de verilir.
  galeri: [
    // Müşterinin gerçek çekimleri (drone, 6 Eyl 2026)
    { tur: "foto", kategori: "dugun", src: "medya/galeri/gece-genel.jpg", baslik: "Gece, düğün alanı" },
    { tur: "video", kategori: "bahce", src: "medya/video/gun-batimi-genel.mp4", poster: "medya/poster/gun-batimi-genel.jpg", baslik: "Gün batımında Elia Garden" },
    { tur: "foto", kategori: "bahce", src: "medya/galeri/kare-dag-manzarasi.jpg", baslik: "Dağ manzarası" },
    { tur: "video", kategori: "dugun", src: "medya/video/toren-yolu.mp4", poster: "medya/poster/toren-yolu.jpg", baslik: "Tören yolu" },
    { tur: "foto", kategori: "bahce", src: "medya/galeri/gece-dikey.jpg", baslik: "Kuş bakışı" },
    { tur: "video", kategori: "dugun", src: "medya/video/gece-davet.mp4", poster: "medya/poster/gece-davet.jpg", baslik: "Gece daveti" },
    { tur: "foto", kategori: "bahce", src: "medya/galeri/kare-gun-batimi-1.jpg", baslik: "Işıklar yanarken" },
    { tur: "video", kategori: "bahce", src: "medya/video/alan-yukaridan.mp4", poster: "medya/poster/alan-yukaridan.jpg", baslik: "Alan yukarıdan" },
    { tur: "foto", kategori: "dugun", src: "medya/galeri/kare-gun-batimi-2.jpg", baslik: "Akşam üstü" },
    { tur: "video", kategori: "dugun", src: "medya/video/gece-kus-bakisi.mp4", poster: "medya/poster/gece-kus-bakisi.jpg", baslik: "Gece kuş bakışı" },
    // Yer tutucular (Unsplash/Mixkit) — müşterinin kına/nişan/sünnet çekimleri gelince silinecek
    { tur: "foto", kategori: "dugun", src: U("1764269715677-a80bda133ff7"), baslik: "Gelin & damat ilk dansı" },
    { tur: "foto", kategori: "bahce", src: U("1523438885200-e635ba2c371e"), baslik: "Bahçeden bir köşe" },
    { tur: "video", kategori: "dugun", src: MK(40601), poster: MKP(40601), baslik: "Düğün anları" },
    { tur: "foto", kategori: "dugun", src: U("1768777274270-5598fb227aa7"), baslik: "Maytaplarla kutlama" },
    { tur: "foto", kategori: "bahce", src: U("1751891159950-bf33e1e8705b"), baslik: "Masa düzeni" },
    { tur: "foto", kategori: "nisan", src: U("1727081203667-4792c134061a"), baslik: "Nişan töreni alanı" },
    { tur: "foto", kategori: "kina", src: U("1769374075776-2a44ee11e086"), baslik: "Işıklar altında eğlence" },
    { tur: "video", kategori: "bahce", src: MK(5224), poster: MKP(5224), baslik: "Masa süslemeleri" },
    { tur: "foto", kategori: "dugun", src: U("1722805740177-04256b6517f2"), baslik: "Bahçede gelin & damat" },
    { tur: "foto", kategori: "bahce", src: U("1680695605530-292ddef5ab49"), baslik: "Giriş yolu" },
    { tur: "foto", kategori: "sunnet", src: U("1758810411905-04fb6f9396e1"), baslik: "Gündüz davetleri" },
    { tur: "foto", kategori: "kina", src: U("1764267703628-cb434215ce83"), baslik: "Kına gecesi" },
    { tur: "foto", kategori: "bahce", src: U("1524777313293-86d2ab467344"), baslik: "Çiçek ve mum detayları" },
    { tur: "foto", kategori: "dugun", src: U("1766393524464-e5eb1b05e4c8"), baslik: "Gece resepsiyonu" },
    { tur: "video", kategori: "nisan", src: MK(5217), poster: MKP(5217), baslik: "Tören" },
    { tur: "foto", kategori: "nisan", src: U("1613256253906-3e5e19769403"), baslik: "Ahşap tören kemeri" },
    { tur: "foto", kategori: "sunnet", src: U("1707333512379-8f70ad28dca4"), baslik: "Davet alanı" },
    { tur: "foto", kategori: "dugun", src: U("1764269715824-b6ed3e5e270d"), baslik: "Gece dansı" },
  ],

  // Video bölümü. İlki büyük gösterilir.
  videolar: [
    // "sure" isteğe bağlı, örn. sure: "1:20"
    { src: "medya/video/gun-batimi-genel.mp4", poster: "medya/poster/gun-batimi-genel.jpg", baslik: "Gün batımında Elia Garden", sure: "0:18" },
    { src: "medya/video/alan-yukaridan.mp4", poster: "medya/poster/alan-yukaridan.jpg", baslik: "Alan yukarıdan", sure: "0:13" },
    { src: "medya/video/toren-yolu.mp4", poster: "medya/poster/toren-yolu.jpg", baslik: "Tören yolu", sure: "0:04" },
    { src: "medya/video/gece-davet.mp4", poster: "medya/poster/gece-davet.jpg", baslik: "Gece daveti", sure: "0:01" },
    { src: "medya/video/gece-kus-bakisi.mp4", poster: "medya/poster/gece-kus-bakisi.jpg", baslik: "Gece kuş bakışı", sure: "0:02" },
  ],

  // Google Haritalar'daki gerçek yorumlardan (baş harflerle).
  yorumlar: [
    { ad: "Hasan Z. T.", metin: "Bütün hazırlıklar A'dan Z'ye düşünülmüş, muazzam manzarasıyla tam bir kır düğün alanı. İki hafta sonraki düğünümüz için sabırsızlanıyoruz." },
    { ad: "İsmail T.", metin: "Kır düğün alanı eşsiz manzarasıyla ve tüm olanaklarıyla çok güzel bir yer olmuş. Emeği geçen herkese teşekkürler." },
    { ad: "Fatma K.", metin: "Düğün yapacaklar acele edin, kır düğün alanı muhteşem olmuş." },
  ],

  // Instagram şeridi (şimdilik galeriden görseller; tıklayınca hesaba gider).
  instagramGorselleri: [
    "medya/galeri/gece-genel.jpg",
    "medya/galeri/kare-toren-kemerleri.jpg",
    "medya/galeri/kare-dag-manzarasi.jpg",
    "medya/galeri/gece-dikey.jpg",
    "medya/galeri/kare-gun-batimi-1.jpg",
    "medya/poster/gece-kus-bakisi.jpg",
  ],
};
