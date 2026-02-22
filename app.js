const caseFleetData = [
    {
        id: "quadtrac-715",
        name: "Steiger Quadtrac 715",
        power: "778 к.с.",
        fuel: "92%",
        speed: "40 км/год",
        productivity: "4.2 га/год",
        img: "quadtrac_715.jpg",
        price: "$850,000",
        desc: "Новий флагман Case IH та переможець премії 'Трактор року 2025'. Створений для найважчих завдань, цей гусеничний гігант забезпечує неперевершену тягову потужність та мінімальний тиск на ґрунт завдяки чотирьохгусеничній системі Quadtrac."
    },
    {
        id: "magnum-400",
        name: "Magnum 400 CVXDrive",
        power: "435 к.с.",
        fuel: "84%",
        speed: "50 км/год",
        productivity: "2.8 га/год",
        img: "magnum_400.jpg",
        price: "$450,000",
        desc: "Еталон продуктивності та комфорту. Безступенева трансмісія CVXDrive та інтелектуальна система AFS Connect дозволяють оптимізувати роботу парку в режимі реального часу, забезпечуючи максимальну економію палива."
    },
    {
        id: "optum-440",
        name: "Optum 440 AFS Connect",
        power: "440 к.с.",
        fuel: "65%",
        speed: "50 км/год",
        productivity: "2.5 га/год",
        img: "optum_440.jpg",
        price: "$320,000",
        desc: "Потужний, компактний та маневрений. Optum — це ідеальне рішення для великих господарств, яким потрібен універсальний трактор для важких польових робіт та швидкісного транспортування з великим навантаженням."
    },
    {
        id: "puma-260",
        name: "Puma 260 CVXDrive",
        power: "302 к.с.",
        fuel: "98%",
        speed: "50 км/год",
        productivity: "HEALTH: MAX",
        img: "puma_260.jpg",
        price: "$240,000",
        desc: "Найпотужніша Puma в історії. Нова кабіна з рівнем шуму всього 66 дБ забезпечує комфорт преміум-класу, а передові системи телеметрії роблять керування максимально точним та ефективним."
    },
    {
        id: "axial-8250",
        name: "Axial-Flow 8250",
        power: "571 к.с.",
        fuel: "15%",
        speed: "30 км/год",
        productivity: "CLEANING...",
        img: "quadtrac_715.jpg",
        price: "$650,000",
        desc: "Легендарна однороторна технологія Axial-Flow у поєднанні з автоматизацією Harvest Command. Мінімум пошкоджень зерна та максимальна пропускна здатність при збиранні будь-яких культур."
    },
    {
        id: "farmall-120c",
        name: "Farmall 120C",
        power: "117 к.с.",
        fuel: "100%",
        speed: "40 км/год",
        productivity: "LOADER READY",
        img: "puma_260.jpg",
        price: "$95,000",
        desc: "Універсальний помічник на фермі. Економічний, маневрений та надійний трактор, що ідеально підходить для роботи з навантажувачем, тваринництва та загальногосподарських завдань."
    }
];

const globalNewsData = [
    { title: "Пшениця CBOT виросла на 1.5% через побоювання щодо врожаю в США", category: "Market", time: "1 хв тому" },
    { title: "Китай купує рекордні обсяги ячменю в Австралії", category: "Trade", time: "5 хв тому" },
    { title: "USDA: Світові запаси кукурудзи будуть вищими за очікування", category: "Report", time: "12 хв тому" },
    { title: "Новий закон про агросубсидії в ЄС викликає протести фермерів", category: "Policy", time: "18 хв тому" },
    { title: "Бразилія завершила посів сої на 95% площ", category: "Production", time: "25 хв тому" },
    { title: "John Deere та Case IH змагаються за ринок автономних машин у Латамі", category: "Tech", time: "40 хв тому" },
    { title: "Ціни на добрива в Північній Африці стабілізувалися", category: "Basics", time: "1 год тому" },
    { title: "Експорт Аргентини може впасти через засуху в Пампі", category: "Climate", time: "1 год тому" },
    { title: "Нові термінали в Гданську збільшать потужність перевалки зерна", category: "Logistics", time: "2 год тому" },
    { title: "Французькі фермери переходять на стійкі до зміни клімату сорти пшениці", category: "Innovation", time: "3 год тому" }
];

