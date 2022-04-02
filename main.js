window.addEventListener('DOMContentLoaded', () => {
    const scrollBtns = document.querySelectorAll('.scroll-btn');

    scrollBtns.forEach((btn) => {
        const scrollTarget = document.getElementById(btn.dataset.target);

        btn.addEventListener('click', () => {
            scrollTo(scrollTarget);
        });
    });

    function scrollTo(elem) {
        window.scroll({
            left: 0,
            top: elem.offsetTop,
            behavior: 'smooth',
        });
    }
});
