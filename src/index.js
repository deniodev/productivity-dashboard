import './style.css';

// Sidebar toggle function
const sidebarToggle = () => {
  document.body.classList.toggle('sidebar-open');
};

// Sidebar trigger
const sidebarTrigger = document.getElementById('main-header__sidebar-toggle');

// Add the event listener
sidebarTrigger.addEventListener('click', sidebarToggle);