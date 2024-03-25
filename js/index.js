$(document).ready(function() {
    $('.header a').hover(
        function() {
            $(this).addClass('hover');
        },
        function() {
            $(this).removeClass('hover');
        }
    );

    $('.whitehorse').hover(
        function() {
            $(this).addClass('hover');
        },
        function() {
            $(this).removeClass('hover');
        }
    );
    $('.Cuesine').click(function() {
        window.location.href = 'https://kassjohn83.github.io/UX_UI_HW_20/#projects';
    });
    $('.Cuesine').hover(
        function() {
            $(this).addClass('hover');
        },
        function() {
            $(this).removeClass('hover');
        } 
        );
});

