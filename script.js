$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.nav-link').click(function(){
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        $('html').css("scrollBehavior", "smooth");
    });

    $('.nav-toggle').click(function(){
        $('.navbar .menu').toggleClass("active");
        $(this).toggleClass("open");
    });

    new Typed(".typing", {
        strings: ["Java Backend Engineer", "Spring Boot Developer", "Microservices Specialist", "SQL & API Engineer"],
        typeSpeed: 40,
        backSpeed: 40,
        loop: true
    });

    new Typed(".typing-2", {
        strings: ["Java Backend Engineer", "Spring Boot Developer", "Microservices Specialist", "SQL & API Engineer"],
        typeSpeed: 40,
        backSpeed: 40,
        loop: true
    });

    $('#contactForm').on('submit', function (event) {
        event.preventDefault();

        const form = $(this);
        const status = $('.form-status');
        const button = form.find('button[type="submit"]');
        const name = form.find('[name="name"]').val().trim();
        const email = form.find('[name="email"]').val().trim();
        const subject = form.find('[name="subject"]').val().trim();
        const message = form.find('[name="message"]').val().trim();

        if (!name || !email || !subject || !message) {
            status.removeClass('success').addClass('error').text('Please fill all fields before sending.');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            status.removeClass('success').addClass('error').text('Please enter a valid email address.');
            return;
        }

        const whatsappText = encodeURIComponent(
            'Hello Akshay,\n\n' +
            'Name: ' + name + '\n' +
            'Email: ' + email + '\n' +
            'Subject: ' + subject + '\n\n' +
            'Message:\n' + message
        );

        button.text('Opening WhatsApp...').prop('disabled', true);
        status.removeClass('error').addClass('success').text('Opening WhatsApp with your message...');

        const whatsappUrl = 'https://wa.me/917693071625?text=' + whatsappText;
        window.open(whatsappUrl, '_blank', 'noopener');

        setTimeout(function () {
            form[0].reset();
            button.text('Send via WhatsApp').prop('disabled', false);
        }, 1200);
    });

    $('.copy-email-btn').on('click', function () {
        const email = 'akshaydhere14@gmail.com';
        navigator.clipboard.writeText(email).then(function () {
            $('.form-status').removeClass('error').addClass('success').text('Email copied: ' + email);
        }).catch(function () {
            $('.form-status').removeClass('success').addClass('error').text('Unable to copy email automatically. Please use: ' + email);
        });
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0:{ items: 1, nav: false },
            600:{ items: 2, nav: false },
            1000:{ items: 3, nav: false }
        }
    });
});
