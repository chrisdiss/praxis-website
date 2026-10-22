/* Osteopathie Emmert – Interaktionen
   Beschwerde-Auswahl (Kacheln und Chips), Akkordeons (Behandlung, Werdegang,
   Fragen) und mobiles Menü.
   Ohne JavaScript bleibt der gesamte Inhalt erreichbar. */

(function () {
  'use strict';

  var WAYS = {
    parietal: { title: 'Parietal', sub: 'Muskeln, Gelenke, Bänder, Wirbelsäule' },
    faszial: { title: 'Faszial', sub: 'Das Bindegewebe, das alles umhüllt' },
    viszeral: { title: 'Viszeral', sub: 'Organe in Brust, Bauch und Becken' },
    cranio: { title: 'Craniosacral', sub: 'Schädel, Wirbelsäule und Kreuzbein' }
  };

  var COMPLAINTS = {
    ruecken: {
      label: 'Rücken und Nacken', ways: ['parietal', 'faszial', 'viszeral'],
      feel: 'Die Verspannung kommt immer wieder. Morgens beim Aufstehen, nach langem Sitzen, beim Bücken.',
      why: 'Der Schmerz sitzt oft nicht dort, wo er entsteht. Eine Fehlhaltung im Becken, eine alte Verletzung am Fuß oder Spannung im Bauchraum kann sich über Muskel- und Faszienketten bis in den Rücken fortsetzen.'
    },
    kopf: {
      label: 'Kopfschmerzen und Migräne', ways: ['cranio', 'parietal'],
      feel: 'Druck im Kopf, Schmerzen, die aus dem Nacken hochziehen, Attacken, nach denen Sie den Tag planen.',
      why: 'Spannung in Nacken, Kiefer und an den Schädelknochen kann Kopfschmerzen begünstigen. Ich prüfe, wie frei sich Halswirbelsäule, Kiefer und Schädel bewegen.'
    },
    schwindel: {
      label: 'Schwindel und Tinnitus', ways: ['cranio', 'parietal'],
      feel: 'Ein Rauschen oder Pfeifen im Ohr. Unsicherheit beim Gehen. Ein Gefühl, als wäre der Kopf in Watte.',
      why: 'Halswirbelsäule, Kiefergelenk und die Strukturen rund ums Ohr hängen eng zusammen. Spannung dort kann eine Rolle spielen.'
    },
    bauch: {
      label: 'Verdauung und Bauch', ways: ['viszeral', 'faszial'],
      feel: 'Blähungen, Sodbrennen, Völlegefühl. Beim Arzt war alles unauffällig.',
      why: 'Organe brauchen Beweglichkeit. Spannung oder Verklebungen im Bauchraum können ihre Funktion stören und sogar Rückenschmerzen auslösen.'
    },
    op: {
      label: 'Nach einer Operation', ways: ['viszeral', 'faszial'],
      feel: 'Die Narbe zieht, Sie bewegen sich vorsichtiger als vorher, und manches tut erst seit dem Eingriff weh.',
      why: 'Narben und Verwachsungen verbinden Gewebe, das eigentlich frei gleiten sollte. Das kann an umliegenden Strukturen ziehen.'
    },
    chronisch: {
      label: 'Schmerzen, die bleiben', ways: ['faszial', 'parietal'],
      feel: 'Es tut seit Monaten weh, mal hier, mal dort, und niemand findet eine klare Erklärung.',
      why: 'Faszien verbinden den ganzen Körper. Setzt sich darin Spannung fest, kann sie Schmerzen an ganz anderer Stelle unterhalten.'
    },
    gelenke: {
      label: 'Gelenke und Sport', ways: ['parietal', 'faszial'],
      feel: 'Knie, Schulter oder Ellenbogen machen nicht mehr mit. Eine Verletzung heilt nicht richtig aus.',
      why: 'Ein Gelenk arbeitet nie allein. Ich schaue, welche Belastungen über die Bewegungskette darauf wirken.'
    },
    stress: {
      label: 'Stress und Anspannung', ways: ['cranio', 'viszeral'],
      feel: 'Innere Unruhe, flacher Atem, ein Körper, der abends nicht abschaltet.',
      why: 'Dauerstress zeigt sich im Körper, im Zwerchfell, im Nacken, in der Verdauung. Sanfte Techniken können das vegetative Nervensystem beim Herunterfahren unterstützen.'
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

  document.addEventListener('click', function (event) {
    // „So setze ich an“-Links öffnen den passenden Behandlungsweg
    var wayLink = event.target.closest('[data-open-way]');
    if (wayLink) openWay(wayLink.getAttribute('data-open-way'));

    // Kacheln „Womit kann ich Ihnen helfen?“ wählen die Beschwerde vor
    var tile = event.target.closest('[data-complaint-link]');
    if (tile) selectComplaint(tile.getAttribute('data-complaint-link'));
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
