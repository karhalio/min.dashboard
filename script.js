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

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    document.querySelector('.sidebar').classList.remove('mobile-open');
    document.querySelector('.overlay').classList.remove('active');
  }
});
