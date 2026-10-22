# Designsystem „Erde & Ruhe“

Warme Leinen- und Sandtöne bilden den Grund. Moos steht für Vertrauen und Gesundheit, Terrakotta für Wärme. Dazu weiche Rundungen, viel Luft und eine ruhige Serifenschrift.

Alle Werte sind als CSS-Variablen in `assets/css/styles.css` (`:root`) hinterlegt.

## Farben

| Name | Hex | Variable | Einsatz |
|---|---|---|---|
| Leinen | `#F4EFE6` | `--leinen` | Seitengrund |
| Papier | `#FBF8F2` | `--papier` | Karten |
| Sand | `#E6DFD1` | `--sand` | Tags, Flächen |
| Lehm | `#D9CDB8` | `--lehm` | Linien, Bilder |
| Salbei | `#A3B096` | `--salbei` | Dekor |
| Ocker | `#C9A36A` | `--ocker` | Dekor |
| Moos | `#4F6146` | `--moos` | Primärfarbe, Buttons (Kontrast 5,9 : 1 zu Papier) |
| Waldboden | `#2F3A2B` | `--waldboden` | dunkle Flächen (11 : 1) |
| Terrakotta | `#95533A` | `--terrakotta` | Akzent, Labels (5,1 : 1) |
| Honig | `#E1B98A` | `--honig` | Akzent auf dunklem Grund |
| Erde | `#2A2822` | `--erde` | Text |
| Stein | `#5E584D` | `--stein` | leiser Fließtext |

Die Akzentfarbe für Buttons und die aktive Beschwerde liegt in `--accent` (Standard: Moos). Im Design waren alternativ Waldboden `#2F3A2B`, Terrakotta `#95533A` und `#6E5A3F` vorgesehen.

## Typografie

| Rolle | Schrift | Größe / Zeilenhöhe |
|---|---|---|
| Display (Hero) | Fraunces 320 | `clamp(60px, 8vw, 112px)` / 0,96 |
| H2 | Fraunces 320 | `clamp(36px, 4.6vw, 60px)` / 1,08 |
| Zitat | Fraunces Italic | 24–26 px / 1,4 |
| Fließtext | Manrope 400 | 17–19 px / 1,65 |
| Label (Eyebrow) | Manrope 700, Versalien | 12–13 px, Laufweite +16–18 % |

Hervorhebungen in Überschriften setzt Fraunces Italic in Terrakotta, auf dunklem Grund in Honig.

## Komponenten

- **Buttons:** Pill-Form (`border-radius: 999px`) mit mindestens 56 px Höhe. Primär in Moos, sekundär als Outline, Anruf-Button in Waldboden
- **Textlink:** halbfett mit 1,5 px Unterstrich und Pfeil-Icon
- **Chips und Tags:** Pill-Form, Sand-Fläche oder Rahmen in Lehm. Die aktive Auswahl ist mit Akzentfarbe gefüllt
- **Karten:** Papier auf Leinen, Radius 28. Auf Waldboden in `#3A4734`
- **Akkordeon:** Trennlinien in Lehm, runder Plus/Minus-Button (52 px, auf Dunkel 44 px)
- **Icons:** Linienstärke 1,6 px, runde Enden, im Sand-Kreis (60 px)

## Formen und Radien

| Radius | Einsatz |
|---|---|
| 10 | Badge |
| 24 | Infokarte |
| 28 | Karte |
| 32 | Band, große Bilder |
| Bogen `400px 400px 28px 28px` | Hero-Bild (Torbogen) |
| Bogen `28px 28px 400px 400px` | Porträt (unten gerundet) |
| 999 | Pill, Buttons |

Der Bogen ist das Wiedererkennungsmerkmal: Fotos sind oben wie ein Torbogen gerundet (Hero) oder unten (Porträt). Das wirkt organisch, ohne verspielt zu sein.

## Abstände

Skala: 8 · 12 · 20 · 32 · 56 · 88 · 120 px.

- Zwischen Sektionen: 160 px auf Desktop, 120 px auf Tablet, 96 px auf Smartphone
- Inhalt maximal 1240 px breit, Seitenrand 32 px (Smartphone 20 px)
- Fließtext maximal etwa 640 px breit
