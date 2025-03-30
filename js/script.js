// Theme switcher
const themeSwitch = document.querySelector('.theme-switch__checkbox');
const body = document.body;

// Language switcher
const languageSwitch = document.querySelector('.language-switch__checkbox');
const ruElements = document.querySelectorAll('.ru');
const enElements = document.querySelectorAll('.en');

// Theme switcher functionality
themeSwitch.addEventListener('change', function() {
  transition();
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
});

// Language switcher functionality
languageSwitch.addEventListener('change', function() {
  ruElements.forEach(element => {
    element.style.display = this.checked ? 'none' : 'block';
  });
  enElements.forEach(element => {
    element.style.display = this.checked ? 'block' : 'none';
  });
});

function transition() {
  document.documentElement.classList.add('transition');
  setTimeout(function() {
    document.documentElement.classList.remove('transition');
  }, 250);
}