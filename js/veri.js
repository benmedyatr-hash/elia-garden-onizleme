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
    whatsappMesaj: "Merhaba, Elia Garden'da organizasyon için tarih ve fiyat bilgisi almak istiyorum.",
    adres: "Emirler, Atatürk 5 Caddesi No:102/D",
    ilce: "33112 Yenişehir / Mersin",
    instagram: "eliagardenwedding",
    instagramUrl: "https://www.instagram.com/eliagardenwedding/",
    haritaUrl: "https://www.google.com/maps/place/Elia+Garden+K%C4%B1r+Bah%C3%A7esi/@36.8316238,34.5031683,17z",
    yolTarifiUrl: "https://www.google.com/maps/dir/?api=1&destination=36.8316238,34.5031683",
    haritaGomme: "https://maps.google.com/maps?q=Elia+Garden+K%C4%B1r+Bah%C3%A7esi,+Emirler,+Yeni%C5%9Fehir,+Mersin&z=14&output=embed",
    googlePuan: "4,9",
    googleYorumSayisi: 28,
  },

  // Hero (açılış) videosu. Gerçek tanıtım videosu gelince "medya/video/tanitim.mp4" yapılır.
  hero: {
    video: MK(40627, 1080),
    videoMobil: MK(40627, 720),
    poster: MKP(40627),
  },

  // İki bahçe. İsimleri müşteriden teyit edilecek.
  bahceler: [
    {
      ad: "Bahçe I",
      etiket: "Geniş davetler",
      metin: "Ağaçların altında, ışık zincirleriyle çevrili açık alan. Kalabalık düğün ve kına geceleri için geniş dans pisti, sahne ve oturma düzeni.",
      ozellikler: ["Açık hava dans pisti", "Sahne ve ses sistemi", "Işıklandırılmış yürüyüş yolu"],
      gorsel: U("1574482211311-45a2169db57c"),
      video: MK(40590),
    },
    {
      ad: "Bahçe II",
      etiket: "Butik kutlamalar",
      metin: "Daha samimi bir atmosfer arayanlar için yeşillikler içinde butik bahçe. Nişan, söz ve aile davetleri için ideal.",
      ozellikler: ["Çiçek takı ve tören alanı", "Doğa manzarası", "Fotoğraf köşeleri"],
      gorsel: U("1670529776180-60e4132ab90c"),
      video: MK(40584),
    },
  ],

  organizasyonlar: [
    { ad: "Düğün", metin: "Işıklar altında, doğanın ortasında unutulmaz bir kır düğünü.", gorsel: U("1769230387364-8b0c2b63e18b", 900), kategori: "dugun" },
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
    { src: MK(40627), poster: MKP(40627), baslik: "Elia Garden'da bir düğün gecesi" },
    { src: MK(40596), poster: MKP(40596), baslik: "Bahçede yürüyüş" },
    { src: MK(5213), poster: MKP(5213), baslik: "Işık ve dekor" },
    { src: MK(40590), poster: MKP(40590), baslik: "Bahçe I" },
    { src: MK(40584), poster: MKP(40584), baslik: "Bahçe II" },
  ],

  // Google Haritalar'daki gerçek yorumlardan (baş harflerle).
  yorumlar: [
    { ad: "Hasan Z. T.", metin: "Bütün hazırlıklar A'dan Z'ye düşünülmüş, muazzam manzarasıyla tam bir kır düğün alanı. İki hafta sonraki düğünümüz için sabırsızlanıyoruz." },
    { ad: "İsmail T.", metin: "Kır düğün alanı eşsiz manzarasıyla ve tüm olanaklarıyla çok güzel bir yer olmuş. Emeği geçen herkese teşekkürler." },
    { ad: "Fatma K.", metin: "Düğün yapacaklar acele edin, kır düğün alanı muhteşem olmuş." },
  ],

  // Instagram şeridi (şimdilik galeriden görseller; tıklayınca hesaba gider).
  instagramGorselleri: [
    U("1769230387364-8b0c2b63e18b", 600),
    U("1764593821636-0b40b6ec25e6", 600),
    U("1574482211311-45a2169db57c", 600),
    U("1768611873658-5f041a413341", 600),
    U("1533120921505-7f40f5237ee1", 600),
    U("1712764995301-995e730b6147", 600),
  ],
};
