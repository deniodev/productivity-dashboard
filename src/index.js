import './style.css';

// Sidebar toggle function
const sidebarToggle = () => {
  document.body.classList.toggle('sidebar-open');
};

// Sidebar trigger
const sidebarTrigger = document.getElementById('main-header__sidebar-toggle');

// Add the event listener
sidebarTrigger.addEventListener('click', sidebarToggle);

// Sidebar collapse function
const sidebarCollapse = () => {
    document.body.classList.toggle('sidebar-collapsed');
  };
  
  // Sidebar trigger
  const sidebarCollapseTrigger = document.getElementById
  ('sidebar__collapse');
  
  // Add the event listener
  sidebarCollapseTrigger.addEventListener('click', sidebarCollapse);

//Theme switcher function
const switchTheme = () => {
    //Get root element and data-theme value
    const rootElem = document.documentElement
let dataTheme = rootElem.getAttribute('data-theme'),
newTheme

newTheme = (dataTheme === 'light') ? 'dark' : 'light'

//Set the new HTML attribute
rootElem.setAttribute('data-theme', newTheme)

//Set the new localStorage item
localStorage.setItem('theme', newTheme)

}


//Add thee event listener for the theme switcher
document.querySelector('#sidebar__theme-switcher') .
addEventListener('click', switchTheme)
