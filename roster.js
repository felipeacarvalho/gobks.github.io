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