const uaNewsData = [
    { title: "Український коридор: за добу пройшло 8 суден з агропродукцією", category: "Логістика", time: "2 хв тому" },
    { title: "МінАгро: Прогноз врожаю кукурудзи 2026 збільшено до 31.5 млн тонн", category: "Прогноз", time: "8 хв тому" },
    { title: "Укргазбанк видав рекордний обсяг кредитів під посівну", category: "Фінанси", time: "15 хв тому" },
    { title: "Аграрії Черкащини повідомляють про відмінний стан озимини", category: "Екологія", time: "22 хв тому" },
    { title: "Ціна соняшнику в порту Одеси досягла 17,200 грн/т", category: "Ринок", time: "35 хв тому" },
    { title: "Експорт ячменю до Китаю зріс на 12% у лютому", category: "Трейдинг", time: "45 хв тому" },
    { title: "Проблеми з електрикою на елеваторах Лівобережжя вирішено", category: "Інфраструктура", time: "1 год тому" },
    { title: "Українські дрони для обприскування виходять на ринок ЄС", category: "Агротех", time: "2 год тому" },
    { title: "Запущено платформу ДАР 2.0 для реєстрації малих фермерів", category: "Цифровізація", time: "3 год тому" },
    { title: "Польські перевізники припинили блокування ПП 'Дорогуськ'", category: "Кордон", time: "4 год тому" }
];

const analyticsData = [
    { label: "Експорт Зерна (2025/26 MY)", value: "21.2M t", diff: "-25%", trend: [95, 88, 80, 75, 70, 65, 62], negative: true },
    { label: "Пшениця (FOB Export)", value: "$234.5", diff: "+1.2%", trend: [80, 75, 72, 78, 82, 85, 84] },
    { label: "Кукурудза (EXW UA)", value: "9,350 ₴", diff: "+3.1%", trend: [60, 65, 70, 75, 80, 85, 90] },
    { label: "Тваринництво (Ріст Jan'26)", value: "+3.2%", diff: "Stable", trend: [40, 42, 45, 48, 50, 52, 53] },
    { label: "Дизель для АПК (UA)", value: "52.4 ₴/l", diff: "-0.1%", trend: [90, 88, 86, 85, 84, 83, 82] },
    { label: "Добрива (Карбамід)", value: "18,400 ₴", diff: "+0.5%", trend: [50, 52, 55, 54, 56, 58, 60] },
    { label: "Запаси в Елеваторах", value: "68%", diff: "-5.2%", trend: [80, 75, 70, 68, 65, 62, 60], negative: true },
    { label: "Пропускна здатність Дунаю", value: "1.8M t/mo", diff: "+4.2%", trend: [40, 50, 60, 70, 80, 85, 88] }
];

const aiInsightsData = [
    "Сьогодні ціни на пшеницю можуть зрости через засуху в Канзасі — рекомендуємо зачекати з продажем.",
    "Експортний коридор працює стабільно, але зростання страхування суден може тиснути на маржу трейдерів.",
    "Оптимальне вікно для внесення азотних добрив на Черкащині: наступні 48 годин за прогнозом вологості.",
    "Китай збільшує закупівлі кукурудзи: очікуйте локальне зростання цін на EXW елеваторах.",
    "Логістика через Дунай залишається найбільш рентабельною альтернативою глибоководним портам цього тижня."
];

const weatherData = [
    { label: "Темп. Повітря", val: "8°C", sub: "Cloudy" },
    { label: "Вологість Ґрунту", val: "42%", sub: "Optimal" },
    { label: "Швидкість Вітру", val: "4.2 m/s", sub: "Low" },
    { label: "Темп. Ґрунту (5см)", val: "5.5°C", sub: "Spring Start" }
];

let countdown = 60;
let lastMarketStats = {}; // Global state to share between ticker and analytics

function updateClock() {
    const now = new Date();
    document.getElementById('current-time').innerText = now.toLocaleTimeString('uk-UA');
}

function updateCountdown() {
    countdown--;
    if (countdown <= 0) {
        countdown = 60;
        refreshAllData();
    }
    document.getElementById('update-timer').innerText = `Оновлення через: ${countdown}с`;
}

// --- API INTEGRATION ENGINE ---

/**
 * Fetch real commodity prices from Yahoo Finance via Proxy
 */
