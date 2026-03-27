function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
  localStorage.setItem('theme', html.getAttribute('data-theme'));
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleSidebar() {
  const dashboard = document.querySelector('.dashboard');
  dashboard.classList.toggle('sidebar-collapsed');
  localStorage.setItem(
    'sidebar-collapsed',
    dashboard.classList.contains('sidebar-collapsed')
  );
}

if (localStorage.getItem('sidebar-collapsed') === 'true') {
  document.querySelector('.dashboard').classList.add('sidebar-collapsed');
}

function toggleMobileMenu() {
  document.querySelector('.sidebar').classList.toggle('mobile-open');
  document.querySelector('.overlay').classList.toggle('active');
}

function toggleSubmenu(e) {
  e.preventDefault();
  const group = e.currentTarget.parentElement;
  group.classList.toggle('open');
}

const themeToggleBtn = document.querySelector('.theme-toggle');
const collapseBtn = document.querySelector('.collapse-btn');
const menuToggleBtn = document.querySelector('.menu-toggle');
const overlay = document.querySelector('.overlay');
const submenuToggles = document.querySelectorAll('.nav-group-toggle');
const analyticsChips = document.querySelectorAll('.analytics-chip');
const channelList = document.querySelector('#channel-list');
const topPagesBody = document.querySelector('#top-pages-body');

const analyticsData = {
  all: {
    kpi: {
      sessions: { value: '38,920', change: '+18.4%', trend: 'positive' },
      duration: { value: '01:46', change: '-4.1%', trend: 'negative' },
      users: { value: '9,280', change: '+6.7%', trend: 'positive' },
      revenue: { value: '₽468,120', change: '+11.3%', trend: 'positive' },
    },
    channels: [
      { name: 'Органический поиск', value: 41 },
      { name: 'Платная реклама', value: 27 },
      { name: 'Прямые заходы', value: 18 },
      { name: 'Email-рассылки', value: 14 },
    ],
    funnel: ['Посещение сайта — 100%', 'Просмотр товара — 67%', 'Добавили в корзину — 34%', 'Оплата — 19%'],
    pages: [
      { path: '/pricing', views: '8,124', conversion: '6.4%', conversionStatus: 'active', bounce: '24%' },
      { path: '/product/ai-assistant', views: '6,991', conversion: '5.8%', conversionStatus: 'active', bounce: '29%' },
      { path: '/blog/dashboard-kpi', views: '5,207', conversion: '3.2%', conversionStatus: 'pending', bounce: '37%' },
      { path: '/contact', views: '2,844', conversion: '1.9%', conversionStatus: 'inactive', bounce: '42%' },
    ],
  },
  organic: {
    kpi: {
      sessions: { value: '16,480', change: '+12.2%', trend: 'positive' },
      duration: { value: '02:14', change: '+3.1%', trend: 'positive' },
      users: { value: '4,910', change: '+5.3%', trend: 'positive' },
      revenue: { value: '₽182,640', change: '+8.9%', trend: 'positive' },
    },
    channels: [
      { name: 'Поиск Google', value: 56 },
      { name: 'Поиск Яндекс', value: 29 },
      { name: 'Bing', value: 8 },
      { name: 'Прочие', value: 7 },
    ],
    funnel: ['Посещение сайта — 100%', 'Просмотр товара — 71%', 'Добавили в корзину — 39%', 'Оплата — 22%'],
    pages: [
      { path: '/blog/dashboard-kpi', views: '4,812', conversion: '4.1%', conversionStatus: 'pending', bounce: '31%' },
      { path: '/pricing', views: '3,944', conversion: '6.8%', conversionStatus: 'active', bounce: '22%' },
      { path: '/guides/analytics', views: '2,706', conversion: '3.7%', conversionStatus: 'pending', bounce: '36%' },
      { path: '/product/ai-assistant', views: '2,184', conversion: '5.4%', conversionStatus: 'active', bounce: '28%' },
    ],
  },
  ads: {
    kpi: {
      sessions: { value: '10,930', change: '+24.7%', trend: 'positive' },
      duration: { value: '01:21', change: '-7.6%', trend: 'negative' },
      users: { value: '2,980', change: '+10.4%', trend: 'positive' },
      revenue: { value: '₽153,380', change: '+17.2%', trend: 'positive' },
    },
    channels: [
      { name: 'Meta Ads', value: 44 },
      { name: 'Google Ads', value: 33 },
      { name: 'Ретаргетинг', value: 15 },
      { name: 'Прочие кампании', value: 8 },
    ],
    funnel: ['Посещение сайта — 100%', 'Просмотр товара — 59%', 'Добавили в корзину — 28%', 'Оплата — 15%'],
    pages: [
      { path: '/pricing', views: '3,390', conversion: '5.9%', conversionStatus: 'active', bounce: '27%' },
      { path: '/promo/spring-offer', views: '2,744', conversion: '4.2%', conversionStatus: 'pending', bounce: '34%' },
      { path: '/product/ai-assistant', views: '2,188', conversion: '5.1%', conversionStatus: 'active', bounce: '30%' },
      { path: '/contact', views: '1,122', conversion: '2.2%', conversionStatus: 'inactive', bounce: '45%' },
    ],
  },
  referrals: {
    kpi: {
      sessions: { value: '6,210', change: '+9.6%', trend: 'positive' },
      duration: { value: '02:03', change: '+2.4%', trend: 'positive' },
      users: { value: '1,740', change: '+4.9%', trend: 'positive' },
      revenue: { value: '₽91,220', change: '+6.8%', trend: 'positive' },
    },
    channels: [
      { name: 'Партнерские блоги', value: 47 },
      { name: 'Обзоры на YouTube', value: 26 },
      { name: 'Каталоги сервисов', value: 18 },
      { name: 'Форумы', value: 9 },
    ],
    funnel: ['Посещение сайта — 100%', 'Просмотр товара — 64%', 'Добавили в корзину — 33%', 'Оплата — 18%'],
    pages: [
      { path: '/product/ai-assistant', views: '2,011', conversion: '5.6%', conversionStatus: 'active', bounce: '26%' },
      { path: '/pricing', views: '1,648', conversion: '5.1%', conversionStatus: 'active', bounce: '28%' },
      { path: '/case-studies/retail', views: '1,024', conversion: '3.9%', conversionStatus: 'pending', bounce: '33%' },
      { path: '/contact', views: '684', conversion: '2.1%', conversionStatus: 'inactive', bounce: '39%' },
    ],
  },
  email: {
    kpi: {
      sessions: { value: '5,300', change: '+14.2%', trend: 'positive' },
      duration: { value: '01:58', change: '+1.7%', trend: 'positive' },
      users: { value: '1,540', change: '+7.8%', trend: 'positive' },
      revenue: { value: '₽74,550', change: '+12.9%', trend: 'positive' },
    },
    channels: [
      { name: 'Welcome-цепочка', value: 35 },
      { name: 'Промо-рассылка', value: 31 },
      { name: 'Триггерные письма', value: 22 },
      { name: 'Реактивация', value: 12 },
    ],
    funnel: ['Посещение сайта — 100%', 'Просмотр товара — 69%', 'Добавили в корзину — 37%', 'Оплата — 21%'],
    pages: [
      { path: '/promo/spring-offer', views: '1,734', conversion: '4.8%', conversionStatus: 'pending', bounce: '29%' },
      { path: '/pricing', views: '1,588', conversion: '6.2%', conversionStatus: 'active', bounce: '23%' },
      { path: '/product/ai-assistant', views: '1,434', conversion: '5.7%', conversionStatus: 'active', bounce: '27%' },
      { path: '/contact', views: '544', conversion: '2.5%', conversionStatus: 'inactive', bounce: '38%' },
    ],
  },
};

