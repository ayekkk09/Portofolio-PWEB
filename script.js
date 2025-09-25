document.addEventListener('DOMContentLoaded', function() {


    const scrollLinks = document.querySelectorAll('a[href^="#"]');


    for (const scrollLink of scrollLinks) {

        scrollLink.addEventListener('click', function(event) {

            event.preventDefault();

            const targetId = this.getAttribute('href');

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    const scrollTopButton = document.getElementById('scrollTopButton');


window.addEventListener('scroll', function() {

    if (window.scrollY > 400) {

        scrollTopButton.classList.add('show');
    } else {

        scrollTopButton.classList.remove('show');
    }
});


scrollTopButton.addEventListener('click', function(event) {

    event.preventDefault();


    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

});