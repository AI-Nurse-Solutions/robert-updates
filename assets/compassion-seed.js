
// September 14 discussion capture. Existing seeds and sprint status are unchanged.
(function addCompassionDiscussion() {
  'use strict';
  const seed = {
    id: 'compassion-engine-community-contribution-2026-09-14',
    title: 'Compassion Engine & Community Contribution',
    summary: 'Help nurses connect with role communities and organize community-defined projects, even when they do not personally own the funding, facilities or expertise. Capture tonight\'s distinction between private AI workspaces, permissioned agent collaboration and community benefit. Planning record only; no pilot or deployed agent network.',
    status: 'germinating', priority: 'High', horizon: 'Next framing step',
    workstream: 'Nurse AI OS / Contribution',
    tags: ['Compassion Engine', 'Community organizing', 'Four pillars', 'Scale good'],
    next: 'Choose one community-defined need with a nurse organizer and community partner; agree on a mission brief, resource map, boundary and success measure before building or scheduling a pilot.',
    discussion: 'notes/2026-09-14-scaling-good.html'
  };
  if (!Array.isArray(window.SEED_GARDEN)) return;
  if (!window.SEED_GARDEN.some(item => item.id === seed.id)) {
    window.SEED_GARDEN.push(seed);
  }
  window.SEED_GARDEN_UPDATED = 'September 14, 2026 - discussion captured; earlier project statuses retained';

  // Add one fixed, same-site document link without changing the board renderer.
  // Observe board replacement only, so our own link insertion cannot loop.
  function attachRecord() {
    const board = document.getElementById('kanban');
    if (!board) return;
    const heading = Array.from(board.querySelectorAll('.card h3'))
      .find(node => node.textContent === seed.title);
    const card = heading && heading.closest('.card');
    if (!card || card.querySelector('[data-seed-discussion]')) return;
    const paragraph = document.createElement('p');
    const link = document.createElement('a');
    link.href = seed.discussion;
    link.textContent = 'Read discussion record - 14 September 2026';
    link.setAttribute('data-seed-discussion', seed.id);
    paragraph.appendChild(link);
    const footer = card.querySelector('.foot');
    card.insertBefore(paragraph, footer);
  }
  function ready() {
    attachRecord();
    const board = document.getElementById('kanban');
    if (board && typeof MutationObserver !== 'undefined') {
      new MutationObserver(attachRecord).observe(board, { childList: true });
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
  } else {
    ready();
  }
})();