function setKpiValue(id, value) {
  const element = document.querySelector(id);
  if (element) {
    element.textContent = value;
  }
}

function setKpiChange(id, data) {
  const element = document.querySelector(id);
  if (!element) {
    return;
  }

  element.textContent = data.change;
  element.classList.remove('positive', 'negative');
  element.classList.add(data.trend);
}

function renderChannels(channels) {
  if (!channelList) {
    return;
  }

  channelList.innerHTML = channels
    .map(
      (channel) =>
        '<div class="channel-row">' +
        '<span class="channel-name">' + channel.name + '</span>' +
        '<span class="channel-value">' + channel.value + '%</span>' +
        '</div>' +
        '<div class="progress-bar"><div class="progress-fill" style="width: ' + channel.value + '%"></div></div>'
    )
    .join('');
}

function renderFunnel(steps) {
  steps.forEach((step, index) => {
    const element = document.querySelector('#funnel-step-' + (index + 1));
    if (element) {
      element.textContent = step;
    }
  });
}

function renderTopPages(pages) {
  if (!topPagesBody) {
    return;
  }

  topPagesBody.innerHTML = pages
    .map(
      (page) =>
        '<tr>' +
        '<td>' + page.path + '</td>' +
        '<td>' + page.views + '</td>' +
        '<td><span class="status ' + page.conversionStatus + '">' + page.conversion + '</span></td>' +
        '<td>' + page.bounce + '</td>' +
        '</tr>'
    )
    .join('');
}

function renderAnalytics(filter) {
  const data = analyticsData[filter] || analyticsData.all;

  setKpiValue('#kpi-sessions-value', data.kpi.sessions.value);
  setKpiChange('#kpi-sessions-change', data.kpi.sessions);
  setKpiValue('#kpi-duration-value', data.kpi.duration.value);
  setKpiChange('#kpi-duration-change', data.kpi.duration);
  setKpiValue('#kpi-users-value', data.kpi.users.value);
  setKpiChange('#kpi-users-change', data.kpi.users);
  setKpiValue('#kpi-revenue-value', data.kpi.revenue.value);
  setKpiChange('#kpi-revenue-change', data.kpi.revenue);

  renderChannels(data.channels);
  renderFunnel(data.funnel);
  renderTopPages(data.pages);
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}

if (collapseBtn) {
  collapseBtn.addEventListener('click', toggleSidebar);
}

if (menuToggleBtn) {
  menuToggleBtn.addEventListener('click', toggleMobileMenu);
}

if (overlay) {
  overlay.addEventListener('click', toggleMobileMenu);
}

submenuToggles.forEach((toggle) => {
  toggle.addEventListener('click', toggleSubmenu);
});

analyticsChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    analyticsChips.forEach((item) => item.classList.remove('active'));
    chip.classList.add('active');
    renderAnalytics(chip.dataset.filter || 'all');
  });
});

if (analyticsChips.length > 0) {
  renderAnalytics('all');
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    document.querySelector('.sidebar').classList.remove('mobile-open');
    document.querySelector('.overlay').classList.remove('active');
  }
});
