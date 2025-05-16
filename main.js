const toggleButton = document.getElementsByClassName('menu-btn')[0];
const openBtn = document.getElementsByClassName('open')[0];
const closeBtn = document.getElementsByClassName('close')[0];
// const content = document.getElementsByClassName('content')[0];
// const menuContent = document.getElementsByClassName('menu-content')[0];
const nav = document.getElementsByTagName('nav')[0];
const social = document.getElementsByClassName('social')[0];

toggleButton.addEventListener('click', () => {
  openBtn.classList.toggle('active');
  closeBtn.classList.toggle('active');
  // content.classList.toggle('active');
  // menuContent.classList.toggle('active');
  nav.classList.toggle('active');
  social.classList.toggle('active');
})
