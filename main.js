const toggleButton = document.getElementsByClassName('menu-btn')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]
const openBtn = document.getElementsByClassName('open')[0]
const closeBtn = document.getElementsByClassName('close')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  openBtn.classList.toggle('active');
  closeBtn.classList.toggle('active')
})
