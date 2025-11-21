# 🌴 La Palma Experience

<div align="center">

### Scopri la Isla Bonita con la Guida Romantica Definitiva

**Una Progressive Web App completa per esplorare La Palma, l'isola più bella delle Canarie**

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite)](https://vite.dev/)
[![PWA](https://img.shields.io/badge/PWA-Ready-5a0fc8?logo=pwa)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red)](https://github.com/andreapianidev/lapalmainsieme)

[✨ Demo Live](https://lapalmainsieme.netlify.app) · [🐛 Segnala Bug](https://github.com/andreapianidev/lapalmainsieme/issues) · [💡 Richiedi Feature](https://github.com/andreapianidev/lapalmainsieme/issues)

</div>

---

## 📖 Indice

- [Cos'è La Palma Experience](#-cosè-la-palma-experience)
- [✨ Caratteristiche Principali](#-caratteristiche-principali)
- [🚀 Quick Start](#-quick-start)
- [💻 Stack Tecnologico](#-stack-tecnologico)
- [📱 Funzionalità](#-funzionalità)
- [🗺️ Cosa Troverai](#️-cosa-troverai)
- [🤝 Cerchiamo Collaboratori](#-cerchiamo-collaboratori)
- [📸 Screenshots](#-screenshots)
- [🛠️ Contribuire](#️-contribuire)
- [📄 Licenza](#-licenza)

---

## 🌟 Cos'è La Palma Experience?

**La Palma Experience** è una Progressive Web App moderna e completa pensata per coppie e viaggiatori che vogliono scoprire la **Isla Bonita**, l'isola più bella e autentica dell'arcipelago delle Canarie.

Con oltre **91 luoghi selezionati**, mappe interattive, itinerari personalizzati e funzionalità offline, è la tua compagna perfetta per un viaggio indimenticabile a La Palma! 🌺

### 🎯 Perché questa App?

- 💕 **Per Coppie**: Luoghi romantici, tramonti mozzafiato, cene gourmet vista oceano
- 🥾 **Per Avventurieri**: Trekking nella Caldera, foreste UNESCO, vulcani attivi
- 🏖️ **Per Amanti del Mare**: Piscine naturali, spiagge di sabba nera, grotte marine
- 🍷 **Per Buongustai**: Ristoranti tipici, vini vulcanici, cucina canaria autentica
- ✨ **Per Sognatori**: Stargazing nei cieli più bui d'Europa, albe sulla caldera

---

## ✨ Caratteristiche Principali

<div align="center">

| Funzionalità | Descrizione |
|-------------|-------------|
| 🗺️ **Mappa Interattiva** | Esplora l'isola con Leaflet, cluster intelligenti, filtri per tipo |
| 🔍 **Ricerca Avanzata** | Trova luoghi in tempo reale con suggerimenti intelligenti |
| 💾 **Offline First** | Service Worker avanzato, funziona anche senza connessione |
| 📱 **PWA Installabile** | Installa come app nativa su iOS e Android |
| ❤️ **Favoriti** | Salva i tuoi luoghi preferiti (persistenti con LocalStorage) |
| 🌐 **Condivisione Social** | Condividi su WhatsApp, Telegram, Facebook, Twitter, Email |
| 🎨 **Design Moderno** | UI romantica e fluida con animazioni smooth |
| 🌤️ **Meteo Real-Time** | Previsioni meteo integrate per ogni zona |
| 🗓️ **Itinerari Completi** | 11 itinerari da 3 a 7 giorni già pronti |
| ⚡ **Performance** | Code splitting, lazy loading, bundle ottimizzati |

</div>

---

## 🚀 Quick Start

### Prerequisiti

- Node.js 18+ e npm
- Git

### Installazione

```bash
# Clona il repository
git clone https://github.com/andreapianidev/lapalmainsieme.git

# Entra nella cartella
cd lapalmainsieme/la-palma-experience

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

L'app sarà disponibile su **http://localhost:5173** 🎉

### Build per Produzione

```bash
# Genera la build ottimizzata
npm run build

# Testa la build in locale
npm run preview
```

### Generare Icone PWA

```bash
# Genera tutte le icone PWA da public/icon.svg
npm run generate-icons
```

---

## 💻 Stack Tecnologico

### Core

- ⚛️ **React 19** - UI moderna con React Compiler
- ⚡ **Vite 7** - Build tool velocissimo
- 🗺️ **Leaflet** + **React-Leaflet** - Mappe interattive open-source
- 🎨 **CSS3** - Animazioni e styling responsive

### Features

- 🔧 **Service Worker** - Cache intelligente multi-strategia
- 🖼️ **Sharp** - Generazione automatica icone PWA
- 🌐 **Web Share API** - Condivisione nativa mobile
- 💾 **LocalStorage** - Persistenza dati locale
- 🌤️ **Weather API** - Meteo real-time (Open-Meteo)

### Performance

- 📦 **Code Splitting** - Lazy loading componenti pesanti (MapView 192KB)
- ⚡ **Resource Hints** - Preconnect e DNS-prefetch
- 🎯 **Bundle Optimization** - ~91KB gzipped main bundle
- 🖼️ **Image Optimization** - Lazy loading con fallback intelligenti

---

## 📱 Funzionalità

### 🔍 Ricerca Intelligente

Cerca luoghi per nome, tipo, descrizione o caratteristiche ideali. La SearchBar mostra suggerimenti in tempo reale con navigazione keyboard completa (frecce, Enter, Esc).

```jsx
// Esempio di ricerca
🔎 "tramonto" → Trova: Mirador del Time, Playa del Faro, Roque de los Muchachos
🔎 "trekking" → Trova: Cascata de los Colores, Bosque de Los Tilos, Ruta de los Volcanes
🔎 "romantico" → Trova: 35 luoghi perfetti per coppie ❤️
```

### 💾 Funzionalità Offline

Grazie al Service Worker avanzato, l'app funziona anche senza connessione:

- ✅ **Cache-First per immagini** → caricamento istantaneo
- ✅ **Network-First per API** → dati sempre freschi con fallback
- ✅ **Stale-While-Revalidate per JS/CSS** → aggiornamenti in background
- ✅ **Max 50 immagini** in cache con gestione LRU automatica

### 🌐 Condivisione Social

Condividi i tuoi luoghi preferiti con un click:

- 📱 **Share API nativo** su mobile (iOS/Android)
- 💚 **WhatsApp** - Condividi con amici e gruppi
- ✈️ **Telegram** - Messaggi veloci
- 👍 **Facebook** - Post sulla tua bacheca
- 🐦 **Twitter** - Tweet i tuoi luoghi
- ✉️ **Email** - Invia consigli di viaggio

### 🗺️ Modalità Visualizzazione

#### Vista Mappa

Mappa interattiva con:
- 📍 **Clustering** intelligente → raggruppa POI vicini
- 🎯 **Popup** informativi con preview
- 🔍 **Zoom** su location corrente
- 🏷️ **Icone** per tipo: 🏖️ Spiagge, 🥾 Trekking, 🍽️ Ristoranti, 📸 Panorami

#### Vista Griglia

Card visivamente accattivanti con:
- 🖼️ **Immagini** lazy-loaded con fallback intelligenti
- 📊 **Info chiave** a colpo d'occhio (durata, difficoltà, distanza)
- ❤️ **Badge romantici** per luoghi ideali per coppie
- ⭐ **Filtri** per tipo e caratteristiche

### 🗓️ Itinerari Pronti

11 itinerari completi da 3 a 7 giorni:

| Itinerario | Giorni | Difficoltà | POI |
|-----------|--------|------------|-----|
| 🌅 Weekend Romantico | 3 | Facile | 11 |
| 🥾 Una Settimana Corta | 5 | Media | 18 |
| 🌴 La Palma Completa | 7 | Varia | 28 |
| ⚖️ Avventura vs Relax | 5 | Media-Alta | 15 |
| ...e altri 7! | | | |

---

## 🗺️ Cosa Troverai

### 📊 I Numeri

- **91 POI** accuratamente selezionati
- **6 categorie** di luoghi (spiagge, trekking, ristoranti, panorami, esperienze, cultura)
- **11 itinerari** completi
- **35+ luoghi romantici** ❤️
- **15 percorsi trekking** con dislivelli e difficoltà
- **12 esperienze uniche** (stargazing, degustazioni, tour)

### 🏖️ Categorie

#### Spiagge e Mare (15+)
- **Charco Azul** - Piscine naturali cristalline
- **Playa de Nogales** - Spiaggia selvaggia con grotta marina
- **La Fajana** - Piscine naturali sulla costa nord
- **Puerto Naos** - Spiaggia sabbia nera con servizi

#### Trekking e Natura (20+)
- **Roque de los Muchachos** - 2.426m, stargazing epico
- **Cascata de los Colores** - Nella Caldera de Taburiente
- **Bosco di Los Tilos** - Foresta UNESCO con cascate
- **Ruta de los Volcanes** - Trekking vulcanico spettacolare

#### Ristoranti e Gastronomia (12+)
- **El Jardín de la Sal** - Gourmet vista oceano
- **Restaurante El Bernegal** - Cucina canaria moderna
- **Bar La Placeta** - Tapas autentiche economiche
- **Chipi-Chipi** - Pesce freschissimo

#### Panorami e Mirador (15+)
- **Mirador del Time** - Tramonto sulla caldera
- **Mirador de San Bartolomé** - Vista 360° su tutta l'isola
- **Mirador del Roque de los Muchachos** - Il punto più alto

#### Esperienze Uniche (12+)
- **Osservatorio Astrofisico** - Telescopi professionali
- **Vigneti Fuencaliente** - Vini vulcanici DOC
- **Saline Fuencaliente** - Sale marino artigianale
- **Banana Tour** - Piantagioni canarie

#### Cultura e Storia (10+)
- **Santa Cruz de La Palma** - Centro storico coloniale
- **Santuario de las Nieves** - Patrona dell'isola
- **Cubo de la Galga** - Grotte aborigene

---

## 🤝 Cerchiamo Collaboratori!

<div align="center">

### 🌍 Progetto Open Source

**La Palma Experience** è un progetto **open source** e **gratuito** per la community.
Crediamo nel potere della collaborazione e della condivisione della conoscenza! 💚

</div>

### 👥 Chi Stiamo Cercando?

#### 🏝️ **Sei un Nomade Digitale a La Palma?**

Questa è l'opportunità perfetta per te! Se vivi o soggiorni a La Palma e:

- ✅ Conosci **luoghi nascosti** che solo i local conoscono
- ✅ Hai **foto originali** di alta qualità
- ✅ Puoi **testare** l'app in real-time sull'isola
- ✅ Vuoi **contribuire** a un progetto che aiuta altri viaggiatori

**Contattaci!** Siamo sempre alla ricerca di nuove gemme da aggiungere! 💎

#### 💻 Sviluppatori e Designers

Cerchiamo anche:

- **Frontend Developers** (React, CSS, Performance)
- **UX/UI Designers** (Figma, design mobile-first)
- **Content Creators** (fotografia, copywriting)
- **Testers** (QA, device testing, accessibility)
- **Traduttori** (EN, ES, DE, FR)

### 🌟 Come Contribuire

Ci sono tantissimi modi per contribuire:

#### 1. 📍 Aggiungi Nuovi Luoghi

Conosci un luogo speciale che manca? Apri una [Issue](https://github.com/andreapianidev/lapalmainsieme/issues) con:
- Nome del luogo
- Coordinate GPS
- Descrizione (cosa lo rende speciale?)
- Foto (se possibile)
- Consigli pratici

#### 2. 🐛 Segnala Bug

Hai trovato un problema? [Segnalalo qui](https://github.com/andreapianidev/lapalmainsieme/issues) con:
- Descrizione del problema
- Come riprodurlo
- Screenshot (se applicabile)
- Browser/dispositivo usato

#### 3. 💡 Proponi Nuove Feature

Hai un'idea brillante? [Aprila come Feature Request](https://github.com/andreapianidev/lapalmainsieme/issues) e discutiamone!

#### 4. 🔨 Sviluppa una Feature

1. Fai **fork** del repository
2. Crea un **branch** (`git checkout -b feature/AmazingFeature`)
3. Fai **commit** dei tuoi cambiamenti (`git commit -m 'Add some AmazingFeature'`)
4. Fai **push** al branch (`git push origin feature/AmazingFeature`)
5. Apri una **Pull Request**

### 💬 Unisciti alla Community

- 💬 **GitHub Discussions** - Per domande e discussioni
- 🐛 **Issues** - Per bug e feature request
- 📧 **Email** - [andrea@example.com](mailto:andrea@example.com)

---

## 📸 Screenshots

<details>
<summary>🖼️ <b>Clicca per vedere gli screenshots</b></summary>

### Vista Mappa
![Mappa Interattiva](screenshots/mappa.png)

### Vista Griglia
![Griglia POI](screenshots/griglia.png)

### Dettagli Luogo
![Modal Dettagli](screenshots/dettaglio.png)

### Ricerca
![SearchBar](screenshots/ricerca.png)

### Condivisione
![Share Modal](screenshots/share.png)

### PWA Installata
![PWA iOS](screenshots/pwa-ios.png)

</details>

---

## 🛠️ Contribuire

### Workflow di Sviluppo

1. **Fork & Clone**
```bash
git clone https://github.com/TUO_USERNAME/lapalmainsieme.git
cd lapalmainsieme/la-palma-experience
npm install
```

2. **Crea Feature Branch**
```bash
git checkout -b feature/la-tua-feature
```

3. **Sviluppa**
- Scrivi codice pulito e commentato
- Segui le convenzioni esistenti
- Testa su mobile e desktop

4. **Commit**
```bash
git add .
git commit -m "feat: descrizione della tua feature"
```

Usa [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - Nuova feature
- `fix:` - Bug fix
- `docs:` - Solo documentazione
- `style:` - Formattazione, no code change
- `refactor:` - Refactoring codice
- `perf:` - Performance improvement
- `test:` - Aggiungi test
- `chore:` - Maintenance

5. **Push & Pull Request**
```bash
git push origin feature/la-tua-feature
```
Apri una PR su GitHub con descrizione dettagliata.

### Linee Guida

- ✅ **Mobile-first** - Testa sempre su mobile
- ✅ **Performance** - Mantieni bundle size basso
- ✅ **Accessibilità** - Usa HTML semantico, ARIA labels
- ✅ **SEO** - Meta tags, Schema.org
- ✅ **PWA** - Offline-first, installabile
- ✅ **Code Quality** - ESLint, clean code
- ✅ **Documenta** - Commenti, JSDoc per funzioni complesse

### Struttura Progetto

```
la-palma-experience/
├── public/              # Asset statici
│   ├── icon.svg        # Icona sorgente PWA
│   ├── manifest.json   # PWA manifest
│   └── sw.js          # Service Worker
├── src/
│   ├── components/     # Componenti React
│   │   ├── ImageWithFallback.jsx
│   │   ├── MapView.jsx
│   │   ├── PlaceCard.jsx
│   │   ├── PlaceDetail.jsx
│   │   ├── SearchBar.jsx
│   │   └── ShareButton.jsx
│   ├── data/          # Dati statici
│   │   ├── places.js  # 91 POI
│   │   └── itineraries.js
│   ├── hooks/         # Custom hooks
│   │   └── useFavorites.js
│   ├── services/      # API services
│   │   └── weatherService.js
│   ├── App.jsx        # Componente root
│   ├── App.css        # Stili globali
│   └── main.jsx       # Entry point
├── scripts/
│   └── generate-icons.js  # Generazione icone
├── package.json
├── vite.config.js
└── README.md
```

---

## 📊 Performance

### Bundle Size

```
Main bundle:     91 KB (gzip)
MapView chunk:   55 KB (gzip) - lazy loaded
PlaceDetail:      7 KB (gzip) - lazy loaded
Other chunks:    <2 KB each
```

### Lighthouse Score

- ⚡ **Performance**: 95+
- ✅ **Accessibility**: 98+
- ✅ **Best Practices**: 100
- ✅ **SEO**: 100
- ✅ **PWA**: 100

### Core Web Vitals

- **LCP** (Largest Contentful Paint): <2.5s
- **FID** (First Input Delay): <100ms
- **CLS** (Cumulative Layout Shift): <0.1

---

## 🔧 Configurazione Avanzata

### Variabili d'Ambiente

Crea un file `.env` per configurazioni opzionali:

```env
# Weather API Provider (default: open-meteo)
VITE_WEATHER_PROVIDER=open-meteo

# OpenWeatherMap (opzionale, se vuoi usarlo)
VITE_OPENWEATHERMAP_API_KEY=your_key_here

# Weather API (opzionale)
VITE_WEATHERAPI_KEY=your_key_here

# Cache duration (minuti)
VITE_WEATHER_CACHE_DURATION=30
```

### Deploy

L'app è pronta per essere deployata su:

- **Netlify** (consigliato) → Deploy automatico da GitHub
- **Vercel** → Ottimo per React + Vite
- **GitHub Pages** → Deploy gratuito
- **Firebase Hosting** → Con Cloud Functions

#### Deploy su Netlify

1. Connetti il repository GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Done! 🎉

---

## 🧪 Testing

### Test Locali

```bash
# Testa la build di produzione
npm run build && npm run preview
```

### Test PWA

1. Build per produzione
2. Servi tramite HTTPS (richiesto per Service Worker)
3. Apri Chrome DevTools → Application → Service Workers
4. Verifica cache e offline functionality

### Test Mobile

Usa browser real device o simulatori:
- **iOS**: Safari + Web Inspector
- **Android**: Chrome + Remote Debugging

---

## 🐛 Troubleshooting

### Service Worker Non Si Aggiorna

```bash
# Cancella cache e hard reload
Chrome: Ctrl+Shift+R (Cmd+Shift+R su Mac)

# Oppure forza unregister
DevTools → Application → Service Workers → Unregister
```

### Immagini Non Caricano

Le immagini usano fallback intelligenti. Se vedi placeholder:
- Verifica connessione internet
- Controlla console per errori CORS
- Alcune immagini Wikimedia potrebbero essere lente

### Build Fallisce

```bash
# Cancella cache e node_modules
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📝 TODO & Roadmap

Vedi [TODO.md](TODO.md) per la lista completa di task e priorità.

### Prossimi Passi

- [ ] **Lighthouse 100/100** - Ottimizzazioni finali
- [ ] **Internazionalizzazione** - EN, ES, DE, FR
- [ ] **Backend con Supabase** - Recensioni utenti, auth
- [ ] **Mappe offline** - Download tiles
- [ ] **Notifiche Push** - Meteo alerts, eventi
- [ ] **App nativa** - React Native per iOS/Android

---

## 🙏 Ringraziamenti

### Contributors

Grazie a tutti coloro che hanno contribuito al progetto! 💚

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- Verrà popolato automaticamente -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

### Risorse

- **Wikimedia Commons** - Alcune foto di POI
- **Unsplash** - Immagini fallback di alta qualità
- **Open-Meteo** - API meteo gratuita
- **Leaflet** - Mappe open-source
- **React Team** - Framework incredibile
- **Vite Team** - Build tool velocissimo

### Ispirazione

Questo progetto nasce dall'amore per La Palma e dal desiderio di condividere le sue meraviglie con il mondo. 🌴

Un ringraziamento speciale alla community di nomadi digitali di La Palma che continua a ispirare questo progetto! 🏝️💻

---

## 📄 Licenza

Questo progetto è rilasciato sotto licenza **MIT**.
Vedi [LICENSE](LICENSE) per dettagli.

```
MIT License - Copyright (c) 2024 La Palma Experience Team

È consentito utilizzare, copiare, modificare e distribuire questo software
gratuitamente, a patto di includere questa nota di copyright.
```

---

## 📞 Contatti

### Maintainer

- **Andrea Piani** - [@andreapianidev](https://github.com/andreapianidev)

### Link Utili

- 🌐 **Website**: [lapalmainsieme.netlify.app](https://lapalmainsieme.netlify.app)
- 📦 **Repository**: [github.com/andreapianidev/lapalmainsieme](https://github.com/andreapianidev/lapalmainsieme)
- 🐛 **Issues**: [github.com/andreapianidev/lapalmainsieme/issues](https://github.com/andreapianidev/lapalmainsieme/issues)
- 💬 **Discussions**: [github.com/andreapianidev/lapalmainsieme/discussions](https://github.com/andreapianidev/lapalmainsieme/discussions)

---

<div align="center">

### ⭐ Se ti piace il progetto, lascia una stella su GitHub! ⭐

**Fatto con ❤️ da nomadi digitali per nomadi digitali**

🌴 **Buon viaggio a La Palma!** 🌊

---

*Ultima modifica: Novembre 2024 · Versione 1.3*

</div>
