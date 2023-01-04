const nextSlide = () => {
    let link = document.querySelector('a[href = "#service-block"]');

    link.addEventListener('click', function (e) {
        e.preventDefault();
        const id = link.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });


}

export default nextSlide