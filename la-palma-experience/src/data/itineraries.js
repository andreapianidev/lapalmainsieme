export const itineraries = [
    {
        id: 'vulcanico',
        title: 'Rotta dei Vulcani',
        description: 'Un viaggio geologico attraverso i paesaggi più recenti e drammatici dell\'isola.',
        places: [48, 7, 47, 51], // Centro Visitatori -> Vulcani -> Echentive -> Zamora
        totalDuration: '1 Giornata',
        difficulty: 'Media',
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
        budget: '40-60€',
        budgetBreakdown: {
            food: '25-35€',
            transport: '10-15€',
            activities: '5-10€'
        },
        bestTime: 'Tutto l\'anno (evitare giorni molto ventosi)',
        tags: ['natura', 'geologia', 'fotografia', 'educativo'],
        accommodation: {
            suggestion: 'Fuencaliente o Los Canarios',
            options: [
                { name: 'Hotel Volcán', type: 'Hotel', price: '€€' },
                { name: 'Apartamentos Volcán', type: 'Appartamento', price: '€' }
            ]
        },
        packing: [
            'Scarpe da trekking comode',
            'Giacca antivento',
            'Crema solare',
            'Fotocamera',
            'Acqua (1.5L a persona)',
            'Snack energetici'
        ],
        days: [
            {
                day: 1,
                title: 'Tra Crateri e Colate Laviche',
                activities: [
                    { time: '09:00', placeId: 48, duration: '1h', description: 'Visita al Centro Visitatori per capire la storia vulcanica' },
                    { time: '10:30', placeId: 7, duration: '2h', description: 'Escursione ai crateri del Vulcano San Antonio e Teneguía' },
                    { time: '13:00', placeId: 47, duration: '1.5h', description: 'Pranzo e passeggiata a Echentive tra le colate' },
                    { time: '15:00', placeId: 51, duration: '2h', description: 'Relax e conclusione alla Playa de Zamora' }
                ]
            }
        ],
        faq: [
            {
                question: 'È adatto a bambini?',
                answer: 'Sì, ma tenere sott\'occhio i bambini vicino ai crateri. Il sentiero è facile.'
            },
            {
                question: 'Serve guida?',
                answer: 'No, i percorsi sono ben segnalati. Ma il Centro Visitatori offre info preziose.'
            }
        ],
        tips: [
            'Inizia presto per evitare il caldo di mezzogiorno',
            'Le colate laviche sono molto scure e assorbono calore',
            'Ottimo per foto al tramonto'
        ],
        highlights: [
            'Vista su entrambi i crateri',
            'Paesaggio lunare unico',
            'Flora pioniera che colonizza la lava',
            'Viste panoramiche sull\'oceano'
        ],
        photos: [
            {
                url: 'https://images.unsplash.com/photo-1682686581498-5e85c7b9394b?w=1200&q=80',
                caption: 'Cratere del Vulcano San Antonio'
            },
            {
                url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80',
                caption: 'Colate laviche nere di Echentive'
            },
            {
                url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
                caption: 'Paesaggio lunare tra i vulcani'
            },
            {
                url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
                caption: 'Vista panoramica sull\'oceano'
            }
        ]
    },
    {
        id: 'nord-selvaggio',
        title: 'Il Nord Selvaggio',
        description: 'Scopri la parte più antica e verde dell\'isola, tra foreste incantate e piscine naturali.',
        places: [6, 52, 55], // Los Tilos -> Cubo de la Galga -> Salto del Enamorado
        totalDuration: 'Mezza Giornata',
        difficulty: 'Facile',
        image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80',
        budget: '20-35€',
        budgetBreakdown: { food: '15-25€', transport: '5-10€' },
        bestTime: 'Primavera e Autunno (foresta più verde)',
        tags: ['natura', 'foresta', 'unesco', 'facile', 'famiglia'],
        packing: ['Scarpe da trekking', 'Giacca impermeabile', 'Acqua', 'Macchina fotografica'],
        highlights: ['Foresta Laurisilva UNESCO', 'Cascate nascoste', 'Sentieri magici', 'Biodiversità unica']
    },
    {
        id: 'stelle-e-tramonti',
        title: 'Stelle e Tramonti',
        description: 'I luoghi migliori per salutare il sole e ammirare il cielo stellato più bello del mondo.',
        places: [4, 46, 50], // Roque -> Cumbre -> Cabezadas
        totalDuration: 'Sera',
        difficulty: 'Facile',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        budget: '15-25€',
        budgetBreakdown: { food: '10-15€', transport: '5-10€' },
        bestTime: 'Estate (notti più chiare) e inverno (meno nuvole)',
        tags: ['stelle', 'romantico', 'fotografia', 'natura', 'sera'],
        packing: ['Giacca calda', 'Coperta', 'Termo con bevanda calda', 'Fotocamera', 'Torcia'],
        highlights: ['Cielo certificato Starlight', 'Tramonto al Roque', 'Via Lattea visibile', 'Zero inquinamento luminoso']
    },
    {
        id: 'costa-sud-completa',
        title: 'Costa Sud: Vulcani e Mare',
        description: 'Un itinerario completo che unisce l\'energia vulcanica del sud con le spiagge più belle e selvagge. Inizia dai crateri recenti, scende alle saline e ai fari, poi si tuffa nelle acque cristalline.',
        places: [57, 7, 62, 45, 56, 51, 60], // Volcán Martín -> San Antonio -> Punta Faro -> Saline -> Faro -> Zamora -> El Bernegal
        totalDuration: '1 Giornata Intera',
        difficulty: 'Media',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
        budget: '60-90€',
        budgetBreakdown: { food: '35-50€', transport: '15-25€', activities: '10-15€' },
        bestTime: 'Tutto l\'anno (sud sempre soleggiato)',
        tags: ['vulcani', 'mare', 'spiagge', 'completo', 'gastronomia'],
        packing: ['Costume da bagno', 'Scarpe trekking', 'Crema solare', 'Acqua', 'Fotocamera', 'Telo mare'],
        highlights: ['Vulcani recenti', 'Saline artigianali', 'Faro panoramico', 'Spiagge nere', 'Cena gourmet']
    },
    {
        id: 'gastronomico',
        title: 'Tour Gastronomico',
        description: 'Un viaggio tra i sapori autentici di La Palma: dal pesce freschissimo ai vini vulcanici, passando per tapas creative e cucina tradizionale. Include degustazioni, mercati locali e i migliori ristoranti.',
        places: [75, 61, 49, 60, 71, 54], // Mercatino -> Bodega Noelia -> Casa Osmunda -> El Bernegal -> Chipi-Chipi -> Tasca Catalina
        totalDuration: '1 Giornata',
        difficulty: 'Facile',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
        budget: '80-120€',
        budgetBreakdown: {
            food: '60-90€',
            transport: '15-20€',
            activities: '5-10€'
        },
        bestTime: 'Tutto l\'anno (mercatini migliori il sabato)',
        tags: ['gastronomia', 'vino', 'coppie', 'cultura', 'relax'],
        packing: ['Abbigliamento comodo', 'Borsa per acquisti mercato', 'Macchina fotografica', 'Appetito!'],
        highlights: ['Vini vulcanici unici', 'Pesce freschissimo', 'Mercato locale autentico', 'Degustazioni guidate', 'Tapas creative'],
        tips: [
            'Inizia dal mercatino la mattina presto (9-10h)',
            'Prenota la Bodega Noelia in anticipo',
            'Non mangiare troppo a pranzo per goderti tutte le tappe',
            'Porta contanti per il mercato'
        ]
    },
    {
        id: 'avventura-natura',
        title: 'Avventura nella Natura Selvaggia',
        description: 'Per le coppie sportive: un mix di trekking impegnativi, piscine naturali oceaniche e luoghi remoti. Include la Cascata dei Colori, barranco selvaggi e un villaggio di pescatori raggiungibile solo a piedi.',
        places: [5, 74, 65, 59, 72, 69], // Cascata Colores -> Barranco Agua -> Poris -> Charco Azul -> La Fajana -> Nogales
        totalDuration: '2 Giorni',
        difficulty: 'Difficile',
        image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80',
        budget: '70-100€',
        budgetBreakdown: {
            food: '40-60€',
            transport: '20-30€',
            activities: '10-10€'
        },
        bestTime: 'Primavera e Estate (sentieri asciutti e mare calmo)',
        tags: ['avventura', 'trekking', 'natura', 'sportivo', 'difficile'],
        packing: ['Scarpe trekking professionali', 'Zaino da escursione', 'Acqua 2L+', 'Snack energetici', 'Costume', 'Kit primo soccorso', 'GPS/mappa', 'Giacca impermeabile'],
        highlights: ['Cascata multicolore unica', 'Trekking impegnativi e selvaggi', 'Piscine naturali remote', 'Villaggio isolato di Poris', 'Zero turismo di massa'],
        tips: [
            'Serve ottima forma fisica',
            'Partire all\'alba per evitare il caldo',
            'Verificare condizioni meteo e maree',
            'Portare GPS o app offline maps'
        ]
    },
    {
        id: 'romantico-completo',
        title: 'Fuga Romantica - Il Meglio di La Palma',
        description: 'L\'itinerario perfetto per coppie in cerca di romanticismo: tramonti spettacolari, cene gourmet, stelle cadenti, spiagge isolate e i luoghi più magici dell\'isola. Dal Roque de los Muchachos alle spiagge nere, passando per degustazioni di vino.',
        places: [4, 58, 61, 49, 73, 1, 56, 50, 55], // Roque -> El Time -> Bodega -> Casa Osmunda -> Stelle -> Charco Verde -> Faro -> Cabezadas -> Salto Enamorado
        totalDuration: '3 Giorni',
        difficulty: 'Facile-Media',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80',
        budget: '400-600€ (a coppia)',
        budgetBreakdown: {
            accommodation: '180-300€ (2 notti)',
            food: '140-200€',
            transport: '60-70€',
            activities: '20-30€'
        },
        bestTime: 'Primavera (Marzo-Giugno) e Autunno (Settembre-Novembre)',
        tags: ['romantico', 'coppie', 'lusso', 'stelle', 'tramonti', 'gastronomia'],
        packing: ['Abbigliamento elegante casual', 'Costume', 'Giacca per la sera', 'Scarpe comode', 'Fotocamera', 'Coperta per stelle', 'Crema solare'],
        highlights: ['3 tramonti spettacolari', 'Cielo stellato certificato', 'Cene gourmet romantiche', 'Piscine naturali isolate', 'Degustazione vini vulcanici', 'Cascata degli Innamorati'],
        tips: [
            'Prenota hotel con vista oceano',
            'Ristoranti gourmet: prenotare 2-3 giorni prima',
            'Porta champagne per i tramonti',
            'Le stelle si vedono meglio dopo le 22:00'
        ]
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
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        budget: '550-800€ (a coppia)',
        budgetBreakdown: {
            accommodation: '250-400€ (4 notti)',
            food: '200-280€',
            transport: '80-100€',
            activities: '20-20€'
        },
        bestTime: 'Primavera (Aprile-Giugno) o Autunno (Settembre-Ottobre)',
        tags: ['completo', 'coppie', 'mix', 'cultura', 'natura', 'mare'],
        packing: ['Scarpe trekking', 'Costume', 'Giacca', 'Abbigliamento vario', 'Fotocamera', 'Zaino giornaliero', 'Crema solare'],
        highlights: ['Vedi tutto in 5 giorni', 'Mix perfetto attività/relax', 'Foreste UNESCO e vulcani', 'Miglior cielo stellato d\'Europa', 'Gastronomia locale autentica'],
        tips: [
            'Noleggia auto per libertà totale',
            'Alloggio consigliato: costa ovest (centrale)',
            'Giorno 4 inizia molto presto per alba al Roque',
            'Lascia spazio per improvvisare'
        ]
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
        image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80',
        budget: '800-1200€ (a coppia)',
        budgetBreakdown: {
            accommodation: '350-600€ (6 notti)',
            food: '300-420€',
            transport: '120-150€',
            activities: '30-30€'
        },
        bestTime: 'Tutto l\'anno (evita Luglio-Agosto per meno turisti)',
        tags: ['completo', 'avventura', 'relax', 'coppie', 'natura', 'cultura'],
        packing: ['Abbigliamento vario', 'Scarpe trekking', 'Costume', 'Giacca impermeabile', 'Zaino grande', 'Fotocamera', 'Kit primo soccorso', 'Power bank'],
        highlights: ['Esperienza completa 360°', 'Tutti gli ecosistemi dell\'isola', 'Dal mare alla vetta 2426m', 'Mix trekking facili e difficili', 'Gastronomia stellata e locale', 'Zero fretta, massimo relax'],
        tips: [
            'Prenota alloggio centrale (costa ovest) per ridurre spostamenti',
            'Giorno 4 è impegnativo: valuta forma fisica',
            'Ristoranti gourmet: prenota 3-4 giorni prima',
            'Lascia un giorno di buffer per meteo'
        ]
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
        image: 'https://images.unsplash.com/photo-1502920514313-52581002a659?w=800&q=80',
        budget: '350-500€ (a coppia)',
        budgetBreakdown: {
            accommodation: '150-250€ (2 notti)',
            food: '120-160€',
            transport: '50-60€',
            activities: '30-30€'
        },
        bestTime: 'Primavera (Marzo-Maggio) e Autunno (Settembre-Ottobre) per clima perfetto',
        tags: ['romantico', 'coppie', 'relax', 'stelle', 'gastronomia'],
        accommodation: {
            suggestion: 'Hotel boutique con vista oceano sulla costa ovest',
            options: [
                { name: 'Hotel Hacienda de Abajo', type: 'Hotel Romantico ★★★★', price: '€€€' },
                { name: 'Casa Rural con piscina', type: 'B&B', price: '€€' },
                { name: 'Apartamento vista mare', type: 'Airbnb', price: '€-€€' }
            ]
        },
        packing: [
            'Abbigliamento casual elegante per cene',
            'Costume da bagno',
            'Telo mare',
            'Scarpe comode per passeggiate',
            'Giacca leggera per la sera',
            'Fotocamera/smartphone',
            'Crema solare',
            'Bottiglia d\'acqua'
        ],
        days: [
            {
                day: 1,
                title: 'Arrivo e Magia del Tramonto',
                activities: [
                    { time: '15:00', placeId: null, duration: '2h', description: 'Check-in hotel e relax' },
                    { time: '17:00', placeId: 58, duration: '1.5h', description: 'Tramonto spettacolare al Mirador del Time - porta champagne!' },
                    { time: '19:30', placeId: 60, duration: '2h', description: 'Cena romantica gourmet al ristorante El Bernegal' },
                    { time: '22:00', placeId: 50, duration: '1.5h', description: 'Osservazione stelle a Llano de las Cabezadas - momento magico' }
                ]
            },
            {
                day: 2,
                title: 'Mare, Natura e Intimità',
                activities: [
                    { time: '10:00', placeId: 1, duration: '3h', description: 'Mattinata al Charco Verde - piscina naturale quasi privata' },
                    { time: '13:30', placeId: null, duration: '1.5h', description: 'Pranzo picnic sulla spiaggia (porta cibo dall\'hotel)' },
                    { time: '15:30', placeId: 69, duration: '2h', description: 'Playa de Nogales - spiaggia selvaggia e romantica' },
                    { time: '18:00', placeId: 55, duration: '1h', description: 'Passeggiata al Salto del Enamorado (Cascata degli Innamorati)' },
                    { time: '20:00', placeId: 49, duration: '2h', description: 'Cena tradizionale canaria alla Casa Osmunda' }
                ]
            },
            {
                day: 3,
                title: 'Sapori e Ricordi',
                activities: [
                    { time: '10:00', placeId: 61, duration: '2h', description: 'Degustazione vini vulcanici alla Bodega Noelia' },
                    { time: '12:30', placeId: 75, duration: '1.5h', description: 'Shopping al mercatino locale per souvenir' },
                    { time: '14:00', placeId: null, duration: '1h', description: 'Pranzo leggero e checkout' },
                    { time: '17:00', placeId: 56, duration: '1.5h', description: 'Ultimo tramonto memorabile al Faro di Fuencaliente' }
                ]
            }
        ],
        faq: [
            {
                question: 'È davvero adatto a coppie?',
                answer: 'Assolutamente sì! Questo itinerario è pensato per massimizzare momenti intimi e romantici. Luoghi poco affollati, tramonti spettacolari e cene speciali.'
            },
            {
                question: 'Serve noleggiare un\'auto?',
                answer: 'Sì, indispensabile. La libertà di muoversi vi permetterà di godervi i momenti senza stress.'
            },
            {
                question: 'Budget realistico per 2 persone?',
                answer: 'Con hotel 3-4 stelle e ristoranti buoni, calcolate 350-500€ totali per il weekend (escluso volo).'
            }
        ],
        tips: [
            '💕 Prenotate ristoranti in anticipo, specialmente El Bernegal',
            '🌅 I tramonti a La Palma sono tra le 18:00 e le 19:30 (varia per stagione)',
            '🍾 Portate una bottiglia di vino/champagne per il tramonto al Time',
            '📸 Non dimenticate la fotocamera per le stelle - telefonini non bastano',
            '🏖️ Charco Verde e Nogales possono essere ventose, controllate meteo',
            '⭐ Per le stelle, andate dopo le 22:00 e spegnete tutte le luci'
        ],
        highlights: [
            'Tramonti mozzafiato in location magiche',
            'Piscine naturali quasi private',
            'Cene romantiche in ristoranti selezionati',
            'Cielo stellato più bello d\'Europa',
            'Spiagge selvagge e isolate',
            'Degustazione vini vulcanici unici',
            'Momenti intimi lontano dalla folla'
        ],
        photos: [
            {
                url: 'https://images.unsplash.com/photo-1502920514313-52581002a659?w=1200&q=80',
                caption: 'Tramonto al Mirador del Time'
            },
            {
                url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
                caption: 'Cielo stellato certificato Starlight'
            },
            {
                url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
                caption: 'Charco Verde - piscina naturale'
            },
            {
                url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
                caption: 'Cena romantica con vista'
            },
            {
                url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=80',
                caption: 'Degustazione vini vulcanici'
            }
        ]
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
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
        budget: '600-850€ (a coppia)',
        budgetBreakdown: {
            accommodation: '250-400€ (4 notti)',
            food: '220-300€',
            transport: '100-120€',
            activities: '30-30€'
        },
        bestTime: 'Primavera (Aprile-Giugno) per clima ideale',
        tags: ['mix', 'coppie', 'avventura', 'relax', 'bilanciato', 'versatile'],
        packing: ['Scarpe trekking professionali', 'Costume', 'Abbigliamento sportivo', 'Abbigliamento casual elegante', 'Zaino escursione', 'Fotocamera', 'Crema solare'],
        highlights: ['Perfetto per coppie con gusti diversi', 'Alternanza avventura/relax', 'Nessuno si annoia', 'Trekking impegnativi e momenti zen', 'Equilibrio perfetto'],
        tips: [
            'Chi non ama trekking può saltare attività avventura',
            'Giorni relax ideali per recuperare energie',
            'Prenota massaggio spa per giorno 4',
            'Flessibilità è la chiave'
        ]
    }
];
