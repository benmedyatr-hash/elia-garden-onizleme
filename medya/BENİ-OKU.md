# Medya klasörü

Müşterinin gerçek fotoğraf ve videoları buraya gelecek.

```
medya/
  galeri/     → galeri fotoğrafları (jpg/webp, uzun kenar ~2000 px)
  video/      → mp4 videolar (H.264, 720p–1080p, tercihen 20 MB altı)
  poster/     → videoların kapak görselleri
  bahce-1/    → Bahçe I fotoğraf/videoları
  bahce-2/    → Bahçe II fotoğraf/videoları
```

Dosyaları koyduktan sonra `js/veri.js` içindeki listelerde `src` alanını
`"medya/galeri/dosya-adi.jpg"` biçiminde güncellemek yeterli.
Galeri kategorileri: `dugun`, `kina`, `nisan`, `sunnet`, `bahce`.
