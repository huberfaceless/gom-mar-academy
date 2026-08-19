import { Stage } from '../types';

export const MODULES_56_TO_65: Stage[] = [
  {
    id: 56,
    title: '56. Internationale Expansion & Global Multi-Currency Funnels',
    subtitle: 'Cross-Border E-Commerce, Lokalisierung, Multi-Currency & Globale Payment-Gateways',
    color: 'from-blue-600 via-sky-600 to-indigo-700',
    badgeIcon: '🌍',
    description: 'Skaliere deine digitalen Angebote in neue Länder und Sprachen: Erfahre, wie du Landingpages lokalisierst, Währungsumrechnungen optimierst und lokale Bezahlmethoden (iDEAL, Klarna, Boleto, Pix) anbindest.',
    lessons: [
      {
        id: '56.1',
        stageId: 56,
        stageTitle: '56. Globale Lokalisierung & Kultur-Framing',
        title: 'Internationales Copywriting & Lokalisierung statt stumpfer Übersetzung',
        durationMinutes: 31,
        description: 'Wie du Funnels für den US-, UK-, DACH- und LATAM-Markt anpasst und kulturelle Kaufgewohnheiten respektierst.',
        learnContent: {
          videoTitle: 'Masterclass: Globale Funnel-Lokalisierung & Markt-Eintritt',
          videoDuration: '31:30',
          summaryText: 'Wer nur Google Translate nutzt, verbrennt Ad-Spend. Lerne, wie du Verkaufsargumente an die Mentalität des jeweiligen Ziellandes anpasst und rechtliche Besonderheiten berücksichtigst.',
          bulletPoints: [
            'High-Context vs. Low-Context Kulturen: Warum US-Kunden kürzere VSLs wollen, während deutsche Kunden Zertifikate verlangen',
            'Preispunkte nach Kaufkraftparität (PPP): Dynamische Rabatte für Schwellenländer zur Gewinnmaximierung',
            'Native Speaker VSLs & Synchro: Wie du mit AI-Voice-Cloning perfekte Sprachfassungen erstellst',
            'Rechtliche Fallstricke: DSGVO in Europa, CCPA in den USA und Impressumspflichten'
          ],
          coreConcepts: [
            {
              iconName: 'globe',
              title: 'CULTURAL FRAMING',
              description: 'Anpassung von Trust-Elementen und Testimonials an den lokalen Zielmarkt.',
              highlight: true
            },
            {
              iconName: 'dollar-sign',
              title: 'PPP PRICING',
              description: 'Automatische Kaufkraft-Anpassung maximiert den Gesamtumsatz weltweit.'
            }
          ],
          resources: [
            {
              title: 'Global Market Expansion Checklist',
              subtitle: 'Länder-Prüfliste für Steuern, Sprachen & Payments als PDF',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'Mara CRM Multi-Language Selector',
              subtitle: 'Funnels und E-Mails in verschiedenen Sprachen ausspielen',
              type: 'tool',
              iconName: 'globe',
              actionUrl: 'landingpage'
            }
          ],
          fullArticleGuide: `### Die Strategie der internationalen Skalierung

Die Expansion in den englischsprachigen Raum vervielfacht den adressierbaren Markt um den Faktor 10.

#### Die 4 Säulen des internationalen Rollouts:
1. **Tier-1 Märkte zuerst**: Teste zuerst in UK, USA, Kanada oder Australien.
2. **Lokalisierte Case Studies**: Ersetze lokale Kundenstimmen durch internationale Referenzen.
3. **Währungswahl**: Immer in der Heimatwährung des Käufers (USD, EUR, GBP, CHF) abrechnen.
4. **Lokaler Support**: Kundenservice in der Zeitzone und Sprache des Kunden bereitstellen.`
        },
        understandContent: {
          coreTakeaway: 'Wer global denkt, befreit sein Business von regionalen Krisen und Wirtschaftsflauten.',
          keyPrinciples: [
            'Immer native Sprecher für Voice-Overs oder professionelles AI-Dubbing nutzen',
            'Lokale Bezahlmethoden erhöhen die Conversion-Rate im Checkout um bis zu 40%'
          ]
        },
        actionTask: {
          instruction: 'Bereite deinen ersten englischsprachigen Funnel-Klon vor:',
          inputType: 'checklist',
          checklistItems: [
            'Top-Angebot für den englischsprachigen Markt lokalisiert',
            'US-Dollar und GBP als Bezahlwährungen im Checkout aktiviert',
            'Internationale Case-Studies auf der englischen Landingpage eingebunden'
          ],
          toolboxCategory: 'landingpage'
        }
      },
      {
        id: '56.2',
        stageId: 56,
        stageTitle: '56. Globale Payments & Steuern',
        title: 'Global Checkout & Merchant of Record (MoR) Architekturen',
        durationMinutes: 29,
        description: 'Wie du Stripe, Paddle oder Lemon Squeezy nutzt, um weltweite Mehrwertsteuern (VAT/GST/Sales Tax) automatisch abzuführen.',
        learnContent: {
          videoTitle: 'Masterclass: Merchant of Record & Internationale Steuerautomatisierung',
          videoDuration: '29:45',
          summaryText: 'Internationale Steuergesetze sind hochkomplex. Mit einer Merchant-of-Record Lösung (MoR) übernimmt der Zahlungsanbieter die weltweite Steuerhaftung, sodass du dich voll auf das Marketing konzentrieren kannst.',
          bulletPoints: [
            'Stripe vs. Merchant of Record: Wann lohnt sich Paddle oder Lemon Squeezy?',
            'Automatische Steuerberechnung (VAT MOSS, US State Sales Tax) in Echtzeit',
            'Lokale Zahlungsarten: iDEAL (Niederlande), Bancontact (Belgien), Twint (Schweiz), Pix (Brasilien)',
            'Multi-Currency Payouts: Währungsverluste durch Fremdwährungskonten (Wise Business / Mercury) vermeiden'
          ],
          coreConcepts: [
            {
              iconName: 'credit-card',
              title: 'MERCHANT OF RECORD',
              description: 'Vollständige Auslagerung weltweiter Steuerabrechnungen und Rückerstattungen.',
              highlight: true
            },
            {
              iconName: 'repeat',
              title: 'LOCAL PAYMENTS',
              description: 'Über 20+ landesspezifische Bezahlmethoden aktivieren.'
            }
          ],
          resources: [
            {
              title: 'Globale Zahlungsanbieter & MoR Vergleichstabelle',
              subtitle: 'Gebühren, Steuern und Features auf einen Blick als PDF',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'Mara CRM Multi-Currency Checkout',
              subtitle: 'Zahlungs-Gateways für weltweite Kunden konfigurieren',
              type: 'tool',
              iconName: 'dollar-sign',
              actionUrl: 'settings'
            }
          ],
          fullArticleGuide: `### Die Architektur des globalen Checkouts

Ein Käufer in den Niederlanden zahlt mit iDEAL, ein Schweizer mit Twint, ein US-Amerikaner mit Apple Pay oder Kreditkarte.

#### Die Checkliste für weltweite Bezahlseiten:
- **Automatische Geo-Erkennung**: Zeige dem Nutzer sofort seine Landeswährung und Flagge an.
- **Steuerbefreiung für B2B (Reverse Charge)**: Automatische Validierung europäischer USt-IdNr. im Checkout.
- **Rückbuchungs-Schutz (Chargeback Protection)**: 3D-Secure 2.0 für maximale Sicherheit.`
        },
        understandContent: {
          coreTakeaway: 'Je einfacher der Checkout für den internationalen Kunden ist, desto höher ist dein Gewinn.',
          keyPrinciples: [
            'Niemals US-Kunden zwingen, in Euro zu bezahlen – Währungsschwankungen schrecken Käufer ab',
            'B2B Reverse-Charge Prüfung direkt im Formular spart manuelle Buchhaltungsstunden'
          ]
        },
        actionTask: {
          instruction: 'Konfiguriere deinen globalen Zahlungs-Checkout:',
          inputType: 'checklist',
          checklistItems: [
            'Geo-IP Währungsumrechnung im Checkout aktiviert',
            'Lokale Bezahlmethoden (Klarna, iDEAL, Apple Pay) scharfgeschaltet',
            'Automatischer USt-IdNr. Check für B2B-Kunden hinterlegt'
          ],
          toolboxCategory: 'settings'
        }
      }
    ]
  },
  {
    id: 57,
    title: '57. Viral Loops, Referral-Engines & K-Faktor Skalierung',
    subtitle: 'Empfehlungs-Netzwerkeffekte, Virale K-Faktor Formel & Dropbox-Style Gamification',
    color: 'from-emerald-500 via-teal-600 to-indigo-600',
    badgeIcon: '🔄',
    description: 'Wachse exponentiell ohne zusätzliche Werbekosten: Erfahre, wie du virale Loops baust, bei denen jeder Neukunde im Schnitt 1,2 weitere Kunden mitbringt ($K > 1$).',
    lessons: [
      {
        id: '57.1',
        stageId: 57,
        stageTitle: '57. Die K-Faktor-Mathematik',
        title: 'Die Virale Wachstumsformel: Wie K > 1 dein Business explodieren lässt',
        durationMinutes: 30,
        description: 'Mathematik des viralen Wachstums: Einladungsrate, Konversionsrate der Eingeladenen und virale Zykluszeit optimieren.',
        learnContent: {
          videoTitle: 'Masterclass: Virale Schleifen & K-Faktor Mechaniken',
          videoDuration: '30:15',
          summaryText: 'Wenn dein K-Faktor über 1 liegt, wächst dein Unternehmen exponentiell wie ein Virus. Lerne, wie du virale Mechanismen in Software, Kurse und Communitys einbaust.',
          bulletPoints: [
            'Die K-Faktor Formel: $K = i \\times c$ (Einladungen pro Nutzer $\\times$ Konversionsrate der Einladung)',
            'Die 3 Arten viraler Loops: Inhärent viral (Zoom, Slack), Incentiviert (Dropbox) und Word-of-Mouth (Apple)',
            'Virale Zykluszeit (Viral Cycle Time): Warum eine Verkürzung der Einladezeit von 7 Tagen auf 1 Tag den Gesamterfolg vervielfacht',
            'Double-Sided Rewards: "Gib 50€, erhalte 50€" – die psychologisch stärkste Empfehlungsmechanik'
          ],
          coreConcepts: [
            {
              iconName: 'activity',
              title: 'K-FACTOR > 1.0',
              description: 'Exponentielles organisches Nutzerwachstum ohne zusätzliche Ad-Spend-Kosten.',
              highlight: true
            },
            {
              iconName: 'gift',
              title: 'DOUBLE-SIDED REWARD',
              description: 'Belohnung für Werber UND Geworbenen maximiert die Empfehlungsbereitschaft.'
            }
          ],
          resources: [
            {
              title: 'K-Faktor Rechner & Viral-Loop Blueprint',
              subtitle: 'Excel-Rechner für virale Zyklen & Einladungsraten als PDF',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'Mara CRM Referral-Engine',
              subtitle: 'Persönliche Empfehlungslinks und Belohnungs-Guthaben steuern',
              type: 'tool',
              iconName: 'users',
              actionUrl: 'affiliate'
            }
          ],
          fullArticleGuide: `### Die Architektur der viralen Schleife

Virales Wachstum ist kein Zufall, sondern das Ergebnis präzise konstruierter Anreize.

#### Die 4 Schritte des Viral-Loops:
1. **Der Aha-Moment**: Der Nutzer erlebt den ersten großen Mehrwert deines Produkts.
2. **Der virale Auslöser (Trigger)**: Zeige genau im Moment des Erfolgs den Empfehlungs-Dialog.
3. **Die Einladung**: Der Nutzer teilt seinen personalisierten Link mit 1 Klick auf WhatsApp oder LinkedIn.
4. **Das Onboarding des Eingeladenen**: Der neue Nutzer startet mit exklusiven Starter-Guthaben.`
        },
        understandContent: {
          coreTakeaway: 'Wer Kunden im Moment ihrer größten Begeisterung um eine Empfehlung bittet, erhält exponentielles Wachstum.',
          keyPrinciples: [
            'Empfehlen muss mit einem einzigen Klick möglich sein (WhatsApp Share API)',
            'Beide Seiten müssen spürbar vom Referral profitieren'
          ]
        },
        actionTask: {
          instruction: 'Implementiere deinen ersten zweiseitigen Viral-Loop:',
          inputType: 'checklist',
          checklistItems: [
            'Zweiseitigen Empfehlungs-Bonus (z. B. 20€ Guthaben für beide) definiert',
            '1-Klick-WhatsApp-Share-Button im Mitgliederbereich eingebaut',
            'Automatisierte Freischaltung der Belohnung bei erfolgreicher Neuanmeldung eingerichtet'
          ],
          toolboxCategory: 'affiliate'
        }
      },
      {
        id: '57.2',
        stageId: 57,
        stageTitle: '57. Waitlist & Milestone Referral Funnels',
        title: 'Der Robinhood-Effekt: Virale Wartelisten & Milestone-Funnels',
        durationMinutes: 28,
        description: 'Wie du vor einem Produkt-Launch 50.000+ Voranmeldungen sammelst, indem Nutzer durch Weiterempfehlungen in der Warteliste nach vorne springen.',
        learnContent: {
          videoTitle: 'Masterclass: Virale Wartelisten & Pre-Launch Gamification',
          videoDuration: '28:30',
          summaryText: 'Robinhood sammelte 1 Million Nutzer vor dem App-Start durch eine simple virale Warteliste. Lerne, wie du diesen Mechanismus für digitale Produkte, Masterclasses und Software-Releases adaptierst.',
          bulletPoints: [
            'Das Leaderboard-Prinzip: "Du bist auf Platz 1.420. Lade 3 Freunde ein, um 500 Plätze nach vorne zu springen"',
            'Milestone-Belohnungen: Bei 1 Freund (Checkliste), bei 3 Freunden (Videokurs), bei 10 Freunden (VIP-Call)',
            'Social Proof Counter: Live-Ticker mit aktuellen Eintragungen zur Steigerung der FOMO',
            'Automatisierte Status-E-Mails: Benachrichtigung, wenn ein Nutzer von anderen überholt wurde'
          ],
          coreConcepts: [
            {
              iconName: 'award',
              title: 'WAITLIST GAMIFICATION',
              description: 'Wettbewerb um die vordersten Plätze erzeugt massiven organischen Buzz.',
              highlight: true
            },
            {
              iconName: 'trending_up',
              title: 'MILESTONE UNLOCKS',
              description: 'Freischaltung exklusiver Boni bei Erreichen von 3, 5 oder 10 Referrals.'
            }
          ],
          resources: [
            {
              title: 'Virale Wartelisten Skripte & Launch-Sequenz',
              subtitle: 'E-Mail Benachrichtigungen & Belohnungsstufen als PDF',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'Mara CRM Wartelisten-Builder',
              subtitle: 'Virale Wartelisten mit Rangfolge und Referral-Tracking anlegen',
              type: 'tool',
              iconName: 'layout',
              actionUrl: 'landingpage'
            }
          ],
          fullArticleGuide: `### Die Mechanik der viralen Warteliste

Vorfreude und künstliche Verknappung sind die stärksten Treiber für Massenanmeldungen.

#### Die Phasen des Waitlist-Funnels:
- **Eintragung**: E-Mail eingeben $\rightarrow$ Sofortige Zuweisung einer Start-Platznummer.
- **Teilen-Aufforderung**: Einzigartiger Empfehlungslink mit WhatsApp-, X- und LinkedIn-Icons.
- **Erfolgs-Updates**: Sobald sich ein Freund anmeldet: "Herzlichen Glückwunsch! Du bist 150 Plätze aufgestiegen!"`
        },
        understandContent: {
          coreTakeaway: 'Menschen wollen immer das, was andere auch haben wollen – Wartelisten nutzen soziale Validierung perfekt.',
          keyPrinciples: [
            'Eindeutige Status-Visualisierung mit Fortschrittsbalken und Platzierung',
            'Attraktive digitale Meilenstein-Geschenke, die sofort herunterladbar sind'
          ]
        },
        actionTask: {
          instruction: 'Erstelle deine virale Launch-Warteliste:',
          inputType: 'checklist',
          checklistItems: [
            'Launch-Landingpage mit Wartelisten-Mechanik eingerichtet',
            '3 Meilenstein-Belohnungen für 1, 3 und 5 Empfehlungen hinterlegt',
            'Automatisierte E-Mail-Serie für Rangaufstiege aktiviert'
          ],
          toolboxCategory: 'landingpage'
        }
      }
    ]
  },
  {
    id: 58,
    title: '58. Masterclass-Produktion & Cinematic Studio-Qualität',
    subtitle: 'Kamera-Setups, 3-Punkt-Beleuchtung, High-End Audio & Teleprompter-Psychologie',
    color: 'from-amber-600 via-orange-600 to-red-600',
    badgeIcon: '🎥',
    description: 'Hebe deinen visuellen Markenwert in die oberste Liga: Baue ein atemberaubendes Heim- oder Bürostudio auf, meistere Lichtsetzung, Audio-Mastering und präsentiere vor der Kamera mit der Souveränität eines Fernsehmoderators.',
    lessons: [
      {
        id: '58.1',
        stageId: 58,
        stageTitle: '58. Studio-Setup & Licht-Architektur',
        title: 'Das Cinematic Home-Studio: 4K Kameras, Objektive & 3-Punkt-Beleuchtung',
        durationMinutes: 32,
        description: 'Vollständiger Studio-Guide: Vollformat-Sensoren, 35mm vs. 50mm Objektive, Key Light, Fill Light und stimmungsvolle RGB-Hintergrundbeleuchtung.',
        learnContent: {
          videoTitle: 'Masterclass: Professionelles Video-Studio Setup für Online-Unternehmer',
          videoDuration: '32:15',
          summaryText: 'Ein schlechtes Bild signalisiert minderwertige Qualität. Ein kristallklares 4K-Bild mit weichem Bokeh-Hintergrund positioniert dich sofort als absolute Branchen-Autorität.',
          bulletPoints: [
            'Kamera-Wahl: Sony Alpha 7 IV / FX3 vs. Blackmagic vs. hochwertige Webcams',
            'Das 3-Punkt-Lichtsystem: Key Light (Softbox 90cm), Rim/Hair Light (Kontur) und Ambient Background Lights',
            'Hintergrund-Tiefenschärfe (Bokeh): Warum f/1.4 bis f/2.8 den professionellen Kino-Look erzeugt',
            'Farbtemperatur & White Balance: 5600K Tageslicht-Konsistenz ohne Farbstiche'
          ],
          coreConcepts: [
            {
              iconName: 'video',
              title: 'CINEMATIC DEPTH',
              description: 'Verschwommener Hintergrund hebt den Sprecher mit maximalem Kontrast hervor.',
              highlight: true
            },
            {
              iconName: 'sun',
              title: '3-POINT LIGHTING',
              description: 'Perfekte Ausleuchtung ohne harte Schatten im Gesicht.'
            }
          ],
          resources: [
            {
              title: 'Studio Gear Guide & Einkaufsliste (Budget bis High-End)',
              subtitle: 'Detaillierte Hardware-Empfehlungen als PDF',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'GOM-MAR Studio Setup Checkliste',
              subtitle: 'Kamera- und Lichteinstellungen Schritt für Schritt',
              type: 'tool',
              iconName: 'settings',
              actionUrl: 'settings'
            }
          ],
          fullArticleGuide: `### Die Architektur des perfekten Studios

Dein Video-Hintergrund ist dein Schaufenster. Er transportiert Professionalität, Wohlstand und Kompetenz.

#### Die 4 Säulen des Cinematic Looks:
1. **Das Hauptlicht (Key Light)**: Große Softbox schräg oben im 45-Grad-Winkel platziert.
2. **Das Kantenlicht (Rim Light)**: Trennt Schultern und Haare vom Hintergrund.
3. **Der Raumklang**: Akustikpaneele zur Eliminierung jeglichen Nachhalls.
4. **Die Farbpalette**: Warme Holztöne oder minimalistische Kunst im Hintergrund.`
        },
        understandContent: {
          coreTakeaway: 'Erstklassige Video- und Audioqualität rechtfertigt vier- bis fünfstellige Angebotspreise.',
          keyPrinciples: [
            'Licht ist wichtiger als die Kamera – selbst eine 5.000€ Kamera sieht bei schlechtem Licht furchtbar aus',
            'Niemals direkt vor eine weiße Wand stellen – schaffe mindestens 2 Meter Abstand zum Hintergrund'
          ]
        },
        actionTask: {
          instruction: 'Optimiere dein aktuelles Video-Aufnahme-Setup:',
          inputType: 'checklist',
          checklistItems: [
            'Hauptlicht (Softbox) im 45-Grad-Winkel auf Augenhöhe ausgerichtet',
            'Hintergrund-Elemente mit warmen Lichtakzenten aufgewertet',
            'Manuelle Belichtung und 5600K Weißabgleich an der Kamera fixiert'
          ],
          toolboxCategory: 'content'
        }
      },
      {
        id: '58.2',
        stageId: 58,
        stageTitle: '58. Audio-Mastering & Teleprompter',
        title: 'Studio-Audio & Teleprompter: Broadcast-Sound & Souveränes Sprechen',
        durationMinutes: 30,
        description: 'Shure SM7B vs. Richtrohrmikrofone, Equalizer & Kompressor Einstellungen sowie freies Sprechen mit dem Teleprompter.',
        learnContent: {
          videoTitle: 'Masterclass: Broadcast Audio Mastering & Teleprompter Beherrschung',
          videoDuration: '30:40',
          summaryText: 'Zuschauer verzeihen ein mittelmäßiges Bild, aber niemals schlechten Ton. Lerne, wie du deine Stimme mit Kompressor, De-Esser und Bass-Boost auf Rundfunk-Niveau anhebst und Teleprompter ohne sichtbare Augenbewegungen nutzt.',
          bulletPoints: [
            'Mikrofon-Positionierung: Nahbesprechungseffekt (Proximity Effect) für warme, tiefe Stimme',
            'Audio-Processing Kette: Noise Gate $\\rightarrow$ High-Pass Filter $\\rightarrow$ De-Esser $\\rightarrow$ EQ $\\rightarrow$ Kompressor',
            'Beam-Splitter Teleprompter: Den Text direkt vor der Kameralinse lesen, ohne dass der Zuschauer es merkt',
            'Augenbewegungs-Beseitigung: Font-Größe, Lesegeschwindigkeit und 2 Meter Mindestabstand zur Linse'
          ],
          coreConcepts: [
            {
              iconName: 'mic',
              title: 'BROADCAST AUDIO',
              description: 'Kompakter, satter Radiosound erzeugt unbewusst maximales Vertrauen.',
              highlight: true
            },
            {
              iconName: 'eye',
              title: 'PROMPTER MASTERY',
              description: 'Flüssiges Präsentieren langer Skripte mit direktem Augenkontakt zum Kunden.'
            }
          ],
          resources: [
            {
              title: 'Audio Equalizer & Compressor Preset-Guide',
              subtitle: 'OBS, Premiere & DaVinci Resolve Presets als PDF',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'GOM-MAR KI Audio-Enhancer',
              subtitle: 'Hintergrundrauschen und Hall aus Aufnahmen per KI entfernen',
              type: 'tool',
              iconName: 'cpu',
              actionUrl: 'tools'
            }
          ],
          fullArticleGuide: `### Die Kunst der fehlerfreien Aufnahme

Mit einem Teleprompter sparst du 80% der Aufnahme- und Schnittzeit, da keine Versprecher mehr vorkommen.

#### Die Teleprompter-Regeln:
- **Abstand**: Mindestens 2 Meter Abstand zwischen dir und der Kamera, damit die Pupillen zentriert bleiben.
- **Stimme modulieren**: Betone Schlüsselwörter und mache bewusste Kunstpausen, damit es nicht vorgelesen klingt.
- **Audio-Level**: Pegel die Lautstärke so ein, dass Spitzen bei -6dB bis -3dB liegen (niemals ins Rote/Clipping laufen).`
        },
        understandContent: {
          coreTakeaway: 'Wer professionell klingt und flüssig spricht, schließt im Video dreimal so viele Kunden ab.',
          keyPrinciples: [
            'Audio-Pegel immer vor der Aufnahme mit Kopfhörern kontrollieren',
            'Kamera-Linse auf exakter Augenhöhe positionieren (weder von oben noch von unten filmen)'
          ]
        },
        actionTask: {
          instruction: 'Konfiguriere deine Audio- und Teleprompter-Kette:',
          inputType: 'checklist',
          checklistItems: [
            'Mikrofon mit De-Esser und Kompressor-Filter in OBS/Schnittprogramm kalibriert',
            'Teleprompter-App mit passender Scrollgeschwindigkeit auf Linsenachse eingerichtet',
            'Probedurchlauf von 3 Minuten ohne sichtbare Augenbewegung aufgenommen'
          ],
          toolboxCategory: 'content'
        }
      }
    ]
  },
  {
    id: 59,
    title: '59. High-Converting Newsletter & Paid Substack Empires',
    subtitle: 'E-Mail Publishing, Bezahl-Abonnements, Curated Curation & Sponsoring-Deals',
    color: 'from-amber-500 via-orange-600 to-yellow-600',
    badgeIcon: '📰',
    description: 'Baue ein profitables Medien-Unternehmen mit einem E-Mail-Newsletter auf: Monetarisiere durch monatliche Abos (Substack/Beehiiv), verkaufe Werbeplätze an Konzerne für 500€+ pro Ausgabe und baue eine loyale Leserschaft auf.',
    lessons: [
      {
        id: '59.1',
        stageId: 59,
        stageTitle: '59. Newsletter-Architektur & Abonnenten-Wachstum',
        title: 'Die Newsletter-Maschine: 10.000 Leser in 90 Tagen aufbauen',
        durationMinutes: 29,
        description: 'Wie moderne Newsletter wie Morning Brew, Milk Road oder TLDR aufgebaut sind und wie du Empfehlungsnetzwerke für schnelles Leserwachstum nutzt.',
        learnContent: {
          videoTitle: 'Masterclass: Moderne Newsletter-Modelle & Abonnenten-Akquise',
          videoDuration: '29:40',
          summaryText: 'Ein eigener Newsletter ist das wertvollste Medien-Asset der Welt, weil du keinen Algorithmen ausgeliefert bist. Erfahre, wie du hochfokussierte Nischen-Newsletter aufbaust und Leser über Co-Registrierungen gewinnst.',
          bulletPoints: [
            'Newsletter-Formate: Der Kurator (kuratierte Links), der Deep-Dive (Fachanalysen) und der Ticker (Branchennews)',
            'Co-Registrierungs-Netzwerke (SparkLoop, Beehiiv Boosts): 2€ bis 4€ pro neuem Abonnenten verdienen oder wachsen',
            'Die 3-Sekunden-Betreffzeile: Warum kurze, kleingeschriebene Betreffs die höchste Öffnungsrate erzielen',
            'Lead-Magnete für Newsletter: Exklusive Datenbanken (Airtable/Notion) als Eintragungsmagnet'
          ],
          coreConcepts: [
            {
              iconName: 'mail',
              title: 'OWNED AUDIENCE',
              description: 'Direkter Kanal zu zehntausenden Lesern ohne Plattform-Risiko.',
              highlight: true
            },
            {
              iconName: 'repeat',
              title: 'CO-REGISTRATION BOOSTS',
              description: 'Gegenseitige Empfehlung von Newslettern für rasanten Abonnenten-Zuwachs.'
            }
          ],
          resources: [
            {
              title: 'Newsletter Launch & Content-Matrix Blueprint',
              subtitle: 'Struktur-Vorlagen für wöchentliche Ausgaben als PDF',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'Mara CRM Newsletter Broadcasting Engine',
              subtitle: 'E-Mail Kampagnen an zehntausende Kontakte versenden & segmentieren',
              type: 'tool',
              iconName: 'send',
              actionUrl: 'email'
            }
          ],
          fullArticleGuide: `### Die Anatomie eines profitablen Newsletters

Ein guter Newsletter wird nicht überflogen, sondern ist das morgendliche Ritual deiner Leser.

#### Die 4 Bausteine einer Ausgabe:
1. **Das Big Picture**: 1 prägnante Nachricht, die die Branche aktuell bewegt.
2. **Die 3 Key Insights**: Schnelle, auf den Punkt gebrachte Analysen mit Mehrwert.
3. **Der Sponsor-Slot**: Eine native Werbeanzeige, die wie nützlicher Inhalt formuliert ist.
4. **Das Meme oder Zitat des Tages**: Ein unterhaltsamer Abschluss für hohe Klickraten.`
        },
        understandContent: {
          coreTakeaway: 'Wer die tägliche Aufmerksamkeit im Postfach besitzt, kann jedes beliebige Produkt verkaufen.',
          keyPrinciples: [
            'Lieferzeit und Wochentag müssen wie ein Uhrwerk eingehalten werden (z. B. jeden Dienstag 07:30 Uhr)',
            'Die E-Mail muss auf dem Smartphone in unter 4 Minuten lesbar sein'
          ]
        },
        actionTask: {
          instruction: 'Konzipiere dein Newsletter-Format:',
          inputType: 'checklist',
          checklistItems: [
            'Eindeutigen Newsletter-Namen und Kern-Nutzenversprechen definiert',
            'Wöchentlichen Veröffentlichungs-Rhythmus und Sendezeit festgelegt',
            'Erste Ausgabe mit Begrüßung und 3 Branchen-Insights im Mara CRM entworfen'
          ],
          toolboxCategory: 'email'
        }
      },
      {
        id: '59.2',
        stageId: 59,
        stageTitle: '59. Sponsoring & Paid Substack Abos',
        title: 'Newsletter-Monetarisierung: Sponsoren-Akquise & Bezahl-Abonnements',
        durationMinutes: 31,
        description: 'Wie du 50€ bis 100€ CPM für Werbeplätze verlangst und zahlende Abonnenten für exklusive Premium-Reports gewinnst.',
        learnContent: {
          videoTitle: 'Masterclass: Newsletter-Sponsoring & Substack Paid Tiers',
          videoDuration: '31:20',
          summaryText: 'Ein Newsletter mit 5.000 B2B-Lesern kann monatlich 5.000€ bis 10.000€ an Sponsoring-Einnahmen generieren. Erfahre, wie du Sponsoren akquirierst, Media-Kits erstellst und Premium-Abos mit wiederkehrendem Monatsbeitrag verkaufst.',
          bulletPoints: [
            'Sponsoring-Pricing: CPM-Modell (Kosten pro 1.000 Öffnungen) vs. Flatrate-Modell pro Ausgabe',
            'Das Media-Kit: Öffnungsraten, Klickraten und Zielgruppen-Demografie überzeugend präsentieren',
            'Der Paid-Subscription Paywall-Cut: Free-Inhalte anteasern und die entscheidende Analyse hinter der Bezahlschranke sperren',
            'Sponsoren-Outreach: Firmen anschreiben, die bereits bei Konkurrenz-Newslettern Werbung schalten'
          ],
          coreConcepts: [
            {
              iconName: 'dollar-sign',
              title: 'PREMIUM CPM PRICING',
              description: 'Kaufkräftige B2B-Listen erzielen Werbepreise von bis zu 100€ pro 1.000 Öffnungen.',
              highlight: true
            },
            {
              iconName: 'lock',
              title: 'PAYWALL CURATION',
              description: 'Exklusive Markt-Reports und Datenbanken für zahlende Abonnenten freischalten.'
            }
          ],
          resources: [
            {
              title: 'Newsletter Media-Kit & Sponsoring Pitch-Vorlage',
              subtitle: 'Präsentation für Werbepartner als PDF',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'Mara CRM E-Mail Sponsoring Tracker',
              subtitle: 'Klickraten für Sponsoren-Links in Echtzeit erfassen',
              type: 'tool',
              iconName: 'bar-chart-2',
              actionUrl: 'email'
            }
          ],
          fullArticleGuide: `### Die zwei Wege der Monetarisierung

Du kannst deinen Newsletter kostenlos anbieten und Firmen für Werbeplätze bezahlen lassen, oder die Leser direkt zur Kasse bitten.

#### Die Kombination beider Modelle:
- **Kostenlose Freitags-Ausgabe**: Erzeugt virales Wachstum und verkauft Sponsoren-Plätze.
- **Kostenpflichtige Montags-Analyse (19€/Monat)**: Liefert tiefe Einblicke für Profis und erzeugt planbare Abogebühren (MRR).`
        },
        understandContent: {
          coreTakeaway: 'Kuratierte Informationen sparen dem Leser Zeit – und Zeitersparnis ist das wertvollste Gut.',
          keyPrinciples: [
            'Niemals mehr als 1-2 Sponsoren pro Ausgabe platzieren, um das Leseerlebnis nicht zu zerstören',
            'Werbepartner immer vorab auf Produktqualität prüfen, um das Vertrauen der Leser zu schützen'
          ]
        },
        actionTask: {
          instruction: 'Erstelle dein Media-Kit für Newsletter-Sponsoren:',
          inputType: 'checklist',
          checklistItems: [
            'Media-Kit One-Pager mit Öffnungsraten und Leserprofil erstellt',
            'Preispaket für 4 Ausgaben im Monat kalkuliert',
            'Liste von 10 potenziellen Software-Sponsoren für Outreach recherchiert'
          ],
          toolboxCategory: 'email'
        }
      }
    ]
  },
  {
    id: 60,
    title: '60. No-Code App-Building & Custom Client Portale',
    subtitle: 'Bubble, FlutterFlow, Glide & Maßgeschneiderte Kunden-Web-Apps ohne Programmierkenntnisse',
    color: 'from-violet-600 via-indigo-600 to-blue-600',
    badgeIcon: '📱',
    description: 'Entwickle vollwertige Web- und Mobile-Apps ohne eine einzige Zeile Code zu schreiben: Baue eigene Kundenportale, interaktive Dashboards und SaaS-Tools mit modernen No-Code Plattformen in Rekordzeit.',
    lessons: [
      {
        id: '60.1',
        stageId: 60,
        stageTitle: '60. No-Code Datenbanken & Logik',
        title: 'Die No-Code Revolution: Relationale Datenbanken & Workflows mit FlutterFlow & Bubble',
        durationMinutes: 33,
        description: 'Wie du Datenstrukturen (User, Orders, Tickets) anlegst, bedingte Logik (If/Else) baust und native iOS & Android Apps erstellst.',
        learnContent: {
          videoTitle: 'Masterclass: No-Code Entwicklung & App-Architektur',
          videoDuration: '33:15',
          summaryText: 'Vor 5 Jahren kostete eine App-Entwicklung 50.000€ und dauerte 6 Monate. Heute baust du mit No-Code Plattformen wie FlutterFlow oder Bubble in 7 Tagen eine voll funktionsfähige App mit Login, Stripe-Abrechnung und Datenbank.',
          bulletPoints: [
            'Datenbank-Design: Tabellen, Relationen (1-zu-N, N-zu-M) und Sicherheitsregeln für Nutzerdaten',
            'Visuelle Logik-Workflows: Wenn Button geklickt $\\rightarrow$ Prüfe Abo-Status $\\rightarrow$ Speichere Eintrag $\\rightarrow$ Sende Push-Notification',
            'Responsive UI Design: Flexible Layouts für Desktop, Tablet und Smartphone-Displays',
            'App-Store Deployment: Veröffentlichung im Apple App Store und Google Play Store'
          ],
          coreConcepts: [
            {
              iconName: 'database',
              title: 'RELATIONAL DATA',
              description: 'Strukturierte Datenspeicherung mit individuellen Benutzerrechten.',
              highlight: true
            },
            {
              iconName: 'cpu',
              title: 'VISUAL LOGIC',
              description: 'Komplexe App-Funktionen ohne Syntaxfehler visuell zusammenklicken.'
            }
          ],
          resources: [
            {
              title: 'No-Code Datenbank- & Architektur Schema',
              subtitle: 'Visuelles ER-Diagramm für Kundenportale als PDF',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'Mara CRM Webhook & API Schnittstelle',
              subtitle: 'No-Code App direkt mit deinem CRM synchronisieren',
              type: 'tool',
              iconName: 'code',
              actionUrl: 'settings'
            }
          ],
          fullArticleGuide: `### Die Architektur von No-Code Anwendungen

Eine moderne App besteht aus drei Schichten: Benutzeroberfläche (Frontend), Geschäftslogik (Workflows) und Datenspeicher (Backend).

#### Die 4 Schritte zum App-MVP:
1. **Das Datenbankschema**: Welche Daten müssen gespeichert werden (z. B. User, Fortschritt, Notizen)?
2. **Die Screens**: Login-Screen, Dashboard, Detailansicht und Profilseite gestalten.
3. **Die Aktionen verknüpfen**: Lade Daten dynamisch aus der Datenbank in die UI-Elemente.
4. **Authentifizierung**: Sichere Registrierung via E-Mail, Google oder Apple-Login.`
        },
        understandContent: {
          coreTakeaway: 'Wer No-Code beherrscht, kann jede Geschäftsidee an einem Wochenende als funktionale Software testen.',
          keyPrinciples: [
            'Sicherheit an erster Stelle: Datenbank-Sicherheitsregeln (Privacy Rules) immer vor dem Launch testen',
            'Mobil-First denken: Die meisten Nutzer greifen über das Smartphone auf Kundenportale zu'
          ]
        },
        actionTask: {
          instruction: 'Skizziere die Datenstruktur für dein Kunden-Portal:',
          inputType: 'checklist',
          checklistItems: [
            'Datenbank-Tabellen (User, Kurse, Aufgaben, Buchungen) aufgeschrieben',
            'Benutzeroberfläche für das Haupt-Dashboard auf Papier oder Figma skizziert',
            'API-Verbindung zwischen No-Code App und Mara CRM getestet'
          ],
          toolboxCategory: 'content'
        }
      },
      {
        id: '60.2',
        stageId: 60,
        stageTitle: '60. Custom Client Portale für Agenturen',
        title: 'Das High-End Kundenportal: Ticketing, Asset-Freigaben & Reporting',
        durationMinutes: 29,
        description: 'Wie du deinen Agentur- und Coachingkunden ein Marken-Portal bereitstellst, das E-Mail-Chaos beendet und die Kundenbindung maximiert.',
        learnContent: {
          videoTitle: 'Masterclass: Agentur-Kundenportale & Self-Service Dashboards',
          videoDuration: '29:50',
          summaryText: 'Kunden lieben Transparenz. Ein gebrandetes Kundenportal mit Live-Erfolgsmetriken, Ticket-System und einfacher Datei-Freigabe lässt deine Agentur sofort wie ein 50-Millionen-Konzern wirken.',
          bulletPoints: [
            'Self-Service Onboarding: Kunde lädt Logos, Zugangsdaten und Briefings selbstständig hoch',
            'Live-Performance Dashboard: Google Ads und Meta ROAS Zahlen direkt im Portal visualisieren',
            '1-Klick Asset-Freigabe: Kunde genehmigt Werbetexte und Videos mit grünem Freigabe-Button',
            'Automatisches Ticket-Routing: Support-Anfragen landen direkt beim zuständigen Mitarbeiter'
          ],
          coreConcepts: [
            {
              iconName: 'layout',
              title: 'CLIENT SELF-SERVICE',
              description: 'Kunden finden alle Dateien, Rechnungen und Berichte an einem Ort.',
              highlight: true
            },
            {
              iconName: 'check-circle-2',
              title: 'ASSET APPROVAL',
              description: 'Keine verlorenen E-Mail-Freigaben mehr – alles rechtssicher protokolliert.'
            }
          ],
          resources: [
            {
              title: 'Client Portal Feature-Katalog & Wireframes',
              subtitle: 'Modulares Portal-Konzept für Agenturen als PDF',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'Mara CRM Kundenportal-Manager',
              subtitle: 'Individuelle Zugänge für Kunden mit eigenen Berechtigungen verwalten',
              type: 'tool',
              iconName: 'users',
              actionUrl: 'crm'
            }
          ],
          fullArticleGuide: `### Die Überlegenheit moderner Kundenportale

E-Mail-Verkehr führt zu Missverständnissen und verlorenen Dateien. Ein zentrales Portal schafft Ordnung.

#### Die wichtigsten Portal-Module:
- **Projekt-Timeline**: Visueller Fortschrittsbalken über den aktuellen Umsetzungsstatus.
- **Freigabe-Center**: Videos und Grafiken ansehen und per Klick Feedback hinterlassen.
- **Wissens-Hub**: Eingebettete Schulungsvideos zur Software-Nutzung.
- **Rechnungsarchiv**: Download aller vergangenen Monatsrechnungen als PDF.`
        },
        understandContent: {
          coreTakeaway: 'Ein erstklassiges Kundenportal senkt den Support-Aufwand um 70% und verhindert Kundenkündigungen.',
          keyPrinciples: [
            'Passwortloser Login (Magic Links) erhöht die Nutzungsrate enorm',
            'Design im Corporate Design deiner Agentur stärkt das Markenvertrauen'
          ]
        },
        actionTask: {
          instruction: 'Richte das Kundenportal für deine Kunden ein:',
          inputType: 'checklist',
          checklistItems: [
            'Eigener Logo-Upload und Firmenfarben im Kundenportal hinterlegt',
            'Projekt-Meilensteine und Freigabe-Bereich für Kunden aktiviert',
            'Testkunden-Zugang angelegt und Onboarding-Pfad durchlaufen'
          ],
          toolboxCategory: 'crm'
        }
      }
    ]
  },
  {
    id: 61,
    title: '61. Direct Response TV (DRTV) & Connected TV (CTV) Ads',
    subtitle: 'Werbung auf Netflix, YouTube TV, Amazon Prime & Smart-TVs für digitale Marken',
    color: 'from-red-600 via-rose-700 to-slate-900',
    badgeIcon: '📺',
    description: 'Bringe deine Marke auf die großen Wohnzimmer-Bildschirme: Schalte zielgerichtete Connected TV (CTV) Ads auf Streaming-Diensten, nutze QR-Code Funnels und skaliere Vertrauen über Fernsehwerbung.',
    lessons: [
      {
        id: '61.1',
        stageId: 61,
        stageTitle: '61. Connected TV (CTV) Architektur',
        title: 'Streaming-Werbung auf Smart-TVs: Netflix, Prime Video & YouTube TV Ads',
        durationMinutes: 30,
        description: 'Wie programmatische TV-Werbung funktioniert, warum CTV-Kosten günstiger sind als gedacht und wie du Zielgruppen postleitzahlengenau targetierst.',
        learnContent: {
          videoTitle: 'Masterclass: Connected TV (CTV) & Streaming Ad Buying',
          videoDuration: '30:30',
          summaryText: 'Früher war Fernsehwerbung unbezahlbar. Heute kannst du über Connected TV (CTV) Plattformen gezielt Haushalte mit hohem Einkommen auf Netflix, Hulu, Disney+ und Smart-TVs bespielen – ab 500€ Budget.',
          bulletPoints: [
            'Connected TV (CTV) vs. Lineares TV: 100% messbare Ausspielung, unüberspringbare 15-30 Sekunden Spots',
            'Haushalts-Targeting: Filter nach Einkommen, Wohneigentum, Postleitzahl und Interessen',
            'Cross-Device Retargeting: Wer den TV-Spot sieht, erhält 5 Minuten später eine Anzeige auf seinem Smartphone',
            'Produktions-Standards für TV: Broadcast-Farbräume, Audio-Loudness (-24 LKFS) und 4K Master'
          ],
          coreConcepts: [
            {
              iconName: 'tv',
              title: 'STREAMING PRESTIGE',
              description: 'Deine Marke erscheint direkt neben Hollywood-Blockbustern auf dem Wohnzimmer-TV.',
              highlight: true
            },
            {
              iconName: 'smartphone',
              title: 'CROSS-DEVICE RETARGETING',
              description: 'Automatisches Nachfassen auf dem Handy des TV-Zuschauers.'
            }
          ],
          resources: [
            {
              title: 'CTV Ad Buying Guide & Plattform-Übersicht',
              subtitle: 'Einrichtung über Google DV360 & Mountain CTV als PDF',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'Mara CRM Multi-Touch Attribution',
              subtitle: 'TV-gestützte Besucheranstiege im CRM messen',
              type: 'tool',
              iconName: 'bar-chart-2',
              actionUrl: 'crm'
            }
          ],
          fullArticleGuide: `### Die neue Ära der Wohnzimmer-Werbung

Smart-TVs sind heute mit dem Internet verbunden und ermöglichen dieselbe granulare Zielgruppenauswahl wie Facebook Ads.

#### Die Vorteile von CTV Ads:
- **100% View-Through-Rate (VTR)**: TV-Spots können nicht übersprungen oder mit Ad-Blockern blockiert werden.
- **Hohe Aufmerksamkeit**: Der Zuschauer sitzt entspannt auf der Couch und schaut auf einen 65-Zoll-Bildschirm.
- **Prestige-Faktor**: "Ich habe euch gestern im Fernsehen gesehen!" erzeugt sofortigen Autoritätsstatus.`
        },
        understandContent: {
          coreTakeaway: 'Wer im Fernsehen wirbt, wird im Kopf des Kunden automatisch zum unangefochtenen Marktführer.',
          keyPrinciples: [
            'Audio muss von der ersten Sekunde an fesseln, da manche Zuschauer auf ihr Handy schauen',
            'Immer einen großen, kontrastreichen QR-Code in der Bildschirmecke einblenden'
          ]
        },
        actionTask: {
          instruction: 'Konzipiere deinen ersten 30-Sekunden TV-Spot:',
          inputType: 'checklist',
          checklistItems: [
            '30-Sekunden Storyboard mit klarem Problem-Lösungs-Bogen erstellt',
            'Dynamischen QR-Code mit Tracking-Parameter für TV-Zuschauer generiert',
            'Haushalts-Zielgruppen nach PLZ und Einkommen im Kampagnen-Manager definiert'
          ],
          toolboxCategory: 'landingpage'
        }
      },
      {
        id: '61.2',
        stageId: 61,
        stageTitle: '61. QR-Code TV-Funnels & Second-Screen',
        title: 'Der Second-Screen Funnel: TV-Zuschauer aufs Smartphone leiten',
        durationMinutes: 28,
        description: 'Wie du animierte Scan-Aufforderungen, SMS-Keywords und TV-spezifische Rabatt-Codes einsetzt.',
        learnContent: {
          videoTitle: 'Masterclass: Second-Screen TV Funnels & QR-Conversion',
          videoDuration: '28:40',
          summaryText: '88% aller Menschen nutzen das Smartphone während des Fernsehens (Second Screen). Lerne, wie du dieses Verhalten nutzt, um TV-Zuschauer mit QR-Codes in Millisekunden auf deine mobile Landingpage zu ziehen.',
          bulletPoints: [
            'Der animierte QR-Code: Pulsierende Rahmen und Pfeile erhöhen die Scan-Rate um das Dreifache',
            'Die 10-Sekunden Mobile Landingpage: Extrem reduzierte Formulare für Couch-Besucher',
            'SMS-Fallback: "Sende \'ERFOLG\' an die 8888 für deine kostenlose Analyse"',
            'Baseline-Lift-Attribution: Messung des organischen Suchanstiegs während der TV-Ausstrahlung'
          ],
          coreConcepts: [
            {
              iconName: 'qr-code',
              title: 'PULSING QR-HOOK',
              description: 'Animierte visuelle Elemente animieren zum sofortigen Griff zum Smartphone.',
              highlight: true
            },
            {
              iconName: 'trending_up',
              title: 'BASELINE LIFT',
              description: 'Messung direkter Marken-Suchanfragen im Ausstrahlungsfenster.'
            }
          ],
          resources: [
            {
              title: 'TV Landingpage & QR-Design Vorlagen',
              subtitle: 'Mobile Seiten für TV-Traffic optimieren als PDF',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'Mara Landingpage TV-Speed Optimizer',
              subtitle: 'Landingpages für 100% Mobile Ladezeit <800ms optimieren',
              type: 'tool',
              iconName: 'zap',
              actionUrl: 'landingpage'
            }
          ],
          fullArticleGuide: `### Die Psychologie des Second-Screen Nutzers

Ein TV-Zuschauer hat wenig Geduld. Wenn der QR-Code nicht sofort lädt oder das Formular zu lang ist, schaut er wieder auf den Film.

#### Die Checkliste für TV-Landingpages:
1. **Kein Menü**: Entferne Header, Footer und Ablenkungen.
2. **Ein einziges Eingabefeld**: Nur die E-Mail-Adresse oder Telefonnummer abfragen.
3. **Sofortige Bestätigung**: Sende den Gutschein oder Zugangscode sofort per SMS aufs Handy.`
        },
        understandContent: {
          coreTakeaway: 'Der Übergang vom TV zum Smartphone muss absolut reibungslos in unter 5 Sekunden gelingen.',
          keyPrinciples: [
            'QR-Code muss mindestens 10 Sekunden lang groß im Bild sichtbar sein',
            'Landingpage muss für Mobile Safari und Chrome perfekt optimiert sein'
          ]
        },
        actionTask: {
          instruction: 'Optimiere deine Landingpage für TV-Traffic:',
          inputType: 'checklist',
          checklistItems: [
            'Extrem schnelle, ablenkungsfreie Mobile-Landingpage aufgesetzt',
            'SMS-Opt-in Automation für Blitz-Gutscheinversand scharfgeschaltet',
            'Tracking für TV-Sendezeiten im Mara CRM eingerichtet'
          ],
          toolboxCategory: 'landingpage'
        }
      }
    ]
  },
  {
    id: 62,
    title: '62. High-Performance Team-Recruiting & Leadership',
    subtitle: 'A-Player Recruiting, 4-Stufen Interview-Funnel, OKRs & Leistungsvergütung',
    color: 'from-slate-800 via-indigo-950 to-blue-900',
    badgeIcon: '👥',
    description: 'Baue ein Weltklasse-Team auf, das dein Unternehmen ohne deine tägliche Anwesenheit führt: Meistere die A-Player Rekrutierung, Scorecards, Zielvereinbarungen (OKRs) und leistungsorientierte Bonussysteme.',
    lessons: [
      {
        id: '62.1',
        stageId: 62,
        stageTitle: '62. A-Player Recruiting & Job-Funnels',
        title: "Die 'Who'-Methode: Wie du die besten 5% der Talente findest und einstellst",
        durationMinutes: 34,
        description: 'Vermeide 50.000€ Fehlbesetzungen: Scorecards statt Job-Beschreibungen, Probearbeiten und Referenzprüfungen der Spitzenklasse.',
        learnContent: {
          videoTitle: 'Masterclass: A-Player Recruiting & Talent-Akquise',
          videoDuration: '34:20',
          summaryText: 'Ein B-Player stellt C-Player ein. Ein A-Player stellt A+-Player ein. Lerne, wie du dein Unternehmen für Top-Talente attraktiv machst, Bewerber in einem 4-Stufen-Trichter filterst und echte Macher identifizierst.',
          bulletPoints: [
            'Die Stellen-Scorecard: Klare Leistungsergebnisse definieren statt schwammiger Aufgabenbeschreibungen',
            'Der 4-Stufen Recruiting-Funnel: Video-Bewerbung $\\rightarrow$ Screening Call $\\rightarrow$ Fachaufgabe $\\rightarrow$ Kultur-Interview',
            'Die bezahlte Probearbeit (Test-Project): 3-5 Tage reale Mitarbeit zur Überprüfung von Tempo und Arbeitsqualität',
            'Referenz-Checks: Warum du ehemalige Chefs anrufen musst und welche Fragen die Wahrheit enthüllen'
          ],
          coreConcepts: [
            {
              iconName: 'award',
              title: 'A-PLAYER SCORECARD',
              description: 'Definition messbarer Zielergebnisse vor Veröffentlichung der Stellenanzeige.',
              highlight: true
            },
            {
              iconName: 'check-square',
              title: 'PAID WORK TRIAL',
              description: 'Reale Probeaufgaben entlarven Blender und beweisen echte Umsetzungsstärke.'
            }
          ],
          resources: [
            {
              title: 'Recruiting Scorecard & Interview-Leitfaden',
              subtitle: 'Fragenkatalog für A-Player Interviews als PDF',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'Mara CRM Bewerber-Pipeline (ATS)',
              subtitle: 'Bewerbungen mit Phasen (Screening, Test, Angebot) im CRM verwalten',
              type: 'tool',
              iconName: 'users',
              actionUrl: 'crm'
            }
          ],
          fullArticleGuide: `### Die Wissenschaft der Personalauswahl

Fehlbesetzungen kosten nicht nur Gehalt, sondern zerstören Team-Dynamik und verlangsamen das Unternehmenswachstum.

#### Die 4 Stufen des Auswahlprozesses:
1. **Das 3-Minuten Video**: Bewerber beantworten 3 Fragen per Video (sortiert unmotivierte Bewerber sofort aus).
2. **Der Kultur-Check**: Passen die Werte des Bewerbers zur Firmen-DNA?
3. **Das Test-Projekt**: Eine reale Arbeitsaufgabe, die nach Zeit und Qualität bewertet wird.
4. **Der Referenz-Call**: "Auf einer Skala von 1 bis 10: Wie gerne würden Sie Herrn/Frau X wieder einstellen?"`
        },
        understandContent: {
          coreTakeaway: 'Stelle langsam und bedacht ein, aber trenne dich schnell von Fehlbesetzungen.',
          keyPrinciples: [
            'Niemals Kompromisse bei der Kultur-Passung eingehen',
            'Top-Leute suchen nach Verantwortung, klaren Zielen und Wachstumsmöglichkeiten'
          ]
        },
        actionTask: {
          instruction: 'Erstelle eine Scorecard für deine nächste Schlüsselstelle:',
          inputType: 'checklist',
          checklistItems: [
            '3 messbare Kern-Ergebnisse für die Position definiert (z. B. "100 Leads/Monat")',
            'Bewerbungs-Formular mit Video-Upload im Mara CRM angelegt',
            'Standardisierte Test-Aufgabe für Kandidaten vorbereitet'
          ],
          toolboxCategory: 'crm'
        }
      },
      {
        id: '62.2',
        stageId: 62,
        stageTitle: '62. OKRs & Performance Leadership',
        title: 'Führung ohne Mikromanagement: OKRs, Dashboards & variable Vergütung',
        durationMinutes: 31,
        description: 'Wie Objectives & Key Results (OKRs) das gesamte Team auf dieselben Quartalsziele ausrichten und wie Performance-Boni motivieren.',
        learnContent: {
          videoTitle: 'Masterclass: OKR-Frameworks & Leistungs-Führung',
          videoDuration: '31:30',
          summaryText: 'Wenn jeder Mitarbeiter seine KPIs kennt und selbstverantwortlich steuert, musst du nicht mehr kontrollieren. Erfahre, wie du Google-Style OKRs implementierst und wöchentliche 15-Minuten Stand-Ups führst.',
          bulletPoints: [
            'Das OKR-System: 3 qualitative Ziele (Objectives) mit je 3 messbaren Schlüsselergebnissen (Key Results) pro Quartal',
            'Das wöchentliche PPP-Meeting: Progress (Fortschritt), Plans (Pläne) und Problems (Hürden)',
            'Leistungsorientierte Vergütung: Basis-Gehalt + Quartals-Boni gekoppelt an Teamerfolg und Eigenleistung',
            'Virtuelle Team-Kultur: Asynchrone Kommunikation via Slack/Loom für maximale Fokuszeit'
          ],
          coreConcepts: [
            {
              iconName: 'target',
              title: 'OKR ALIGNMENT',
              description: 'Jeder Mitarbeiter weiß exakt, wie seine tägliche Arbeit zum Unternehmensziel beiträgt.',
              highlight: true
            },
            {
              iconName: 'dollar-sign',
              title: 'PROFIT SHARING',
              description: 'Erfolgsbeteiligungen verwandeln Angestellte in mitdenkende Unternehmer.'
            }
          ],
          resources: [
            {
              title: 'Quartals-OKR Sheet & Stand-Up Agenda Template',
              subtitle: 'Zielvereinbarungs-System für Teams als PDF',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'Mara CRM Mitarbeiter-Ziel-Tracker',
              subtitle: 'Team-Performance und Quartalsziele im Dashboard überwachen',
              type: 'tool',
              iconName: 'activity',
              actionUrl: 'settings'
            }
          ],
          fullArticleGuide: `### Führung durch Klarheit und Autonomie

Mikromanagement erstickt Motivation. Klare Kennzahlen und Freiräume entfesseln Höchstleistungen.

#### Der wöchentliche Führungs-Rhythmus:
- **Montag (09:00 Uhr)**: 20-Minuten Team-Kickoff mit Fokus auf die Wochenziele.
- **Mittwoch**: Asynchroner Check-in via Chat (Gibt es Blocker?).
- **Freitag (16:00 Uhr)**: Wins der Woche feiern und KPI-Erreichung im Dashboard aktualisieren.`
        },
        understandContent: {
          coreTakeaway: 'Großartige Führungskräfte schaffen ein System, in dem andere erfolgreich sein können.',
          keyPrinciples: [
            'Ergebnisse zählen, nicht abgesessene Arbeitszeit am Schreibtisch',
            'Lob öffentlich aussprechen, Kritik immer im vertraulichen 1:1 Gespräch üben'
          ]
        },
        actionTask: {
          instruction: 'Setze deine Team-OKRs für das aktuelle Quartal auf:',
          inputType: 'checklist',
          checklistItems: [
            '3 Haupt-Unternehmensziele für das Quartal formuliert',
            'Messbare Key Results für jeden Bereich (Marketing, Vertrieb, Fulfillment) festgelegt',
            'Wöchentlichen PPP-Meeting Rhythmus im Team-Kalender blockiert'
          ],
          toolboxCategory: 'settings'
        }
      }
    ]
  },
  {
    id: 63,
    title: '63. Enterprise RFP & Öffentliche Ausschreibungs-Dominanz',
    subtitle: 'Request for Proposals (RFP), Vergabeverfahren, Pitch-Decks & 500.000€ Verträge',
    color: 'from-slate-700 via-blue-900 to-indigo-950',
    badgeIcon: '📑',
    description: 'Gewinne lukrative Ausschreibungen von Behörden, Institutionen und Großkonzernen: Meistere Request-for-Proposal (RFP) Verfahren, erstelle unschlagbare Angebotsdokumente und dominiere Vergabe-Pitches.',
    lessons: [
      {
        id: '63.1',
        stageId: 63,
        stageTitle: '63. RFP-Sourcing & Qualifizierung',
        title: "Ausschreibungen finden & vorab gewinnen: Die 'Pre-RFP' Beeinflussung",
        durationMinutes: 31,
        description: 'Wo öffentliche und private Ausschreibungen gelistet sind und wie du Anforderungskataloge schon vor der Veröffentlichung mitgestaltest.',
        learnContent: {
          videoTitle: 'Masterclass: RFP Sourcing & Strategische Vor-Vergabe',
          videoDuration: '31:45',
          summaryText: 'Wer erst von einer Ausschreibung erfährt, wenn sie öffentlich ist, hat fast schon verloren. Lerne, wie du Behörden und Konzerne schon bei der Problem-Identifikation berätst, sodass die spätere Ausschreibung exakt auf deine Stärken zugeschnitten ist.',
          bulletPoints: [
            'Ausschreibungs-Portale: TED (Europa), Bund.de und private Beschaffungs-Netzwerke (Ariba, Coupa)',
            'Die Bid/No-Bid Matrix: In 10 Minuten entscheiden, ob sich der Aufwand für ein 80-Seiten Angebot lohnt',
            'Pre-RFP Shaping: Wie du kostenlose Fachvorträge nutzt, um die Bewertungskriterien der Ausschreibung zu prägen',
            'Compliance & Zertifizierungen: ISO 27001, DSGVO und Barrierefreiheit als zwingende Zulassungsvoraussetzung'
          ],
          coreConcepts: [
            {
              iconName: 'search',
              title: 'PRE-RFP SHAPING',
              description: 'Gestalte die Vergabekriterien mit, bevor die Konkurrenz vom Projekt erfährt.',
              highlight: true
            },
            {
              iconName: 'filter',
              title: 'BID/NO-BID MATRIX',
              description: 'Konsequente Filterung: Nur an Ausschreibungen mit >50% Gewinnchance teilnehmen.'
            }
          ],
          resources: [
            {
              title: 'Bid/No-Bid Entscheidungs-Matrix & Scoring-Tool',
              subtitle: 'Excel-Template zur Bewertung von Großausschreibungen',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'Mara CRM Enterprise Deal-Pipeline',
              subtitle: 'Mehrstufige Vergabephasen und Fristen im CRM überwachen',
              type: 'tool',
              iconName: 'bar-chart-2',
              actionUrl: 'crm'
            }
          ],
          fullArticleGuide: `### Die Strategie hinter 6-stelligen Regierungs- & Konzern-Deals

Große Organisationen sind gesetzlich verpflichtet, Aufträge ab bestimmten Schwellenwerten öffentlich auszuschreiben.

#### Der RFP-Zyklus:
1. **Bedarfsermittlung**: Das Amt/Unternehmen sucht nach Lösungen und spricht mit Experten.
2. **Ausschreibung**: Veröffentlichung der Leistungsbeschreibung und Bewertungsmatrix.
3. **Angebotseinreichung**: Fristgerechte Abgabe aller Nachweise, Preismodelle und Konzepte.
4. **Präsentation (Beauty Contest)**: Die besten 3 Bieter pitchen vor dem Vergabegremium.`
        },
        understandContent: {
          coreTakeaway: 'Wer frühzeitig Beziehungen zu Vergabestellen aufbaut, gewinnt Ausschreibungen mit Leichtigkeit.',
          keyPrinciples: [
            'Fristen bei Ausschreibungen sind absolut gnadenlos – 1 Minute Verspätung bedeutet sofortigen Ausschluss',
            'Alle geforderten Formalien und Zertifikate müssen lückenlos beiliegen'
          ]
        },
        actionTask: {
          instruction: 'Prüfe deine Ausschreibungs-Bereitschaft:',
          inputType: 'checklist',
          checklistItems: [
            'Unternehmensprofil auf den wichtigsten Beschaffungsplattformen registriert',
            'Standard-Compliance-Dokumente (Handelsregister, Unbedenklichkeitsbescheinigungen) griffbereit',
            'Bid/No-Bid Bewertungskriterien für dein Team definiert'
          ],
          toolboxCategory: 'crm'
        }
      },
      {
        id: '63.2',
        stageId: 63,
        stageTitle: '63. RFP-Dokumentation & Beauty Contest',
        title: 'Das gewinnende Angebotsdokument: Struktur, Design & Der Vergabe-Pitch',
        durationMinutes: 32,
        description: 'Wie du trockene Ausschreibungsunterlagen in ein visuell überragendes Meisterwerk verwandelst und im Live-Pitch den Zuschlag holst.',
        learnContent: {
          videoTitle: 'Masterclass: High-End Angebotsdokumente & Beauty Contest Pitches',
          videoDuration: '32:30',
          summaryText: 'Vergabegremien lesen dutzende langweilige Word-Dokumente. Ein professionell gelayoutetes Angebot mit Infografiken, klaren Projektphasen und überzeugenden ROI-Rechnungen sticht sofort heraus und gewinnt Höchstpunktzahlen.',
          bulletPoints: [
            'Executive Summary: Wie du auf 2 Seiten dem Vorstand beweist, warum dein Ansatz das geringste Risiko birgt',
            'Die Bewertungs-Matrix spiegeln: Verwende exakt die Formulierung der Vergabestelle als Überschriften',
            'Preiskalkulation: Festpreis vs. Time-and-Material mit cleveren Optionspaketen',
            'Der Beauty Contest Pitch: 20 Minuten Präsentation, 40 Minuten Q&A souverän meistern'
          ],
          coreConcepts: [
            {
              iconName: 'file-text',
              title: 'PROPOSAL DESIGN',
              description: 'Visuell ansprechende Angebotsbücher heben sich von 99% der Mitbewerber ab.',
              highlight: true
            },
            {
              iconName: 'award',
              title: 'BEAUTY CONTEST WIN',
              description: 'Souveräne Beantwortung kritischer Fragen vor dem Vergabegremium.'
            }
          ],
          resources: [
            {
              title: 'Enterprise Proposal Master-Template & Layout-Set',
              subtitle: 'Indesign & Word Vorlagen für Großangebote als PDF',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'GOM-MAR KI Proposal-Analyzer',
              subtitle: 'Angebote gegen Ausschreibungskriterien auf Vollständigkeit prüfen',
              type: 'tool',
              iconName: 'cpu',
              actionUrl: 'tools'
            }
          ],
          fullArticleGuide: `### Die Anatomie eines unschlagbaren Angebots

Das Vergabegremium vergibt Punkte nach einer strikten Tabelle. Dein Dokument muss so aufgebaut sein, dass der Prüfer jeden Punkt mühelos abhaken kann.

#### Die wichtigsten Kapitel:
- **Kapitel 1**: Management Summary & Projektverständnis.
- **Kapitel 2**: Methodik & Umsetzungs-Roadmap mit Gantt-Chart.
- **Kapitel 3**: Team-Profile mit relevanten Projekterfolgen.
- **Kapitel 4**: Transparente Kostenaufstellung und Meilenstein-Zahlungen.`
        },
        understandContent: {
          coreTakeaway: 'Nicht der billigste Anbieter gewinnt, sondern derjenige, der das geringste Projektrisiko vermittelt.',
          keyPrinciples: [
            'Immer exakt die Fachbegriffe der Vergabestelle nutzen',
            'Im Pitch das gesamte Projektteam vorstellen, nicht nur Vertriebler'
          ]
        },
        actionTask: {
          instruction: 'Optimiere deine Angebotsvorlage für Großprojekte:',
          inputType: 'checklist',
          checklistItems: [
            'Hochwertiges Deckblatt und Inhaltsverzeichnis nach Corporate Design gestaltet',
            'Gantt-Chart für Projekt-Meilensteine integriert',
            'Executive-Summary Vorlage mit Risikominimierungs-Fokus formuliert'
          ],
          toolboxCategory: 'crm'
        }
      }
    ]
  },
  {
    id: 64,
    title: '64. Deep-Tech KI-Automatisierung & Custom LLM Fine-Tuning',
    subtitle: 'Eigene KI-Modelle trainieren, RAG-Architekturen, Vektordatenbanken & Autonomous Agents',
    color: 'from-cyan-600 via-blue-600 to-indigo-800',
    badgeIcon: '🧠',
    description: 'Baue proprietäre KI-Superkräfte auf: Lerne, wie du Open-Source Modelle (Llama/Mistral) auf deine Unternehmensdaten feinabstimmst, Retrieval-Augmented Generation (RAG) aufbaust und autonome Agenten-Schwärme steuerst.',
    lessons: [
      {
        id: '64.1',
        stageId: 64,
        stageTitle: '64. RAG-Architektur & Wissensdatenbanken',
        title: 'Retrieval-Augmented Generation (RAG): KI mit deinen internen Daten füttern',
        durationMinutes: 33,
        description: 'Wie Vektordatenbanken (Pinecone, Chroma), Embeddings und semantische Suche deine gesamten Unternehmensdokumente in ein unfehlbares KI-Gehirn verwandeln.',
        learnContent: {
          videoTitle: 'Masterclass: RAG-Architektur & Vektordatenbanken für Unternehmen',
          videoDuration: '33:40',
          summaryText: 'Generische KI halluziniert oft. Mit einer RAG-Architektur greift die KI in Echtzeit auf deine internen PDFs, Handbücher, Verträge und Kunden-Chats zu und liefert zu 100% faktenbasierte Antworten mit Quellenangabe.',
          bulletPoints: [
            'Wie RAG funktioniert: Dokumente segmentieren (Chunking) $\\rightarrow$ Embeddings berechnen $\\rightarrow$ Vektorsuche $\\rightarrow$ LLM Prompting',
            'Vektordatenbanken im Vergleich: Pinecone (Cloud), Weaviate und pgvector (PostgreSQL)',
            'Chunking-Strategien: Warum die richtige Textblock-Größe (500 vs. 1500 Tokens) über die Antwortqualität entscheidet',
            'Hybrid Search: Kombination aus Keyword-Suche (BM25) und semantischer Vektorsuche'
          ],
          coreConcepts: [
            {
              iconName: 'database',
              title: 'VECTOR EMBEDDINGS',
              description: 'Mathematische Repräsentation von Wissen für blitzschnelle semantische Suche.',
              highlight: true
            },
            {
              iconName: 'shield-check',
              title: 'HALLUCINATION ZERO',
              description: 'KI antwortet ausschließlich auf Basis verifizierter Unternehmensdokumente.'
            }
          ],
          resources: [
            {
              title: 'RAG Pipeline & Vektor-Setup Architekturplan',
              subtitle: 'Technische Skizze für Make, Python & Vektordatenbanken als PDF',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'Mara CRM KI Wissens-Hub',
              subtitle: 'Eigene Dokumente und SOPs zur internen KI-Nutzung hochladen',
              type: 'tool',
              iconName: 'cpu',
              actionUrl: 'tools'
            }
          ],
          fullArticleGuide: `### Die Architektur des unfehlbaren Firmen-Gehirns

Ein Modell ist nur so klug wie die Daten, auf die es zugreifen kann.

#### Die 4 Schritte der RAG-Pipeline:
1. **Ingestion**: Lade PDFs, Word-Dokumente und Webseiten-Inhalte in das System.
2. **Embedding**: Ein Embedding-Modell verwandelt Text in Zahlenvektoren.
3. **Retrieval**: Bei einer Nutzerfrage sucht das System die relevantesten 3 Textblöcke heraus.
4. **Generation**: Das Sprachmodell formuliert eine präzise Antwort basierend auf diesen Fakten.`
        },
        understandContent: {
          coreTakeaway: 'Wer seine internen Firmen-Daten für KI erschließt, arbeitet zehnmal schneller als die Konkurrenz.',
          keyPrinciples: [
            'Dokumente vor dem Hochladen bereinigen (keine doppelten oder veralteten Versionen)',
            'Quellenangaben in den Antworten schaffen Vertrauen bei Mitarbeitern und Kunden'
          ]
        },
        actionTask: {
          instruction: 'Erstelle deine erste interne Wissens-Datenbank:',
          inputType: 'checklist',
          checklistItems: [
            'Wichtigste Firmen-SOPs und Handbücher als saubere PDFs exportiert',
            'Wissens-Hub im Mara CRM mit den Dokumenten gefüttert',
            'Testabfragen zur internen Firmenpolitik und Angeboten erfolgreich durchgeführt'
          ],
          toolboxCategory: 'content'
        }
      },
      {
        id: '64.2',
        stageId: 64,
        stageTitle: '64. Autonome KI-Agenten & Swarms',
        title: 'Autonome Multi-Agenten-Systeme: KI-Mitarbeiter steuern',
        durationMinutes: 31,
        description: 'Wie CrewAI, AutoGen und LangGraph komplexe Aufgaben durch spezialisierte KI-Agenten (Rechercheur, Schreiber, Kritiker, Coder) vollautomatisch lösen.',
        learnContent: {
          videoTitle: 'Masterclass: Multi-Agenten-Systeme & Autonome KI-Pipelines',
          videoDuration: '31:15',
          summaryText: 'Ein einzelner Prompt stößt an Grenzen. In einem Multi-Agenten-System arbeiten spezialisierte KI-Rollen zusammen: Agent 1 recherchiert, Agent 2 schreibt den Entwurf, Agent 3 korrigiert Fehler und Agent 4 postet das Ergebnis.',
          bulletPoints: [
            'Agenten-Rollen: Role, Goal und Backstory definieren für maximale Verhaltensgenauigkeit',
            'Tool-Integration: Wie Agenten Google durchsuchen, E-Mails versenden und APIs bedienen',
            'Sequenzielle vs. hierarchische Prozesse: Der "Manager-Agent", der Aufgaben an Unteragenten delegiert',
            'Human-in-the-Loop Freigaben: Wann der Mensch einen Zwischenschritt absegnen muss'
          ],
          coreConcepts: [
            {
              iconName: 'users',
              title: 'AGENT SWARMS',
              description: 'Mehrere spezialisierte KIs lösen komplexe Geschäftsprozesse im Team.',
              highlight: true
            },
            {
              iconName: 'zap',
              title: 'AUTONOMOUS EXECUTION',
              description: 'Vom Markttrend zur fertigen Marketingkampagne ohne manuelles Zutun.'
            }
          ],
          resources: [
            {
              title: 'Multi-Agenten Rollen & Prompting-Katalog',
              subtitle: 'Vordefinierte KI-Mitarbeiter Profile als PDF',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'GOM-MAR KI Multi-Agenten Studio',
              subtitle: 'Eigene KI-Agenten-Pipelines im Dashboard konfigurieren',
              type: 'tool',
              iconName: 'cpu',
              actionUrl: 'tools'
            }
          ],
          fullArticleGuide: `### Die Zukunft der Arbeit: Der autonome KI-Schwarm

Statt menschliche Arbeitskraft für Routine-Recherchen einzusetzen, übernimmt ein KI-Team die Vorarbeit.

#### Ein Praxis-Beispiel: Der Content-Schwarm:
- **Agent 1 (Trend-Scout)**: Durchsucht Reddit und Twitter nach viralen Nischenthemen.
- **Agent 2 (Lead-Copywriter)**: Verfasst 3 Skripte basierend auf den Trends.
- **Agent 3 (Compliance-Officer)**: Prüft die Skripte auf Markenrichtlinien und Genauigkeit.
- **Mensch**: Bestätigt das beste Skript mit einem Klick.`
        },
        understandContent: {
          coreTakeaway: 'Wer lernt, KI-Agenten zu orchestrieren, vervielfacht seinen persönlichen Hebel ins Unendliche.',
          keyPrinciples: [
            'Jeder Agent darf nur eine einzige klare Kernaufgabe haben',
            'Immer einen Qualitäts-Prüfer-Agenten am Ende der Pipeline einbauen'
          ]
        },
        actionTask: {
          instruction: 'Konfiguriere deinen ersten 3-Stufen KI-Agenten-Ablauf:',
          inputType: 'checklist',
          checklistItems: [
            'Rollen (Rechercheur, Texter, Lektor) im KI-Studio definiert',
            'Klare Aufgaben und Kriterien für jeden Agenten hinterlegt',
            'Ersten automatisierten Durchlauf mit Qualitäts-Check gestartet'
          ],
          toolboxCategory: 'content'
        }
      }
    ]
  },
  {
    id: 65,
    title: '65. Das Self-Managing Business: Vollständige operative Freiheit',
    subtitle: 'Vom Selbstständigen zum reinen Inhaber: CEO-Nachfolge, Beirat & Systemische Autonomie',
    color: 'from-emerald-700 via-teal-800 to-slate-900',
    badgeIcon: '👑',
    description: 'Die Krönung des Unternehmertums: Ziehe dich komplett aus dem Tagesgeschäft zurück. Setze einen Geschäftsführer (CEO) ein, installiere einen Aufsichtsrat/Beirat und genieße 100% finanzielle und zeitliche Freiheit.',
    lessons: [
      {
        id: '65.1',
        stageId: 65,
        stageTitle: '65. CEO-Nachfolge & Übergabe',
        title: 'Die Geschäftsführer-Übergabe: Vom Operator zum Aufsichtsrat',
        durationMinutes: 35,
        description: 'Wie du einen angestellten CEO einsetzt, Anteile/Phantom Stocks vergibst und in 6 Monaten die operative Führung übergibst.',
        learnContent: {
          videoTitle: 'Masterclass: CEO-Nachfolge & Der Ausstieg aus dem Tagesgeschäft',
          videoDuration: '35:20',
          summaryText: 'Ein echtes Unternehmen existiert unabhängig von seinem Gründer. Lerne, wie du dein Unternehmen so systematisierst, dass ein fähiger CEO die Führung übernimmt und du dich als Eigentümer auf strategische Investitionen konzentrierst.',
          bulletPoints: [
            'Die 3 Phasen des Übergangs: Mitführen (Monat 1-2) $\\rightarrow$ Überwachen (Monat 3-4) $\\rightarrow$ Loslassen (Monat 5-6)',
            'Vergütung des Fremdgeschäftsführers: Fixgehalt + Gewinnbeteiligung + Phantom Shares (virtuelle Anteile)',
            'Die Kontroll-Matrix: Welche Entscheidungen darf der CEO alleine treffen (bis 20.000€) und was erfordert Gesellschafterbeschluss?',
            'Der monatliche Board-Call: 90 Minuten Report-Review statt 50 Stunden Arbeitswoche'
          ],
          coreConcepts: [
            {
              iconName: 'user-check',
              title: 'CEO SUCCESSION',
              description: 'Ein professioneller Geschäftsführer führt das operative Wachstum eigenständig fort.',
              highlight: true
            },
            {
              iconName: 'activity',
              title: 'BOARD GOVERNANCE',
              description: 'Steuerung des Unternehmens über 4 Kern-Finanzkennzahlen einmal im Monat.'
            }
          ],
          resources: [
            {
              title: 'Geschäftsführer-Anstellungsvertrag & Kompetenzordnung',
              subtitle: 'Rechtliche Mustervereinbarung als PDF',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'Mara Executive Board Dashboard',
              subtitle: 'Wichtigste Unternehmenskennzahlen auf 1 Bildschirm konsolidieren',
              type: 'tool',
              iconName: 'bar-chart-2',
              actionUrl: 'progress'
            }
          ],
          fullArticleGuide: `### Die Wandlung vom Macher zum Gesellschafter

Solange du der Flaschenhals im Unternehmen bist, besitzt du keinen Betrieb – du besitzt einen Job.

#### Die 4 Kriterien für die Übergabe:
1. **Vollständige SOP-Dokumentation**: Jeder Prozess ist video- und textdokumentiert.
2. **Stabiler Cashflow**: Mindestens 12 Monate profitable Historie.
3. **Etabliertes Führungsteam**: Abteilungsleiter für Sales, Marketing und Operations vorhanden.
4. **Klare Schwellenwerte**: Definierte Budgetgrenzen für autonome Entscheidungen.`
        },
        understandContent: {
          coreTakeaway: 'Der höchste Wert eines Unternehmens bemisst sich daran, wie gut es ohne seinen Gründer läuft.',
          keyPrinciples: [
            'Dem neuen Geschäftsführer vertrauen und nicht bei Kleinigkeiten intervenieren',
            'Monatliche Board-Meetings diszipliniert vorbereiten und anhand von Zahlen diskutieren'
          ]
        },
        actionTask: {
          instruction: 'Definiere deine persönliche Gesellschafter-Rolle:',
          inputType: 'checklist',
          checklistItems: [
            'Kompetenzordnung mit Budgetgrenzen für Führungskräfte aufgestellt',
            'Monatliches Executive Dashboard mit den 5 wichtigsten Finanz-KPIs eingerichtet',
            'Übergabe-Fahrplan für die nächsten 6 Monate ausgearbeitet'
          ],
          toolboxCategory: 'settings'
        }
      },
      {
        id: '65.2',
        stageId: 65,
        stageTitle: '65. Das Vermächtnis-Ökosystem',
        title: 'Das ewige Firmen-Ökosystem: Reinvestition, Holding & Generationenwohlstand',
        durationMinutes: 32,
        description: 'Wie dein Unternehmen über Jahrzehnte Werte schafft, andere Firmen aufkauft und ein bleibendes Vermächtnis hinterlässt.',
        learnContent: {
          videoTitle: 'Masterclass: Das ewige Unternehmens-Ökosystem & Family Office',
          videoDuration: '32:45',
          summaryText: 'Herzlichen Glückwunsch zu Meilenstein 65! Du hast die Transformation vom Einzelkämpfer zur globalen Unternehmensgruppe gemeistert. Erfahre, wie du dein Family Office aufbaust und dein Vermögen generationenübergreifend sicherst.',
          bulletPoints: [
            'Das Family Office Modell: Verwaltung von Unternehmensdividenden, Immobilien und Venture Capital',
            'Der ewige Reinvestitions-Zirkel: Gewinne aus etablierten Firmen finanzieren innovative Neugründungen',
            'Stiftung & Philanthropie: Werte und Bildung an die nächste Generation weitergeben',
            'Die 100-Jahre Vision: Wie du Systeme schaffst, die Generationen überdauern'
          ],
          coreConcepts: [
            {
              iconName: 'award',
              title: 'FAMILY OFFICE',
              description: 'Professionelle Vermögensverwaltung und Generationen-Sicherung.',
              highlight: true
            },
            {
              iconName: 'infinity',
              title: 'PERPETUAL GROWTH',
              description: 'Ein sich selbst tragendes Firmen-Ökosystem für ewigen Wohlstand.'
            }
          ],
          resources: [
            {
              title: 'Family Office & Reinvestitions-Masterplan Blueprint',
              subtitle: 'Strategie für langfristigen Generationen-Wohlstand als PDF',
              type: 'pdf',
              iconName: 'file-text',
              actionUrl: 'tools'
            },
            {
              title: 'GOM-MAR Mastermind Alumni Netzwerk',
              subtitle: 'Exklusiver Zugang zum Kreis der 8-Figure Unternehmer',
              type: 'tool',
              iconName: 'award',
              actionUrl: 'progress'
            }
          ],
          fullArticleGuide: `### Die Vollendung der unternehmerischen Reise

Wahrer Erfolg ist die Freiheit, deine Zeit genau den Dingen zu widmen, die dir die tiefste Erfüllung schenken.

#### Die Säulen des Generationen-Wohlstands:
- **Eigentum**: Gesunde Beteiligungen an krisenresistenten Unternehmen.
- **Wissen**: Die Weitergabe von unternehmerischen Fähigkeiten an Nachfolger und Kinder.
- **Beitrag**: Der bewusste Einsatz von Kapital, um das Leben anderer Menschen nachhaltig zu verbessern.`
        },
        understandContent: {
          coreTakeaway: 'Du hast nicht nur ein Business gebaut – du hast ein unvergängliches Vermächtnis erschaffen.',
          keyPrinciples: [
            'Kapital ist ein Werkzeug für Freiheit und gesellschaftliche Wirkung',
            'Lerne jeden Tag weiter und bleibe im Geiste immer ein neugieriger Schüler'
          ]
        },
        actionTask: {
          instruction: 'Formuliere dein 100-Jahre Manifest:',
          inputType: 'checklist',
          checklistItems: [
            'Persönliches Werte- und Familien-Manifest schriftlich verfasst',
            'Stiftungs- oder Nachfolge-Struktur mit Notar besprochen',
            'Meilenstein 65 Abschluss-Urkunde in der Academy entgegengenommen'
          ],
          toolboxCategory: 'settings'
        }
      }
    ]
  }
];
