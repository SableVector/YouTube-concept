const swiper = new Swiper('.video-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,

    // Navigation arrows
    navigation: {
        nextEl: '.video-button-next',
        prevEl: '.video-button-prev',
    },
});

const swiperRecommended = new Swiper('.recommended__content', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,

    // Navigation arrows
    navigation: {
        nextEl: '.recommended-button-next',
        prevEl: '.recommended-button-prev',
    },
});

const swiperFood = new Swiper('.food__content', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,

    // Navigation arrows
    navigation: {
        nextEl: '.food-button-next',
        prevEl: '.food-button-prev',
    },
});
