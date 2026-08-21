// ── Role filter ──
const activeRoles = new Set(['vanguard', 'duelist', 'strategist']);

function toggleRole(role, btn) {
    if (activeRoles.has(role)) {
        activeRoles.delete(role);
        btn.classList.add('inactive');
    } else {
        activeRoles.add(role);
        btn.classList.remove('inactive');
    }
    applyFilter();
}

function applyFilter() {
    document.querySelectorAll('.player-card[data-role]').forEach(card => {
        card.classList.toggle('role-hidden', !activeRoles.has(card.dataset.role));
    });
}

// ── Staff sector filter ──
// Generic: reads the sector off the button, so a new sector only needs its
// markup (a .role-legend button + a matching .staff-section[data-sector]).
const hiddenSectors = new Set();

function toggleSector(sector, btn) {
    const hide = !hiddenSectors.has(sector);
    if (hide) {
        hiddenSectors.add(sector);
    } else {
        hiddenSectors.delete(sector);
    }
    btn.classList.toggle('inactive', hide);
    document.querySelectorAll(`.staff-section[data-sector="${sector}"]`).forEach(section => {
        section.classList.toggle('sector-hidden', hide);
    });
}

// ── Image placeholders ──
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.player-card .player-photo img').forEach(img => {
        const show = () => {
            const placeholder = document.createElement('div');
            placeholder.className = 'player-img-placeholder';
            placeholder.innerHTML = '<i class="fa-solid fa-user"></i>';
            img.replaceWith(placeholder);
        };
        if (img.getAttribute('src') === '') {
            show();
        } else {
            img.addEventListener('error', show, { once: true });
        }
    });
});
