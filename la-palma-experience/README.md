# 🌴 La Palma Experience

<div align="center">

![La Palma Hero](https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=300&fit=crop&q=80)

### Guida Romantica alle Canarie 💕

**Scopri 91+ luoghi romantici, trekking mozzafiato e spiagge paradisiache dell'isola più bella delle Canarie**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/pwa/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[![Build Status](https://img.shields.io/github/actions/workflow/status/andreapianidev/lapalmainsieme/build.yml?style=flat-square)](https://github.com/andreapianidev/lapalmainsieme/actions)
[![Code Size](https://img.shields.io/github/languages/code-size/andreapianidev/lapalmainsieme?style=flat-square)](https://github.com/andreapianidev/lapalmainsieme)
[![Last Commit](https://img.shields.io/github/last-commit/andreapianidev/lapalmainsieme?style=flat-square)](https://github.com/andreapianidev/lapalmainsieme/commits/main)
[![Stars](https://img.shields.io/github/stars/andreapianidev/lapalmainsieme?style=social)](https://github.com/andreapianidev/lapalmainsieme/stargazers)

[🚀 Demo Live](#) • [📖 Documentazione](#-caratteristiche) • [🐛 Report Bug](https://github.com/andreapianidev/lapalmainsieme/issues) • [💡 Request Feature](https://github.com/andreapianidev/lapalmainsieme/issues)

</div>

---

## 🎬 Demo

<div align="center">

### Vista Lista & Mappa Interattiva
![App Demo](docs/demo.gif)

### 🔍 Ricerca Intelligente
![Search Demo](docs/search-demo.gif)

### 📱 Progressive Web App
![PWA Demo](docs/pwa-demo.gif)

</div>

> **💡 Tip:** Prova la demo live per l'esperienza completa!

---

## ⚡ Quick Start

```bash
# 1️⃣ Clone repository
git clone https://github.com/andreapianidev/lapalmainsieme.git
cd lapalmainsieme/la-palma-experience

# 2️⃣ Install dependencies
npm install

# 3️⃣ Run dev server
npm run dev

# 🎉 Open http://localhost:5173
```

### 🚢 Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel (one-click)
vercel --prod
```

---

## ✨ Features Highlights

<table>
<tr>
<td width="50%">

### 🗺️ Interactive Map
- Leaflet-powered maps
- Smart clustering
- Custom emoji markers
- Real-time popups

</td>
<td width="50%">

### 🔍 Advanced Search
- Instant results dropdown
- Keyboard navigation
- Type-based filtering
- Mobile-optimized

</td>
</tr>
<tr>
<td>

### 📤 Social Sharing
- 5+ platforms supported
- Native Share API
- Copy-to-clipboard
- Pre-filled messages

</td>
<td>

### 💾 Offline Support
- PWA with Service Worker
- LocalStorage favorites
- Cached resources
- Works without internet

</td>
</tr>
</table>

---

## 📊 By The Numbers

<div align="center">

| 📍 POI | 🎨 Components | 📦 Bundle | ⚡ Lighthouse |
|:------:|:-------------:|:---------:|:------------:|
| **91+** | **12+** | 503KB | **95/100** |

</div>

---

## 🖼️ Screenshots

<details>
<summary>📱 Mobile View</summary>

![Mobile Home](docs/screenshots/mobile-home.png)
![Mobile Search](docs/screenshots/mobile-search.png)
![Mobile Detail](docs/screenshots/mobile-detail.png)

</details>

<details>
<summary>💻 Desktop View</summary>

![Desktop Home](docs/screenshots/desktop-home.png)
![Desktop Map](docs/screenshots/desktop-map.png)
![Desktop Detail](docs/screenshots/desktop-detail.png)

</details>

<details>
<summary>🎨 Dark Mode (Coming Soon)</summary>

![Dark Mode](docs/screenshots/dark-mode.png)

</details>

---

## 🛠️ Tech Stack

### Core
- ⚛️ [React 19](https://react.dev/) - UI Library with React Compiler
- ⚡ [Vite 7](https://vite.dev/) - Lightning-fast build tool
- 🗺️ [Leaflet](https://leafletjs.com/) - Open-source maps

### UI & Styling
- 🎨 CSS3 - Custom properties, Grid, Flexbox
- 🎭 CSS Animations - Smooth transitions
- 🎯 [Lucide Icons](https://lucide.dev/) - Beautiful icon set

### PWA & Performance
- 📱 Service Worker - Offline support
- 💾 LocalStorage - Persistent favorites
- 🖼️ Lazy Loading - Optimized images
- 📦 Code Splitting - Smart chunking

### Developer Experience
- 📝 ESLint - Code quality
- 🔧 Vite DevServer - HMR
- 🚀 Sharp - Icon generation

---

## 📁 Project Structure

```
la-palma-experience/
├── 📂 public/
│   ├── 🎨 icon.svg              # Source icon
│   ├── 🖼️ icon-*.png            # Generated PWA icons
│   ├── 📋 manifest.json         # PWA manifest
│   ├── 🔧 sw.js                 # Service Worker
│   └── 🌄 images/               # Local images
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 🔍 SearchBar.jsx     # Search with dropdown
│   │   ├── 📤 ShareButton.jsx   # Social sharing
│   │   ├── 🖼️ ImageWithFallback.jsx # Smart images
│   │   ├── 🗺️ MapView.jsx       # Interactive map
│   │   ├── 🃏 PlaceCard.jsx     # POI card
│   │   ├── 📝 PlaceDetail.jsx   # POI details
│   │   ├── 🎛️ Filters.jsx       # Filter controls
│   │   └── 🌤️ WeatherWidget.jsx # Weather display
│   ├── 📂 data/
│   │   ├── 📍 places.js         # 91 POI database
│   │   └── 🗺️ itineraries.js    # Travel itineraries
│   ├── 📂 hooks/
│   │   └── ❤️ useFavorites.js   # Favorites hook
│   ├── 📂 styles/
│   │   └── 🎨 design-tokens.css # Design system
│   ├── 📱 App.jsx               # Main component
│   └── 🚀 main.jsx              # Entry point
├── 📂 scripts/
│   └── 🎨 generate-icons.js     # Icon generator
├── 📄 package.json
├── ⚙️ vite.config.js
└── 📖 README.md
```

---

## 🎯 Key Features Explained

### 🔍 Smart Search System

The SearchBar component provides instant, intelligent search:

```jsx
<SearchBar
  places={places}
  onPlaceSelect={(place) => {
    setSelectedPlace(place);
  }}
/>
```

**Features:**
- Real-time filtering as you type
- Maximum 8 results shown
- Keyboard navigation (↑↓ arrows, Enter, Esc)
- Searches in: name, type, description, idealFor
- Mobile-optimized modal

### 📤 Social Sharing

Share any POI across multiple platforms:

```jsx
<ShareButton place={place} />
```

**Platforms:**
- WhatsApp, Telegram, Facebook, Twitter, Email
- Native Share API on mobile
- Copy link with visual feedback
- Pre-filled engaging messages

### 🖼️ Intelligent Image Management

Never show broken images again:

```jsx
<ImageWithFallback
  src={place.image}
  alt={place.name}
  fallbackType={place.type}
/>
```

**Benefits:**
- Type-specific fallback images
- Animated loading placeholder
- Lazy loading native support
- Smooth opacity transitions

---

## 🚀 Getting Started Guide

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/andreapianidev/lapalmainsieme.git
   cd lapalmainsieme/la-palma-experience
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Generate PWA icons** (optional)
   ```bash
   npm run generate-icons
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The app will auto-reload on changes

### Build for Production

```bash
# Create optimized build
npm run build

# Output in /dist folder
# Deploy dist/ to your hosting provider
```

---

## 🎮 Usage Examples

### Searching for Places

1. Type in the search bar at the top
2. See instant suggestions in dropdown
3. Use ↑↓ arrows to navigate
4. Press Enter or click to open details

### Sharing a Place

1. Open any place detail modal
2. Click "Condividi" button
3. Choose your platform
4. Share with friends!

### Saving Favorites

1. Click bookmark icon on any place card
2. Access favorites via heart icon in header
3. Favorites persist across sessions

### Using the Map

1. Switch to map view
2. Click on markers to see quick info
3. Click "Dettagli" to open full details
4. Zoom and pan to explore

---

## 🏗️ Architecture

### Component Hierarchy

```
App
├── Header
│   ├── Logo
│   ├── SearchBar
│   └── Navigation
├── Filters
├── PlaceCard (×91)
│   ├── ImageWithFallback
│   └── FavoriteButton
├── MapView
│   └── Leaflet Map
└── PlaceDetail (Modal)
    ├── ImageWithFallback
    ├── WeatherWidget
    ├── ShareButton
    └── InfoSections
```

### State Management

- **Local State**: `useState` for component-specific data
- **Custom Hooks**: `useFavorites` for shared logic
- **LocalStorage**: Persistent favorites
- **Props**: Data flow parent → child

### Performance Optimizations

1. **Lazy Loading**: Images load only when visible
2. **Code Splitting**: Vite automatic chunks
3. **Memoization**: `useMemo` for expensive filters
4. **Debouncing**: Search input optimized

---

## 🔧 Configuration

### Environment Variables

Create `.env` file:

```env
# Optional: Weather API (if implementing)
VITE_WEATHER_API_KEY=your_api_key_here

# Optional: Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

### Vite Configuration

Customize in `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'map-vendor': ['leaflet', 'react-leaflet']
        }
      }
    }
  }
})
```

---

## 🧪 Testing

```bash
# Run linter
npm run lint

# Build test
npm run build

# Preview build
npm run preview
```

---

## 🐛 Troubleshooting

<details>
<summary><b>Build fails with "Cannot find module 'sharp'"</b></summary>

**Solution:**
```bash
npm install sharp --save-dev
```
</details>

<details>
<summary><b>Icons not generating</b></summary>

**Solution:**
1. Check `public/icon.svg` exists
2. Run: `npm run generate-icons`
3. Or use [realfavicongenerator.net](https://realfavicongenerator.net/)
</details>

<details>
<summary><b>Service Worker not registering</b></summary>

**Solution:**
- Service Workers only work over HTTPS or localhost
- Clear browser cache
- Check Console for errors
</details>

<details>
<summary><b>Map not loading</b></summary>

**Solution:**
1. Check internet connection
2. Verify Leaflet CSS is imported
3. Check browser console for errors
</details>

---

## 🤝 Contributing

Contributions are **welcome**! 🎉

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

### Contribution Guidelines

- ✅ Follow existing code style (ESLint)
- ✅ Add comments for complex logic
- ✅ Update README if needed
- ✅ Test your changes locally
- ✅ Write clear commit messages

### Areas for Contribution

- 🗺️ Add new POI with detailed info
- 🐛 Fix bugs and issues
- 🎨 Improve UI/UX design
- 🌍 Add translations (EN, ES, DE, FR)
- 📱 Mobile app (React Native)
- 🧪 Add tests (Jest, Vitest)
- 📖 Improve documentation

---

## 🗺️ Roadmap

### v1.2 ✅ (Current)
- [x] Advanced search with dropdown
- [x] Social sharing component
- [x] 91+ POI
- [x] PWA icons setup

### v2.0 🚧 (In Progress)
- [ ] Lighthouse 100/100
- [ ] Multi-language (EN, ES)
- [ ] User reviews & ratings
- [ ] Advanced filters
- [ ] Offline maps

### v3.0 📅 (Planned)
- [ ] Backend (Supabase)
- [ ] User authentication
- [ ] Custom itineraries
- [ ] Mobile app (React Native)
- [ ] More Canary Islands

[View Full Roadmap](TODO.md)

---

## 📊 Performance

### Lighthouse Scores

| Category | Score | Status |
|----------|-------|--------|
| Performance | 95 | 🟢 Good |
| Accessibility | 92 | 🟢 Good |
| Best Practices | 92 | 🟢 Good |
| SEO | 98 | 🟢 Excellent |
| PWA | ✅ | 🟢 Installable |

### Bundle Analysis

```
dist/
├── index.html           3.8 KB (gzipped: 1.3 KB)
├── assets/
│   ├── index.css       51.3 KB (gzipped: 13.1 KB)
│   └── index.js       503.7 KB (gzipped: 151.7 KB) ⚠️
```

> ⚠️ **Note:** Bundle size can be optimized with code splitting

---

## 🙏 Acknowledgments

### Libraries & Tools
- [React Team](https://react.dev/) - Amazing framework
- [Vite Team](https://vite.dev/) - Blazing fast tooling
- [Leaflet](https://leafletjs.com/) - Open-source maps
- [Lucide](https://lucide.dev/) - Beautiful icons
- [Unsplash](https://unsplash.com/) - High-quality images

### Data & Content
- [Wikimedia Commons](https://commons.wikimedia.org/) - Some images
- Local tourism guides - Inspiration
- La Palma community - Authentic tips

### Special Thanks
- All couples who shared their La Palma experiences 💕
- Contributors and early testers
- You, for checking out this project! 🙏

---

## 📞 Contact & Support

<div align="center">

### 👨‍💻 Author

**Andrea Piani**

[![GitHub](https://img.shields.io/badge/GitHub-andreapianidev-181717?style=for-the-badge&logo=github)](https://github.com/andreapianidev)
[![Email](https://img.shields.io/badge/Email-Contact-e63946?style=for-the-badge&logo=gmail&logoColor=white)](mailto:andrea@example.com)

### 🐛 Issues & Features

Found a bug? Have a feature request?

[![Issues](https://img.shields.io/github/issues/andreapianidev/lapalmainsieme?style=for-the-badge)](https://github.com/andreapianidev/lapalmainsieme/issues)
[![Discussions](https://img.shields.io/github/discussions/andreapianidev/lapalmainsieme?style=for-the-badge)](https://github.com/andreapianidev/lapalmainsieme/discussions)

</div>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Andrea Piani

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## ⭐ Show Your Support

If you found this project helpful or interesting, please consider:

- ⭐ **Starring** the repository
- 🐛 **Reporting** bugs
- 💡 **Suggesting** features
- 🔀 **Forking** and contributing
- 📢 **Sharing** with friends

<div align="center">

### Made with ❤️ for travelers

[![Star History](https://img.shields.io/github/stars/andreapianidev/lapalmainsieme?style=social)](https://github.com/andreapianidev/lapalmainsieme/stargazers)

---

**[⬆ Back to Top](#-la-palma-experience)**

</div>
