$(document).ready(function() {
    'use strict';


    // CountDown JS
    $('.count-down').syotimer({
        year: 2021,
        month: 5,
        day: 9,
        hour: 20,
        minute: 30
    });

    //  Count Up
    function counter() {
        var oTop;
        if ($('.count').length !== 0) {
            oTop = $('.count').offset().top - window.innerHeight;
        }
        if ($(window).scrollTop() > oTop) {
            $('.count').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            });
        }
    }
    $(window).on('scroll', function() {
        counter();
    });




    // contactr form
    $('#contact-form').validate({
        rules: {
            user_name: {
                required: true,
                minlength: 4
            },
            user_email: {
                required: true,
                email: true
            },
            user_subject: {
                required: false
            },
            user_message: {
                required: true
            }
        },
        messages: {
            user_name: {
                required: 'Come on, you have a name don\'t you?',
                minlength: 'Your name must consist of at least 2 characters'
            },
            user_email: {
                required: 'Please put your email address'
            },
            user_message: {
                required: 'Put some messages here?',
                minlength: 'Your name must consist of at least 2 characters'
            }

        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: 'POST',
                data: $(form).serialize(),
                url: 'sendmail.php',
                success: function() {
                    $('#contact-form #success').fadeIn();
                },
                error: function() {

                    $('#contact-form #error').fadeIn();
                }
            });
        }
    });

});