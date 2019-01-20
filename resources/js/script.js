$(document).ready(function(){

    /*   Sticky navigation    */

    $('.js--section-features').waypoint(function(direction){
        if(direction === "down"){
            $('nav').addClass('sticky animated fadeInDown');
        } else{
            $('nav').removeClass('sticky animated fadeOutUp');
        }
    }, {
        offset: '60px'
    })


    /*  Scroll on buttons   */
    $('.js--scroll-to-plan').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    })


    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    })

    /*   Navigation scrolls  */

    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
              if (
                location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
                &&
                location.hostname === this.hostname
            ) {
                  var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });


    $('.js--wp-features').waypoint(function(direction){
        $('.js--wp-features').addClass('animated fadeIn');
    }, {
        offset: '65%'});

    $('.js--wp-city').waypoint(function(direction){
        $('.js--wp-city').addClass('animated fadeIn');
    }, {
        offset: '65%'});

    $('.js--wp-plan').waypoint(function(direction){
        $('.js--wp-plan').addClass('animated pulse');
    }, {
        offset: '65%'});

    $('.js--wp-phone').waypoint(function(direction){
        $('.js--wp-phone').addClass('animated fadeInUp');
    }, {
        offset: '65%'});

    $('.js--wp-phone').waypoint(function(direction){
        $('.js--wp-phone').addClass('animated fadeInUp');
    }, {
        offset: '65%'});





});