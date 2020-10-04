let moveForce = 20; // max popup movement in pixels
let rotateForce = 20; // max popup rotation in deg

const leftPosition = $('.block').css('left').slice(0, -2);
const topPosition = $('.block').css('top').slice(0, -2);

$(document).mousemove(function(e) {
    let docX = $(document).width();
    let docY = $(document).height();

    let moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
    let moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;

    let rotateY = (e.pageX/2.5 / docX * rotateForce*2) - rotateForce;
    let rotateX = -((e.pageY*1.2 / docY * rotateForce*2) - rotateForce);

    moveX = +leftPosition + moveX;
    moveY = +topPosition + moveY;

    $('.block')
        .css('left', moveX +'px')
        .css('top', moveY +'px')
        .css('transform','perspective(600px) rotate3d('+rotateX+','+ -rotateY+',0,'+ (30 + rotateY) +'deg)');

});