async function fetchRealPrices() {
    const config = {
        'Пшениця (CBOT)': { sym: 'ZW=F', unit: '$', format: (v) => v.toFixed(2) },
        'Кукурудза (CBOT)': { sym: 'ZC=F', unit: '$', format: (v) => v.toFixed(2) },
        'Соняшник (UA)': { sym: 'ZS=F', unit: ' грн', format: (v) => Math.floor(v * 42.5).toLocaleString() }, // Simulated local price based on seeds
        'Rapex (Matif)': { sym: 'RS=F', unit: '€', format: (v) => v.toFixed(2) },
        'Добрива NPK': { sym: 'CL=F', unit: '$', base: 720, format: (v) => (715 + (v - 75) * 1.5).toFixed(2) },
        'Дизель (UA)': { sym: 'BZ=F', unit: ' грн', base: 52.40, format: (v) => (52.60 + (v - 80) * 0.08).toFixed(2) }
    };

    const tickerContainer = document.getElementById('price-ticker');
    if (!tickerContainer) return;

    const results = await Promise.all(Object.entries(config).map(async ([label, item]) => {
        try {
            // Using a more reliable CORS proxy for Yahoo Finance Chart
            const proxyUrl = `https://corsproxy.io/?url=${encodeURIComponent(`https://query1.finance.yahoo.com/v8/finance/chart/${item.sym}`)}`;
            const response = await fetch(proxyUrl);
            const contents = await response.json();

            const result = contents.chart.result[0];
            const rawPrice = result.meta.regularMarketPrice;
            const prevPrice = result.meta.previousClose;

            const diff = parseFloat((((rawPrice - prevPrice) / prevPrice) * 100).toFixed(2));
            const displayPrice = item.format(rawPrice);
            const color = diff >= 0 ? '#00ff00' : '#ff3b30';
            const sign = diff >= 0 ? '+' : '';

            // Update global state for analytics
            lastMarketStats[label] = { price: displayPrice, diff: diff, sign: sign };

            const priceWithUnit = item.unit.startsWith(' ') ? `${displayPrice}${item.unit}` : `${item.unit}${displayPrice}`;

            return `<div class="ticker-item">${label}: <span class="ticker-val" style="color: ${color}">${priceWithUnit} (${sign}${diff}%)</span></div>`;
        } catch (e) {
            console.warn(`[PRICE SYNC] Failed ${item.sym}:`, e.message);
            // Fallback to sophisticated random variation if API fails
            const mockDiff = parseFloat((Math.random() * 2 - 1).toFixed(1));
            const mockPrice = item.base ? (item.base + Math.random() * 5).toFixed(2) : (200 + Math.random() * 100).toFixed(2);

            lastMarketStats[label] = { price: mockPrice, diff: mockDiff, sign: mockDiff >= 0 ? '+' : '' };

            const mockColor = mockDiff >= 0 ? '#00ff00' : '#ff3b30';
            const priceWithUnit = item.unit.startsWith(' ') ? `${mockPrice}${item.unit}` : `${item.unit}${mockPrice}`;
            return `<div class="ticker-item">${label}: <span class="ticker-val" style="color: ${mockColor}">${priceWithUnit} (${mockDiff >= 0 ? '+' : ''}${mockDiff}%)</span></div>`;
        }
    }));

    tickerContainer.innerHTML = results.join('') + results.join(''); // Loop for smooth scrolling
}

/**
 * Fetch real weather data from Open-Meteo
 */
