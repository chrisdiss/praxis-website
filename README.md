# Osteopathie Emmert – Praxis-Website

Website der Osteopathiepraxis von **Volker Emmert** in Rauenberg: Osteopath, Physiotherapeut und Heilpraktiker.

> **Körper. Geist. Balance.** Wir suchen die Ursache Ihrer Beschwerden und helfen Ihrem Körper, sein Gleichgewicht wiederzufinden.

Die Seite setzt das Redesign „Erde & Ruhe“ aus Claude Design um: warme Leinen- und Sandtöne, Moos und Terrakotta als Akzente, große, weich gerundete Flächen, klare Pill-Buttons und Bilder mit Licht und Blattschatten.

## Überblick

| | |
|---|---|
| **Technik** | Statisches HTML, CSS und Vanilla-JavaScript. Kein Build-Schritt, keine Abhängigkeiten |
| **Sprache** | Deutsch |
| **Datenschutz** | Keine Cookies, kein Tracking, keine Drittanbieter. Schriften liegen lokal im Repo |
| **Barrierefreiheit** | Semantisches HTML, Tastaturbedienung, `aria-expanded`/`aria-pressed`, Skip-Link, Fokus-Ringe, Kontraste nach WCAG AA |
| **Responsiv** | Ab 360 px Breite; unter 860 px mit Menü-Button |
| **SEO** | Meta-Beschreibung, Open Graph, strukturierte Daten (`schema.org/MedicalBusiness`) mit Adresse und Sprechzeiten |

## Seitenaufbau

Die Startseite (`index.html`) ist ein One-Pager mit diesen Sektionen:

1. **Infoleiste und Header:** Termine dienstags und freitags, Telefonnummer, Navigation und Terminbutton
2. **Hero:** „Körper. Geist. Balance.“ als Karte mit Terminbutton, „Passt das zu mir?“ und drei Pluspunkten, daneben das Bild
3. **Womit kann ich Ihnen helfen?:** vier Bildkacheln für häufige Beschwerden. Ein Klick wählt die Beschwerde in der nächsten Sektion vor
4. **Finden Sie sich wieder? (`#beschwerden`):** interaktive Auswahl mit 8 Beschwerdebildern. Zu jedem werden typische Symptome, mögliche Ursachen und die passenden Behandlungswege angezeigt
5. **So einfach geht's (`#ablauf`):** drei Schritte vom Anruf bis zur Behandlung
6. **Vier Wege zur Balance (`#behandlung`):** parietal, faszial, viszeral, craniosacral als aufklappbare Karten. Wege, die zur gewählten Beschwerde passen, tragen ein „Passt zu“-Badge
7. **Über mich (`#ueber-mich`):** drei Kennzahlen, Porträt, Zitat sowie Werdegang, Fortbildungen und Mitgliedschaften zum Aufklappen
8. **Gut zu wissen (`#fragen`):** sechs häufige Fragen (Überweisung, Kosten, Dauer, Mitbringen, Anzahl, Schmerz)
9. **Kontakt (`#kontakt`):** Anrufkarte auf dem Praxisbild, Sprechzeiten, Adresse und E-Mail

Dazu kommen `impressum.html` und `datenschutz.html`.

Ohne JavaScript bleibt der gesamte Inhalt lesbar. Die Akkordeons sind dann geschlossen (außer der ersten Frage), und die Beschwerde-Auswahl zeigt „Rücken und Nacken“.

## Projektstruktur

```
.
├── index.html                 Startseite
├── impressum.html             Impressum
├── datenschutz.html           Datenschutzerklärung
├── assets/
│   ├── css/styles.css         Designsystem-Tokens und alle Styles
│   ├── js/main.js             Beschwerde-Auswahl, Kacheln, Akkordeons, mobiles Menü
│   ├── fonts/                 Fraunces und Manrope (WOFF2, lokal gehostet)
│   └── img/                   Fotos und Favicon
├── docs/DESIGNSYSTEM.md       Farben, Typografie, Radien, Abstände
└── .github/workflows/pages.yml  Deployment auf GitHub Pages
```

## Lokal ansehen

Kein Build nötig. Einen beliebigen statischen Server im Projektordner starten:

```bash
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

Die Datei `index.html` lässt sich auch direkt im Browser öffnen. Die vorgeladenen Schriften werden dann aber wegen der `file://`-Regeln des Browsers eventuell blockiert.

## Inhalte pflegen

| Was | Wo |
|---|---|
| Texte der Sektionen | `index.html` |
| Beschwerdebilder (Auswahl in Sektion 02) | `COMPLAINTS` in `assets/js/main.js`. Der Startzustand „Rücken & Nacken“ steht zusätzlich als HTML in `index.html` |
| Behandlungswege | Akkordeon in `index.html` (`data-way="…"`) und Kurztitel in `WAYS` in `assets/js/main.js` |
| Werdegang, Fortbildungen, Verbände | Sektion `#ueber-mich` in `index.html` |
| Häufige Fragen | Sektion `#fragen` in `index.html` |
| Bildkacheln | Sektion „Womit kann ich Ihnen helfen?“ in `index.html`. `data-complaint-link` muss zu einer `id` in `COMPLAINTS` passen |
| Telefon, E-Mail, Sprechzeiten, Adresse | `index.html` (mehrere Stellen, inkl. JSON-LD im `<head>`), `impressum.html`, `datenschutz.html` |
| Farben, Schriften, Abstände | CSS-Variablen in `:root` in `assets/css/styles.css` |

Neue Beschwerde hinzufügen: in `index.html` einen weiteren Button `<button class="chip" data-complaint="id" aria-pressed="false">` anlegen und in `main.js` unter `COMPLAINTS` einen Eintrag mit derselben `id` ergänzen.

## Offene Punkte vor dem Livegang

- [ ] **Porträtfoto** von Volker Emmert einsetzen (Platzhalter in „Über mich“, Anleitung im HTML-Kommentar)
- [ ] **Dauer und Preis** eines Termins in der Frage „Wie lange dauert ein Termin?“ ergänzen
- [ ] **Impressum** ergänzen: zuständiges Gesundheitsamt, Umsatzsteuer-Angabe
- [ ] **Datenschutzerklärung** ergänzen (Hosting-Anbieter) und rechtlich prüfen lassen
- [ ] Domain festlegen, danach `og:image` auf eine absolute URL umstellen und `sitemap.xml` sowie `robots.txt` ergänzen

## Deployment

Bei jedem Push auf `main` veröffentlicht `.github/workflows/pages.yml` die Seite über **GitHub Pages**. Einmalig einrichten: unter *Settings → Pages → Build and deployment* als Quelle **GitHub Actions** wählen.

Die Seite ist rein statisch und läuft genauso bei jedem anderen Webhoster: einfach alle Dateien hochladen.

## Design

Die Vorlage stammt aus Claude Design und besteht aus zwei Artboards: „Website – Startseite“ und „Designsystem – Erde & Ruhe“. Das Designsystem mit Farben, Typografie, Komponenten, Radien und Abständen ist in [`docs/DESIGNSYSTEM.md`](docs/DESIGNSYSTEM.md) dokumentiert.

## Lizenzen

- Schriften: [Fraunces](https://github.com/undercasetype/Fraunces) und [Manrope](https://github.com/sharanda/manrope), beide unter der SIL Open Font License 1.1
- Code und Inhalte: © Osteopathie Emmert. Alle Rechte vorbehalten
