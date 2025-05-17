const toggleButton = document.getElementsByClassName('menu-btn')[0];
const openBtn = document.getElementsByClassName('open')[0];
const closeBtn = document.getElementsByClassName('close')[0];
const body = document.getElementsByTagName('body')[0];
const nav = document.getElementsByTagName('nav')[0];
const social = document.getElementsByClassName('social')[0];

toggleButton.addEventListener('click', () => {
  openBtn.classList.toggle('active');
  closeBtn.classList.toggle('active');
  body.classList.toggle('active');
  nav.classList.toggle('active');
  social.classList.toggle('active');
})
