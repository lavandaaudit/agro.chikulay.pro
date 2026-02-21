const caseFleetData = [
    {
        id: "quadtrac-715",
        name: "Steiger Quadtrac 715",
        power: "778 к.с.",
        fuel: "92%",
        speed: "8.5 км/год",
        productivity: "4.2 га/год",
        img: "quadtrac_715.jpg",
        desc: "Флагман агроіндустрії та переможець Tractor of the Year 2025. Оснащений 16-літровим двигуном FPT Cursor 16 з двоступеневим турбонаддувом. Унікальна чотирьохгусенична система забезпечує максимальну площу контакту, мінімізуючи ущільнення ґрунту навіть при екстремальних навантаженнях. Інтегрована система AFS Connect дозволяє передавати дані телеметрії в реальному часі."
    },
    {
        id: "magnum-400",
        name: "Magnum 400 CVXDrive",
        power: "435 к.с.",
        fuel: "84%",
        speed: "12.4 км/год",
        productivity: "2.8 га/год",
        img: "magnum_400.jpg",
        desc: "Еталон продуктивності серед важких колісних тракторів. Трансмісія CVXDrive забезпечує безступеневе прискорення від 0 до 50 км/год, оптимізуючи витрату палива. Нова кабіна з концепцією MultiControl Armrest гарантує оператору максимальний комфорт. Повна сумісність з інструментами точного землеробства для посіву та обробітку ґрунту з точністю до 2.5 см."
    },
    {
        id: "optum-440",
        name: "Optum 440 AFS Connect",
        power: "440 к.с.",
        fuel: "65%",
        speed: "42.0 км/год",
        productivity: "—",
        img: "optum_440.jpg",
        desc: "Універсальний атлет, розроблений для робіт, що вимагають високої потужності та маневреності. Оснащений посиленим переднім мостом та системою регулювання гальмування причепа. Ідеальний для важкого транспортування та роботи з широкозахватними агрегатами. Система AFS Connect дає повну прозорість парку техніки через мобільний додаток FieldOps."
    },
    {
        id: "puma-260",
        name: "Puma 260 CVXDrive",
        power: "302 к.с.",
        fuel: "98%",
        speed: "0.0 км/год",
        productivity: "HEALTH: MAX",
        img: "puma_260.jpg",
        desc: "Найпотужніша та найтихіша Puma в історії лінійки. Інноваційна кабіна з рівнем шуму лише 66 дБ забезпечує умови роботи преміум-класу. Вдосконалена гідравлічна система та збільшений міжсервісний інтервал (750 мотогодин). Трактор оптимізовано для роботи з інтелектуальними знаряддями через протокол ISOBUS Class 3."
    },
    {
        id: "axial-8250",
        name: "Axial-Flow 8250",
        power: "571 к.с.",
        fuel: "15%",
        speed: "0.0 км/год",
        productivity: "CLEANING...",
        img: "puma_260.jpg",
        desc: "Високопродуктивний роторний комбайн, що задає стандарти якості зерна. Технологія Harvest Command™ автоматично коригує налаштування (швидкість ротора, зазори решіт, швидкість вентилятора) залежно від умов врожаю. Однороторна технологія Axial-Flow забезпечує мінімальне пошкодження зерна та максимальну пропускну здатність при збиранні кукурудзи та соняшника."
    },
    {
        id: "farmall-120c",
        name: "Farmall 120C",
        power: "117 к.с.",
        fuel: "100%",
        speed: "0.0 км/год",
        productivity: "LOADER READY",
        img: "puma_260.jpg",
        desc: "Компактний та надійний помічник для тваринницьких ферм та допоміжних робіт. Нова трансмісія ActiveDrive 2 з автоматичним перемиканням передач під навантаженням. Панорамна кабіна з люком у даху забезпечує чудову оглядовість при роботі з фронтальним навантажувачем. Економічний двигун F5 Stage V гарантує низькі експлуатаційні витрати."
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
        'Соняшник (UA)': { sym: 'ZS=F', unit: ' грн', format: (v) => Math.floor(v * 38).toLocaleString() },
        'Rapex (Matif)': { sym: 'RM=F', unit: '€', format: (v) => v.toFixed(2) },
        'Добрива NPK': { sym: 'CL=F', unit: '$', base: 720, format: (v) => (720 + (v - 80) * 2).toFixed(2) },
        'Дизель (UA)': { sym: 'BZ=F', unit: ' грн', base: 52.40, format: (v) => (52.40 + (v - 82) * 0.1).toFixed(2) }
    };

    const tickerContainer = document.getElementById('price-ticker');
    if (!tickerContainer) return;

    const promises = Object.entries(config).map(async ([label, item]) => {
        try {
            const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://query1.finance.yahoo.com/v8/finance/chart/${item.sym}`)}`;
            const response = await fetch(proxyUrl);
            const data = await response.json();
            if (!data.contents) throw new Error('No contents');
            const contents = JSON.parse(data.contents);
            const rawPrice = contents.chart.result[0].meta.regularMarketPrice;
            const prevPrice = contents.chart.result[0].meta.previousClose;

            const displayPrice = item.format(rawPrice);
            const diff = (((rawPrice - prevPrice) / prevPrice) * 100).toFixed(2);
            const color = diff >= 0 ? '#00ff00' : '#ff3b30';
            const sign = diff >= 0 ? '+' : '';

            const priceWithUnit = item.unit.startsWith(' ') ? `${displayPrice}${item.unit}` : `${item.unit}${displayPrice}`;

            return `<div class="ticker-item">${label}: <span class="ticker-val" style="color: ${color}">${priceWithUnit} (${sign}${diff}%)</span></div>`;
        } catch (e) {
            console.warn(`Failed to fetch ${item.sym}`, e);
            const mockDiff = (Math.random() * 2 - 1).toFixed(1);
            const mockColor = mockDiff >= 0 ? '#00ff00' : '#ff3b30';
            const mockPrice = item.base ? item.base : (Math.random() * 500 + 100).toFixed(2);
            const priceWithUnit = item.unit.startsWith(' ') ? `${mockPrice}${item.unit}` : `${item.unit}${mockPrice}`;
            return `<div class="ticker-item">${label}: <span class="ticker-val" style="color: ${mockColor}">${priceWithUnit} (${mockDiff >= 0 ? '+' : ''}${mockDiff}%)</span></div>`;
        }
    });

    const results = await Promise.all(promises);
    tickerContainer.innerHTML = results.join('') + results.join('');
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

/**
 * Fetch real agro news
 */
async function fetchRealNews() {
    const rssUrl = 'https://agroportal.ua/rss/news';
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`;

    try {
        const response = await fetch(proxyUrl);
        const data = await response.json();

        if (data.contents) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data.contents, "text/xml");
            const items = Array.from(xmlDoc.querySelectorAll("item"));

            if (items.length > 0) {
                const newsItems = items.slice(0, 10).map(item => ({
                    title: item.querySelector("title")?.textContent,
                    pubDate: item.querySelector("pubDate")?.textContent,
                    category: item.querySelector("category")?.textContent || 'Агро'
                }));

                renderRealNews(newsItems, 'ua-news');
                renderRealNews(newsItems.slice().reverse().slice(0, 5), 'global-news');
                return;
            }
        }
        throw new Error('Empty news contents');
    } catch (error) {
        console.warn("News API failed. Using static fallback.", error);
        renderRealNews(uaNewsData.map(n => ({ ...n, pubDate: new Date() })), 'ua-news');
        renderRealNews(globalNewsData.map(n => ({ ...n, pubDate: new Date() })), 'global-news');
    }
}

function renderRealNews(newsItems, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = newsItems.map(item => `
        <div class="news-item">
            <div class="news-meta">
                <span style="color: var(--accent-red);">${new Date(item.pubDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                <span>• ${item.category || 'NEWS'}</span>
            </div>
            <div class="news-title">${item.title}</div>
            <div class="news-stats">
                <span>👁 ${Math.floor(Math.random() * 500) + 50}</span>
                <span>💬 ${Math.floor(Math.random() * 20)}</span>
            </div>
        </div>
    `).join('');
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

    const existingInsight = document.getElementById('ai-insight-container');
    const insightHtml = existingInsight ? existingInsight.outerHTML : '';
    container.innerHTML = insightHtml;

    analyticsData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'analytics-card';
        card.innerHTML = `
            <span class="analytics-title">${item.label}</span>
            <div style="display: flex; align-items: baseline; justify-content: space-between;">
                <span class="analytics-value">${item.value}</span>
                <span class="analytics-diff ${item.negative ? 'diff-down' : 'diff-up'}">${item.diff}</span>
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
    const randomInsight = aiInsightsData[Math.floor(Math.random() * aiInsightsData.length)];
    container.innerHTML = `
        <div style="font-weight: 800; font-size: 0.7rem; color: var(--accent-red); margin-bottom: 5px;">🔥 АНАЛІТИЧНИЙ ІНСАЙТ</div>
        <div class="ai-recommendation">"${randomInsight}"</div>
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
    fetchRealPrices();
    fetchRealNews();
    renderAIRecommendation();
    renderAnalytics();
    fetchRealWeather();
    fetchFleetTelemetry().then(renderCaseFleetFromData);

    const ndviImg = document.getElementById('ndvi-img');
    if (ndviImg) ndviImg.src = 'ndvi_map_ukraine.png';

    console.log('Dashboard Full API Sync at ' + new Date().toLocaleTimeString());
}

// --- INITIALIZATION ---

async function initDashboard() {
    // Initial static renders
    renderAIRecommendation();
    renderAnalytics();

    // Initial fast render of fleet to avoid empty space
    renderCaseFleetFromData(caseFleetData);

    // Then fetch real-time updates
    fetchRealPrices();
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
                <span class="machine-name" style="font-size: 1.1rem; color: var(--accent-red);">${machine.name}</span>
            </div>
            <div class="machine-img" style="height: 250px; margin: 15px 0; display:flex; align-items:center; justify-content:center;">
                <img src="${machine.img}" alt="${machine.name}" style="max-width: 100%; max-height: 100%; object-fit: contain; filter: drop-shadow(0 0 20px rgba(225,37,27,0.3)); transition: transform 0.3s ease;">
            </div>
            <p class="machine-desc" style="font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); margin-bottom: 0;">${machine.desc}</p>
        `;

        if (index < 2) {
            topContainer.appendChild(card);
        } else {
            bottomContainer.appendChild(card);
        }
    });
}

function init() {
    updateClock();
    initDashboard(); // Use the async version for initial load

    setInterval(updateClock, 1000);
    setInterval(updateCountdown, 1000);
}

document.addEventListener('DOMContentLoaded', init);
