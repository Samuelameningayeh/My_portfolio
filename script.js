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

    // --- CHANGING IMAGES (SOCIAL LIFE SECTION) ---
    const container = document.getElementById('imageContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Calculate scroll amount based on container width to be responsive
    // Using container.offsetWidth is safer than window.innerWidth for nested elements
    const getScrollAmount = () => container.offsetWidth; 

    // Function to handle the scrolling logic
    const scrollContainer = (direction) => {
        const scrollAmount = getScrollAmount();
        if (direction === 'next') {
            // Check if we are at the end; if so, loop back to start
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        } else {
            // Check if we are at the start; if so, loop to end
            if (container.scrollLeft <= 0) {
                 container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        }
    };

    // Event Listeners for Buttons
    nextBtn.addEventListener('click', () => scrollContainer('next'));
    prevBtn.addEventListener('click', () => scrollContainer('prev'));

    // --- AUTO-SLIDER LOGIC ---
    let slideInterval;

    const startAutoSlide = () => {
        slideInterval = setInterval(() => {
            scrollContainer('next');
        }, 3000); // Change image every 3 seconds
    };

    const stopAutoSlide = () => {
        clearInterval(slideInterval);
    };

    // Start the slider initially
    startAutoSlide();

    // Pause on hover (User Experience improvement)
    container.addEventListener('mouseenter', stopAutoSlide);
    
    // Resume on mouse leave
    container.addEventListener('mouseleave', startAutoSlide);

    // Also pause if the user touches the container (for mobile)
    container.addEventListener('touchstart', stopAutoSlide);
    container.addEventListener('touchend', startAutoSlide);
});