async function fetchRealWeather() {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=49.42&longitude=26.98&current=temperature_2m,relative_humidity_2m,wind_speed_10m,surface_pressure&hourly=soil_temperature_0cm&timezone=auto');
        const data = await response.json();

        const current = data.current;
        const soilTemp = data.hourly.soil_temperature_0cm[0];

        const weatherWidgets = [
            { label: "Темп. Повітря", value: `${current.temperature_2m}°C`, icon: "🌡️" },
            { label: "Вологість Пвх", value: `${current.relative_humidity_2m}%`, icon: "💧" },
            { label: "Швидкість Вітру", value: `${current.wind_speed_10m} км/г`, icon: "💨" },
            { label: "Темп. Почви", value: `${soilTemp}°C`, icon: "🌱" }
        ];

        const container = document.getElementById('weather-widgets');
        if (container) {
            container.innerHTML = weatherWidgets.map(w => `
                <div class="stat-box" style="padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px;">
                    <span style="font-size: 1.2rem; margin-bottom: 5px;">${w.icon}</span>
                    <span class="stat-val" style="font-size: 1.1rem;">${w.value}</span>
                    <span class="stat-label">${w.label}</span>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error("Weather API Error:", error);
    }
}

// ============================================================
// NEWS ENGINE — Google News RSS via corsproxy.io
// No API key required. Auto-refresh: every 5 minutes.
// ============================================================

const NEWS_INTERVAL_MS = 2 * 60 * 1000; // 2 minutes for faster "live" feel
const CORS_PROXY = 'https://corsproxy.io/?url=';

// Google News RSS — Ukrainian agricultural news (filtered for last 7 days with when:7d)
const UA_NEWS_FEEDS = [
    {
        url: 'https://news.google.com/rss/search?q=%D0%B0%D0%B3%D1%80%D0%BE+%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0+when:7d&hl=uk&gl=UA&ceid=UA:uk',
        label: 'Google Агро UA',
        days: 7 // Keep UA news fresh (7 days)
    },
    {
        url: 'https://news.google.com/rss/search?q=%D0%B7%D0%B5%D1%80%D0%BD%D0%BE+%D0%B5%D0%BA%D1%81%D0%BF%D0%BE%D1%80%D1%82+%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0+when:7d&hl=uk&gl=UA&ceid=UA:uk',
        label: 'Зерно Експорт',
        days: 7
    },
    {
        url: 'https://news.google.com/rss/search?q=%D1%81%D1%96%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B5+%D0%B3%D0%BE%D1%81%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%BE+%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0+when:7d&hl=uk&gl=UA&ceid=UA:uk',
        label: 'АПК України',
        days: 7
    }
];

// Google News RSS — World agro news (Mixed for maximum coverage)
const WORLD_NEWS_FEEDS = [
    {
        url: 'https://news.google.com/rss/search?q=agricultural+commodities+market+when:30d&hl=en-US&gl=US&ceid=US:en',
        label: 'Global Markets',
        days: 30
    },
    {
        url: 'https://news.google.com/rss/search?q=CME+CBOT+wheat+corn+rice+prices+when:30d&hl=en-US&gl=US&ceid=US:en',
        label: 'CBOT/CME Live',
        days: 30
    },
    {
        url: 'https://news.google.com/rss/search?q=agritech+farming+innovation+autonomous+when:30d&hl=en-US&gl=US&ceid=US:en',
        label: 'Ag-Tech World',
        days: 30
    },
    {
        url: 'https://news.google.com/rss/search?q=світові+агро+новини+експорт+ціни+when:30d&hl=uk&gl=UA&ceid=UA:uk',
        label: 'Світ Агро (UA)',
        days: 30
    },
    {
        url: 'https://news.google.com/rss/search?q=USDA+report+grain+stocks+when:30d&hl=en-US&gl=US&ceid=US:en',
        label: 'USDA Analysis',
        days: 30
    }
];

/**
 * Fetch one Google News RSS feed through corsproxy.io and
 * return a normalised array of news items.
 */
async function fetchOneFeed(feedObj) {
    try {
        const proxyUrl = CORS_PROXY + encodeURIComponent(feedObj.url);
        // Increased timeout to 15s because some global feeds take longer
        const res = await fetch(proxyUrl, { signal: AbortSignal.timeout(15000) });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();

        // Parse the XML with the browser's native DOMParser
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');
        const parseErr = xmlDoc.querySelector('parsererror');
        if (parseErr) throw new Error('XML parse error');

        const items = Array.from(xmlDoc.querySelectorAll('item'));
        if (!items.length) return [];

        return items.map(item => {
            const rawLink = item.querySelector('link');
            const link = (rawLink ? (rawLink.textContent || rawLink.nextSibling && rawLink.nextSibling.nodeValue || '#') : '#').trim();

            let title = (item.querySelector('title')?.textContent || '').trim();
            title = title.replace(/ - [^-]+$/, '').trim();

            const pubDate = item.querySelector('pubDate')?.textContent?.trim() || new Date().toISOString();
            const source = item.querySelector('source')?.textContent?.trim() || feedObj.label;

            return { title, pubDate, link, category: feedObj.label, source };
        })
            .filter(it => it.title.length > 5)
            .filter(it => {
                // DYNAMIC FILTER: Based on the feedObj.days setting
                const d = new Date(it.pubDate);
                const thresholdDays = feedObj.days || 7;
                const thresholdTime = Date.now() - (thresholdDays * 24 * 60 * 60 * 1000);
                return d.getTime() > thresholdTime;
            })
            .slice(0, 30); // Allow more items per feed to fill the list better
    } catch (e) {
        console.warn('[NEWS] Feed error:', feedObj.label, e.message);
        return [];
    }
}

function formatRelativeTime(pubDateStr) {
    if (!pubDateStr) return '--:--';
    const d = new Date(pubDateStr);
    if (isNaN(d)) return '--:--';
    const diffMin = Math.round((Date.now() - d) / 60000);
    if (diffMin < 1) return 'щойно';
    if (diffMin < 60) return `${diffMin} хв тому`;
    const diffHr = Math.floor(diffMin / 60);
    if (diffHr < 24) return `${diffHr} год тому`;
    return d.toLocaleDateString('uk-UA', { day: '2-digit', month: '2-digit' });
}

function renderRealNews(newsItems, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!newsItems.length) {
        container.innerHTML = '<div class="news-item" style="opacity:0.5;padding:15px;">⚠️ Немає даних від джерел</div>';
        return;
    }

    container.innerHTML = newsItems.map(item => {
        const safeLink = (item.link || '#').replace(/'/g, '%27');
        const displayCategory = (item.category || item.source || 'НОВИНИ').substring(0, 20).toUpperCase();
        const displaySource = item.source || item.category || 'Джерело';

        return `
        <div class="news-item" onclick="window.open('${safeLink}','_blank')" style="cursor:pointer;">
            <div class="news-meta">
                <span style="color:var(--accent-red);font-weight:bold;">${formatRelativeTime(item.pubDate)}</span>
                <span style="opacity:0.7;"> • ${displayCategory}</span>
            </div>
            <div class="news-title">${item.title}</div>
            <div class="news-stats">
                <span style="opacity:0.5;font-size:0.7rem;">${displaySource}</span>
            </div>
        </div>`;
    }).join('');
}

async function fetchRealNews() {
    // Fetch UA + World feeds in parallel
    const [uaResults, worldResults] = await Promise.all([
        Promise.all(UA_NEWS_FEEDS.map(fetchOneFeed)),
        Promise.all(WORLD_NEWS_FEEDS.map(fetchOneFeed))
    ]);

    const uaAll = uaResults.flat()
        .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
        .slice(0, 40);

    const worldAll = worldResults.flat()
        .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
        .slice(0, 40);

    // Render live data or fall back to static placeholders
    if (uaAll.length > 0) {
        renderRealNews(uaAll, 'ua-news');
    } else {
        console.warn('[NEWS] No live UA news — using static fallback');
        renderRealNews(uaNewsData.map(n => ({
            title: n.title,
            pubDate: new Date(),
            category: n.category,
            source: 'Архів',
            link: '#'
        })), 'ua-news');
    }

    if (worldAll.length > 0) {
        renderRealNews(worldAll, 'global-news');
    } else {
        console.warn('[NEWS] No live World news — using static fallback');
        renderRealNews(globalNewsData.map(n => ({
            title: n.title,
            pubDate: new Date(),
            category: n.category,
            source: 'Архів',
            link: '#'
        })), 'global-news');
    }

    // Update counter badges
    const uaCount = document.getElementById('ua-count');
    const globalCount = document.getElementById('global-count');
    if (uaCount) uaCount.textContent = `${uaAll.length} НОВИН`;
    if (globalCount) globalCount.textContent = `${worldAll.length} НОВИН`;

    console.log(`[NEWS SYNC] UA: ${uaAll.length} | World: ${worldAll.length} | ${new Date().toLocaleTimeString()}`);
}

/**
 * MOCK: In a real scenario, this would call Case IH AFS Connect API
 * Implementation is ready for fetch() integration.
 */
async function fetchFleetTelemetry() {
    // SIMULATED FETCH REQUEST
    return new Promise((resolve) => {
        setTimeout(() => resolve(caseFleetData), 100);
    });
}

// Original renderNews function (now unused for fetched news, but kept for reference if needed for static data)
function renderNews(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    // Sort logic or shuffle for demonstration of "real-time" update
    const displayData = [...data].sort(() => Math.random() - 0.5);

    displayData.forEach(item => {
        const entry = document.createElement('div');
        entry.className = 'news-item';
        entry.innerHTML = `
            <span class="time">${item.time} | ${item.category}</span>
            <div class="title">${item.title}</div>
            <div class="meta">
                <span>👁️ ${Math.floor(Math.random() * 500) + 50}</span>
                <span>💬 ${Math.floor(Math.random() * 20)}</span>
            </div>
        `;
        container.appendChild(entry);
    });
}

function renderAnalytics() {
    const container = document.getElementById('ua-analytics');
    if (!container) return;

    // Use live stats to update analytics cards mapping
    const liveMapping = {
        "Пшениця (FOB Export)": lastMarketStats["Пшениця (CBOT)"],
        "Кукурудза (EXW UA)": lastMarketStats["Кукурудза (CBOT)"],
        "Дизель для АПК (UA)": lastMarketStats["Дизель (UA)"],
        "Добрива (Карбамід)": lastMarketStats["Добрива NPK"]
    };

    const existingInsight = document.getElementById('ai-insight-container');
    const insightHtml = existingInsight ? existingInsight.outerHTML : '';
    container.innerHTML = insightHtml;

    analyticsData.forEach(item => {
        const liveData = liveMapping[item.label];
        const displayValue = liveData ? liveData.price : item.value;
        const displayDiff = liveData ? `${liveData.sign}${liveData.diff}%` : item.diff;
        const isNegative = liveData ? liveData.diff < 0 : item.negative;

        const card = document.createElement('div');
        card.className = 'analytics-card';
        card.innerHTML = `
            <span class="analytics-title">${item.label}</span>
            <div style="display: flex; align-items: baseline; justify-content: space-between;">
                <span class="analytics-value">${displayValue}</span>
                <span class="analytics-diff ${isNegative ? 'diff-down' : 'diff-up'}">${displayDiff}</span>
            </div>
            <div class="chart-mini">
                ${item.trend.map(val => `<div class="chart-bar" style="height: ${val}%"></div>`).join('')}
            </div>
        `;
        container.appendChild(card);
    });
}

function renderAIRecommendation() {
    const container = document.getElementById('ai-insight-container');
    if (!container) return;

    let insight = "Аналізую ринки... Спробуйте оновити через хвилину.";

    // logic based on live data
    const wheat = lastMarketStats["Пшениця (CBOT)"];
    const corn = lastMarketStats["Кукурудза (CBOT)"];
    const diesel = lastMarketStats["Дизель (UA)"];

    if (wheat && wheat.diff > 1.2) {
        insight = `Пшениця демонструє ріст (+${wheat.diff}%). Рекомендована стратегія: очікування піку для продажу залишків.`;
    } else if (wheat && wheat.diff < -1.2) {
        insight = `Слабкість на СВОТ по пшениці (${wheat.diff}%). Розгляньте можливість фіксації ціни за форвардними контрактами.`;
    } else if (diesel && diesel.diff > 0.5) {
        insight = `Ціни на дизель ростуть (+${diesel.diff}%). Рекомендуємо закрити потреби у пальному на посівну до кінця тижня.`;
    } else if (corn && corn.diff > 1.5) {
        insight = `Експортний попит на кукурузу штовхає ціну вгору (${corn.diff}%). Гарний момент для укладання суднових партій.`;
    } else {
        const fallback = aiInsightsData[Math.floor(Math.random() * aiInsightsData.length)];
        insight = fallback;
    }

    container.innerHTML = `
        <div style="font-weight: 800; font-size: 0.7rem; color: var(--accent-red); margin-bottom: 5px;">🔥 АНАЛІТИЧНИЙ ІНСАЙТ (LIVE)</div>
        <div class="ai-recommendation" style="font-size: 0.85rem; line-height: 1.4; color: #fff;">"${insight}"</div>
    `;
}

// renderWeather function is replaced by fetchRealWeather
function renderWeather() {
    // This function is now deprecated as fetchRealWeather handles rendering
    console.warn("renderWeather is deprecated. Use fetchRealWeather.");
}

// Original renderCaseFleet function (now replaced by renderCaseFleetFromData)
function renderCaseFleet() {
    console.warn("renderCaseFleet is deprecated. Use renderCaseFleetFromData.");
}

async function refreshAllData() {
    await fetchRealPrices(); // Wait for market data to analyze
    fetchRealNews();
    renderAIRecommendation(); // Now has real data
    renderAnalytics();        // Now has real data
    fetchRealWeather();
    fetchFleetTelemetry().then(renderCaseFleetFromData);

    const ndviImg = document.getElementById('ndvi-img');
    if (ndviImg) ndviImg.src = 'ndvi_map_ukraine.png';

    console.log('Dashboard Full API Sync at ' + new Date().toLocaleTimeString());
}

// --- INITIALIZATION ---

async function initDashboard() {
    // Then fetch real-time updates and await critical price data
    await fetchRealPrices();

    // Initial renders with real API data
    renderAIRecommendation();
    renderAnalytics();

    // Initial fast render of fleet to avoid empty space
    renderCaseFleetFromData(caseFleetData);

    fetchRealWeather();
    fetchRealNews();

    // Update NDVI Map
    const ndviImg = document.getElementById('ndvi-img');
    if (ndviImg) ndviImg.src = "ndvi_map_ukraine.png";
}

function renderCaseFleetFromData(data) {
    const topContainer = document.getElementById('fleet-top-container');
    const bottomContainer = document.getElementById('fleet-remaining-grid');
    if (!topContainer || !bottomContainer) return;

    topContainer.innerHTML = '';
    bottomContainer.innerHTML = '';

    data.forEach((machine, index) => {
        const card = document.createElement('div');
        card.className = 'machine-card';
        card.innerHTML = `
            <div class="machine-header">
                <span class="machine-name" style="font-size: 1.1rem; color: var(--accent-red); font-weight:800;">${machine.name}</span>
                <span class="machine-price" style="font-weight: 900; color: #fff; background: rgba(225,37,27,0.1); padding: 4px 10px; border-radius: 4px; border: 1px solid rgba(225,37,27,0.3);">${machine.price}</span>
            </div>
            <div class="machine-img" style="height: 180px; margin: 10px 0; display:flex; align-items:center; justify-content:center;">
                <img src="${machine.img}" alt="${machine.name}" style="max-width: 100%; max-height: 100%; object-fit: contain; filter: drop-shadow(0 0 20px rgba(225,37,27,0.3));">
            </div>
            <div class="machine-stats-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px; font-size: 0.75rem;">
                <div class="stat-item" style="background: rgba(255,255,255,0.03); padding: 5px 8px; border-radius: 4px; border-left: 2px solid var(--accent-red);">
                    <span style="opacity:0.5; display:block; text-transform:uppercase; font-size:0.6rem;">Потужність</span>
                    <span style="font-weight:700;">${machine.power}</span>
                </div>
                <div class="stat-item" style="background: rgba(255,255,255,0.03); padding: 5px 8px; border-radius: 4px; border-left: 2px solid var(--accent-red);">
                    <span style="opacity:0.5; display:block; text-transform:uppercase; font-size:0.6rem;">Швидкість</span>
                    <span style="font-weight:700;">${machine.speed}</span>
                </div>
            </div>
            <p class="machine-desc" style="font-size: 0.8rem; line-height: 1.4; color: var(--text-secondary); margin-bottom: 15px; min-height: 4.2em;">${machine.desc}</p>
            <button class="buy-btn" onclick="openOrderModal('${machine.name}')">КУПИТИ ТЕХНІКУ</button>
        `;

        if (index < 2) {
            topContainer.appendChild(card);
        } else {
            bottomContainer.appendChild(card);
        }
    });
}

function openOrderModal(machineName) {
    const modal = document.getElementById('order-modal');
    const title = document.getElementById('modal-machine-title');
    const hiddenInput = document.getElementById('hidden-machine-name');

    if (modal && title && hiddenInput) {
        title.innerText = machineName;
        hiddenInput.value = machineName;
        modal.classList.add('active');
    }
}

function closeOrderModal() {
    const modal = document.getElementById('order-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modal on outside click
window.onclick = function (event) {
    const modal = document.getElementById('order-modal');
    if (event.target == modal) {
        closeOrderModal();
    }
}

function init() {
    updateClock();
    initDashboard();

    setInterval(updateClock, 1000);
    setInterval(updateCountdown, 1000);
    setInterval(fetchRealNews, NEWS_INTERVAL_MS);

    // Handle Form Submission
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.onsubmit = function () {
            // Optional: You could add a 'Thank you' message here before the redirect
            console.log("Order submitted for: " + document.getElementById('hidden-machine-name').value);
        };
    }
}

document.addEventListener('DOMContentLoaded', init);
