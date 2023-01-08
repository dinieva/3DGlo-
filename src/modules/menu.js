const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const menuItems = menu.querySelectorAll('ul>li>a')


    menuItems.forEach(menuItem => menuItem.addEventListener('click', function (e) {
        e.preventDefault();
        const id = menuItem.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        menu.classList.remove('active-menu');
    }));

    //делегирование toggleMenu()

    document.addEventListener('click', (e) => {
        if (e.target.closest('.menu')) {
            menu.classList.add('active-menu');
        } else if (!e.target.matches('.active-menu')) {
            menu.classList.remove('active-menu');
        }
    });

}

export default menu