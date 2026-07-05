// ==UserScript==
// @name         KC ZONA OBSERVER
// @match        https://yandex.ru/games/app/ks-zona-onlain-456466
// @match        https://*.cdn.games.yandex.net/*
// @run-at       document-start
// @allFrames    true
// @grant        none
// @author       Хзшка
// ==/UserScript==

(function() {
    'use strict';
    const LOCALE = {
        gamemodes: {
            'Defusing':        '💣 Бомба',
            'GunRace':         '🏁 Гонка вооружений',
            'TeamDeathMatch':  '⚔️ Командный бой',
        },
        archetypes: {
            'gold':   '🪙 Золото',
            'cash':   '🥈 Серебро',
            'silver': '🥈 Серебро',
        },
        rvKeys: {

            'rv_gold':              '🪙 Золото',
            'rv_silver':            '🥈 Серебро',
            'rv_key_a':             '🔑 Ключ от Полевого Кейса',
            'rv_key_b':             '🔑 Ключ от Тактического кейса',
            'rv_key_c':             '🔑 Ключ от Редкого Кейса',
            'rv_key_d':             '🔑 Ключ от Закаленного Кейса',
            'rv_key_galaxy':        '🌌 Ключ от кейса Галактика',
            'rv_key_hypno-strike':  '💫 Ключ от кейса Гипноудар',
        },
        currencies: {
            'gold':       '🪙 Золото',
            'cash':       '🥈 Серебро',
            'trade-coin': '💷 Монеты обмена',
        },
        skins: {
            // Агенты
            "agent_ct_a": "👮‍♂️ Солдат (Стандартный)",
            "agent_ct_b": "👮‍♂️ Оперативник",
            "agent_ct_c": "👮‍♂️ Перестраховщик",
            "agent_ct_d": "👮‍♂️ Модник",
            "agent_ct_e": "👮‍♂️ Космодесантник",

            "agent_t_a": "🥷 Любитель (стандартный)",
            "agent_t_b": "🥷 Песчаная Буря",
            "agent_t_c": "🥷 Мерзляк",
            "agent_t_d": "🥷 Металлист",
            "agent_t_e": "🥷 Грабитель",


            // Базовое оружие (без скинов)
            "ak-47": "🔫 AK-47",
            "aug": "🔫 AUG",
            "awp": "🔫 AWP",
            "deagle": "🔫 Deagle",
            "famas": "🔫 FAMAS",
            "five-seven": "🔫 Five-Seven",
            "galil": "🔫 Galil",
            "glock-18": "🔫 Glock-18",
            "m4a1-s": "🔫 M4A1-S",
            "mac-10": "🔫 MAC-10",
            "mp5-sd": "🔫 MP5-SD",
            "mp9": "🔫 MP9",
            "p90": "🔫 P90",
            "rsh-12": "🔫 RSH-12",
            "sg-553": "🔫 SG 553",
            "tec-9": "🔫 Tec-9",
            "usp-s": "🔫 USP-S",
            "xm1014": "🔫 XM1014",
            "knife": "🔪 Нож",
            "he": "💥 Осколочная граната",
            "flash": "💥 Светошумовая граната",
            "smoke": "💥 Дымовая граната",

            // Скины оружия
            "ak-47-skin-biohazard": "🔫 AK-47 | Биоопасность",
            "ak-47-skin-crosshair": "🔫 AK-47 | Перекрестие",
            "ak-47-skin-cyberpunk": "🔫 AK-47 | Киберпанк",
            "ak-47-skin-emerald-dragon": "🔫 AK-47 | Изумрудный дракон",
            "ak-47-skin-galaxy": "🔫 AK-47 | Галактика",
            "ak-47-skin-gentle-hardening": "🔫 AK-47 | Нежная закалка",
            "ak-47-skin-geometry": "🔫 AK-47 | Геометрия",
            "ak-47-skin-hypno-strike": "🔫 AK-47 | Гипноудар",
            "ak-47-skin-juicy-fibers": "🔫 AK-47 | Сочные волокна",
            "ak-47-skin-lab": "🔫 AK-47 | Лаба",
            "ak-47-skin-lightness": "🔫 AK-47 | Лёгкость",
            "ak-47-skin-liquid-steel": "🔫 AK-47 | Нежная сталь",
            "ak-47-skin-neon-sunset": "🔫 AK-47 | Неоновый закат",
            "ak-47-skin-parade-version": "🔫 AK-47 | Парадный вариант",
            "ak-47-skin-pew-pew": "🔫 AK-47 | Пиу-пиу",
            "ak-47-skin-royal-shine": "🔫 AK-47 | Королевский блеск",
            "ak-47-skin-skull": "🔫 AK-47 | Череп",
            "ak-47-skin-street-anime": "🔫 AK-47 | Аниме Улиц",
            "ak-47-skin-strict-style": "🔫 AK-47 | Строгий стиль",
            "ak-47-skin-toxic-love": "🔫 AK-47 | Ядовитая любовь",
            "ak-47-skin-triple-strike": "🔫 AK-47 | Тройной удар",
            "ak-47-skin-default": "🔫 AK-47 | Стандартный",

            "aug-skin-biohazard": "🔫 AUG | Биоопасность",
            "aug-skin-crosshair": "🔫 AUG | Перекрестие",
            "aug-skin-galaxy": "🔫 AUG | Галактика",
            "aug-skin-gentle-hardening": "🔫 AUG | Нежная закалка",
            "aug-skin-hypno-strike": "🔫 AUG | Гипноудар",
            "aug-skin-juicy-fibers": "🔫 AUG | Сочные волокна",
            "aug-skin-lightness": "🔫 AUG | Лёгкость",
            "aug-skin-liquid-steel": "🔫 AUG | Нежная сталь",
            "aug-skin-neon-sunset": "🔫 AUG | Неоновый закат",
            "aug-skin-parade-version": "🔫 AUG | Парадный вариант",
            "aug-skin-pink-waves": "🔫 AUG | Розовые волны",
            "aug-skin-street-anime": "🔫 AUG | Аниме Улиц",
            "aug-skin-toxic-love": "🔫 AUG | Ядовитая любовь",
            "aug-skin-triple-strike": "🔫 AUG | Тройной удар",
            "aug-skin-default": "🔫 AUG | Стандартный",

            "awp-skin-biohazard": "🔫 AWP | Биоопасность",
            "awp-skin-crosshair": "🔫 AWP | Перекрестие",
            "awp-skin-deepness": "🔫 AWP | Глубина",
            "awp-skin-galaxy": "🔫 AWP | Галактика",
            "awp-skin-gentle-hardening": "🔫 AWP | Нежная закалка",
            "awp-skin-hypno-strike": "🔫 AWP | Гипноудар",
            "awp-skin-juicy-fibers": "🔫 AWP | Сочные волокна",
            "awp-skin-lava": "🔫 AWP | Лава",
            "awp-skin-lightness": "🔫 AWP | Лёгкость",
            "awp-skin-liquid-steel": "🔫 AWP | Нежная сталь",
            "awp-skin-neon-fog": "🔫 AWP | Неоновый туман",
            "awp-skin-neon-sunset": "🔫 AWP | Неоновый закат",
            "awp-skin-street-anime": "🔫 AWP | Аниме Улиц",
            "awp-skin-strict-style": "🔫 AWP | Строгий стиль",
            "awp-skin-toxic-love": "🔫 AWP | Ядовитая любовь",
            "awp-skin-triple-strike": "🔫 AWP | Тройной удар",
            "awp-skin-default": "🔫 AWP | Стандартный",

            "deagle-skin-biohazard": "🔫 Deagle | Биоопасность",
            "deagle-skin-crosshair": "🔫 Deagle | Перекрестие",
            "deagle-skin-galaxy": "🔫 Deagle | Галактика",
            "deagle-skin-gentle-hardening": "🔫 Deagle | Нежная закалка",
            "deagle-skin-gentle-steel": "🔫 Deagle | Мягкая сталь",
            "deagle-skin-graffiti-masters": "🔫 Deagle | Мастера граффити",
            "deagle-skin-hypno-strike": "🔫 Deagle | Гипноудар",
            "deagle-skin-juicy-fibers": "🔫 Deagle | Сочные волокна",
            "deagle-skin-liquid-radiation": "🔫 Deagle | Жидкая радиация",
            "deagle-skin-liquid-steel": "🔫 Deagle | Нежная сталь",
            "deagle-skin-neon-sunset": "🔫 Deagle | Неоновый закат",
            "deagle-skin-red-line": "🔫 Deagle | Красная линия",
            "deagle-skin-royal-shine": "🔫 Deagle | Королевский блеск",
            "deagle-skin-street-anime": "🔫 Deagle | Аниме Улиц",
            "deagle-skin-toxic-love": "🔫 Deagle | Ядовитая любовь",
            "deagle-skin-triple-strike": "🔫 Deagle | Тройной удар",
            "deagle-skin-default": "🔫 Deagle | Стандартный",

            "famas-skin-biohazard": "🔫 FAMAS | Биоопасность",
            "famas-skin-crosshair": "🔫 FAMAS | Перекрестие",
            "famas-skin-galaxy": "🔫 FAMAS | Галактика",
            "famas-skin-gentle-hardening": "🔫 FAMAS | Нежная закалка",
            "famas-skin-hypno-strike": "🔫 FAMAS | Гипноудар",
            "famas-skin-juicy-fibers": "🔫 FAMAS | Сочные волокна",
            "famas-skin-lightness": "🔫 FAMAS | Лёгкость",
            "famas-skin-liquid-steel": "🔫 FAMAS | Нежная сталь",
            "famas-skin-neon": "🔫 FAMAS | Неон",
            "famas-skin-neon-sunset": "🔫 FAMAS | Неоновый закат",
            "famas-skin-parade-version": "🔫 FAMAS | Парадный вариант",
            "famas-skin-playful": "🔫 FAMAS | Игривый",
            "famas-skin-street-anime": "🔫 FAMAS | Аниме Улиц",
            "famas-skin-toxic-love": "🔫 FAMAS | Ядовитая любовь",
            "famas-skin-triple-strike": "🔫 FAMAS | Тройной удар",
            "famas-skin-default": "🔫 FAMAS | Стандартный",

            "five-seven-skin-biohazard": "🔫 Five-Seven | Биоопасность",
            "five-seven-skin-crosshair": "🔫 Five-Seven | Перекрестие",
            "five-seven-skin-galaxy": "🔫 Five-Seven | Галактика",
            "five-seven-skin-gentle-hardening": "🔫 Five-Seven | Нежная закалка",
            "five-seven-skin-hypno-strike": "🔫 Five-Seven | Гипноудар",
            "five-seven-skin-juicy-fibers": "🔫 Five-Seven | Сочные волокна",
            "five-seven-skin-lightness": "🔫 Five-Seven | Лёгкость",
            "five-seven-skin-liquid-steel": "🔫 Five-Seven | Нежная сталь",
            "five-seven-skin-neon-sunset": "🔫 Five-Seven | Неоновый закат",
            "five-seven-skin-street-anime": "🔫 Five-Seven | Аниме Улиц",
            "five-seven-skin-toxic-love": "🔫 Five-Seven | Ядовитая любовь",
            "five-seven-skin-triple-strike": "🔫 Five-Seven | Тройной удар",
            "five-seven-skin-default": "🔫 Five-Seven | Стандартный",

            "galil-skin-banana": "🔫 Galil | Бананчик",
            "galil-skin-biohazard": "🔫 Galil | Биоопасность",
            "galil-skin-ceramics": "🔫 Galil | Керамика",
            "galil-skin-crosshair": "🔫 Galil | Перекрестие",
            "galil-skin-galaxy": "🔫 Galil | Галактика",
            "galil-skin-gentle-hardening": "🔫 Galil | Нежная закалка",
            "galil-skin-hypno-strike": "🔫 Galil | Гипноудар",
            "galil-skin-juicy-fibers": "🔫 Galil | Сочные волокна",
            "galil-skin-lightness": "🔫 Galil | Лёгкость",
            "galil-skin-liquid-steel": "🔫 Galil | Нежная сталь",
            "galil-skin-neon-sunset": "🔫 Galil | Неоновый закат",
            "galil-skin-parade-version": "🔫 Galil | Парадный вариант",
            "galil-skin-street-anime": "🔫 Galil | Аниме Улиц",
            "galil-skin-toxic-love": "🔫 Galil | Ядовитая любовь",
            "galil-skin-triple-strike": "🔫 Galil | Тройной удар",
            "galil-skin-default": "🔫 Galil | Стандартный",

            "glock-18-skin-biohazard": "🔫 Glock-18 | Биоопасность",
            "glock-18-skin-bubble-gum": "🔫 Glock-18 | Жвачка",
            "glock-18-skin-crosshair": "🔫 Glock-18 | Перекрестие",
            "glock-18-skin-galaxy": "🔫 Glock-18 | Галактика",
            "glock-18-skin-gentle-hardening": "🔫 Glock-18 | Нежная закалка",
            "glock-18-skin-geometry": "🔫 Glock-18 | Геометрия",
            "glock-18-skin-graffiti-artist": "🔫 Glock-18 | Граффитист",
            "glock-18-skin-hypno-strike": "🔫 Glock-18 | Гипноудар",
            "glock-18-skin-juicy-fibers": "🔫 Glock-18 | Сочные волокна",
            "glock-18-skin-lightness": "🔫 Glock-18 | Лёгкость",
            "glock-18-skin-liquid-steel": "🔫 Glock-18 | Нежная сталь",
            "glock-18-skin-neon-sunset": "🔫 Glock-18 | Неоновый закат",
            "glock-18-skin-pew-pew": "🔫 Glock-18 | Пиу-пиу",
            "glock-18-skin-street-anime": "🔫 Glock-18 | Аниме Улиц",
            "glock-18-skin-toxic-love": "🔫 Glock-18 | Ядовитая любовь",
            "glock-18-skin-triple-strike": "🔫 Glock-18 | Тройной удар",
            "glock-18-skin-default": "🔫 Glock-18 | Стандартный",

            "m4a1-s-skin-biohazard": "🔫 M4A1-S | Биоопасность",
            "m4a1-s-skin-crosshair": "🔫 M4A1-S | Перекрестие",
            "m4a1-s-skin-galaxy": "🔫 M4A1-S | Галактика",
            "m4a1-s-skin-generator": "🔫 M4A1-S | Генератор",
            "m4a1-s-skin-gentle-hardening": "🔫 M4A1-S | Нежная закалка",
            "m4a1-s-skin-hidden-gold": "🔫 M4A1-S | Скрытое золото",
            "m4a1-s-skin-hypno-strike": "🔫 M4A1-S | Гипноудар",
            "m4a1-s-skin-juicy-fibers": "🔫 M4A1-S | Сочные волокна",
            "m4a1-s-skin-lightness": "🔫 M4A1-S | Лёгкость",
            "m4a1-s-skin-liquid-steel": "🔫 M4A1-S | Нежная сталь",
            "m4a1-s-skin-neon-sunset": "🔫 M4A1-S | Неоновый закат",
            "m4a1-s-skin-parade-version": "🔫 M4A1-S | Парадный вариант",
            "m4a1-s-skin-pink-waves": "🔫 M4A1-S | Розовые волны",
            "m4a1-s-skin-street-anime": "🔫 M4A1-S | Аниме Улиц",
            "m4a1-s-skin-toxic-love": "🔫 M4A1-S | Ядовитая любовь",
            "m4a1-s-skin-triple-strike": "🔫 M4A1-S | Тройной удар",
            "m4a1-s-skin-default": "🔫 M4A1-S | Стандартный",

            "mac-10-skin-biohazard": "🔫 MAC-10 | Биоопасность",
            "mac-10-skin-camo": "🔫 MAC-10 | Камуфляж",
            "mac-10-skin-crosshair": "🔫 MAC-10 | Перекрестие",
            "mac-10-skin-galaxy": "🔫 MAC-10 | Галактика",
            "mac-10-skin-gentle-hardening": "🔫 MAC-10 | Нежная закалка",
            "mac-10-skin-hypno-strike": "🔫 MAC-10 | Гипноудар",
            "mac-10-skin-juicy-fibers": "🔫 MAC-10 | Сочные волокна",
            "mac-10-skin-lightness": "🔫 MAC-10 | Лёгкость",
            "mac-10-skin-liquid-steel": "🔫 MAC-10 | Нежная сталь",
            "mac-10-skin-neon-sunset": "🔫 MAC-10 | Неоновый закат",
            "mac-10-skin-parade-version": "🔫 MAC-10 | Парадный вариант",
            "mac-10-skin-strange-substance": "🔫 MAC-10 | Странная субстанция",
            "mac-10-skin-street-anime": "🔫 MAC-10 | Аниме Улиц",
            "mac-10-skin-toxic-love": "🔫 MAC-10 | Ядовитая любовь",
            "mac-10-skin-triple-strike": "🔫 MAC-10 | Тройной удар",
            "mac-10-skin-default": "🔫 MAC-10 | Стандартный",

            "mp5-sd-skin-artist-nightmare": "🔫 MP5-SD | Кошмар художника",
            "mp5-sd-skin-biohazard": "🔫 MP5-SD | Биоопасность",
            "mp5-sd-skin-bubble-gum": "🔫 MP5-SD | Жвачка",
            "mp5-sd-skin-crosshair": "🔫 MP5-SD | Перекрестие",
            "mp5-sd-skin-galaxy": "🔫 MP5-SD | Галактика",
            "mp5-sd-skin-gentle-hardening": "🔫 MP5-SD | Нежная закалка",
            "mp5-sd-skin-hypno-strike": "🔫 MP5-SD | Гипноудар",
            "mp5-sd-skin-juicy-fibers": "🔫 MP5-SD | Сочные волокна",
            "mp5-sd-skin-lightness": "🔫 MP5-SD | Лёгкость",
            "mp5-sd-skin-liquid-steel": "🔫 MP5-SD | Нежная сталь",
            "mp5-sd-skin-neon-fog": "🔫 MP5-SD | Неоновый туман",
            "mp5-sd-skin-neon-sunset": "🔫 MP5-SD | Неоновый закат",
            "mp5-sd-skin-parade-version": "🔫 MP5-SD | Парадный вариант",
            "mp5-sd-skin-rich": "🔫 MP5-SD | Богач",
            "mp5-sd-skin-street-anime": "🔫 MP5-SD | Аниме Улиц",
            "mp5-sd-skin-toxic-love": "🔫 MP5-SD | Ядовитая любовь",
            "mp5-sd-skin-triple-strike": "🔫 MP5-SD | Тройной удар",
            "mp5-sd-skin-default": "🔫 MP5-SD | Стандартный",

            "mp-9-skin-ancient-ruins": "🔫 MP9 | Древние руины",
            "mp-9-skin-biohazard": "🔫 MP9 | Биоопасность",
            "mp-9-skin-crosshair": "🔫 MP9 | Перекрестие",
            "mp-9-skin-galaxy": "🔫 MP9 | Галактика",
            "mp-9-skin-gentle-hardening": "🔫 MP9 | Нежная закалка",
            "mp-9-skin-hypno-strike": "🔫 MP9 | Гипноудар",
            "mp-9-skin-juicy-fibers": "🔫 MP9 | Сочные волокна",
            "mp-9-skin-lightness": "🔫 MP9 | Лёгкость",
            "mp-9-skin-liquid-steel": "🔫 MP9 | Нежная сталь",
            "mp-9-skin-neon-sunset": "🔫 MP9 | Неоновый закат",
            "mp-9-skin-nostalgia": "🔫 MP9 | Ностальгия",
            "mp-9-skin-parade-version": "🔫 MP9 | Парадный вариант",
            "mp-9-skin-street-anime": "🔫 MP9 | Аниме Улиц",
            "mp-9-skin-summer-vibes": "🔫 MP9 | Летние флюиды",
            "mp-9-skin-toxic-love": "🔫 MP9 | Ядовитая любовь",
            "mp-9-skin-triple-strike": "🔫 MP9 | Тройной удар",
            "mp-9-skin-default": "🔫 MP9 | Стандартный",

            "p90-skin-artist-nightmare": "🔫 P90 | Кошмар художника",
            "p90-skin-biohazard": "🔫 P90 | Биоопасность",
            "p90-skin-crosshair": "🔫 P90 | Перекрестие",
            "p90-skin-forester": "🔫 P90 | Лесник",
            "p90-skin-galaxy": "🔫 P90 | Галактика",
            "p90-skin-gentle-hardening": "🔫 P90 | Нежная закалка",
            "p90-skin-hypno-strike": "🔫 P90 | Гипноудар",
            "p90-skin-juicy-fibers": "🔫 P90 | Сочные волокна",
            "p90-skin-lightness": "🔫 P90 | Лёгкость",
            "p90-skin-liquid-steel": "🔫 P90 | Нежная сталь",
            "p90-skin-neon": "🔫 P90 | Неон",
            "p90-skin-neon-sunset": "🔫 P90 | Неоновый закат",
            "p90-skin-parade-version": "🔫 P90 | Парадный вариант",
            "p90-skin-street-anime": "🔫 P90 | Аниме Улиц",
            "p90-skin-toxic-love": "🔫 P90 | Ядовитая любовь",
            "p90-skin-triple-strike": "🔫 P90 | Тройной удар",
            "p90-skin-default": "🔫 P90 | Стандартный",

            "rsh-12-skin-biohazard": "🔫 RSH-12 | Биоопасность",
            "rsh-12-skin-crosshair": "🔫 RSH-12 | Перекрестие",
            "rsh-12-skin-galaxy": "🔫 RSH-12 | Галактика",
            "rsh-12-skin-gentle-hardening": "🔫 RSH-12 | Нежная закалка",
            "rsh-12-skin-hypno-strike": "🔫 RSH-12 | Гипноудар",
            "rsh-12-skin-juicy-fibers": "🔫 RSH-12 | Сочные волокна",
            "rsh-12-skin-lightness": "🔫 RSH-12 | Лёгкость",
            "rsh-12-skin-liquid-steel": "🔫 RSH-12 | Нежная сталь",
            "rsh-12-skin-neon-sunset": "🔫 RSH-12 | Неоновый закат",
            "rsh-12-skin-toxic-love": "🔫 RSH-12 | Ядовитая любовь",
            "rsh-12-skin-triple-strike": "🔫 RSH-12 | Тройной удар",
            "rsh-12-skin-default": "🔫 RSH-12 | Стандартный",

            "sg-553-skin-biohazard": "🔫 SG 553 | Биоопасность",
            "sg-553-skin-crosshair": "🔫 SG 553 | Перекрестие",
            "sg-553-skin-galaxy": "🔫 SG 553 | Галактика",
            "sg-553-skin-gentle-hardening": "🔫 SG 553 | Нежная закалка",
            "sg-553-skin-hypno-strike": "🔫 SG 553 | Гипноудар",
            "sg-553-skin-juicy-fibers": "🔫 SG 553 | Сочные волокна",
            "sg-553-skin-lightness": "🔫 SG 553 | Лёгкость",
            "sg-553-skin-liquid-steel": "🔫 SG 553 | Нежная сталь",
            "sg-553-skin-neon-sunset": "🔫 SG 553 | Неоновый закат",
            "sg-553-skin-parade-version": "🔫 SG 553 | Парадный вариант",
            "sg-553-skin-professional": "🔫 SG 553 | Профессионал",
            "sg-553-skin-street-anime": "🔫 SG 553 | Аниме Улиц",
            "sg-553-skin-toxic-love": "🔫 SG 553 | Ядовитая любовь",
            "sg-553-skin-triple-strike": "🔫 SG 553 | Тройной удар",
            "sg-553-skin-default": "🔫 SG 553 | Стандартный",

            "tec-9-skin-biohazard": "🔫 Tec-9 | Биоопасность",
            "tec-9-skin-galaxy": "🔫 Tec-9 | Галактика",
            "tec-9-skin-gentle-hardening": "🔫 Tec-9 | Нежная закалка",
            "tec-9-skin-hypno-strike": "🔫 Tec-9 | Гипноудар",
            "tec-9-skin-juicy-fibers": "🔫 Tec-9 | Сочные волокна",
            "tec-9-skin-lightness": "🔫 Tec-9 | Лёгкость",
            "tec-9-skin-liquid-radiation": "🔫 Tec-9 | Жидкая радиация",
            "tec-9-skin-liquid-steel": "🔫 Tec-9 | Нежная сталь",
            "tec-9-skin-neon-sunset": "🔫 Tec-9 | Неоновый закат",
            "tec-9-skin-parade-version": "🔫 Tec-9 | Парадный вариант",
            "tec-9-skin-toxic-love": "🔫 Tec-9 | Ядовитая любовь",
            "tec-9-skin-triple-strike": "🔫 Tec-9 | Тройной удар",
            "tec-9-skin-default": "🔫 Tec-9 | Стандартный",

            "usp-s-skin-artist-nightmare": "🔫 USP-S | Кошмар художника",
            "usp-s-skin-biohazard": "🔫 USP-S | Биоопасность",
            "usp-s-skin-crosshair": "🔫 USP-S | Перекрестие",
            "usp-s-skin-cyberpunk": "🔫 USP-S | Киберпанк",
            "usp-s-skin-galaxy": "🔫 USP-S | Галактика",
            "usp-s-skin-gentle-hardening": "🔫 USP-S | Нежная закалка",
            "usp-s-skin-geometry": "🔫 USP-S | Геометрия",
            "usp-s-skin-hot-rod": "🔫 USP-S | Хот-род",
            "usp-s-skin-hypno-strike": "🔫 USP-S | Гипноудар",
            "usp-s-skin-juicy-fibers": "🔫 USP-S | Сочные волокна",
            "usp-s-skin-lightness": "🔫 USP-S | Лёгкость",
            "usp-s-skin-liquid-steel": "🔫 USP-S | Нежная сталь",
            "usp-s-skin-neon-sunset": "🔫 USP-S | Неоновый закат",
            "usp-s-skin-slang": "🔫 USP-S | Сленг",
            "usp-s-skin-street-anime": "🔫 USP-S | Аниме Улиц",
            "usp-s-skin-survivor": "🔫 USP-S | Выживший",
            "usp-s-skin-toxic-love": "🔫 USP-S | Ядовитая любовь",
            "usp-s-skin-triple-strike": "🔫 USP-S | Тройной удар",
            "usp-s-skin-default": "🔫 USP-S | Стандартный",

            "xm1014-skin-biohazard": "🔫 XM1014 | Биоопасность",
            "xm1014-skin-crosshair": "🔫 XM1014 | Перекрестие",
            "xm1014-skin-galaxy": "🔫 XM1014 | Галактика",
            "xm1014-skin-gentle-hardening": "🔫 XM1014 | Нежная закалка",
            "xm1014-skin-hidden-gold": "🔫 XM1014 | Скрытое золото",
            "xm1014-skin-hypno-strike": "🔫 XM1014 | Гипноудар",
            "xm1014-skin-juicy-fibers": "🔫 XM1014 | Сочные волокна",
            "xm1014-skin-lightness": "🔫 XM1014 | Лёгкость",
            "xm1014-skin-liquid-steel": "🔫 XM1014 | Нежная сталь",
            "xm1014-skin-neon-sunset": "🔫 XM1014 | Неоновый закат",
            "xm1014-skin-parade-version": "🔫 XM1014 | Парадный вариант",
            "xm1014-skin-street-anime": "🔫 XM1014 | Аниме Улиц",
            "xm1014-skin-toxic-love": "🔫 XM1014 | Ядовитая любовь",
            "xm1014-skin-triple-strike": "🔫 XM1014 | Тройной удар",
            "xm1014-skin-default": "🔫 XM1014 | Стандартный",

            // Перчатки
            "gloves-skin-default": "🧤 Стандартные",
            "gloves-skin-emerald-dragon": "🧤 Изумрудный дракон",
            "gloves-skin-emerald-smoke": "🧤 Изумрудный дым",
            "gloves-skin-galaxy": "🧤 Галактика",
            "gloves-skin-gentle-hardening": "🧤 Нежная закалка",
            "gloves-skin-geometry": "🧤 Геометрия",
            "gloves-skin-harbinger": "🧤 Предвестник",
            "gloves-skin-hypno-strike": "🧤 Гипноудар",
            "gloves-skin-juicy-fibers": "🧤 Сочные волокна",
            "gloves-skin-lava": "🧤 Лава",
            "gloves-skin-lightness": "🧤 Лёгкость",
            "gloves-skin-liquid-steel": "🧤 Нежная сталь",
            "gloves-skin-pink-waves": "🧤 Розовые волны",
            "gloves-skin-red-lines": "🧤 Красные линии",
            "gloves-skin-scarlet-shadow": "🧤 Алая тень",
            "gloves-skin-skull": "🧤 Череп",
            "gloves-skin-strict-style": "🧤 Строгий стиль",
            "gloves-skin-toxic-love": "🧤 Ядовитая любовь",
            "gloves-skin-cybersport": "🧤 Киберспорт",

            // Ножи
            "knife-bayonet-skin-default": "🔪 М9 | Стандарт",
            "knife-bayonet-skin-emerald-smoke": "🔪 М9 | Изумрудный дым",
            "knife-bayonet-skin-engraving": "🔪 М9 | Гравировка",
            "knife-bayonet-skin-galaxy": "🔪 М9 | Галактика",
            "knife-bayonet-skin-gentle-hardening": "🔪 М9 | Нежная закалка",
            "knife-bayonet-skin-golden-blade": "🔪 М9 | Золотое лезвие",
            "knife-bayonet-skin-graffiti-artist": "🔪 М9 | Граффитист",
            "knife-bayonet-skin-hypno-strike": "🔪 М9 | Гипноудар",
            "knife-bayonet-skin-juicy-fibers": "🔪 М9 | Сочные волокна",
            "knife-bayonet-skin-liquid-steel": "🔪 М9 | Нежная сталь",
            "knife-bayonet-skin-neon-shimmer": "🔪 М9 | Неоновый перелив",
            "knife-bayonet-skin-prisoner-of-fire": "🔪 М9 | Пленник огня",
            "knife-bayonet-skin-raptor": "🔪 М9 | Раптор",
            "knife-bayonet-skin-red-lines": "🔪 М9 | Красные линии",
            "knife-bayonet-skin-toxic-love": "🔪 М9 | Ядовитая любовь",
            "knife-bayonet-skin-triple-strike": "🔪 М9 | Тройной удар",
            "knife-bayonet-skin-cyberpunk": "🔪 М9 | Киберпанк",

            "knife-falchion-skin-ash-dragon": "🔪 Фальшион | Пепельный дракон",
            "knife-falchion-skin-default": "🔪 Фальшион | Стандарт",
            "knife-falchion-skin-emerald-smoke": "🔪 Фальшион | Изумрудный дым",
            "knife-falchion-skin-galaxy": "🔪 Фальшион | Галактика",
            "knife-falchion-skin-gentle-hardening": "🔪 Фальшион | Нежная закалка",
            "knife-falchion-skin-ghost-storm": "🔪 Фальшион | Призрачный шторм",
            "knife-falchion-skin-golden-blade": "🔪 Фальшион | Золотое лезвие",
            "knife-falchion-skin-hypno-strike": "🔪 Фальшион | Гипноудар",
            "knife-falchion-skin-juicy-fibers": "🔪 Фальшион | Сочные волокна",
            "knife-falchion-skin-liquid-steel": "🔪 Фальшион | Нежная сталь",
            "knife-falchion-skin-neon-shimmer": "🔪 Фальшион | Неоновый перелив",
            "knife-falchion-skin-red-lines": "🔪 Фальшион | Красные линии",
            "knife-falchion-skin-shadow-of-the-east": "🔪 Фальшион | Тень Востока",
            "knife-falchion-skin-toxic-love": "🔪 Фальшион | Ядовитая любовь",
            "knife-falchion-skin-triple-strike": "🔪 Фальшион | Тройной удар",

            "knife-karambit-skin-caramel": "🔪 Керамбит | Карамель",
            "knife-karambit-skin-cosmic-dust": "🔪 Керамбит | Космическая пыль",
            "knife-karambit-skin-default": "🔪 Керамбит | Стандарт",
            "knife-karambit-skin-emerald-dragon": "🔪 Керамбит | Изумрудный дракон",
            "knife-karambit-skin-emerald-smoke": "🔪 Керамбит | Изумрудный дым",
            "knife-karambit-skin-galaxy": "🔪 Керамбит | Галактика",
            "knife-karambit-skin-gentle-hardening": "🔪 Керамбит | Нежная закалка",
            "knife-karambit-skin-geometry": "🔪 Керамбит | Геометрия",
            "knife-karambit-skin-golden-blade": "🔪 Керамбит | Золотое лезвие",
            "knife-karambit-skin-hypno-strike": "🔪 Керамбит | Гипноудар",
            "knife-karambit-skin-juicy-fibers": "🔪 Керамбит | Сочные волокна",
            "knife-karambit-skin-lava": "🔪 Керамбит | Лава",
            "knife-karambit-skin-liquid-steel": "🔪 Керамбит | Нежная сталь",
            "knife-karambit-skin-neon-shimmer": "🔪 Керамбит | Неоновый перелив",
            "knife-karambit-skin-persian-night": "🔪 Керамбит | Персидская ночь",
            "knife-karambit-skin-red-lines": "🔪 Керамбит | Красные линии",
            "knife-karambit-skin-sands-of-time": "🔪 Керамбит | Пески времени",
            "knife-karambit-skin-skull": "🔪 Керамбит | Череп",
            "knife-karambit-skin-toxic-love": "🔪 Керамбит | Ядовитая любовь",
            "knife-karambit-skin-triple-strike": "🔪 Керамбит | Тройной удар",

            "knife-kukri-skin-default": "🔪 Кукри | Стандарт",
            "knife-kukri-skin-emerald-smoke": "🔪 Кукри | Изумрудный дым",
            "knife-kukri-skin-galaxy": "🔪 Кукри | Галактика",
            "knife-kukri-skin-gentle-hardening": "🔪 Кукри | Нежная закалка",
            "knife-kukri-skin-golden-blade": "🔪 Кукри | Золотое лезвие",
            "knife-kukri-skin-golden-guardian": "🔪 Кукри | Золотой страж",
            "knife-kukri-skin-hypno-strike": "🔪 Кукри | Гипноудар",
            "knife-kukri-skin-juicy-fibers": "🔪 Кукри | Сочные волокна",
            "knife-kukri-skin-liquid-steel": "🔪 Кукри | Нежная сталь",
            "knife-kukri-skin-neon-shimmer": "🔪 Кукри | Неоновый перелив",
            "knife-kukri-skin-red-lines": "🔪 Кукри | Красные линии",
            "knife-kukri-skin-sea-wolf": "🔪 Кукри | Морской волк",
            "knife-kukri-skin-toxic-love": "🔪 Кукри | Ядовитая любовь",
            "knife-kukri-skin-triple-strike": "🔪 Кукри | Тройной удар",

            "knife-skin-emerald-smoke": "🔪 Нож | Изумрудный дым",
            "knife-skin-galaxy": "🔪 Нож | Галактика",
            "knife-skin-gentle-hardening": "🔪 Нож | Нежная закалка",
            "knife-skin-golden-blade": "🔪 Нож | Золотое лезвие",
            "knife-skin-juicy-fibers": "🔪 Нож | Сочные волокна",
            "knife-skin-liquid-steel": "🔪 Нож | Нежная сталь",
            "knife-skin-neon-shimmer": "🔪 Нож | Неоновый перелив",
            "knife-skin-red-lines": "🔪 Нож | Красные линии",
            "knife-skin-strict-style": "🔪 Нож | Строгий стиль",
            "knife-skin-toxic-love": "🔪 Нож | Ядовитая любовь",
            "knife-skin-default": "🔪 Нож | Стандарт",

            "knife-switchable-skin-default": "🔪 Складной нож | Стандарт",
            "knife-switchable-skin-emerald-smoke": "🔪 Складной нож | Изумрудный дым",
            "knife-switchable-skin-galaxy": "🔪 Складной нож | Галактика",
            "knife-switchable-skin-gentle-hardening": "🔪 Складной нож | Нежная закалка",
            "knife-switchable-skin-golden-blade": "🔪 Складной нож | Золотое лезвие",
            "knife-switchable-skin-hypno-strike": "🔪 Складной нож | Гипноудар",
            "knife-switchable-skin-juicy-fibers": "🔪 Складной нож | Сочные волокна",
            "knife-switchable-skin-liquid-steel": "🔪 Складной нож | Нежная сталь",
            "knife-switchable-skin-neon-shimmer": "🔪 Складной нож | Неоновый перелив",
            "knife-switchable-skin-pink-waves": "🔪 Складной нож | Розовые волны",
            "knife-switchable-skin-red-lines": "🔪 Складной нож | Красные линии",
            "knife-switchable-skin-toxic-love": "🔪 Складной нож | Ядовитая любовь",
            "knife-switchable-skin-triple-strike": "🔪 Складной нож | Тройной удар",

            // Гранаты и бомба
            "grenade-flash-skin-default": "💥 Светошумовая | Стандарт",
            "grenade-he-skin-default": "💥 Осколочная | Стандарт",
            "grenade-smoke-skin-default": "💥 Дымовая | Стандарт",
            "c4-skin-default": "💣 Бомба | Стандарт",

            // Кейсы и ключи
            "case-a": "📦 Полевой Кейс",
            "case-b": "📦 Тактический Кейс",
            "case-c": "📦 Редкий Кейс",
            "case-d": "📦 Закаленный Кейс",
            "case-galaxy": "📦 Кейс Галактика",
            "case-hypno-strike": "📦 Кейс Гипноудар",
            "key_a": "🔑 Ключ от Полевого Кейса",
            "key_b": "🔑 Ключ от Тактического кейса",
            "key_c": "🔑 Ключ от Редкого Кейса",
            "key_d": "🔑 Ключ от Закаленного Кейса",
            "key-galaxy": "🔑 Ключ от кейса Галактика",
            "key-hypno-strike": "🔑 Ключ от кейса Гипноудар",

            "medal-pt-vector": "Медаль За Участие Вектор",
            "medal-win-vector": "Медаль За Победу Вектор",
            "medal-battle-top1": "Медаль Топ 1 По Сражениям (Разлом)",
            "medal-battle-top2": "Медаль Топ 2 По Сражениям (Разлом)",
            "medal-battle-top3": "Медаль Топ 3 По Сражениям (Разлом)",
            "medal-pt-delta": "Медаль За Участие Дельта",
            "medal-win-delta": "Медаль За Победу Дельта",
            "medal-supplies-top1": "Медаль Топ 1 По Поставкам (Разлом)",
            "medal-supplies-top2": "Медаль Топ 2 По Поставкам (Разлом)",
            "medal-supplies-top3": "Медаль Топ 3 По Поставкам (Разлом)",

        },
        status: {
            'hasMute_true':  '🔇 Мут активен',
            'hasMute_false': '✅ Мута нет',
            'hasBan_true':   '🚫 Бан активен',
            'hasBan_false':  '✅ Бана нет',
        },
        phrases: {
            'noRewards':      'Нет наград за последний матч',
            'noSkins':        'Скины не надеты',
            'noGloves':       'Перчатки не надеты',
            'noViews':        'Нет просмотров',
            'noNickname':     'Без никнейма',
            'allClaimed':     '✅ Все награды получены',
            'notAllClaimed':  '⏳ Есть недоступные награды',
            'mergedWith':     '🔗 Аккаунт объединен с:',
            'never':          'Никогда',
            'attack':         '🔴 Атака',
            'defense':        '🔵 Защита',
            'updated':        'Обновлено',
            'unknown':        '❓ Неизвестно',
            'equippedSkins':  '⭐ Экипированные скины',
            'allSkins':       '🎒 Все скины',
            'casesKeys':      '📦 Кейсы и ключи',
            'inventory':      'Инвентарь',
        }
    };

    window.addEventListener('message', function(event) {
        if (event.data && event.data.action === 'captureProfile') {
            console.log('[GameIframe] Получена команда: captureProfile');

            window.activatePlayerCapture();
        }
    });


    function t(category, key, fallback) {
        if (LOCALE[category] && LOCALE[category][key] !== undefined) {
            return LOCALE[category][key];
        }
        if (fallback !== undefined) return fallback;
        if (category === 'skins' && key) {
            return key.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        }
        return key || LOCALE.phrases['unknown'];
    }

    let shouldInterceptNext = false;
    let targetWindow = null;


    window.addEventListener('keydown', function(event) {

        if (event.key === 'F4' || event.keyCode === 115) {

            event.preventDefault();

            console.log('[Shortcut] Нажата клавиша F4. Запуск перехвата...');

            if (typeof window.activatePlayerCapture === 'function') {
                window.activatePlayerCapture();
            }
        }
    });


    window.activatePlayerCapture = function() {
        shouldInterceptNext = true;
        targetWindow = window.open("", "_blank", "width=1000,height=900");
        if (targetWindow) {
            targetWindow.document.open();
            targetWindow.document.write(`
            <html>
            <head>
                <style>
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    body {
                        background: #0a0a0b;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        min-height: 100vh;
                        font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
                    }
                    .wait-card {
                        background: linear-gradient(135deg, #1a1a1e 0%, #141418 100%);
                        border: 1px solid #2c2c2e;
                        border-radius: 12px;
                        padding: 60px 40px;
                        text-align: center;
                        max-width: 450px;
                        width: 90%;
                    }
                    .spinner {
                        width: 48px;
                        height: 48px;
                        border: 3px solid #2c2c2e;
                        border-top-color: #7c3aed;
                        border-radius: 50%;
                        animation: spin 0.8s linear infinite;
                        margin: 0 auto 24px;
                    }
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                    .title {
                        font-size: 18px;
                        font-weight: 700;
                        color: #fff;
                        margin-bottom: 8px;
                    }
                    .subtitle {
                        font-size: 14px;
                        color: #7c3aed;
                        font-weight: 600;
                        margin-bottom: 12px;
                    }
                    .description {
                        font-size: 13px;
                        color: #8e8e93;
                        line-height: 1.5;
                    }
                </style>
            </head>
            <body>
                <div class="wait-card">
                    <div class="spinner"></div>
                    <div class="title">Вас приветствует КС ZOНА OBSERVER!</div>
                    <div class="subtitle">⏳ Ожидание данных игрока</div>
                    <div class="description">Откройте профиль нужного вам игрока</div>
                </div>
            </body>
            </html>
        `);
            targetWindow.document.close();
        }
    };

    const originalFetch = window.fetch;
    window.fetch = function(url, init) {
        if (typeof url === 'string' && url.includes('/users/get_player') && shouldInterceptNext) {
            shouldInterceptNext = false;
            return originalFetch.apply(this, arguments).then(response => {
                response.clone().json().then(data => {
                    if (targetWindow && !targetWindow.closed) renderDashboard(data);
                });
                return response;
            });
        }
        return originalFetch.apply(this, arguments);
    };

    function renderDashboard(d) {
        const doc = targetWindow.document;
        doc.open();

        const fmtNum = (n) => n?.toLocaleString() || '0';
        const fmtTime = (s) => {
            const h = Math.floor(s / 3600);
            const m = Math.floor((s % 3600) / 60);
            return `${h}ч ${m}м`;
        };
        const fmtDate = (dateStr) => {
            if (!dateStr || dateStr.startsWith('0001')) return t('phrases', 'never');
            return new Date(dateStr).toLocaleString('ru-RU', {
                day: 'numeric', month: 'short', year: 'numeric',
                hour: '2-digit', minute: '2-digit'
            });
        };


        const currencies = ['gold', 'cash', 'trade-coin'];
        const currencyItems = {};
        (d.items || []).forEach(item => {
            if (currencies.includes(item.idArchetype)) {
                currencyItems[item.idArchetype] = item.count;
            }
        });
        const currencyHtml = Object.entries(currencyItems).map(([type, count]) => `
            <span style="display:inline-flex;align-items:center;gap:4px;background:rgba(255,255,255,0.05);padding:4px 10px;border-radius:14px;font-size:12px;font-weight:600;">
                ${t('currencies', type, type)}: ${fmtNum(count)}
            </span>
        `).join('');


        const rewardsHtml = (d.lastMatchReward || []).map(r => {
            const colors = {
                'gold': { bg: 'rgba(255,215,0,0.15)', border: '#ffd700', text: '#ffd700' },
                'cash': { bg: 'rgba(48,209,88,0.15)', border: '#30d158', text: '#30d158' },
                'silver': { bg: 'rgba(142,142,147,0.15)', border: '#8e8e93', text: '#e1e1e6' },
            };
            const c = colors[r.idArchetype] || colors['silver'];
            const label = t('archetypes', r.idArchetype, r.idArchetype);
            return `<span style="display:inline-flex;align-items:center;gap:4px;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;background:${c.bg};border:1px solid ${c.border};color:${c.text};">${label}: +${fmtNum(r.count)}</span>`;
        }).join(' ') || `<span style="color:#666;font-style:italic;">${t('phrases', 'noRewards')}</span>`;

        const modesHtml = (d.ratingsByMode || []).map(r => `
            <div style="background:#1c1c1e;border-left:3px solid #7c3aed;padding:14px 16px;border-radius:0 8px 8px 0;">
                <div style="font-weight:700;font-size:14px;color:#fff;margin-bottom:8px;">${t('gamemodes', r.gamemode, r.gamemode)}</div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:12px;">
                    <div><span style="color:#8e8e93;">Рейтинг:</span> <span style="color:#34c759;font-weight:700;">${Math.round(r.rating)}</span></div>
                    <div><span style="color:#8e8e93;">Матчей:</span> <span style="color:#fff;font-weight:600;">${r.matchesPlayed}</span></div>
                    <div><span style="color:#8e8e93;">RD:</span> <span style="color:#aeaeae;">${r.rd.toFixed(1)}</span></div>
                    <div><span style="color:#8e8e93;">Волатильность:</span> <span style="color:#aeaeae;">${r.volatility.toFixed(4)}</span></div>
                </div>
                <div style="font-size:10px;color:#555;margin-top:6px;">${t('phrases', 'updated')}: ${fmtDate(r.lastUpdatedAt)}</div>
            </div>
        `).join('');

        const rvHtml = d.viewedRV ? (
            Object.entries(d.viewedRV)
                .filter(([_, val]) => val > 0)
                .map(([key, val]) => `<span style="display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:14px;font-size:11px;background:rgba(124,58,237,0.15);border:1px solid rgba(124,58,237,0.3);color:#bf5af2;">${t('rvKeys', key, key)}: ${val}</span>`)
                .join(' ') || `<span style="color:#666;font-style:italic;">${t('phrases', 'noViews')}</span>`
        ) : `<span style="color:#666;font-style:italic;">${t('phrases', 'noViews')}</span>`;

        const uuidMap = new Map();
        (d.items || []).forEach(item => {
            if (item.uniqueId) uuidMap.set(item.uniqueId, item);
        });

        const equippedList = [];
        if (d.equippedSkins) {
            Object.entries(d.equippedSkins).forEach(([team, skinId]) => {
                const teamIndicator = team === '0' ? '🔴' : '🔵';
                const teamName = team === '0' ? t('phrases','attack') : t('phrases','defense');
                equippedList.push({ type: 'agent', team, teamIndicator, teamName, name: t('skins', skinId, skinId) });
            });
        }
        if (d.selectedWeaponSkins) {
            Object.entries(d.selectedWeaponSkins).forEach(([weapon, teams]) => {
                Object.entries(teams).forEach(([team, uuid]) => {
                    const item = uuidMap.get(uuid);
                    const name = item ? t('skins', item.idArchetype, item.idArchetype) : uuid.substring(0,8)+'...';
                    const teamIndicator = team === '0' ? '🔴' : '🔵';
                    const teamName = team === '0' ? t('phrases','attack') : t('phrases','defense');
                    equippedList.push({ type: 'weapon', weapon, team, teamIndicator, teamName, name });
                });
            });
        }

        const gloveItems = [];
        if (d.equippedGloves) {
            Object.entries(d.equippedGloves).forEach(([team, uuid]) => {
                const item = uuidMap.get(uuid);
                const name = item ? t('skins', item.idArchetype, item.idArchetype) : uuid.substring(0,8)+'...';
                const teamIndicator = team === '0' ? '🔴' : '🔵';
                gloveItems.push({ team, teamIndicator, name });
            });
        }
        const glovesHtml = gloveItems.length ? gloveItems.map(g => `
    <div style="display:flex;align-items:center;gap:8px;padding:4px 0;">
        <span style="font-size:11px;color:#8e8e93;min-width:70px;">${g.teamIndicator} ${g.team === '0' ? t('phrases','attack') : t('phrases','defense')}</span>
        <span style="font-size:12px;color:#fff;">${g.name}</span>
    </div>
`).join('') : `<span style="color:#666;">${t('phrases','noGloves')}</span>`;


        const inventory = { weapons: {}, agents: [], gloves: [], knives: [], grenades: [], cases: [], keys: [] };

        (d.items || []).forEach(item => {
            const id = item.idArchetype;
            if (!item.uniqueId) return; 
            if (id.startsWith('agent_')) {
                inventory.agents.push(item);
            } else if (id.includes('gloves')) {
                inventory.gloves.push(item);
            } else if (id.includes('knife')) {
                inventory.knives.push(item);
            } else if (id.startsWith('grenade') || id === 'flash' || id === 'he' || id === 'smoke' || id.startsWith('c4')) {
                inventory.grenades.push(item);
            } else if (id.startsWith('case-')) {
                inventory.cases.push(item);
            } else if (id.startsWith('key_')) {
                inventory.keys.push(item);
            } else {
                let base = id.includes('-skin-') ? id.split('-skin-')[0] : id;
                if (!inventory.weapons[base]) inventory.weapons[base] = [];
                inventory.weapons[base].push(item);
            }
        });

        function renderGroup(title, items) {
            if (!items || items.length === 0) return '';
            const itemDivs = items.map(item => `<div style="font-size:12px;color:#ddd;padding:3px 0;">${t('skins', item.idArchetype, item.idArchetype)}</div>`).join('');
            return `<div style="margin-bottom:12px;"><div style="font-weight:600;color:#fff;margin-bottom:4px;">${title} (${items.length})</div>${itemDivs}</div>`;
        }

        let inventoryHtml = '';
        for (const [base, items] of Object.entries(inventory.weapons)) {
            inventoryHtml += renderGroup(t('skins', base, base.toUpperCase()), items);
        }
        inventoryHtml += renderGroup('🕵️ Агенты', inventory.agents);
        inventoryHtml += renderGroup('🧤 Перчатки', inventory.gloves);
        inventoryHtml += renderGroup('🔪 Ножи', inventory.knives);
        inventoryHtml += renderGroup('💥 Гранаты и бомба', inventory.grenades);
        const casesKeys = [...inventory.cases, ...inventory.keys];
        inventoryHtml += renderGroup(t('phrases','casesKeys'), casesKeys);

        if (!inventoryHtml) inventoryHtml = `<div style="color:#666;">${t('phrases','inventory')} пуст</div>`;

        const timeRewardsHtml = d.playTimeRewardsClaimedIndices ? `
            <div style="margin-top:6px;">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                    <span style="font-size:12px;color:#8e8e93;">Прогресс:</span>
                    <span style="font-size:14px;font-weight:700;color:#30d158;">${d.playTimeRewardsProgress}</span>
                </div>
                <div style="font-size:11px;color:#666;">Получено: [${d.playTimeRewardsClaimedIndices.join(', ')}]</div>
                <div style="font-size:11px;color:${d.allPlayTimeRewardsClaimed ? '#30d158' : '#ffd60a'};margin-top:2px;">
                    ${d.allPlayTimeRewardsClaimed ? t('phrases','allClaimed') : t('phrases','notAllClaimed')}
                </div>
            </div>` : '';

        const vipProgress = d.vipExp && d.vipExpToNextLevel ? Math.min((d.vipExp / d.vipExpToNextLevel) * 100, 100) : 0;

        doc.write(`
        <html>
        <head><title>Профиль: ${d.customNickname || d.username}</title>
        <style>
            * { box-sizing:border-box; }
            body { background:#0a0a0b; color:#e1e1e6; font-family:'Segoe UI',system-ui,sans-serif; margin:0; padding:24px; font-size:14px; line-height:1.4; }
            .container { max-width:1000px; margin:0 auto; }
            .card { background:linear-gradient(135deg, #1a1a1e 0%, #141418 100%); border:1px solid #2c2c2e; border-radius:12px; padding:18px; margin-bottom:16px; }
            .header { display:flex; align-items:center; gap:18px; position:relative; }
            .avatar { width:68px; height:68px; border-radius:50%; border:2px solid #7c3aed; object-fit:cover; background:#2c2c2e; flex-shrink:0; }
            .grid-2 { display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:12px; }
            .grid-3 { display:grid; grid-template-columns:repeat(auto-fit, minmax(160px, 1fr)); gap:12px; }
            .grid-4 { display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:12px; }
            .stat { text-align:center; }
            .stat-value { font-size:22px; font-weight:800; line-height:1.2; }
            .stat-label { font-size:10px; color:#8e8e93; text-transform:uppercase; letter-spacing:0.8px; margin-top:4px; }
            .section-title { font-size:11px; color:#7c3aed; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; margin-bottom:12px; display:flex; align-items:center; gap:8px; }
            .section-title::after { content:''; flex:1; height:1px; background:linear-gradient(to right, #7c3aed, transparent); }
            .progress-bar { height:6px; background:#2c2c2e; border-radius:3px; overflow:hidden; margin-top:6px; }
            .progress-fill { height:100%; background:linear-gradient(90deg, #7c3aed, #bf5af2); border-radius:3px; }
            .tag { display:inline-flex; align-items:center; gap:4px; padding:2px 8px; border-radius:10px; font-size:11px; font-weight:600; }
            .mono { font-family:monospace; font-size:11px; }
            .currency-block { position:absolute; top:12px; right:18px; display:flex; gap:8px; flex-wrap:wrap; }
        </style>
        </head>
        <body>
        <div class="container">
            <div class="card header">
                <img class="avatar" src="${d.avatarUrl || ''}" onerror="this.style.display='none'">
                <div style="flex:1;">
                    <h2 style="margin:0 0 2px 0;font-size:22px;font-weight:700;color:#fff;">${d.customNickname || t('phrases','noNickname')}</h2>
                    <div style="font-size:12px;color:#8e8e93;">@${d.username}</div>
                    <div style="display:flex;gap:8px;margin-top:6px;flex-wrap:wrap;">
                        <span class="tag" style="background:rgba(124,58,237,0.2);color:#bf5af2;">⭐ LVL ${d.vipLevel} VIP</span>
                        <span class="tag" style="background:rgba(255,215,0,0.15);color:#ffd700;">🏆 Ранг #${d.likesRank}</span>
                        <span class="tag" style="background:rgba(48,209,88,0.15);color:#30d158;">📊 K/D ${parseFloat(d.kdRatio || 0).toFixed(2)}</span>
                    </div>
                </div>
                <div class="currency-block">${currencyHtml}</div>
            </div>

            <div class="section-title">📊 БОЕВАЯ СТАТИСТИКА</div>
            <div class="grid-4">
                <div class="card stat"><div class="stat-value" style="color:#ff453a;">${fmtNum(d.totalKills)}</div><div class="stat-label">Убийств</div></div>
                <div class="card stat"><div class="stat-value" style="color:#ff9f0a;">${fmtNum(d.totalDeaths)}</div><div class="stat-label">Смертей</div></div>
                <div class="card stat"><div class="stat-value" style="color:#5e5ce6;">${fmtNum(d.totalAssists)}</div><div class="stat-label">Ассистов</div></div>
                <div class="card stat"><div class="stat-value" style="color:#30d158;">${parseFloat(d.kdRatio || 0).toFixed(2)}</div><div class="stat-label">К/Д (отношение килов к смертям)</div></div>
            </div>
            <div class="grid-3">
                <div class="card stat"><div class="stat-value" style="color:#fff;">${fmtNum(d.matchesPlayed)}</div><div class="stat-label">Матчей</div></div>
                <div class="card stat"><div class="stat-value" style="color:#bf5af2;">${fmtNum(d.likesReceived)}</div><div class="stat-label">Лайков</div></div>
                <div class="card stat"><div style="font-size:13px;color:#8e8e93;">Сегодня лайков поставлено</div><div style="font-size:18px;font-weight:700;">${d.likesGivenToday} / ${d.likesDailyLimit}</div><div class="stat-label">Отдано / Лимит</div></div>
            </div>

            <div class="section-title">✨ ПРОГРЕСС И VIP</div>
            <div class="grid-2">
                <div class="card"><div style="font-size:11px;color:#8e8e93;text-transform:uppercase;">Опыт (EXP)</div><div style="font-size:24px;font-weight:800;color:#ffd60a;">${fmtNum(d.exp)}</div></div>
                <div class="card"><div style="font-size:11px;color:#8e8e93;text-transform:uppercase;">VIP Уровень ${d.vipLevel}</div><div style="font-size:24px;font-weight:800;color:#bf5af2;">${fmtNum(d.vipExp)} <span style="font-size:12px;color:#8e8e93;">/ ${fmtNum(d.vipExpToNextLevel)}</span></div><div class="progress-bar"><div class="progress-fill" style="width:${vipProgress}%;"></div></div><div style="font-size:10px;color:#666;margin-top:4px;">Бонус: +${d.vipBonusPercent}% → +${d.vipBonusPercentNext}%</div></div>
            </div>

            <div class="section-title">⏱️ АКТИВНОСТЬ</div>
            <div class="grid-3">
                <div class="card stat"><div class="stat-value" style="color:#64d2ff;">${fmtTime(d.playTimeSeconds)}</div><div class="stat-label">Общее время</div></div>
                <div class="card stat"><div class="stat-value" style="color:#30d158;">${fmtTime(d.dailyPlayTimeSeconds)}</div><div class="stat-label">За сегодня</div></div>
                <div class="card stat"><div class="stat-value" style="color:#ffd60a;">${d.consecutiveDays} дн.</div><div class="stat-label">Серия (день ${d.currentRewardDay})</div></div>
            </div>
            <div class="card" style="font-size:12px;color:#8e8e93;">📅 Последний вход: <span style="color:#fff;">${fmtDate(d.lastCheckinDate)}</span></div>
            <div class="card"><div style="font-size:12px;font-weight:600;color:#fff;">🎁 Награды за время в игре (сегодня)</div>${timeRewardsHtml}</div>

            <div class="section-title">🔒 СТАТУС АККАУНТА</div>
            <div class="grid-2">
                <div class="card"><span style="font-size:20px;">${d.hasMute ? '🔇' : '✅'}</span> <span style="font-weight:600;color:${d.hasMute ? '#ff453a' : '#30d158'};">${t('status','hasMute_'+d.hasMute)}</span>${d.hasMute ? `<div style="font-size:11px;color:#ff453a;">До: ${fmtDate(d.muteEnd)}</div>` : ''}</div>
                <div class="card"><span style="font-size:20px;">${d.hasBan ? '🚫' : '✅'}</span> <span style="font-weight:600;color:${d.hasBan ? '#ff453a' : '#30d158'};">${t('status','hasBan_'+d.hasBan)}</span>${d.hasBan ? `<div style="font-size:11px;color:#ff453a;">До: ${fmtDate(d.banEnd)}<br>Причина: ${d.banReason || '—'}</div>` : ''}</div>
            </div>
            ${d.mergedTo ? `<div class="card" style="border-color:rgba(255,215,0,0.3);background:rgba(255,215,0,0.05);"><span style="color:#ffd60a;">${t('phrases','mergedWith')} <strong>${d.mergedTo}</strong></span></div>` : ''}

            <div class="section-title">🎨 ЭКИПИРОВКА</div>
            <div class="grid-2">
                <div class="card"><div style="font-weight:600;color:#fff;margin-bottom:8px;">👤 Скины</div>${equippedList.length ? equippedList.map(e => `<div style="font-size:12px;padding:2px 0;">${e.teamIndicator} ${e.weapon ? e.weapon+': ' : ''}${e.name}</div>`).join('') : '<span style="color:#666;">Нет скинов</span>'}</div>
                <div class="card"><div style="font-weight:600;color:#fff;margin-bottom:8px;">🧤 Перчатки</div>${glovesHtml}</div>
            </div>

            <div class="section-title">📺 НАГРАДЫ ЗА РЕКЛАМУ</div>
            <div class="card" style="display:flex;gap:8px;flex-wrap:wrap;">${rvHtml}</div>

            <div class="section-title">🎁 НАГРАДЫ ЗА ПОСЛЕДНИЙ МАТЧ</div>
            <div class="card" style="display:flex;gap:10px;flex-wrap:wrap;">${rewardsHtml}</div>

            <div class="section-title">🎮 РЕЙТИНГ ПО РЕЖИМАМ</div>
            <div class="grid-2" style="margin-bottom:16px;">${modesHtml}</div>

            <!-- ИНВЕНТАРЬ -->
            <div class="section-title">🎒 ИНВЕНТАРЬ</div>
            <div class="card">${inventoryHtml}</div>

            <div class="section-title">🔑 ТЕХНИЧЕСКАЯ ИНФОРМАЦИЯ</div>
            <div class="card">
                <div class="mono" style="color:#666;word-break:break-all;">ID: ${d.idYandex}</div>
                <div class="mono" style="color:#666;margin-top:4px;">Username: ${d.username}</div>
                <div class="mono" style="color:#555;margin-top:4px;font-size:10px;">Reward ID: ${d.rewardId}</div>
            </div>
        </div>
        </body>
        </html>
        `);
        doc.close();
    }
})();
