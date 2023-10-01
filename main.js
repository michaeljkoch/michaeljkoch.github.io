const navClick = () => {
    const menu = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    const nav = document.querySelector('.navbar .nav');
    const content = document.querySelector('.content');
    const footer = document.querySelector('.footer');
    const menup = document.querySelector('.menu-btn p')
    const close = document.querySelector('.close')
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

    menu.addEventListener('click', () => {
        // navred.classList.toggle('nav-active');
        content.classList.toggle('content-off');
    });

    menu.addEventListener('click', () => {
        // navred.classList.toggle('nav-active');
        footer.classList.toggle('footer-off');
    });

    menu.addEventListener('click', () => {
        // navred.classList.toggle('nav-active');
        menup.classList.toggle('menu-btn-off');
    });

    menu.addEventListener('click', () => {
        // navred.classList.toggle('nav-active');
        menu.classList.toggle('close');
    });

    menu.addEventListener('click', () => {
        // navred.classList.toggle('nav-active');
        close.classList.toggle('show');
    });

    // menu.addEventListener('click', () => {
    //     // navred.classList.toggle('nav-active');
    //     links.classList.toggle('links-active');
    // });
}

navClick();
