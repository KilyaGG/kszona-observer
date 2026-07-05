// ==UserScript==
// @name         KC ZONA OBERVER - HELPER
// @match        https://yandex.ru/games/app/ks-zona-onlain-456466
// @run-at       document-end
// @grant        none
// @author       Хзшка
// ==/UserScript==

(function() {
    'use strict';

    function addButton() {
        const header = document.querySelector('.play-game-header');
        if (!header) return false;

        const actionsContainer = header.querySelector('.play-game-header__actions');
        if (!actionsContainer) return false;

        if (document.getElementById('capture-profile-btn')) return true;

        const btn = document.createElement('div');
        btn.id = 'capture-profile-btn';
        btn.className = 'play-game-header__action play-game-header__menu menu hover pointer';
        btn.title = 'Захватить профиль';
        btn.style.cssText = 'display:flex;align-items:center;gap:6px;padding:0 12px;cursor:pointer;';
        btn.innerHTML = `
            <span style="font-size:16px;line-height:1;">📊</span>
            <span style="font-size:12px;font-weight:600;color:#fff;white-space:nowrap;">Профиль</span>
        `;

        btn.addEventListener('click', () => {
            const iframe = document.querySelector('iframe[src*="games.yandex.net"]') ||
                          document.querySelector('iframe[src*="cdn.games.yandex.net"]');

            if (iframe && iframe.contentWindow) {
                iframe.contentWindow.postMessage({ action: 'captureProfile' }, '*');
                console.log('[HeaderButton] Отправлена команда в iframe');
            } else {
                alert('Игровой iframe не найден. Дождитесь загрузки игры.');
            }
        });

        actionsContainer.insertBefore(btn, actionsContainer.firstChild);
        console.log('[HeaderButton] Кнопка добавлена в хедер');
        return true;
    }

    const observer = new MutationObserver((mutations, obs) => {
        if (addButton()) obs.disconnect();
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            if (!addButton()) {
                observer.observe(document.body, { childList: true, subtree: true });
            }
        });
    } else {
        if (!addButton()) {
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }

    let attempts = 0;
    const interval = setInterval(() => {
        if (addButton() || attempts > 30) clearInterval(interval);
        attempts++;
    }, 2000);
})();
