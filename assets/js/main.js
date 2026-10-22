/* Osteopathie Emmert – Interaktionen
   Beschwerde-Auswahl, Akkordeons (Behandlung, Expertise) und mobiles Menü.
   Ohne JavaScript bleibt der gesamte Inhalt erreichbar. */

(function () {
  'use strict';

  var WAYS = {
    parietal: { title: 'Parietal', sub: 'Muskeln, Gelenke, Wirbelsäule' },
    faszial: { title: 'Faszial', sub: 'Das verbindende Gewebe' },
    viszeral: { title: 'Viszeral', sub: 'Die inneren Organe' },
    cranio: { title: 'Craniosacral', sub: 'Schädel, Wirbelsäule, Kreuzbein' }
  };

  var COMPLAINTS = {
    ruecken: {
      label: 'Rücken & Nacken', ways: ['parietal', 'faszial', 'viszeral'],
      feel: 'Verspannungen, die immer wiederkommen. Schmerzen beim Sitzen, beim Bücken oder morgens nach dem Aufstehen.',
      why: 'Der Schmerz sitzt oft nicht dort, wo er entsteht. Eine Fehlhaltung im Becken, eine alte Verletzung am Fuß oder Spannungen im Bauchraum können sich über Muskel- und Faszienketten bis in den Rücken fortsetzen.'
    },
    kopf: {
      label: 'Kopfschmerz & Migräne', ways: ['cranio', 'parietal'],
      feel: 'Druck im Kopf, Schmerzen, die vom Nacken aufsteigen, Attacken, die den Alltag bestimmen.',
      why: 'Spannungen in Nacken, Kiefer und an den Schädelknochen können Kopfschmerzen begünstigen. Ich prüfe, wie frei sich Halswirbelsäule, Kiefer und Schädel bewegen.'
    },
    schwindel: {
      label: 'Schwindel & Tinnitus', ways: ['cranio', 'parietal'],
      feel: 'Ohrgeräusche, Unsicherheit beim Gehen, ein Gefühl von Benommenheit.',
      why: 'Halswirbelsäule, Kiefergelenk und die Strukturen rund ums Ohr hängen eng zusammen. Spannungen dort können eine Rolle spielen.'
    },
    bauch: {
      label: 'Verdauung & Bauch', ways: ['viszeral', 'faszial'],
      feel: 'Blähungen, Sodbrennen, Völlegefühl – oft ohne klaren Befund.',
      why: 'Organe brauchen Beweglichkeit. Spannungen oder Verklebungen im Bauchraum können ihre Funktion stören – und sogar Rückenschmerzen auslösen.'
    },
    op: {
      label: 'Nach Operationen', ways: ['viszeral', 'faszial'],
      feel: 'Ziehen an der Narbe, eingeschränkte Beweglichkeit, Beschwerden, die erst nach dem Eingriff kamen.',
      why: 'Narben und Verwachsungen verbinden Gewebe, das eigentlich frei gleiten sollte. Das kann Zug auf umliegende Strukturen ausüben.'
    },
    chronisch: {
      label: 'Chronische Schmerzen', ways: ['faszial', 'parietal'],
      feel: 'Schmerzen, die wandern oder seit Monaten bleiben – und für die es keine eindeutige Erklärung gibt.',
      why: 'Faszien verbinden den ganzen Körper. Wenn sich Spannungen darin festsetzen, können sie Schmerzen an ganz anderer Stelle unterhalten.'
    },
    gelenke: {
      label: 'Gelenke & Sport', ways: ['parietal', 'faszial'],
      feel: 'Knie, Schulter oder Ellenbogen machen nicht mehr mit, eine Verletzung heilt nicht richtig aus.',
      why: 'Ein Gelenk arbeitet nie allein. Ich schaue, welche Belastungen über die Bewegungskette darauf einwirken.'
    },
    stress: {
      label: 'Stress & Anspannung', ways: ['cranio', 'viszeral'],
      feel: 'Innere Unruhe, flacher Atem, ein Körper, der nicht mehr abschalten kann.',
      why: 'Dauerstress zeigt sich im Körper – in Zwerchfell, Nacken und Verdauung. Sanfte Techniken können das vegetative Nervensystem beim Herunterfahren unterstützen.'
    }
  };

  var ARROW = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  /* ---------- Akkordeons: jeweils nur ein Bereich offen ---------- */

  function setOpen(button, open) {
    var panel = document.getElementById(button.getAttribute('aria-controls'));
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (panel) panel.hidden = !open;
  }

  function toggle(button, forceOpen) {
    var accordion = button.closest('[data-accordion]');
    var open = forceOpen === true || button.getAttribute('aria-expanded') !== 'true';
    if (open && accordion) {
      accordion.querySelectorAll('button[aria-controls]').forEach(function (other) {
        if (other !== button) setOpen(other, false);
      });
    }
    setOpen(button, open);
  }

  document.querySelectorAll('[data-accordion] button[aria-controls]').forEach(function (button) {
    button.addEventListener('click', function () { toggle(button); });
  });

  function openWay(id) {
    var item = document.querySelector('[data-way="' + id + '"]');
    if (!item) return;
    toggle(item.querySelector('button[aria-controls]'), true);
  }

  /* ---------- Beschwerde-Auswahl ---------- */

  var chips = document.querySelectorAll('[data-complaint]');
  var panel = document.querySelector('.complaint-panel');

  function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function selectComplaint(id) {
    var c = COMPLAINTS[id];
    if (!c || !panel) return;

    chips.forEach(function (chip) {
      chip.setAttribute('aria-pressed', chip.getAttribute('data-complaint') === id ? 'true' : 'false');
    });

    panel.querySelector('[data-field="label"]').textContent = c.label;
    panel.querySelector('[data-field="feel"]').textContent = c.feel;
    panel.querySelector('[data-field="why"]').textContent = c.why;
    panel.querySelector('[data-field="ways"]').innerHTML = c.ways.map(function (wayId) {
      var w = WAYS[wayId];
      return '<li><a class="way-link" href="#weg-' + wayId + '" data-open-way="' + wayId + '">' +
        '<span class="way-link__text"><span class="way-link__title">' + escapeHtml(w.title) + '</span>' +
        '<span class="way-link__sub">' + escapeHtml(w.sub) + '</span></span>' + ARROW + '</a></li>';
    }).join('');

    document.querySelectorAll('[data-way]').forEach(function (item) {
      var badge = item.querySelector('[data-match]');
      if (!badge) return;
      badge.hidden = c.ways.indexOf(item.getAttribute('data-way')) === -1;
      badge.querySelector('[data-match-label]').textContent = c.label;
    });
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      selectComplaint(chip.getAttribute('data-complaint'));
    });
  });

  // „So setze ich an“-Links öffnen den passenden Behandlungsweg
  document.addEventListener('click', function (event) {
    var link = event.target.closest('[data-open-way]');
    if (link) openWay(link.getAttribute('data-open-way'));
  });

  // Direkter Aufruf mit Anker, z. B. index.html#weg-faszial
  if (/^#weg-/.test(location.hash)) openWay(location.hash.slice(5));

  /* ---------- Mobiles Menü ---------- */

  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('hauptnavigation');

  function setMenu(open) {
    if (!navToggle || !nav) return;
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    nav.classList.toggle('is-open', open);
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });
    nav.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') { setMenu(false); navToggle.focus(); }
    });
  }

  /* ---------- Jahr im Footer ---------- */

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
