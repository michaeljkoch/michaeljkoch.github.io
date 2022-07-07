const navClick = () => {
    const menu = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    const nav = document.querySelector('.navbar .nav');
    // const links = document.querySelector('.navbar .nav .links');
    // const navred = document.querySelector('.navbar')

    menu.addEventListener('click', () => {
        // navred.classList.toggle('nav-active');
        navbar.classList.toggle('navbar-active');
    });

    menu.addEventListener('click', () => {
        // navred.classList.toggle('nav-active');
        nav.classList.toggle('nav-active');
    });

    // menu.addEventListener('click', () => {
    //     // navred.classList.toggle('nav-active');
    //     links.classList.toggle('links-active');
    // });
}

navClick();
