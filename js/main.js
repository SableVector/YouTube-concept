const swiper = new Swiper('.video-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1900: {
            slidesPerView: 6
        },
        1700: {
            slidesPerView: 5
        },
        1400: {
            slidesPerView: 4
        },
        1100: {
            slidesPerView: 3
        },
        578: {
            slidesPerView: 2
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.video-button-next',
        prevEl: '.video-button-prev',
    },
});

const swiperRecommended = new Swiper('.recommended__content', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1600: {
            slidesPerView: 3
        },
        1100: {
            slidesPerView: 2
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.recommended-button-next',
        prevEl: '.recommended-button-prev',
    },
});

const swiperFood = new Swiper('.food__content', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1900: {
            slidesPerView: 6
        },
        1700: {
            slidesPerView: 5
        },
        1400: {
            slidesPerView: 4
        },
        1100: {
            slidesPerView: 3
        },
        850: {
            slidesPerView: 2
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.food-button-next',
        prevEl: '.food-button-prev',
    },
});


if (document.documentElement.scrollWidth <= 575) {
    swiper.destroy();
    swiperRecommended.destroy();
    swiperFood.destroy();
}

let mobileButtonSearch = document.querySelector('.mobile-button-search'),
    inputGroup = document.querySelector('.input-group');

mobileButtonSearch.addEventListener('click', function () {
    inputGroup.classList.toggle('active');
});
