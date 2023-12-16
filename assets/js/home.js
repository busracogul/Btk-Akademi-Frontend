const sliderHero = new Swiper(".slider--hero", {
    slidesPerView: 1,
});
const swiper = new Swiper('.mySwiper', {

    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 5,
        },
    }
})

const userCommentSwiper = new Swiper('.userSwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".btn-testimonial-next",
        prevEl: ".btn-testimonial-prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 2,
        },
    },
})

const teamPersonSwiper = new Swiper('.teamSwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
})
