$(document).ready(function() {
    let section = $('.hover-section');

    section.mousemove(function(event) {

        let pos = $(this).offset();
        let pageX = event.pageX;
        let pageY = event.pageY;
        let x = pageX - pos.left;
        let y = pageY - pos.top;

        $('span').css({
            'background-position' : (x - 100) + 'px ' + (y - 100) + 'px'
        });
    });

});
