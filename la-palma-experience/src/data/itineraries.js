export const itineraries = [
    {
        id: 'vulcanico',
        title: 'Rotta dei Vulcani',
        description: 'Un viaggio geologico attraverso i paesaggi più recenti e drammatici dell\'isola.',
        places: [48, 7, 47, 51], // Centro Visitatori -> Vulcani -> Echentive -> Zamora
        totalDuration: '1 Giornata',
        difficulty: 'Media',
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80'
    },
    {
        id: 'nord-selvaggio',
        title: 'Il Nord Selvaggio',
        description: 'Scopri la parte più antica e verde dell\'isola, tra foreste incantate e piscine naturali.',
        places: [6, 52, 55], // Los Tilos -> Cubo de la Galga -> Salto del Enamorado
        totalDuration: 'Mezza Giornata',
        difficulty: 'Facile',
        image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80'
    },
    {
        id: 'stelle-e-tramonti',
        title: 'Stelle e Tramonti',
        description: 'I luoghi migliori per salutare il sole e ammirare il cielo stellato più bello del mondo.',
        places: [4, 46, 50], // Roque -> Cumbre -> Cabezadas
        totalDuration: 'Sera',
        difficulty: 'Facile',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    },
    {
        id: 'costa-sud-completa',
        title: 'Costa Sud: Vulcani e Mare',
        description: 'Un itinerario completo che unisce l\'energia vulcanica del sud con le spiagge più belle e selvagge. Inizia dai crateri recenti, scende alle saline e ai fari, poi si tuffa nelle acque cristalline.',
        places: [57, 7, 62, 45, 56, 51, 60], // Volcán Martín -> San Antonio -> Punta Faro -> Saline -> Faro -> Zamora -> El Bernegal
        totalDuration: '1 Giornata Intera',
        difficulty: 'Media',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80'
    },
    {
        id: 'gastronomico',
        title: 'Tour Gastronomico',
        description: 'Un viaggio tra i sapori autentici di La Palma: dal pesce freschissimo ai vini vulcanici, passando per tapas creative e cucina tradizionale. Include degustazioni, mercati locali e i migliori ristoranti.',
        places: [75, 61, 49, 60, 71, 54], // Mercatino -> Bodega Noelia -> Casa Osmunda -> El Bernegal -> Chipi-Chipi -> Tasca Catalina
        totalDuration: '1 Giornata',
        difficulty: 'Facile',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80'
    },
    {
        id: 'avventura-natura',
        title: 'Avventura nella Natura Selvaggia',
        description: 'Per le coppie sportive: un mix di trekking impegnativi, piscine naturali oceaniche e luoghi remoti. Include la Cascata dei Colori, barranco selvaggi e un villaggio di pescatori raggiungibile solo a piedi.',
        places: [5, 74, 65, 59, 72, 69], // Cascata Colores -> Barranco Agua -> Poris -> Charco Azul -> La Fajana -> Nogales
        totalDuration: '2 Giorni',
        difficulty: 'Difficile',
        image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80'
    },
    {
        id: 'romantico-completo',
        title: 'Fuga Romantica - Il Meglio di La Palma',
        description: 'L\'itinerario perfetto per coppie in cerca di romanticismo: tramonti spettacolari, cene gourmet, stelle cadenti, spiagge isolate e i luoghi più magici dell\'isola. Dal Roque de los Muchachos alle spiagge nere, passando per degustazioni di vino.',
        places: [4, 58, 61, 49, 73, 1, 56, 50, 55], // Roque -> El Time -> Bodega -> Casa Osmunda -> Stelle -> Charco Verde -> Faro -> Cabezadas -> Salto Enamorado
        totalDuration: '3 Giorni',
        difficulty: 'Facile-Media',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80'
    },
    {
        id: 'settimana-corta',
        title: 'Una Settimana Corta a La Palma (5 Giorni)',
        description: 'Esperienza completa dell\'isola in 5 giorni: dal trekking nella foresta Laurisilva alla scoperta dei vulcani recenti, dalle spiagge nere ai tramonti più belli delle Canarie. Include gastronomia, cultura e relax. Giorno 1: Nord verde e foreste | Giorno 2: Vulcani e sud | Giorno 3: Spiagge e mare | Giorno 4: Cima dell\'isola e stelle | Giorno 5: Cultura e gastronomia.',
        places: [
            6,  // Giorno 1 mattina: Los Tilos (Foresta Laurisilva)
            52, // Giorno 1 pomeriggio: Cubo de la Galga
            49, // Giorno 1 sera: Casa Osmunda (cena)
            7,  // Giorno 2 mattina: Vulcano San Antonio
            48, // Giorno 2 pomeriggio: Centro Visitatori
            47, // Giorno 2: Echentive
            60, // Giorno 2 sera: El Bernegal (cena gourmet)
            1,  // Giorno 3 mattina: Charco Verde
            69, // Giorno 3: Playa de Nogales
            45, // Giorno 3 pomeriggio: Saline Fuencaliente
            54, // Giorno 3 sera: Tasca Catalina
            4,  // Giorno 4 mattina: Roque de los Muchachos
            5,  // Giorno 4: Cascata dei Colori
            50, // Giorno 4 sera: Llano de las Cabezadas (stelle)
            58, // Giorno 5 mattina: Mirador El Time
            61, // Giorno 5: Bodega Noelia (degustazione)
            75, // Giorno 5 pomeriggio: Mercatino locale
            56  // Giorno 5 sera: Faro Fuencaliente (tramonto)
        ],
        totalDuration: '5 Giorni',
        difficulty: 'Media',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    },
    {
        id: 'settimana-completa',
        title: 'La Palma Completa (7 Giorni)',
        description: 'L\'esperienza definitiva: un tour completo che tocca tutti gli aspetti dell\'isola. Perfetto per chi vuole vedere tutto senza fretta. Include trekking facili e difficili, vulcani, foreste, spiagge remote, gastronomia stellata, cultura locale, osservazione stelle e momenti di relax totale. Giorno 1: Arrivo e nord verde | Giorno 2: Foreste e cascate | Giorno 3: Vulcani e sud | Giorno 4: Trekking impegnativi | Giorno 5: Spiagge e mare | Giorno 6: Stelle e vino | Giorno 7: Cultura e relax.',
        places: [
            // Giorno 1: Arrivo e Nord Verde
            52, // Cubo de la Galga (trekking facile)
            55, // Salto del Enamorado (cascata)
            49, // Casa Osmunda (cena)

            // Giorno 2: Foreste Incantate
            6,  // Los Tilos (UNESCO)
            74, // Barranco del Agua
            65, // Poris de Candelaria
            71, // Chipi-Chipi (cena pesce)

            // Giorno 3: Vulcani e Lava
            7,  // Vulcano San Antonio
            48, // Centro Visitatori
            47, // Echentive
            62, // Punta Faro

            // Giorno 4: Trekking Avanzati
            5,  // Cascata dei Colori
            51, // Ruta de la Costa
            60, // El Bernegal (cena gourmet)

            // Giorno 5: Spiagge e Mare
            1,  // Charco Verde
            69, // Playa de Nogales
            72, // La Fajana
            73, // Charco Azul

            // Giorno 6: Stelle e Vino
            4,  // Roque de los Muchachos (alba)
            58, // Mirador El Time
            61, // Bodega Noelia (degustazione)
            50, // Llano Cabezadas (stelle)

            // Giorno 7: Cultura e Relax
            75, // Mercatino locale
            54, // Tasca Catalina (tapas)
            45, // Saline Fuencaliente
            56, // Faro (tramonto finale)
        ],
        totalDuration: '7 Giorni',
        difficulty: 'Varia (Facile-Difficile)',
        image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80'
    },
    {
        id: 'weekend-romantico',
        title: 'Weekend Romantico (3 Giorni)',
        description: 'Il perfetto weekend lungo per coppie. Massima concentrazione di romanticismo: tramonti mozzafiato, cene stellate, piscine naturali private, stelle cadenti e momenti intimi. Giorno 1: Tramonti e stelle | Giorno 2: Mare e relax | Giorno 3: Vino e cultura.',
        places: [
            // Giorno 1: Arrivo e Magia
            58, // Mirador El Time (tramonto)
            60, // El Bernegal (cena romantica)
            50, // Stelle a Llano Cabezadas

            // Giorno 2: Mare e Relax
            1,  // Charco Verde (piscina naturale)
            69, // Playa de Nogales (spiaggia isolata)
            55, // Salto del Enamorado (cascata)
            49, // Casa Osmunda (cena tradizionale)

            // Giorno 3: Cultura e Partenza
            61, // Bodega Noelia (degustazione)
            75, // Mercatino (souvenir)
            56, // Faro Fuencaliente (ultimo tramonto)
        ],
        totalDuration: '3 Giorni',
        difficulty: 'Facile',
        image: 'https://images.unsplash.com/photo-1502920514313-52581002a659?w=800&q=80'
    },
    {
        id: 'avventura-vs-relax',
        title: 'Avventura vs Relax (5 Giorni)',
        description: 'Un itinerario bilanciato per coppie con gusti diversi: giorni alternati tra trekking impegnativi e momenti di totale relax. Giorno 1: Avventura foresta | Giorno 2: Relax mare | Giorno 3: Avventura vulcani | Giorno 4: Relax e cultura | Giorno 5: Mix finale.',
        places: [
            // Giorno 1: AVVENTURA - Foresta
            5,  // Cascata dei Colori (trekking)
            74, // Barranco del Agua (impegnativo)

            // Giorno 2: RELAX - Mare
            1,  // Charco Verde (piscina naturale)
            73, // Charco Azul (relax)
            71, // Chipi-Chipi (pranzo pesce)

            // Giorno 3: AVVENTURA - Vulcani
            7,  // Vulcano San Antonio
            47, // Echentive
            51, // Ruta de la Costa

            // Giorno 4: RELAX - Cultura
            61, // Bodega Noelia (degustazione)
            75, // Mercatino (shopping)
            60, // El Bernegal (cena romantica)

            // Giorno 5: MIX - Il Meglio
            4,  // Roque de los Muchachos
            58, // Mirador El Time
            56, // Faro (tramonto)
            50  // Stelle finali
        ],
        totalDuration: '5 Giorni',
        difficulty: 'Media-Alta',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80'
    }
];
