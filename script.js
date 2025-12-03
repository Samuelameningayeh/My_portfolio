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

    // --- AUTOMATIC IMAGE SLIDER ---
    const container = document.getElementById('imageContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Function to handle the scrolling logic
    function slideNext() {
        // Use the container's actual width so it works on mobile and desktop
        const scrollAmount = container.clientWidth; 
        
        // Check if we are at the end of the scroll area
        // (current position + viewer width >= total width)
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
            // If at end, loop back to the start
            container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            // Otherwise, scroll to the next image
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }

    // 1. Setup the Auto-Slide Timer (Runs every 3000ms = 3 seconds)
    let autoSlide = setInterval(slideNext, 3000);

    // 2. Helper to reset the timer if the user clicks a button manually
    // (We don't want the auto-slide to jump right after the user clicks)
    function resetTimer() {
        clearInterval(autoSlide);
        autoSlide = setInterval(slideNext, 3000);
    }

    // 3. Manual Button Listeners
    nextBtn.addEventListener('click', () => {
        slideNext();
        resetTimer(); 
    });

    prevBtn.addEventListener('click', () => {
       const scrollAmount = container.clientWidth;
       container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
       resetTimer();
    });
});

