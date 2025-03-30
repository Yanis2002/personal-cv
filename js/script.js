var checkbox = document.querySelector('.theme-switch__checkbox');

checkbox.addEventListener('change', function(){
  transition();
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})

function transition() {
  document.documentElement.classList.add('transition');
  setTimeout(function() {
    document.documentElement.classList.remove('transition');
  }, 250)
}

// Language switcher
const languageSwitch = document.querySelector('.language-switch__checkbox');
const ruElements = document.querySelectorAll('.ru');
const enElements = document.querySelectorAll('.en');

// Language switcher functionality
languageSwitch.addEventListener('change', () => {
  ruElements.forEach(element => {
    element.style.display = languageSwitch.checked ? 'none' : 'block';
  });
  enElements.forEach(element => {
    element.style.display = languageSwitch.checked ? 'block' : 'none';
  });
});