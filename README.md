# Osteopathie Emmert – Praxis-Website

Website der Osteopathiepraxis von **Volker Emmert** in Rauenberg: Osteopath, Physiotherapeut und Heilpraktiker.

> **Körper. Geist. Balance.** Wir suchen die Ursache Ihrer Beschwerden und helfen Ihrem Körper, sein Gleichgewicht wiederzufinden.

Die Seite setzt das Redesign „Erde & Ruhe“ aus Claude Design um: warme Leinen- und Sandtöne, Moos und Terrakotta als Akzente, die Serifenschrift Fraunces und der Torbogen als Bildform.

## Überblick

| | |
|---|---|
| **Technik** | Statisches HTML, CSS und Vanilla-JavaScript. Kein Build-Schritt, keine Abhängigkeiten |
| **Sprache** | Deutsch |
| **Datenschutz** | Keine Cookies, kein Tracking, keine Drittanbieter. Schriften liegen lokal im Repo |
| **Barrierefreiheit** | Semantisches HTML, Tastaturbedienung, `aria-expanded`/`aria-pressed`, Skip-Link, Fokus-Ringe, Kontraste nach WCAG AA |
| **Responsiv** | Ab 360 px Breite; unter 760 px mit Menü-Button |
| **SEO** | Meta-Beschreibung, Open Graph, strukturierte Daten (`schema.org/MedicalBusiness`) mit Adresse und Sprechzeiten |

## Seitenaufbau

Die Startseite (`index.html`) ist ein One-Pager mit diesen Sektionen:

1. **Hero:** „Körper. Geist. Balance.“, Terminbutton, Bild im Torbogen
2. **Auf einen Blick:** Sprechzeiten, Telefon, Termin ohne Überweisung
3. **01 Philosophie:** der Körper als Einheit
4. **02 Ihre Beschwerden:** interaktive Auswahl mit 8 Beschwerdebildern. Zu jedem werden typische Symptome, mögliche Ursachen und die passenden Behandlungswege angezeigt
5. **03 Behandlung:** „Vier Wege zur Balance“ (parietal, faszial, viszeral, craniosacral) als Akkordeon. Wege, die zur gewählten Beschwerde passen, tragen ein „Passt zu“-Badge
6. **04 Expertise:** drei Stärken, Porträt, Werdegang, Fortbildungen und Mitgliedschaften (Akkordeon)
7. **05 Praxis:** „Ein Ort zum Durchatmen“
8. **06 Kontakt:** Telefon, E-Mail, Sprechzeiten und Adresse

Dazu kommen `impressum.html` und `datenschutz.html`.

Ohne JavaScript bleibt der gesamte Inhalt lesbar. Die Akkordeons sind dann nur geschlossen, und die Beschwerde-Auswahl zeigt „Rücken & Nacken“.

## Projektstruktur

```
.
├── index.html                 Startseite
├── impressum.html             Impressum
├── datenschutz.html           Datenschutzerklärung
├── assets/
│   ├── css/styles.css         Designsystem-Tokens und alle Styles
│   ├── js/main.js             Beschwerde-Auswahl, Akkordeons, mobiles Menü
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
| Werdegang, Fortbildungen, Verbände | Sektion `#expertise` in `index.html` |
| Telefon, E-Mail, Sprechzeiten, Adresse | `index.html` (mehrere Stellen, inkl. JSON-LD im `<head>`), `impressum.html`, `datenschutz.html` |
| Farben, Schriften, Abstände | CSS-Variablen in `:root` in `assets/css/styles.css` |

Neue Beschwerde hinzufügen: in `index.html` einen weiteren Button `<button class="chip" data-complaint="id" aria-pressed="false">` anlegen und in `main.js` unter `COMPLAINTS` einen Eintrag mit derselben `id` ergänzen.

## Offene Punkte vor dem Livegang

- [ ] **Porträtfoto** von Volker Emmert einsetzen (Platzhalter in Sektion 04, Anleitung im HTML-Kommentar)
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
