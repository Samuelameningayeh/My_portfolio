$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Data Analyst", "AI Engineer", "Machine Learning Engineer", "AWS Cloud Practitioner", "Graphic Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Data Analyst", "AI Engineer", "Machine Learning Engineer", "AWS Cloud Practitioner", "Graphic Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            }
        }
    });

    // --- SOCIAL LIFE IMAGE SLIDER ---
    const container = document.getElementById('imageContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Helper: Get the exact width of one slide (which is now the container width)
    const getSlideWidth = () => container.clientWidth;

    const scrollContainer = (direction) => {
        const slideWidth = getSlideWidth();
        
        if (direction === 'next') {
            // If we are at the end (allow a small buffer for calculation errors), loop to start
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: slideWidth, behavior: 'smooth' });
            }
        } else {
            // If we are at the start, loop to the end
            if (container.scrollLeft <= 0) {
                container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: -slideWidth, behavior: 'smooth' });
            }
        }
    };

    // Button Listeners
    nextBtn.addEventListener('click', () => scrollContainer('next'));
    prevBtn.addEventListener('click', () => scrollContainer('prev'));

    // --- AUTO-SLIDE LOGIC ---
    let autoSlideInterval;

    const startAutoSlide = () => {
        // Clear any existing interval just in case
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            scrollContainer('next');
        }, 4000); // Slides every 4 seconds
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    // Initialize Auto-Slide
    startAutoSlide();

    // Pause on interaction (Hover or Touch) for better User Experience
    container.addEventListener('mouseenter', stopAutoSlide);
    container.addEventListener('mouseleave', startAutoSlide);
    container.addEventListener('touchstart', stopAutoSlide);
    container.addEventListener('touchend', startAutoSlide);
    
});



