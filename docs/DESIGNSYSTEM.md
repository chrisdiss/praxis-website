# Designsystem „Erde & Ruhe“

Warme Leinen- und Sandtöne bilden den Grund. Moos steht für Vertrauen und Gesundheit, Terrakotta für Wärme. Dazu große, weich gerundete Flächen, klare Pill-Buttons und Bilder mit Licht und Schatten.

Alle Werte sind als CSS-Variablen in `assets/css/styles.css` (`:root`) hinterlegt.

## Farben

| Name | Hex | Variable | Einsatz |
|---|---|---|---|
| Leinen | `#F4EFE6` | `--leinen` | Seitengrund |
| Papier | `#FBF8F2` | `--papier` | Karten |
| Sand | `#E6DFD1` | `--sand` | Flächen, Tags, Schritt-Karten |
| Lehm | `#D9CDB8` | `--lehm` | Linien |
| Salbei | `#A3B096` | `--salbei` | Dekor |
| Ocker | `#C9A36A` | `--ocker` | Dekor |
| Moos | `#4F6146` | `--moos` | Primärfarbe, Buttons (Kontrast 5,9 : 1 zu Papier) |
| Waldboden | `#2F3A2B` | `--waldboden` | dunkle Flächen, Infoleiste, Footer (11 : 1) |
| Terrakotta | `#95533A` | `--terrakotta` | Labels (5,1 : 1) |
| Honig | `#E1B98A` | `--honig` | Akzent auf dunklem Grund |
| Erde | `#2A2822` | `--erde` | Text, aktive Auswahl |
| Stein | `#5E584D` | `--stein` | leiser Text |

Die Farbe für Buttons liegt in `--accent` (Standard: Moos). Im Design waren alternativ Waldboden `#2F3A2B`, Terrakotta `#95533A` und Erde `#2A2822` vorgesehen.

## Typografie

| Rolle | Schrift | Größe / Zeilenhöhe |
|---|---|---|
| Display (Hero) | Fraunces 350 | `clamp(52px, 6.4vw, 92px)` / 0,98 |
| H2 | Fraunces 350 | `clamp(34px, 4vw, 52px)` / 1,08 |
| H3 in Karten | Manrope 700 | 21 px |
| Fließtext | Manrope 400 | 16–19 px / 1,6 |
| Label | Manrope 700, Terrakotta | 14 px |

Labels stehen in normaler Schreibweise, nicht in Versalien. Fraunces bleibt Überschriften, Kacheltiteln und Kennzahlen vorbehalten.

## Komponenten

- **Buttons:** Pill-Form (`border-radius: 999px`), 56 px hoch. Primär in Moos, sekundär auf Sand („Passt das zu mir?“), klein auf Papier („Mehr erfahren →“)
- **Bildkachel:** Foto als Fläche, Radius 24, Titel in Fraunces oben, „Mehr erfahren“-Button unten
- **Chips:** Papier mit Rahmen `#D2C6B0`. Die aktive Auswahl ist in Erde gefüllt
- **„Passt zu“-Badge:** Salbei hell `#E3E8DA` mit Moos-Text
- **Schritt-Karte:** Sand-Fläche, Radius 24, Nummer im Papier-Kreis
- **Aufklapp-Karte:** Papier, Radius 24, Plus/Minus im Sand-Kreis (48 px). Auf dunklem Grund in `#3A4734` mit 36-px-Kreis
- **FAQ:** Liste mit Trennlinien in Lehm, Plus/Minus rechts
- **Icons:** Linien, 1,8–2 px, runde Enden

## Formen und Radien

| Radius | Einsatz |
|---|---|
| 18 | Zeile (Link-Karten, Werdegang) |
| 24 | Karte, Kachel |
| 28 | Hero, Beschwerde-Panel, Kontakt |
| 32 | dunkles Band „Über mich“ |
| 999 | Pill, Buttons, Chips |

Inhalte sitzen in großen, weichen Flächen statt auf Linien. Bilder zeigen Licht und Blattschatten auf farbigem Putz, jede Kachel in einem Ton der Palette.

## Abstände

Skala: 8 · 16 · 24 · 36 · 64 · 120 px.

- Zwischen Sektionen: 120 px auf Desktop, 96 px auf Tablet, 80 px auf Smartphone
- 16 px zwischen Karten
- Inhalt maximal 1280 px breit, Seitenrand 32 px (Smartphone 16 px)
